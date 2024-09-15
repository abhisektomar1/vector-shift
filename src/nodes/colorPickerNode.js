import React, { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';

export const ColorPickerNode = ({ id, data }) => {
  const [color, setColor] = useState(data.color || '#000000');

  return (
    <AbstractedNode 
      id={id} 
      type="Color Picker" 
      outputs={['selectedColor']}
    >
      <div>
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
        />
        <span>{color}</span>
      </div>
    </AbstractedNode>
  );
};