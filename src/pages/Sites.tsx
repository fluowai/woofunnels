import React, { useState } from 'react';
import { 
  Globe, 
  Layers, 
  Plus, 
  Search, 
  MoreHorizontal, 
  ExternalLink, 
  Eye, 
  Settings,
  MousePointer2,
  BarChart2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import LandingPageBuilder from '@/src/components/LandingPageBuilder';

const funnels = [
  { id: 1, name: 'Funil de Coaching de Alto Valor', steps: 4, visitors: '12.4k', conversion: '3.2%', status: 'Publicado', lastEdited: '2 horas atrás', thumbnail: 'https://picsum.photos/seed/funnel1/400/250' },
  { id: 2, name: 'Isca Digital de E-book', steps: 2, visitors: '45.1k', conversion: '18.5%', status: 'Publicado', lastEdited: 'Ontem', thumbnail: 'https://picsum.photos/seed/funnel2/400/250' },
  { id: 3, name: 'Registro de Webinar', steps: 3, visitors: '8.2k', conversion: '5.1%', status: 'Rascunho', lastEdited: '3 dias atrás', thumbnail: 'https://picsum.photos/seed/funnel3/400/250' },
  { id: 4, name: 'Sessão Estratégica Gratuita', steps: 3, visitors: '2.1k', conversion: '1.2%', status: 'Publicado', lastEdited: '1 semana atrás', thumbnail: 'https://picsum.photos/seed/funnel4/400/250' },
];

const templates = [
  { id: 't1', name: 'Landing Page de SaaS', category: 'Tecnologia', image: 'https://picsum.photos/seed/t1/300/200' },
  { id: 't2', name: 'Produto de E-commerce', category: 'Varejo', image: 'https://picsum.photos/seed/t2/300/200' },
  { id: 't3', name: 'Registro de Webinar', category: 'Educação', image: 'https://picsum.photos/seed/t3/300/200' },
  { id: 't4', name: 'Portfólio de Consultoria', category: 'Serviços', image: 'https://picsum.photos/seed/t4/300/200' },
];

export default function Sites() {
  const [activeTab, setActiveTab] = useState<'funnels' | 'websites'>('funnels');
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);

  if (isBuilderOpen) {
    return <LandingPageBuilder onBack={() => setIsBuilderOpen(false)} />;
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Sites e Funis</h1>
          <p className="text-slate-500 text-sm mt-1">Crie e gerencie suas landing pages de alta conversão.</p>
        </div>
        <button 
          onClick={() => setIsBuilderOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Criar Novo {activeTab === 'funnels' ? 'Funil' : 'Website'}
        </button>
      </div>

      {/* Templates Section */}
      <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Comece com um Template</h2>
              <p className="text-sm text-slate-500">Escolha em nossa biblioteca de designs de alta conversão.</p>
            </div>
          </div>
          <button className="text-indigo-600 text-sm font-bold flex items-center gap-1 hover:text-indigo-700">
            Ver Todos os Templates
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="group cursor-pointer">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-slate-100 mb-3 shadow-sm group-hover:shadow-md transition-all">
                <img 
                  src={template.image} 
                  alt={template.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => setIsBuilderOpen(true)}
                    className="px-4 py-2 bg-white rounded-lg text-slate-900 text-sm font-bold hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    Usar Template
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">{template.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{template.category}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-6">
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl w-fit">
          <button 
            onClick={() => setActiveTab('funnels')}
            className={cn(
              "px-6 py-2 rounded-lg text-sm font-bold transition-all",
              activeTab === 'funnels' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
            )}
          >
            Funis
          </button>
          <button 
            onClick={() => setActiveTab('websites')}
            className={cn(
              "px-6 py-2 rounded-lg text-sm font-bold transition-all",
              activeTab === 'websites' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
            )}
          >
            Websites
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {funnels.map((funnel) => (
            <div key={funnel.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-all">
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img 
                  src={funnel.thumbnail} 
                  alt={funnel.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="p-2 bg-white rounded-lg text-slate-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors shadow-lg">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white rounded-lg text-slate-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors shadow-lg">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setIsBuilderOpen(true)}
                    className="p-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition-colors shadow-lg"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={cn(
                    "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm",
                    funnel.status === 'Publicado' ? "bg-emerald-500 text-white" : "bg-slate-500 text-white"
                  )}>
                    {funnel.status}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">{funnel.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      {funnel.steps} Etapas
                    </p>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Visitantes</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <MousePointer2 className="w-3 h-3 text-indigo-500" />
                      <span className="text-sm font-bold text-slate-900">{funnel.visitors}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Conversão</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <BarChart2 className="w-3 h-3 text-emerald-500" />
                      <span className="text-sm font-bold text-slate-900">{funnel.conversion}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium">Editado {funnel.lastEdited}</span>
                <button 
                  onClick={() => setIsBuilderOpen(true)}
                  className="text-indigo-600 text-xs font-bold flex items-center gap-1 hover:text-indigo-700"
                >
                  Editar Funil
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
          
          <button 
            onClick={() => setIsBuilderOpen(true)}
            className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-8 group hover:bg-white hover:border-indigo-300 transition-all min-h-[300px]"
          >
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all mb-4">
              <Plus className="w-6 h-6" />
            </div>
            <p className="font-bold text-slate-900">Criar Novo Funil</p>
            <p className="text-xs text-slate-500 mt-1">Comece de um template ou do zero</p>
          </button>
        </div>
      </div>
    </div>
  );
}
