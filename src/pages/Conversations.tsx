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
  Tag
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Message, Contact } from '@/src/types';

const mockContacts: Contact[] = [
  { id: '1', name: 'Sarah Jenkins', email: 'sarah@example.com', phone: '+15551234567', tags: ['Lead'], status: 'lead', interactions: [] },
  { id: '2', name: 'Michael Chen', email: 'm.chen@company.com', phone: '+15559876543', tags: ['Customer'], status: 'customer', interactions: [] },
];

const conversations = [
  { id: '1', contactId: '1', lastMsg: 'I have a question about the pricing plan...', time: '2m ago', unread: 2, channel: 'whatsapp', status: 'read' },
  { id: '2', contactId: '2', lastMsg: 'The proposal looks great! Let\'s move forward.', time: '15m ago', unread: 0, channel: 'email', status: 'delivered' },
  { id: '3', contactId: '1', lastMsg: 'Can we schedule a call for tomorrow?', time: '1h ago', unread: 0, channel: 'sms', status: 'read' },
];

const messages: Message[] = [
  { id: 'm1', contactId: '1', channel: 'whatsapp', direction: 'inbound', content: 'Hi, I have a question about the Agency plan.', timestamp: '2026-03-30T10:00:00Z', status: 'read' },
  { id: 'm2', contactId: '1', channel: 'whatsapp', direction: 'outbound', content: 'Sure Sarah! How can I help you today?', timestamp: '2026-03-30T10:05:00Z', status: 'read' },
  { id: 'm3', contactId: '1', channel: 'whatsapp', direction: 'inbound', content: 'Does it include white-labeling for custom domains?', timestamp: '2026-03-30T10:10:00Z', status: 'read' },
];

export default function Conversations() {
  const [selectedConv, setSelectedConv] = useState(conversations[0]);
  const [showInfo, setShowInfo] = useState(false);
  const selectedContact = mockContacts.find(c => c.id === selectedConv.contactId);

  return (
    <div className="h-[calc(100vh-120px)] flex bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Conversations List */}
      <div className="w-80 border-r border-slate-100 flex flex-col">
        <div className="p-4 border-b border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Unified Inbox</h2>
            <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors text-slate-400">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search messages..." 
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
                onClick={() => setSelectedConv(conv)}
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
      <div className="flex-1 flex flex-col bg-slate-50/30">
        {/* Chat Header */}
        <div className="h-16 bg-white border-b border-slate-100 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
              {selectedContact?.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{selectedContact?.name}</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Online via {selectedConv.channel}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors text-slate-400"><Phone className="w-4 h-4" /></button>
            <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors text-slate-400"><Video className="w-4 h-4" /></button>
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className={cn("p-2 rounded-lg transition-colors", showInfo ? "bg-indigo-50 text-indigo-600" : "hover:bg-slate-50 text-slate-400")}
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages View */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex justify-center">
            <span className="px-3 py-1 bg-white border border-slate-100 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">Today</span>
          </div>
          
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex", msg.direction === 'outbound' ? "justify-end" : "justify-start")}>
              <div className={cn(
                "max-w-[70%] p-4 rounded-2xl text-sm shadow-sm",
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
        <div className="p-6 bg-white border-t border-slate-100">
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-2">
            <button className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all text-slate-400"><Paperclip className="w-5 h-5" /></button>
            <input 
              type="text" 
              placeholder={`Send a message via ${selectedConv.channel}...`}
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm p-2"
            />
            <button className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all text-slate-400"><Smile className="w-5 h-5" /></button>
            <button className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info Sidebar */}
      {showInfo && (
        <div className="w-80 border-l border-slate-100 bg-white p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-20 h-20 rounded-3xl bg-indigo-600 text-white flex items-center justify-center font-bold text-2xl mb-4 shadow-xl">
              {selectedContact?.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{selectedContact?.name}</h3>
            <p className="text-xs text-slate-400 mt-1 capitalize">{selectedContact?.status} • {selectedContact?.tags[0]}</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact Info</h4>
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
                View CRM Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
