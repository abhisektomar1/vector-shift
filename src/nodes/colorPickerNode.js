import React, { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';
import { Input, Label } from '../components/UI';


export const ColorPickerNode = ({ id, data }) => {
  const [color, setColor] = useState(data?.color || '#000000');

  return (
    <AbstractedNode id={id} type="Color Picker" outputs={['selectedColor']}>
      <div className="space-y-2">
        <Label htmlFor={`${id}-color-picker`} className="text-gray-700 dark:text-gray-300">
          Select Color:
        </Label>
        
        <Input
          id={`${id}-color-picker`}
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 p-0 border border-gray-300 dark:border-gray-600 rounded-md"
        />

        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {color}
        </span>
      </div>
    </AbstractedNode>
  );
};
