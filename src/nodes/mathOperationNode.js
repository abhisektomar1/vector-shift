// mathOperationNode.js
import React, { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';

export const MathOperationNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data.operation || '+');

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <AbstractedNode 
      id={id} 
      type="Math Operation" 
      inputs={['input1', 'input2']} 
      outputs={['result']}
    >
      <div>
        <label>
          Operation:
          <select value={operation} onChange={handleOperationChange}>
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
          </select>
        </label>
      </div>
    </AbstractedNode>
  );
};