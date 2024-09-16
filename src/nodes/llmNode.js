import React from 'react';
import { AbstractedNode } from './AbstractedNode';
import { Label } from '../components/UI';

export const LLMNode = ({ id, data }) => {
  return (
    <AbstractedNode
      id={id}
      type="LLM"
      inputs={['system', 'prompt']}
      outputs={['response']}
    >
      <div className="space-y-2">
        <Label htmlFor={`${id}-description`} className="text-gray-700 dark:text-gray-300">
          This is a LLM.
        </Label>
      </div>
    </AbstractedNode>
  );
};
