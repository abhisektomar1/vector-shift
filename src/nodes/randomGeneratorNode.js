import React, { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';
import { Input, Label } from '../components/UI';

export const RandomGeneratorNode = ({ id, data }) => {
  const [min, setMin] = useState(data.min || 0);
  const [max, setMax] = useState(data.max || 100);

  return (
    <AbstractedNode 
      id={id} 
      type="Random Generator" 
      outputs={['randomNumber']}
    >
      <div>
        <Label>
          Min:
          <Input
            type="number" 
            value={min} 
            onChange={(e) => setMin(Number(e.target.value))} 
          />
        </Label>
        <Label>
          Max:
          <Input 
            type="number" 
            value={max} 
            onChange={(e) => setMax(Number(e.target.value))} 
          />
        </Label>
      </div>
    </AbstractedNode>
  );
};