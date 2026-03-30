import React from 'react';
import { 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  Filter, 
  Download,
  MoreHorizontal,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const transactions = [
  { id: 1, customer: 'Sarah Jenkins', amount: 'R$ 2.400,00', status: 'Sucesso', type: 'Assinatura', date: '2 mins atrás' },
  { id: 2, customer: 'Michael Chen', amount: 'R$ 1.200,00', status: 'Pendente', type: 'Pagamento Único', date: '15 mins atrás' },
  { id: 3, customer: 'Emma Wilson', amount: 'R$ 3.500,00', status: 'Falha', type: 'Assinatura', date: '1 hora atrás' },
  { id: 4, customer: 'David Miller', amount: 'R$ 5.000,00', status: 'Sucesso', type: 'Pagamento Único', date: '3 horas atrás' },
  { id: 5, customer: 'Alice Brown', amount: 'R$ 10.000,00', status: 'Sucesso', type: 'Assinatura', date: 'Ontem' },
];

export default function Payments() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pagamentos e Faturas</h1>
          <p className="text-slate-500 text-sm mt-1">Gerencie sua receita, assinaturas e faturamento.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-white border border-slate-200 text-sm font-medium text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 flex-1 md:flex-none">
            <Download className="w-4 h-4" />
            Exportar CSV
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center justify-center gap-2 flex-1 md:flex-none">
            <CreditCard className="w-4 h-4" />
            Conectar Stripe
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-emerald-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              +12,5%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Receita Total</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">R$ 124.500,00</h3>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-indigo-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              +4,2%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Receita Recorrente Mensal (MRR)</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">R$ 42.800,00</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
              <AlertCircle className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-rose-600 flex items-center">
              <ArrowDownRight className="w-3 h-3 mr-0.5" />
              -2,1%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Taxa de Cancelamento (Churn)</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">2,4%</h3>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between bg-slate-50/50 gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar transações..." 
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
                <th className="px-6 py-4">Cliente</th>
                <th className="px-6 py-4">Valor</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Tipo</th>
                <th className="px-6 py-4">Data</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                        {tx.customer.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="text-sm font-bold text-slate-900">{tx.customer}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{tx.amount}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {tx.status === 'Sucesso' && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                      {tx.status === 'Pendente' && <Clock className="w-3 h-3 text-amber-500" />}
                      {tx.status === 'Falha' && <AlertCircle className="w-3 h-3 text-rose-500" />}
                      <span className={cn(
                        "text-xs font-medium",
                        tx.status === 'Sucesso' ? "text-emerald-700" :
                        tx.status === 'Pendente' ? "text-amber-700" :
                        "text-rose-700"
                      )}>
                        {tx.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase tracking-wider">
                      {tx.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">{tx.date}</td>
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
