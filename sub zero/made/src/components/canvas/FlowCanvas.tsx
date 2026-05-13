'use client';

import React, { useCallback } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  Connection, 
  Edge, 
  addEdge, 
  useNodesState, 
  useEdgesState,
  Node,
  Handle,
  Position
} from 'reactflow';
import 'reactflow/dist/style.css';
import { AgentPlank } from '../planks/AgentPlank';

const AgentNode = ({ data }: any) => (
  <div className="relative">
    <Handle type="target" position={Position.Top} className="!bg-amber-900 !w-3 !h-1 !rounded-none !border-none" />
    <AgentPlank agent={data.agent} />
    <Handle type="source" position={Position.Bottom} className="!bg-amber-900 !w-3 !h-1 !rounded-none !border-none" />
  </div>
);

const nodeTypes = {
  agent: AgentNode,
};

const initialNodes: Node[] = [
  { 
    id: 'node-1', 
    type: 'agent', 
    position: { x: 250, y: 50 }, 
    data: { agent: { id: '1', name: 'Master Planner', role: 'planner', model: 'claude-3-opus', status: 'idle' } } 
  },
  { 
    id: 'node-2', 
    type: 'agent', 
    position: { x: 50, y: 250 }, 
    data: { agent: { id: '2', name: 'UI Specialist', role: 'frontend', model: 'gpt-4o', status: 'working' } } 
  },
  { 
    id: 'node-3', 
    type: 'agent', 
    position: { x: 450, y: 250 }, 
    data: { agent: { id: '3', name: 'Data Architect', role: 'backend', model: 'gemini-1.5-pro', status: 'idle' } } 
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: 'node-1', target: 'node-2', animated: true, style: { stroke: '#8B5A2B', strokeWidth: 2 } },
  { id: 'e1-3', source: 'node-1', target: 'node-3', animated: true, style: { stroke: '#8B5A2B', strokeWidth: 2 } },
];

export const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#8B5A2B', strokeWidth: 2 } }, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background color="#dcd6cc" gap={30} size={1} />
        <Controls showInteractive={false} className="!bg-white !border-amber-900/20 !shadow-xl" />
      </ReactFlow>
      
      <div className="absolute top-6 left-6 z-10">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-amber-900/10 shadow-2xl">
          <h2 className="text-xl font-serif text-amber-900 font-bold mb-1">MADE Engine</h2>
          <p className="text-[10px] text-amber-900/60 uppercase font-bold tracking-widest">Multi-Agent Development Workspace</p>
        </div>
      </div>
    </div>
  );
};
