import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  CreditCard, 
  Bell, 
  Shield, 
  Globe, 
  Mail, 
  Smartphone,
  Check,
  Zap,
  Palette,
  Layout
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Settings() {
  const [activeSection, setActiveSection] = useState('profile');

  const sections = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'company', label: 'Company Info', icon: Building2 },
    { id: 'billing', label: 'Billing & Plans', icon: CreditCard },
    { id: 'white-label', label: 'White-label Settings', icon: Palette },
    { id: 'domains', label: 'Domains', icon: Globe },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'integrations', label: 'Integrations', icon: Zap },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your account, company, and platform preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex flex-col gap-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                activeSection === section.id 
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-200" 
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              <section.icon className="w-4 h-4" />
              {section.label}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          {activeSection === 'profile' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold border-4 border-white shadow-md">
                  JD
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Profile Picture</h3>
                  <p className="text-sm text-slate-500 mb-3">PNG, JPG or GIF. Max 2MB.</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors">Upload New</button>
                    <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-50 transition-colors">Remove</button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">First Name</label>
                  <input type="text" defaultValue="John" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" defaultValue="john@example.com" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input type="tel" defaultValue="+1 (555) 000-0000" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button className="px-6 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">Save Changes</button>
              </div>
            </div>
          )}

          {activeSection === 'white-label' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div>
                <h3 className="text-lg font-bold text-slate-900">White-label Branding</h3>
                <p className="text-sm text-slate-500">Customize the platform with your own brand identity.</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Platform Name</label>
                      <input type="text" defaultValue="Woofunnels" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Primary Color</label>
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-600 border-2 border-white shadow-sm" />
                        <input type="text" defaultValue="#6366f1" className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Logo (Dark Mode)</label>
                      <div className="h-24 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">
                        <Zap className="text-indigo-500 w-8 h-8" />
                      </div>
                      <button className="w-full py-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">Change Logo</button>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <div className="flex gap-4">
                    <div className="p-2 bg-white rounded-lg h-fit shadow-sm">
                      <Globe className="text-indigo-600 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-900 text-sm">Custom Domain Mapping</h4>
                      <p className="text-xs text-indigo-700 mt-1 leading-relaxed">
                        Map your own domain (e.g., app.yourbrand.com) to the platform. This requires CNAME configuration in your DNS settings.
                      </p>
                      <button className="mt-3 text-xs font-bold text-indigo-600 hover:underline">View Documentation</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button className="px-6 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">Apply Branding</button>
              </div>
            </div>
          )}

          {activeSection === 'billing' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="p-6 bg-slate-900 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Zap className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <span className="px-2 py-1 bg-indigo-500 text-[10px] font-bold uppercase tracking-widest rounded">Current Plan</span>
                      <h3 className="text-2xl font-bold mt-2">Agency Unlimited</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold">$297</p>
                      <p className="text-xs text-slate-400">per month</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-white text-slate-900 text-sm font-bold rounded-lg hover:bg-slate-100 transition-colors">Manage Subscription</button>
                    <button className="px-6 py-2 bg-slate-800 text-white text-sm font-bold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">View Invoices</button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900">Plan Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Unlimited Sub-accounts',
                    'White-label Platform',
                    'Custom Domains',
                    'API Access',
                    'Priority Support',
                    'SaaS Mode Enabled'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-emerald-600" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
