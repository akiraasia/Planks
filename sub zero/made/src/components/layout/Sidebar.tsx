import { Plus, Settings, Users, Database, Globe, Layers, Zap } from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className="w-20 h-full bg-[#1a1310] flex flex-col items-center py-8 gap-10 text-white/30 border-r border-black/40 shadow-2xl z-20">
      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-800 rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:scale-105 transition-transform cursor-pointer">
        <Zap size={28} strokeWidth={2.5} />
      </div>
      
      <div className="flex flex-col gap-8">
        <SidebarIcon icon={<Layers size={22} />} active />
        <SidebarIcon icon={<Users size={22} />} />
        <SidebarIcon icon={<Database size={22} />} />
        <div className="w-10 h-px bg-white/5 mx-auto" />
        <SidebarIcon icon={<Plus size={22} />} highlight />
      </div>
      
      <div className="mt-auto flex flex-col gap-6 mb-2">
        <SidebarIcon icon={<Globe size={22} />} />
        <SidebarIcon icon={<Settings size={22} />} />
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, active = false, highlight = false }: { icon: React.ReactNode, active?: boolean, highlight?: boolean }) => (
  <button className={`p-3 rounded-xl transition-all duration-200 group relative ${
    active ? 'text-amber-500 bg-white/5' : 
    highlight ? 'text-amber-400 border border-amber-400/20 hover:bg-amber-400/10' :
    'hover:text-white hover:bg-white/5'
  }`}>
    {icon}
    {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-amber-500 rounded-r-full" />}
    <div className="absolute left-20 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity uppercase tracking-widest font-bold border border-white/10">
      Tooltip
    </div>
  </button>
);
