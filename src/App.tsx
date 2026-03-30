import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Pipelines from './pages/Pipelines';
import Workflows from './pages/Workflows';
import Contacts from './pages/Contacts';
import Sites from './pages/Sites';
import Settings from './pages/Settings';
import Conversations from './pages/Conversations';
import Calendar from './pages/Calendar';
import Marketing from './pages/Marketing';
import Reporting from './pages/Reporting';
import Payments from './pages/Payments';
import Memberships from './pages/Memberships';

// Placeholder pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
    <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
    <p>This module is currently under development.</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="pipelines" element={<Pipelines />} />
          <Route path="workflows" element={<Workflows />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="sites" element={<Sites />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="conversations" element={<Conversations />} />
          <Route path="reporting" element={<Reporting />} />
          <Route path="payments" element={<Payments />} />
          <Route path="memberships" element={<Memberships />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
