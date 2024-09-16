import React, { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';
import { Label, Select } from '../components/UI';

export const MathOperationNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || '+');

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const operationOptions = [
    { value: '+', label: 'Addition (+)' },
    { value: '-', label: 'Subtraction (-)' },
    { value: '*', label: 'Multiplication (*)' },
    { value: '/', label: 'Division (/)' }
  ];

  return (
    <AbstractedNode 
      id={id} 
      type="Math Operation" 
      inputs={['input1', 'input2']} 
      outputs={['result']}
    >
      <div className="space-y-2">
        <Label htmlFor={`${id}-operation`} className="text-gray-700 dark:text-gray-300">
          Operation:
        </Label>
        <Select 
          id={`${id}-operation`} 
          value={operation} 
          onChange={handleOperationChange} 
          options={operationOptions}  
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
        />
      </div>
    </AbstractedNode>
  );
};
