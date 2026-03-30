import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  Video, 
  MapPin,
  MoreHorizontal,
  Filter
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, eachDayOfInterval } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const events = [
  { id: 1, title: 'Sessão de Estratégia', time: '10:00 AM', duration: '45m', type: 'video', contact: 'Sarah Jenkins', date: new Date() },
  { id: 2, title: 'Demonstração de Vendas', time: '02:30 PM', duration: '1h', type: 'video', contact: 'Michael Chen', date: new Date() },
  { id: 3, title: 'Chamada de Onboarding', time: '11:00 AM', duration: '30m', type: 'phone', contact: 'Emma Wilson', date: addDays(new Date(), 1) },
  { id: 4, title: 'Reunião de Parceria', time: '09:00 AM', duration: '1h', type: 'in-person', contact: 'David Miller', date: addDays(new Date(), 2) },
];

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const renderHeader = () => {
    return (
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Calendário e Agendamentos</h1>
          <p className="text-slate-500 text-sm mt-1">Gerencie sua agenda e reuniões com clientes.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
            <button onClick={prevMonth} className="p-1.5 hover:bg-slate-50 rounded-md transition-colors">
              <ChevronLeft className="w-4 h-4 text-slate-600" />
            </button>
            <span className="px-4 text-sm font-bold text-slate-900 min-w-[140px] text-center capitalize">
              {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
            </span>
            <button onClick={nextMonth} className="p-1.5 hover:bg-slate-50 rounded-md transition-colors">
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>
          </div>
          <button className="bg-white border border-slate-200 text-sm font-medium text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Novo Agendamento
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    return (
      <div className="grid grid-cols-7 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest py-2">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        const hasEvents = events.some(e => isSameDay(e.date, cloneDay));
        
        days.push(
          <div
            key={day.toString()}
            className={cn(
              "min-h-[120px] bg-white border-t border-r border-slate-100 p-2 transition-all relative group",
              !isSameMonth(day, monthStart) ? "bg-slate-50/50" : "",
              isSameDay(day, selectedDate) ? "ring-2 ring-inset ring-indigo-500 z-10" : "",
              i === 0 ? "border-l" : "",
              day > subMonths(endDate, 0) ? "border-b" : ""
            )}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <div className="flex justify-between items-start">
              <span className={cn(
                "w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold",
                isSameDay(day, new Date()) ? "bg-indigo-600 text-white" : "text-slate-700",
                !isSameMonth(day, monthStart) ? "text-slate-300" : ""
              )}>
                {formattedDate}
              </span>
              {hasEvents && (
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              )}
            </div>
            
            <div className="mt-2 space-y-1">
              {events
                .filter(e => isSameDay(e.date, cloneDay))
                .map(event => (
                  <div 
                    key={event.id} 
                    className={cn(
                      "px-2 py-1 rounded text-[10px] font-bold truncate",
                      event.type === 'video' ? "bg-indigo-50 text-indigo-700" :
                      event.type === 'phone' ? "bg-emerald-50 text-emerald-700" :
                      "bg-amber-50 text-amber-700"
                    )}
                  >
                    {event.time} - {event.title}
                  </div>
                ))}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">{rows}</div>;
  };

  return (
    <div className="max-w-7xl mx-auto">
      {renderHeader()}
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Calendar Grid */}
        <div className="flex-1 overflow-x-auto">
          <div className="min-w-[600px]">
            {renderDays()}
            {renderCells()}
          </div>
        </div>

        {/* Sidebar / Upcoming */}
        <aside className="w-full lg:w-80 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-600" />
              Próximos Hoje
            </h3>
            <div className="space-y-4">
              {events
                .filter(e => isSameDay(e.date, new Date()))
                .map(event => (
                  <div key={event.id} className="group cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "w-1 h-12 rounded-full",
                        event.type === 'video' ? "bg-indigo-500" : "bg-emerald-500"
                      )} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{event.title}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time} ({event.duration})
                        </p>
                        <p className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {event.contact}
                        </p>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                    {event.type === 'video' && (
                      <button className="mt-3 w-full py-1.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-lg hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2">
                        <Video className="w-3 h-3" />
                        Entrar na Reunião
                      </button>
                    )}
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Configurações do Calendário</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <CalendarIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">Google Agenda</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">Integração com Zoom</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">Locais de Escritório</span>
                </div>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
