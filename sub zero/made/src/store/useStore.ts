import { create } from 'zustand';

export type AgentRole = 'planner' | 'frontend' | 'backend' | 'reviewer' | 'orchestrator';

export interface Agent {
  id: string;
  name: string;
  role: AgentRole;
  model: string;
  status: 'idle' | 'working' | 'error';
}

interface Task {
  id: string;
  title: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  assignedTo?: string;
}

interface MADEState {
  agents: Agent[];
  tasks: Task[];
  consensusMode: boolean;
  addAgent: (agent: Agent) => void;
  removeAgent: (id: string) => void;
  updateAgentStatus: (id: string, status: Agent['status']) => void;
  addTask: (task: Task) => void;
  setConsensusMode: (enabled: boolean) => void;
}

export const useStore = create<MADEState>((set) => ({
  agents: [
    { id: '1', name: 'Claude', role: 'planner', model: 'claude-3-opus', status: 'idle' },
    { id: '2', name: 'GPT-4', role: 'frontend', model: 'gpt-4-turbo', status: 'idle' },
  ],
  tasks: [],
  consensusMode: false,
  addAgent: (agent) => set((state) => ({ agents: [...state.agents, agent] })),
  removeAgent: (id) => set((state) => ({ agents: state.agents.filter(a => a.id !== id) })),
  updateAgentStatus: (id, status) => set((state) => ({
    agents: state.agents.map((a) => a.id === id ? { ...a, status } : a)
  })),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  setConsensusMode: (enabled) => set({ consensusMode: enabled }),
}));
