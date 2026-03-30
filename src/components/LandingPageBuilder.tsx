import React, { useState } from 'react';
import { 
  Layout, 
  Type, 
  Palette, 
  Plus, 
  Trash2, 
  MoveUp, 
  MoveDown, 
  Save, 
  Eye, 
  Smartphone, 
  Monitor, 
  ChevronLeft,
  Settings,
  Image as ImageIcon,
  CheckCircle2,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { PageSection, LandingPage } from '@/src/types';

const SECTION_TEMPLATES = [
  { type: 'header', label: 'Header', icon: Layout },
  { type: 'hero', label: 'Hero', icon: ImageIcon },
  { type: 'features', label: 'Features', icon: CheckCircle2 },
  { type: 'testimonials', label: 'Testimonials', icon: Type },
  { type: 'cta', label: 'CTA', icon: Plus },
  { type: 'footer', label: 'Footer', icon: Layout },
  { type: 'form', label: 'Lead Form', icon: Type },
];

export default function LandingPageBuilder({ onBack }: { onBack: () => void }) {
  const [page, setPage] = useState<LandingPage>({
    id: '1',
    name: 'New Landing Page',
    status: 'draft',
    sections: [
      { id: 's1', type: 'header', content: { title: 'My Awesome Brand' } },
      { id: 's2', type: 'hero', content: { title: 'Build Your Business Faster', subtitle: 'The all-in-one platform for growth.' } },
    ],
    settings: {
      primaryColor: '#4f46e5',
      fontFamily: 'Inter',
      backgroundColor: '#ffffff',
    },
  });

  const [activeTab, setActiveTab] = useState<'blocks' | 'settings'>('blocks');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const addSection = (type: PageSection['type']) => {
    const newSection: PageSection = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: { title: `New ${type} Section`, subtitle: 'Edit this content' },
    };
    setPage({ ...page, sections: [...page.sections, newSection] });
  };

  const removeSection = (id: string) => {
    setPage({ ...page, sections: page.sections.filter(s => s.id !== id) });
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...page.sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newSections.length) return;
    [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];
    setPage({ ...page, sections: newSections });
  };

  const [editingSection, setEditingSection] = useState<string | null>(null);

  const updateSectionContent = (id: string, newContent: any) => {
    setPage({
      ...page,
      sections: page.sections.map(s => s.id === id ? { ...s, content: { ...s.content, ...newContent } } : s)
    });
  };

  return (
    <div className="fixed inset-0 bg-slate-100 z-50 flex flex-col">
      {/* Top Toolbar */}
      <header className="h-14 bg-white border-b border-slate-200 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="h-6 w-px bg-slate-200" />
          <input 
            value={page.name}
            onChange={(e) => setPage({ ...page, name: e.target.value })}
            className="font-bold text-slate-900 bg-transparent border-none focus:ring-0 p-0 w-48"
          />
          <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded tracking-wider">
            {page.status}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-slate-100 p-1 rounded-lg mr-4">
            <button 
              onClick={() => setViewMode('desktop')}
              className={cn("p-1.5 rounded-md transition-all", viewMode === 'desktop' ? "bg-white shadow-sm text-indigo-600" : "text-slate-400")}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('mobile')}
              className={cn("p-1.5 rounded-md transition-all", viewMode === 'mobile' ? "bg-white shadow-sm text-indigo-600" : "text-slate-400")}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-1.5 text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors">
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Save
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar: Blocks & Settings */}
        <aside className="w-80 bg-white border-r border-slate-200 flex flex-col">
          <div className="flex border-b border-slate-200">
            <button 
              onClick={() => setActiveTab('blocks')}
              className={cn("flex-1 py-3 text-sm font-bold transition-colors border-b-2", activeTab === 'blocks' ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-400")}
            >
              {editingSection ? 'Edit Content' : 'Blocks'}
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={cn("flex-1 py-3 text-sm font-bold transition-colors border-b-2", activeTab === 'settings' ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-400")}
            >
              Global Styles
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {editingSection ? (
              <div className="space-y-6">
                <button 
                  onClick={() => setEditingSection(null)}
                  className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:underline mb-4"
                >
                  <ChevronLeft className="w-3 h-3" />
                  Back to Blocks
                </button>
                {page.sections.find(s => s.id === editingSection) && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-slate-900 capitalize">
                      Editing {page.sections.find(s => s.id === editingSection)?.type}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Title</label>
                        <input 
                          value={page.sections.find(s => s.id === editingSection)?.content.title || ''}
                          onChange={(e) => updateSectionContent(editingSection, { title: e.target.value })}
                          className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                        />
                      </div>
                      {page.sections.find(s => s.id === editingSection)?.content.subtitle !== undefined && (
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Subtitle</label>
                          <textarea 
                            value={page.sections.find(s => s.id === editingSection)?.content.subtitle || ''}
                            onChange={(e) => updateSectionContent(editingSection, { subtitle: e.target.value })}
                            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm h-24"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : activeTab === 'blocks' ? (
              <div className="grid grid-cols-2 gap-3">
                {SECTION_TEMPLATES.map((item) => (
                  <button 
                    key={item.type}
                    onClick={() => addSection(item.type as any)}
                    className="flex flex-col items-center gap-2 p-4 border border-slate-100 rounded-xl hover:border-indigo-200 hover:bg-indigo-50/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-white transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600">{item.label}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Primary Color</label>
                  <div className="flex items-center gap-3">
                    <input 
                      type="color" 
                      value={page.settings.primaryColor}
                      onChange={(e) => setPage({ ...page, settings: { ...page.settings, primaryColor: e.target.value } })}
                      className="w-10 h-10 rounded-lg border-0 p-0 overflow-hidden cursor-pointer"
                    />
                    <span className="text-sm font-mono text-slate-600">{page.settings.primaryColor}</span>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Font Family</label>
                  <select 
                    value={page.settings.fontFamily}
                    onChange={(e) => setPage({ ...page, settings: { ...page.settings, fontFamily: e.target.value } })}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="Inter">Inter</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Playfair Display">Playfair Display</option>
                    <option value="Montserrat">Montserrat</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main Canvas */}
        <main className="flex-1 overflow-y-auto p-8 flex justify-center bg-slate-50">
          <div 
            className={cn(
              "bg-white shadow-2xl transition-all duration-500 overflow-hidden",
              viewMode === 'desktop' ? "w-full max-w-5xl min-h-full" : "w-[375px] min-h-[667px] rounded-[40px] border-[12px] border-slate-900"
            )}
            style={{ backgroundColor: page.settings.backgroundColor, fontFamily: page.settings.fontFamily }}
          >
            {page.sections.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4">
                <Layout className="w-12 h-12 opacity-20" />
                <p className="text-sm">Drag or click a block to start building</p>
              </div>
            ) : (
              <div className="space-y-0">
                {page.sections.map((section, index) => (
                  <div 
                    key={section.id} 
                    className={cn(
                      "group relative cursor-pointer transition-all",
                      editingSection === section.id ? "ring-2 ring-indigo-500 ring-inset" : "hover:bg-slate-50/50"
                    )}
                    onClick={() => {
                      setEditingSection(section.id);
                      setActiveTab('blocks');
                    }}
                  >
                    {/* Section Content Preview */}
                    <SectionPreview section={section} settings={page.settings} />
                    
                    {/* Section Controls */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-white shadow-lg border border-slate-200 p-1 rounded-lg z-10">
                      <button 
                        onClick={(e) => { e.stopPropagation(); moveSection(index, 'up'); }}
                        disabled={index === 0}
                        className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 disabled:opacity-30"
                      >
                        <MoveUp className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); moveSection(index, 'down'); }}
                        disabled={index === page.sections.length - 1}
                        className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 disabled:opacity-30"
                      >
                        <MoveDown className="w-3.5 h-3.5" />
                      </button>
                      <div className="w-px h-4 bg-slate-200 mx-1" />
                      <button 
                        onClick={(e) => { e.stopPropagation(); removeSection(section.id); }}
                        className="p-1.5 hover:bg-red-50 rounded text-slate-400 hover:text-red-600"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function SectionPreview({ section, settings }: { section: PageSection, settings: any }) {
  const { type, content } = section;

  switch (type) {
    case 'header':
      return (
        <header className="py-6 px-8 flex justify-between items-center border-b border-slate-100">
          <div className="text-xl font-black" style={{ color: settings.primaryColor }}>{content.title}</div>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <span>Features</span>
            <span>Pricing</span>
            <span>About</span>
          </nav>
        </header>
      );
    case 'hero':
      return (
        <section className="py-24 px-12 text-center bg-slate-50">
          <h2 className="text-5xl font-black text-slate-900 mb-6 leading-tight">{content.title}</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">{content.subtitle}</p>
          <button 
            className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:scale-105 transition-transform"
            style={{ backgroundColor: settings.primaryColor }}
          >
            Get Started Free
          </button>
        </section>
      );
    case 'features':
      return (
        <section className="py-20 px-12 grid grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-white">
              <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: `${settings.primaryColor}15`, color: settings.primaryColor }}>
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Feature {i}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          ))}
        </section>
      );
    case 'form':
      return (
        <section className="py-20 px-12 bg-white">
          <div className="max-w-xl mx-auto p-10 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Join the Waitlist</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
              <button 
                className="w-full py-4 rounded-xl text-white font-bold shadow-lg"
                style={{ backgroundColor: settings.primaryColor }}
              >
                Sign Up Now
              </button>
            </div>
          </div>
        </section>
      );
    case 'testimonials':
      return (
        <section className="py-20 px-12 bg-slate-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-medium italic mb-8">"This platform changed everything for our agency. We doubled our revenue in 3 months."</p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-700" />
              <div className="text-left">
                <div className="font-bold">John Doe</div>
                <div className="text-slate-400 text-sm">CEO at TechFlow</div>
              </div>
            </div>
          </div>
        </section>
      );
    case 'footer':
      return (
        <footer className="py-12 px-12 border-t border-slate-100 text-center">
          <div className="text-sm text-slate-400">© 2026 {content.title}. All rights reserved.</div>
        </footer>
      );
    default:
      return <div className="p-12 text-center border border-dashed border-slate-200 text-slate-400">Section: {type}</div>;
  }
}
