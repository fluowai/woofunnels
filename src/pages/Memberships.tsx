import React from 'react';
import { 
  Layers, 
  Users, 
  Play, 
  Plus, 
  Search, 
  MoreHorizontal, 
  BookOpen, 
  Clock, 
  Star,
  Settings
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const courses = [
  { id: 1, name: 'High Ticket Sales Mastery', students: '1,240', lessons: 24, rating: 4.9, status: 'Published', thumbnail: 'https://picsum.photos/seed/course1/400/250' },
  { id: 2, name: 'Facebook Ads for Beginners', students: '4,512', lessons: 18, rating: 4.7, status: 'Published', thumbnail: 'https://picsum.photos/seed/course2/400/250' },
  { id: 3, name: 'Email Marketing Secrets', students: '842', lessons: 12, rating: 4.8, status: 'Draft', thumbnail: 'https://picsum.photos/seed/course3/400/250' },
  { id: 4, name: 'Agency Scaling Blueprint', students: '2,100', lessons: 32, rating: 5.0, status: 'Published', thumbnail: 'https://picsum.photos/seed/course4/400/250' },
];

export default function Memberships() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Memberships & Courses</h1>
          <p className="text-slate-500 text-sm mt-1">Build and host your digital products and communities.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="font-bold text-slate-900">Total Students</h3>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">8,694</h3>
          <p className="text-xs text-emerald-600 font-bold mt-1">+12.5% this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <Play className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-slate-900">Active Courses</h3>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">12</h3>
          <p className="text-xs text-slate-500 font-medium mt-1">4 drafts pending</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-50 rounded-lg">
              <Star className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-bold text-slate-900">Avg. Rating</h3>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">4.85</h3>
          <p className="text-xs text-slate-500 font-medium mt-1">Based on 2.4k reviews</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-rose-50 rounded-lg">
              <Layers className="w-5 h-5 text-rose-600" />
            </div>
            <h3 className="font-bold text-slate-900">Revenue</h3>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">$45,200</h3>
          <p className="text-xs text-emerald-600 font-bold mt-1">+8.2% this month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-all">
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <img 
                src={course.thumbnail} 
                alt={course.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button className="p-2 bg-white rounded-lg text-slate-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors shadow-lg">
                  <Play className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white rounded-lg text-slate-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors shadow-lg">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute top-3 right-3">
                <span className={cn(
                  "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm",
                  course.status === 'Published' ? "bg-emerald-500 text-white" : "bg-slate-500 text-white"
                )}>
                  {course.status}
                </span>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="font-bold text-slate-900 truncate group-hover:text-indigo-600 transition-colors mb-4">{course.name}</h3>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Students</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Users className="w-3 h-3 text-indigo-500" />
                    <span className="text-sm font-bold text-slate-900">{course.students}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Lessons</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <BookOpen className="w-3 h-3 text-emerald-500" />
                    <span className="text-sm font-bold text-slate-900">{course.lessons}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span className="text-xs font-bold text-slate-700">{course.rating}</span>
              </div>
              <button className="text-indigo-600 text-xs font-bold hover:text-indigo-700">
                Manage Course
              </button>
            </div>
          </div>
        ))}
        
        <button className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-8 group hover:bg-white hover:border-indigo-300 transition-all min-h-[280px]">
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all mb-4">
            <Plus className="w-6 h-6" />
          </div>
          <p className="font-bold text-slate-900">Create New Course</p>
          <p className="text-xs text-slate-500 mt-1">Start building your curriculum</p>
        </button>
      </div>
    </div>
  );
}
