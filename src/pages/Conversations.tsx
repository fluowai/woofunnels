import React, { useState } from 'react';
import { 
  Search, 
  MoreVertical, 
  Phone, 
  Video, 
  Info, 
  Send, 
  Smile, 
  Paperclip,
  CheckCheck,
  User,
  Mail,
  MessageSquare,
  Instagram,
  Facebook,
  Smartphone,
  ChevronLeft,
  Clock,
  Building2,
  Tag,
  Menu
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Message, Contact } from '@/src/types';

const mockContacts: Contact[] = [
  { id: '1', name: 'Sara Oliveira', email: 'sara@exemplo.com.br', phone: '+5511987654321', tags: ['Lead'], status: 'lead', interactions: [] },
  { id: '2', name: 'Miguel Santos', email: 'm.santos@empresa.com.br', phone: '+5521912345678', tags: ['Cliente'], status: 'customer', interactions: [] },
];

const conversations = [
  { id: '1', contactId: '1', lastMsg: 'Tenho uma dúvida sobre o plano de preços...', time: '2m atrás', unread: 2, channel: 'whatsapp', status: 'read' },
  { id: '2', contactId: '2', lastMsg: 'A proposta parece ótima! Vamos seguir em frente.', time: '15m atrás', unread: 0, channel: 'email', status: 'delivered' },
  { id: '3', contactId: '1', lastMsg: 'Podemos agendar uma chamada para amanhã?', time: '1h atrás', unread: 0, channel: 'sms', status: 'read' },
];

const messages: Message[] = [
  { id: 'm1', contactId: '1', channel: 'whatsapp', direction: 'inbound', content: 'Oi, tenho uma dúvida sobre o plano Agência.', timestamp: '2026-03-30T10:00:00Z', status: 'read' },
  { id: 'm2', contactId: '1', channel: 'whatsapp', direction: 'outbound', content: 'Claro Sara! Como posso te ajudar hoje?', timestamp: '2026-03-30T10:05:00Z', status: 'read' },
  { id: 'm3', contactId: '1', channel: 'whatsapp', direction: 'inbound', content: 'Inclui white-label para domínios personalizados?', timestamp: '2026-03-30T10:10:00Z', status: 'read' },
];

export default function Conversations() {
  const [selectedConv, setSelectedConv] = useState(conversations[0]);
  const [showInfo, setShowInfo] = useState(false);
  const [showList, setShowList] = useState(true);
  const selectedContact = mockContacts.find(c => c.id === selectedConv.contactId);

  return (
    <div className="h-[calc(100vh-120px)] flex bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm relative">
      {/* Conversations List */}
      <div className={cn(
        "w-full md:w-80 border-r border-slate-100 flex flex-col bg-white z-20 transition-transform duration-300 absolute md:relative inset-0 md:translate-x-0",
        showList ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-4 border-b border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Caixa de Entrada</h2>
            <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors text-slate-400">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar mensagens..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => {
            const contact = mockContacts.find(c => c.id === conv.contactId);
            return (
              <div 
                key={conv.id}
                onClick={() => {
                  setSelectedConv(conv);
                  if (window.innerWidth < 768) setShowList(false);
                }}
                className={cn(
                  "p-4 flex gap-3 cursor-pointer transition-all border-l-4",
                  selectedConv.id === conv.id ? "bg-indigo-50/50 border-indigo-600" : "hover:bg-slate-50 border-transparent"
                )}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
                    {contact?.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-sm">
                    {conv.channel === 'whatsapp' && <MessageSquare className="w-3 h-3 text-emerald-500" />}
                    {conv.channel === 'email' && <Mail className="w-3 h-3 text-blue-500" />}
                    {conv.channel === 'sms' && <Smartphone className="w-3 h-3 text-indigo-500" />}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-slate-900 truncate">{contact?.name}</h3>
                    <span className="text-[10px] text-slate-400 font-medium">{conv.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">{conv.lastMsg}</p>
                </div>
                {conv.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {conv.unread}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-slate-50/30 min-w-0">
        {/* Chat Header */}
        <div className="h-16 bg-white border-b border-slate-100 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <button 
              onClick={() => setShowList(true)}
              className="p-2 -ml-2 text-slate-400 hover:bg-slate-50 rounded-lg md:hidden"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold flex-shrink-0">
              {selectedContact?.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-slate-900 truncate">{selectedContact?.name}</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider truncate">Online via {selectedConv.channel}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors text-slate-400"><Phone className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors text-slate-400 hidden sm:block"><Video className="w-4 h-4" /></button>
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className={cn("p-2 rounded-lg transition-colors", showInfo ? "bg-indigo-50 text-indigo-600" : "hover:bg-slate-50 text-slate-400")}
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages View */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          <div className="flex justify-center">
            <span className="px-3 py-1 bg-white border border-slate-100 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hoje</span>
          </div>
          
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex", msg.direction === 'outbound' ? "justify-end" : "justify-start")}>
              <div className={cn(
                "max-w-[85%] md:max-w-[70%] p-4 rounded-2xl text-sm shadow-sm",
                msg.direction === 'outbound' ? "bg-indigo-600 text-white rounded-tr-none" : "bg-white text-slate-700 border border-slate-100 rounded-tl-none"
              )}>
                <p className="leading-relaxed">{msg.content}</p>
                <div className={cn("flex items-center gap-1.5 mt-2", msg.direction === 'outbound' ? "justify-end text-indigo-200" : "text-slate-400")}>
                  <span className="text-[9px] font-medium">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  {msg.direction === 'outbound' && <CheckCheck className="w-3 h-3" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 bg-white border-t border-slate-100">
          <div className="flex items-center gap-2 md:gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-2">
            <button className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all text-slate-400 hidden sm:block"><Paperclip className="w-5 h-5" /></button>
            <input 
              type="text" 
              placeholder={`Enviar mensagem via ${selectedConv.channel}...`}
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm p-2"
            />
            <button className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all text-slate-400"><Smile className="w-5 h-5" /></button>
            <button className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all flex-shrink-0">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info Sidebar */}
      {showInfo && (
        <div className="fixed md:relative inset-y-0 right-0 w-full md:w-80 border-l border-slate-100 bg-white p-6 overflow-y-auto z-30 animate-in slide-in-from-right duration-300">
          <button 
            onClick={() => setShowInfo(false)}
            className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg md:hidden"
          >
            <ChevronLeft className="w-5 h-5 rotate-180" />
          </button>
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-20 h-20 rounded-3xl bg-indigo-600 text-white flex items-center justify-center font-bold text-2xl mb-4 shadow-xl">
              {selectedContact?.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{selectedContact?.name}</h3>
            <p className="text-xs text-slate-400 mt-1 capitalize">{selectedContact?.status === 'customer' ? 'cliente' : 'lead'} • {selectedContact?.tags[0]}</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Informações de Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-medium text-slate-600 truncate">{selectedContact?.email}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-medium text-slate-600">{selectedContact?.phone}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {selectedContact?.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
                Ver Perfil no CRM
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
