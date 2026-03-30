import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Mail, 
  Phone, 
  Tag, 
  Download,
  ChevronLeft,
  ChevronRight,
  Building2,
  History,
  MessageSquare,
  Clock,
  ExternalLink,
  X,
  Calendar,
  User,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Contact, Interaction, Company } from '@/src/types';

const companies: Company[] = [
  { id: 'c1', name: 'TechFlow Solutions', website: 'techflow.io', industry: 'Software' },
  { id: 'c2', name: 'Agência Global', website: 'agenciaglobal.com.br', industry: 'Marketing' },
];

const contacts: Contact[] = [
  { 
    id: '1', 
    name: 'Sara Oliveira', 
    email: 'sara@exemplo.com.br', 
    phone: '(11) 98765-4321', 
    companyId: 'c1',
    tags: ['Lead', 'Quente'], 
    status: 'lead', 
    lastInteraction: '2 min atrás',
    interactions: [
      { id: 'i1', type: 'email', content: 'Enviou proposta de preço', timestamp: '2026-03-30T10:00:00Z', status: 'sent' },
      { id: 'i2', type: 'call', content: 'Chamada de descoberta - muito interessado no plano Agência', timestamp: '2026-03-29T15:30:00Z', status: 'completed' },
    ]
  },
  { 
    id: '2', 
    name: 'Miguel Santos', 
    email: 'm.santos@empresa.com.br', 
    phone: '(21) 91234-5678', 
    companyId: 'c2',
    tags: ['Cliente'], 
    status: 'customer', 
    lastInteraction: '15 min atrás',
    interactions: [
      { id: 'i3', type: 'whatsapp', content: 'Perguntou sobre integração de API', timestamp: '2026-03-30T09:15:00Z', status: 'received' },
    ]
  },
];

export default function Contacts() {
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [viewingContact, setViewingContact] = useState<Contact | null>(null);

  const toggleSelectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(contacts.map(c => c.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter(c => c !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">CRM de Contatos</h1>
          <p className="text-slate-500 text-sm mt-1">Gerencie seus relacionamentos e dados de clientes.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-sm font-medium text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exportar
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Adicionar Contato
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between bg-slate-50/50 gap-4">
          <div className="flex flex-wrap items-center gap-4 flex-1">
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar contatos..." 
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:shadow-sm rounded-lg transition-all border border-transparent hover:border-slate-200">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:shadow-sm rounded-lg transition-all border border-transparent hover:border-slate-200">
              <Tag className="w-4 h-4" />
              Tags
            </button>
          </div>
          
          {selectedContacts.length > 0 && (
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-200">
              <span className="text-sm font-medium text-indigo-600 mr-2">{selectedContacts.length} selecionados</span>
              <button className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-md hover:bg-indigo-100 transition-colors">Ação em Massa</button>
              <button className="px-3 py-1.5 bg-rose-50 text-rose-700 text-xs font-bold rounded-md hover:bg-rose-100 transition-colors">Excluir</button>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-500 text-xs font-semibold uppercase tracking-wider border-b border-slate-100">
                <th className="px-6 py-4 w-10">
                  <input 
                    type="checkbox" 
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    checked={selectedContacts.length === contacts.length}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="px-6 py-4">Nome e Empresa</th>
                <th className="px-6 py-4">Informações de Contato</th>
                <th className="px-6 py-4">Tags</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Última Atividade</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {contacts.map((contact) => {
                const company = companies.find(c => c.id === contact.companyId);
                return (
                  <tr 
                    key={contact.id} 
                    className={cn(
                      "hover:bg-slate-50/50 transition-colors cursor-pointer group",
                      selectedContacts.includes(contact.id) ? "bg-indigo-50/30" : ""
                    )}
                    onClick={() => setViewingContact(contact)}
                  >
                    <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                      <input 
                        type="checkbox" 
                        className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                        checked={selectedContacts.includes(contact.id)}
                        onChange={() => toggleSelect(contact.id)}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{contact.name}</p>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            {company?.name || 'Sem Empresa'}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Mail className="w-3 h-3" />
                          {contact.email}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Phone className="w-3 h-3" />
                          {contact.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {contact.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          contact.status === 'customer' ? "bg-emerald-500" : "bg-amber-500"
                        )} />
                        <span className="text-xs font-medium text-slate-700 capitalize">
                          {contact.status === 'customer' ? 'cliente' : 'lead'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">{contact.lastInteraction}</td>
                    <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between bg-slate-50/30 gap-4">
          <p className="text-xs text-slate-500 font-medium text-center sm:text-left">Mostrando 1 a 2 de 1.240 contatos</p>
          <div className="flex items-center justify-center gap-2">
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-white disabled:opacity-50 transition-all" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-bold">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-slate-600 text-xs font-bold">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-slate-600 text-xs font-bold">3</button>
              <span className="text-slate-400 px-1">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-slate-600 text-xs font-bold">12</button>
            </div>
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-white transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Details Side Panel */}
      {viewingContact && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setViewingContact(null)} />
          <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl">
                  {viewingContact.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{viewingContact.name}</h2>
                  <p className="text-sm text-slate-500">Detalhes do Contato</p>
                </div>
              </div>
              <button onClick={() => setViewingContact(null)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">E-mail</p>
                  <p className="text-sm font-bold text-slate-900">{viewingContact.email}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Telefone</p>
                  <p className="text-sm font-bold text-slate-900">{viewingContact.phone}</p>
                </div>
              </div>

              {/* Company Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-indigo-600" />
                  Associação de Empresa
                </h3>
                {viewingContact.companyId ? (
                  <div className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between group hover:border-indigo-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{companies.find(c => c.id === viewingContact.companyId)?.name}</p>
                        <p className="text-xs text-slate-500">{companies.find(c => c.id === viewingContact.companyId)?.industry}</p>
                      </div>
                    </div>
                    <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-sm font-medium hover:border-indigo-300 hover:text-indigo-600 transition-all">
                    + Associar a uma Empresa
                  </button>
                )}
              </div>

              {/* Interaction History */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <History className="w-4 h-4 text-indigo-600" />
                  Histórico de Interações
                </h3>
                <div className="space-y-4">
                  {viewingContact.interactions.map((interaction, idx) => (
                    <div key={interaction.id} className="relative pl-8 pb-4 last:pb-0">
                      {idx !== viewingContact.interactions.length - 1 && (
                        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-slate-100" />
                      )}
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center z-10">
                        {interaction.type === 'email' && <Mail className="w-3 h-3 text-blue-500" />}
                        {interaction.type === 'call' && <Phone className="w-3 h-3 text-emerald-500" />}
                        {interaction.type === 'whatsapp' && <MessageSquare className="w-3 h-3 text-emerald-600" />}
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{interaction.type}</span>
                          <span className="text-[10px] text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {new Date(interaction.timestamp).toLocaleString('pt-BR')}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700">{interaction.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg hover:bg-indigo-700 transition-colors">
                Enviar Mensagem
              </button>
              <button className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
                Editar Contato
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
