import React from 'react';
import { useStore } from './store';  // Importing the Zustand store

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);  // Accessing nodes from store
  const edges = useStore((state) => state.edges);  // Accessing edges from store

  const handleSubmit = async () => {
    
    const pipelineData = {
      nodes: nodes.map(node => ({ id: node.id })),
      edges: edges.map(edge => ({ source: edge.source, target: edge.target }))
    };
    console.log(pipelineData,
        "hii"
    );

    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pipelineData)
      });

      const result = await response.json();
      alert(`Number of nodes: ${result.num_nodes}, Number of edges: ${result.num_edges}, Is DAG: ${result.is_dag}`);
    } catch (error) {
      console.error('Error submitting pipeline:', error);
      alert('Failed to submit pipeline. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button 
        className={`cursor-grab bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded shadow-md hover:shadow-lg transition-all duration-300`}
      type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};
