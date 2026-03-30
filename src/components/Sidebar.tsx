import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GitBranch, 
  Mail, 
  Globe, 
  Calendar, 
  CreditCard, 
  Settings, 
  MessageSquare,
  BarChart3,
  Layers,
  Zap,
  X
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Painel', path: '/' },
  { icon: Users, label: 'Contatos', path: '/contacts' },
  { icon: GitBranch, label: 'Pipelines', path: '/pipelines' },
  { icon: Zap, label: 'Automações', path: '/workflows' },
  { icon: Mail, label: 'Marketing', path: '/marketing' },
  { icon: Globe, label: 'Sites', path: '/sites' },
  { icon: Calendar, label: 'Calendário', path: '/calendar' },
  { icon: MessageSquare, label: 'Conversas', path: '/conversations' },
  { icon: BarChart3, label: 'Relatórios', path: '/reporting' },
  { icon: CreditCard, label: 'Pagamentos', path: '/payments' },
  { icon: Layers, label: 'Assinaturas', path: '/memberships' },
  { icon: Settings, label: 'Configurações', path: '/settings' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-slate-900/50 z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <aside 
        className={cn(
          "fixed md:sticky top-0 left-0 z-50 w-64 bg-white border-r border-slate-200 h-screen flex flex-col transition-transform duration-300 md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Woofunnels</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 md:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => {
                if (window.innerWidth < 768) onClose();
              }}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive 
                  ? "bg-indigo-50 text-indigo-700" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-900 truncate">João Silva</p>
              <p className="text-[10px] text-slate-500 truncate">Conta Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
