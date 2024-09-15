import React, { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';

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
        <label>
          Min:
          <input 
            type="number" 
            value={min} 
            onChange={(e) => setMin(Number(e.target.value))} 
          />
        </label>
        <label>
          Max:
          <input 
            type="number" 
            value={max} 
            onChange={(e) => setMax(Number(e.target.value))} 
          />
        </label>
      </div>
    </AbstractedNode>
  );
};