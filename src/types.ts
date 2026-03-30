export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyId?: string;
  tags: string[];
  status: 'lead' | 'customer' | 'prospect';
  avatar?: string;
  lastInteraction?: string;
  interactions: Interaction[];
}

export interface Company {
  id: string;
  name: string;
  website: string;
  industry: string;
  logo?: string;
}

export interface Interaction {
  id: string;
  type: 'email' | 'call' | 'sms' | 'whatsapp' | 'meeting' | 'note';
  content: string;
  timestamp: string;
  status?: 'sent' | 'received' | 'completed';
}

export interface LandingPage {
  id: string;
  name: string;
  status: 'draft' | 'published';
  sections: PageSection[];
  settings: {
    primaryColor: string;
    fontFamily: string;
    backgroundColor: string;
  };
}

export interface PageSection {
  id: string;
  type: 'header' | 'hero' | 'features' | 'testimonials' | 'cta' | 'footer' | 'form';
  content: any;
}

export interface Message {
  id: string;
  contactId: string;
  channel: 'email' | 'sms' | 'whatsapp';
  direction: 'inbound' | 'outbound';
  content: string;
  timestamp: string;
  status: 'delivered' | 'read' | 'pending';
}

export interface Deal {
  id: string;
  title: string;
  value: number;
  contact: string;
  stage: string;
  probability: number;
}

export interface WorkflowNode {
  id: string;
  type: string;
  data: { label: string };
  position: { x: number; y: number };
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
}
