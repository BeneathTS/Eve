import { useState, useEffect, useCallback } from 'react'
import { ReactFlow, Background, useNodesState, useEdgesState, applyEdgeChanges, applyNodeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { CodePreview } from './code-preview'

import { nodeTypes } from './nodes';

import { NodesList } from './nodes-list'
import'./app.css'

import './global.css'

function App() {
const [nodes, setNodes] = useState([])
const [edges, setEdges] = useState([])

	const onNodesChange = useCallback(
		(changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot))
	, [])

	const onEdgesChange = useCallback(
		(changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot))
	, [])

	const onConnect = useCallback(
		(params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot))
	, [])

  return (
	<div style={{ display: "flex"}}>
		<div className="app">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
				panOnScroll
				selectionOnDrag
				panOnDrag={false}
				panOnScrollSpeed={0.75}
			>
				{/* <NodesList /> */}
				<Background bgColor="#262626"/>
			</ReactFlow>
		</div>
		<CodePreview />
	</div>
  )
}

export default App
