'use client';

import { FlowCanvas } from '@/components/canvas/FlowCanvas';
import { Sidebar } from '@/components/layout/Sidebar';
import { BottomPanel } from '@/components/layout/BottomPanel';

export default function Home() {
  return (
    <main className="flex h-screen w-screen bg-[#fdfaf6] overflow-hidden select-none">
      <Sidebar />
      
      <div className="flex-1 flex flex-col relative">
        {/* Header / Top Bar (Optional) */}
        <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-10 flex items-center justify-end px-8">
          <div className="flex items-center gap-4 pointer-events-auto">
             <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg border border-amber-900/10 shadow-sm flex items-center gap-3">
               <div className="flex -space-x-2">
                 <div className="w-6 h-6 rounded-full bg-amber-200 border border-white" />
                 <div className="w-6 h-6 rounded-full bg-blue-200 border border-white" />
                 <div className="w-6 h-6 rounded-full bg-emerald-200 border border-white" />
               </div>
               <span className="text-[10px] font-bold text-amber-900/60 uppercase tracking-widest">3 Agents Online</span>
             </div>
             
             <button className="bg-white/80 backdrop-blur-md p-2 rounded-lg border border-amber-900/10 shadow-sm hover:bg-amber-50 transition-colors">
               <div className="w-4 h-4 rounded-full border-2 border-amber-900/20" />
             </button>
          </div>
        </div>

        <div className="flex-1">
          <FlowCanvas />
        </div>
        
        <BottomPanel />
      </div>
    </main>
  );
}
