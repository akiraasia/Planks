'use client';

import { useState } from 'react';
import { Terminal, Code, MessageSquare, ChevronUp, ChevronDown, Activity, Trash2, Play } from 'lucide-react';

export const BottomPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('terminal');

  return (
    <div className={`bg-white/90 backdrop-blur-xl border-t border-amber-900/10 transition-all duration-500 ease-in-out shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20 ${isExpanded ? 'h-[400px]' : 'h-14'}`}>
      <div className="h-14 flex items-center justify-between px-8">
        <div className="flex gap-10 h-full">
          <TabButton 
            active={activeTab === 'terminal'} 
            onClick={() => {setActiveTab('terminal'); setIsExpanded(true);}}
            icon={<Terminal size={14} />} 
            label="Terminal" 
          />
          <TabButton 
            active={activeTab === 'editor'} 
            onClick={() => {setActiveTab('editor'); setIsExpanded(true);}}
            icon={<Code size={14} />} 
            label="Editor" 
          />
          <TabButton 
            active={activeTab === 'consensus'} 
            onClick={() => {setActiveTab('consensus'); setIsExpanded(true);}}
            icon={<Activity size={14} />} 
            label="Consensus" 
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-amber-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors shadow-lg shadow-amber-900/20">
            <Play size={12} fill="currentColor" /> Run Workflow
          </button>
          <div className="w-px h-6 bg-amber-900/10 mx-2" />
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-amber-900/5 rounded-lg transition-colors text-amber-900/40 hover:text-amber-900"
          >
            {isExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-8 pb-8 h-[calc(100%-3.5rem)] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-full h-full bg-[#0c0a09] rounded-2xl overflow-hidden border border-white/5 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">made-session-001</span>
              <button className="text-white/20 hover:text-red-400 transition-colors">
                <Trash2 size={14} />
              </button>
            </div>
            
            <div className="flex-1 p-6 font-mono text-[13px] leading-relaxed overflow-auto scrollbar-hide">
              <div className="space-y-2">
                <div className="flex gap-3">
                  <span className="text-amber-500 font-bold">SYSTEM</span>
                  <span className="text-white/40">MADE OS v1.0.0 initializing secure sandbox...</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-400 font-bold">PLANNER</span>
                  <span className="text-white/80">Architecture blueprint generated. 4 sub-tasks assigned.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-emerald-400 font-bold">FRONTEND</span>
                  <span className="text-white/80">Tailwind configuration injected. Compiling base styles.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-pink-400 font-bold">BACKEND</span>
                  <span className="text-white/80">Prisma client instantiated. Waiting for migrations.</span>
                </div>
                <div className="flex gap-3 mt-4">
                  <span className="text-white/40">guest@made-os:~$</span>
                  <span className="text-white animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TabButton = ({ active, icon, label, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2.5 h-full px-2 transition-all relative group ${
      active ? 'text-amber-900' : 'text-amber-900/30 hover:text-amber-900/60'
    }`}
  >
    <span className={`${active ? 'text-amber-600' : ''}`}>{icon}</span>
    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{label}</span>
    {active && (
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
    )}
  </button>
);
