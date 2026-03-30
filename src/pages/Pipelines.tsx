import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { MoreHorizontal, Plus, Search, Filter, GripVertical } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const initialData = {
  columns: {
    'col-1': {
      id: 'col-1',
      title: 'Novo Lead',
      items: [
        { id: 'item-1', name: 'Sara Oliveira', company: 'Sara Design', value: 'R$ 2.400' },
        { id: 'item-2', name: 'Miguel Santos', company: 'Miguel Tech', value: 'R$ 1.200' },
      ],
    },
    'col-2': {
      id: 'col-2',
      title: 'Contatado',
      items: [
        { id: 'item-3', name: 'Emília Silva', company: 'Emília & Co', value: 'R$ 3.500' },
      ],
    },
    'col-3': {
      id: 'col-3',
      title: 'Proposta Enviada',
      items: [
        { id: 'item-4', name: 'Davi Mendes', company: 'Agência Mendes', value: 'R$ 5.000' },
      ],
    },
    'col-4': {
      id: 'col-4',
      title: 'Negociação',
      items: [],
    },
    'col-5': {
      id: 'col-5',
      title: 'Fechado (Ganho)',
      items: [
        { id: 'item-5', name: 'Alice Costa', company: 'Alice Corp', value: 'R$ 10.000' },
      ],
    },
  },
  columnOrder: ['col-1', 'col-2', 'col-3', 'col-4', 'col-5'],
};

export default function Pipelines() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId as keyof typeof data.columns];
    const finish = data.columns[destination.droppableId as keyof typeof data.columns];

    if (start === finish) {
      const newItemIds = Array.from(start.items);
      const [removed] = newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, removed);

      const newColumn = {
        ...start,
        items: newItemIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    // Moving from one list to another
    const startItemIds = Array.from(start.items);
    const [removed] = startItemIds.splice(source.index, 1);
    const newStart = {
      ...start,
      items: startItemIds,
    };

    const finishItemIds = Array.from(finish.items);
    finishItemIds.splice(destination.index, 0, removed);
    const newFinish = {
      ...finish,
      items: finishItemIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pipeline de Vendas</h1>
          <p className="text-slate-500 text-sm mt-1">Gerencie seus negócios e acompanhe o progresso.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar negócios..." 
              className="w-full md:w-auto pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <button className="bg-white border border-slate-200 text-sm font-medium text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Novo Negócio
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-6 h-full min-w-max">
            {data.columnOrder.map((columnId) => {
              const column = data.columns[columnId as keyof typeof data.columns];
              return (
                <div key={column.id} className="w-72 flex flex-col bg-slate-100/50 rounded-xl p-3 border border-slate-200">
                  <div className="flex items-center justify-between mb-4 px-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-sm">{column.title}</h3>
                      <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        {column.items.length}
                      </span>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={cn(
                          "flex-1 space-y-3 min-h-[100px] transition-colors rounded-lg",
                          snapshot.isDraggingOver ? "bg-indigo-50/50" : ""
                        )}
                      >
                        {column.items.map((item, index) => (
                          // @ts-ignore
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className={cn(
                                  "bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group",
                                  snapshot.isDragging ? "shadow-xl ring-2 ring-indigo-500/20 border-indigo-200" : ""
                                )}
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex-1">
                                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                                    <p className="text-xs text-slate-500">{item.company}</p>
                                  </div>
                                  <div {...provided.dragHandleProps} className="text-slate-300 group-hover:text-slate-400 cursor-grab">
                                    <GripVertical className="w-4 h-4" />
                                  </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                                    {item.value}
                                  </span>
                                  <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold">
                                      {item.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  
                  <button className="mt-4 w-full py-2 border border-dashed border-slate-300 rounded-lg text-slate-500 text-xs font-medium hover:bg-white hover:border-slate-400 transition-all flex items-center justify-center gap-2">
                    <Plus className="w-3 h-3" />
                    Adicionar Negócio
                  </button>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
