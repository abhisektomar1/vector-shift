// BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, type, data, inputs, outputs, children }) => {
  return (
    <div style={{width: 200, minHeight: 80, border: '1px solid black', padding: '10px'}}>
      {inputs && inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input}`}
          style={{top: `${(index + 1) * 100 / (inputs.length + 1)}%`}}
        />
      ))}
      <div>
        <span>{type}</span>
      </div>
      {children}
      {outputs && outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output}`}
          style={{top: `${(index + 1) * 100 / (outputs.length + 1)}%`}}
        />
      ))}
    </div>
  );
};