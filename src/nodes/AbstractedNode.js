import React from 'react';
import { Handle, Position } from 'reactflow';

export const AbstractedNode = ({ id, type, data, inputs, outputs, children }) => {
  return (
    <div className="w-64 shadow-lg bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700 rounded-lg">
      <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-t-lg">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">{type}</h3>
      </div>
      
      <div className="p-4">
        {children}

        {inputs && inputs.map((input, index) => (
          <Handle
            key={`input-${index}`}
            type="target"
            position={Position.Left}
            id={`${id}-${input}`}
            className="w-3 h-3 bg-blue-500"
            style={{ top: `${(index + 1) * 100 / (inputs.length + 1)}%` }}
          />
        ))}

        {outputs && outputs.map((output, index) => (
          <Handle
            key={`output-${index}`}
            type="source"
            position={Position.Right}
            id={`${id}-${output}`}
            className="w-3 h-3 bg-green-500"
            style={{ top: `${(index + 1) * 100 / (outputs.length + 1)}%` }}
          />
        ))}
      </div>
    </div>
  );
};
