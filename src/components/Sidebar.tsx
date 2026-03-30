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
  Zap
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Contacts', path: '/contacts' },
  { icon: GitBranch, label: 'Pipelines', path: '/pipelines' },
  { icon: Zap, label: 'Workflows', path: '/workflows' },
  { icon: Mail, label: 'Marketing', path: '/marketing' },
  { icon: Globe, label: 'Sites', path: '/sites' },
  { icon: Calendar, label: 'Calendar', path: '/calendar' },
  { icon: MessageSquare, label: 'Conversations', path: '/conversations' },
  { icon: BarChart3, label: 'Reporting', path: '/reporting' },
  { icon: CreditCard, label: 'Payments', path: '/payments' },
  { icon: Layers, label: 'Memberships', path: '/memberships' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">Woofunnels</span>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
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
            <p className="text-xs font-semibold text-slate-900 truncate">John Doe</p>
            <p className="text-[10px] text-slate-500 truncate">Admin Account</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
