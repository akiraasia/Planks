import React from 'react';
import { Agent } from '@/store/useStore';
import { Hammer, Code, Layout, ShieldCheck, Cpu } from 'lucide-react';

const roleIcons = {
  planner: Layout,
  frontend: Code,
  backend: Hammer,
  reviewer: ShieldCheck,
  orchestrator: Cpu,
};

const roleColors = {
  planner: 'bg-[#8B5A2B]',
  frontend: 'bg-[#D2B48C]',
  backend: 'bg-[#A0522D]',
  reviewer: 'bg-[#5C4033]',
  orchestrator: 'bg-[#3E2723]',
};

export const AgentPlank: React.FC<{ agent: Agent }> = ({ agent }) => {
  const Icon = roleIcons[agent.role];
  
  return (
    <div className={`plank-card w-64 p-4 text-white ${roleColors[agent.role]} wood-grain cursor-pointer group`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-black/20 rounded">
            <Icon size={16} />
          </div>
          <span className="font-bold uppercase tracking-widest text-[10px] opacity-80">{agent.role}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] uppercase opacity-50 font-bold">{agent.status}</span>
          <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)] ${
            agent.status === 'working' ? 'bg-green-400 animate-pulse' : 
            agent.status === 'error' ? 'bg-red-500' : 
            'bg-gray-400 opacity-50'
          }`} />
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-xl font-serif tracking-tight leading-none group-hover:translate-x-1 transition-transform">{agent.agent_name || agent.name}</h3>
        <p className="text-[10px] opacity-60 font-mono truncate">{agent.model}</p>
      </div>
      
      <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
        <div className="flex -space-x-1">
           {[1,2,3].map(i => (
             <div key={i} className="w-4 h-4 rounded-full border border-white/20 bg-white/10" />
           ))}
        </div>
        <span className="text-[9px] opacity-40 font-bold">#MADE-OS</span>
      </div>
    </div>
  );
};
