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
  { id: 1, customer: 'Sarah Jenkins', amount: '$2,400.00', status: 'Succeeded', type: 'Subscription', date: '2 mins ago' },
  { id: 2, customer: 'Michael Chen', amount: '$1,200.00', status: 'Pending', type: 'One-time', date: '15 mins ago' },
  { id: 3, customer: 'Emma Wilson', amount: '$3,500.00', status: 'Failed', type: 'Subscription', date: '1 hour ago' },
  { id: 4, customer: 'David Miller', amount: '$5,000.00', status: 'Succeeded', type: 'One-time', date: '3 hours ago' },
  { id: 5, customer: 'Alice Brown', amount: '$10,000.00', status: 'Succeeded', type: 'Subscription', date: 'Yesterday' },
];

export default function Payments() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Payments & Invoices</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your revenue, subscriptions, and billing.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-sm font-medium text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Connect Stripe
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-emerald-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              +12.5%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Total Revenue</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">$124,500.00</h3>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-indigo-600 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" />
              +4.2%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Monthly Recurring Revenue</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">$42,800.00</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
              <AlertCircle className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-rose-600 flex items-center">
              <ArrowDownRight className="w-3 h-3 mr-0.5" />
              -2.1%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Churn Rate</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">2.4%</h3>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:shadow-sm rounded-lg transition-all border border-transparent hover:border-slate-200">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-500 text-xs font-semibold uppercase tracking-wider border-b border-slate-100">
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
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
                      {tx.status === 'Succeeded' && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                      {tx.status === 'Pending' && <Clock className="w-3 h-3 text-amber-500" />}
                      {tx.status === 'Failed' && <AlertCircle className="w-3 h-3 text-rose-500" />}
                      <span className={cn(
                        "text-xs font-medium",
                        tx.status === 'Succeeded' ? "text-emerald-700" :
                        tx.status === 'Pending' ? "text-amber-700" :
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
