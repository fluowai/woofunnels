import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  Handle,
  Position
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Zap, Play, Save, Plus, Mail, MessageSquare, UserPlus, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const initialNodes = [
  {
    id: '1',
    type: 'trigger',
    position: { x: 250, y: 0 },
    data: { label: 'Formulário Enviado', icon: Zap, color: 'bg-amber-500' },
  },
  {
    id: '2',
    type: 'action',
    position: { x: 250, y: 150 },
    data: { label: 'Adicionar Tag ao Contato', icon: UserPlus, color: 'bg-blue-500' },
  },
  {
    id: '3',
    type: 'action',
    position: { x: 250, y: 300 },
    data: { label: 'Enviar E-mail de Boas-vindas', icon: Mail, color: 'bg-indigo-500' },
  },
  {
    id: '4',
    type: 'action',
    position: { x: 250, y: 450 },
    data: { label: 'Aguardar 2 Dias', icon: Clock, color: 'bg-slate-500' },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
];

const CustomNode = ({ data }: any) => (
  <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-4 min-w-[200px] flex items-center gap-3">
    <Handle type="target" position={Position.Top} className="w-2 h-2 bg-slate-300" />
    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white", data.color)}>
      <data.icon className="w-5 h-5" />
    </div>
    <div className="flex-1">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ação</p>
      <p className="text-sm font-bold text-slate-900">{data.label}</p>
    </div>
    <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-slate-300" />
  </div>
);

const TriggerNode = ({ data }: any) => (
  <div className="bg-white border-2 border-amber-500 rounded-xl shadow-lg p-4 min-w-[200px] flex items-center gap-3">
    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white", data.color)}>
      <data.icon className="w-5 h-5" />
    </div>
    <div className="flex-1">
      <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Gatilho</p>
      <p className="text-sm font-bold text-slate-900">{data.label}</p>
    </div>
    <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-amber-500" />
  </div>
);

const nodeTypes = {
  action: CustomNode,
  trigger: TriggerNode,
};

export default function Workflows() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Fluxos de Automação</h1>
          <p className="text-slate-500 text-sm mt-1">Crie jornadas complexas de clientes com facilidade.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 md:flex-none bg-white border border-slate-200 text-sm font-medium text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <Save className="w-4 h-4" />
            Salvar Rascunho
          </button>
          <button className="flex-1 md:flex-none bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center justify-center gap-2">
            <Play className="w-4 h-4" />
            Publicar Fluxo
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative min-h-[500px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background color="#f1f5f9" gap={20} />
          <Controls />
          <MiniMap />
          <Panel position="top-right" className="bg-white p-2 rounded-lg border border-slate-200 shadow-lg flex flex-col gap-2 max-w-[150px]">
            <p className="text-[10px] font-bold text-slate-400 uppercase px-2">Adicionar Etapa</p>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 rounded-md text-xs font-medium text-slate-700">
              <Mail className="w-3 h-3 text-indigo-500" /> Enviar E-mail
            </button>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 rounded-md text-xs font-medium text-slate-700">
              <MessageSquare className="w-3 h-3 text-emerald-500" /> Enviar SMS
            </button>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 rounded-md text-xs font-medium text-slate-700">
              <Clock className="w-3 h-3 text-slate-500" /> Aguardar / Atraso
            </button>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 rounded-md text-xs font-medium text-slate-700">
              <Plus className="w-3 h-3 text-indigo-600" /> Mais Ações
            </button>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
}
