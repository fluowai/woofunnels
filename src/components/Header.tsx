import React, { useState } from 'react';
import { Search, Bell, HelpCircle, Plus, X, Users, Mail, Globe, Calendar as CalendarIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const actions = [
    { label: 'Add Contact', icon: Users, color: 'bg-blue-500' },
    { label: 'Create Funnel', icon: Globe, color: 'bg-indigo-500' },
    { label: 'Send Email', icon: Mail, color: 'bg-emerald-500' },
    { label: 'Book Appointment', icon: CalendarIcon, color: 'bg-amber-500' },
  ];

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Quick search..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Quick Action
        </button>
        
        <div className="h-6 w-px bg-slate-200 mx-2" />
        
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>
        
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">Quick Actions</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                {actions.map((action) => (
                  <button 
                    key={action.label}
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all group"
                  >
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform", action.color)}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{action.label}</span>
                  </button>
                ))}
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
