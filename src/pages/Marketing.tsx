import React, { useState } from 'react';
import { 
  Mail, 
  Smartphone, 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  BarChart2, 
  Send, 
  Clock, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const campaigns = [
  { id: 1, name: 'Sequência de Boas-vindas v2', type: 'email', status: 'Ativa', sent: '1.240', openRate: '42.5%', clickRate: '12.1%', lastActivity: '2 mins atrás' },
  { id: 2, name: 'SMS de Promoção Relâmpago', type: 'sms', status: 'Rascunho', sent: '0', openRate: '0%', clickRate: '0%', lastActivity: '15 mins atrás' },
  { id: 3, name: 'Campanha de Reengajamento', type: 'email', status: 'Ativa', sent: '45.672', openRate: '18.2%', clickRate: '3.4%', lastActivity: '1 hora atrás' },
  { id: 4, name: 'Lembrete de Webinar', type: 'email', status: 'Agendada', sent: '0', openRate: '0%', clickRate: '0%', lastActivity: '3 horas atrás' },
  { id: 5, name: 'SMS de Carrinho Abandonado', type: 'sms', status: 'Ativa', sent: '842', openRate: '92.1%', clickRate: '24.5%', lastActivity: 'Ontem' },
];

export default function Marketing() {
  const [activeTab, setActiveTab] = useState<'email' | 'sms'>('email');

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Campanhas de Marketing</h1>
          <p className="text-slate-500 text-sm mt-1">Crie e gerencie seus esforços de marketing omnichannel.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Criar Campanha
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <Mail className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="font-bold text-slate-900">E-mail Marketing</h3>
          </div>
          <p className="text-sm text-slate-500 mb-6">Crie e-mails incríveis com nosso editor de arrastar e soltar.</p>
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Sequências Ativas</span>
            <span className="text-slate-900">12</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <Smartphone className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-slate-900">Marketing por SMS</h3>
          </div>
          <p className="text-sm text-slate-500 mb-6">Alcance seus clientes diretamente em seus dispositivos móveis.</p>
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Campanhas Ativas</span>
            <span className="text-slate-900">4</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-50 rounded-lg">
              <BarChart2 className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-bold text-slate-900">Análise</h3>
          </div>
          <p className="text-sm text-slate-500 mb-6">Acompanhe o desempenho em todos os seus canais de marketing.</p>
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Taxa de Abertura Média</span>
            <span className="text-slate-900">28.4%</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between bg-slate-50/50 gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar campanhas..." 
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:shadow-sm rounded-lg transition-all border border-transparent hover:border-slate-200">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-500 text-xs font-semibold uppercase tracking-wider border-b border-slate-100">
                <th className="px-6 py-4">Nome da Campanha</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Enviado</th>
                <th className="px-6 py-4">Taxa de Abertura</th>
                <th className="px-6 py-4">Taxa de Cliques</th>
                <th className="px-6 py-4">Última Atividade</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center",
                        campaign.type === 'email' ? "bg-indigo-50 text-indigo-600" : "bg-emerald-50 text-emerald-600"
                      )}>
                        {campaign.type === 'email' ? <Mail className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{campaign.name}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{campaign.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {campaign.status === 'Ativa' && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                      {campaign.status === 'Agendada' && <Clock className="w-3 h-3 text-indigo-500" />}
                      {campaign.status === 'Rascunho' && <AlertCircle className="w-3 h-3 text-slate-400" />}
                      <span className={cn(
                        "text-xs font-medium",
                        campaign.status === 'Ativa' ? "text-emerald-700" :
                        campaign.status === 'Agendada' ? "text-indigo-700" :
                        "text-slate-500"
                      )}>
                        {campaign.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">{campaign.sent}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">{campaign.openRate}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">{campaign.clickRate}</td>
                  <td className="px-6 py-4 text-xs text-slate-500">{campaign.lastActivity}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
