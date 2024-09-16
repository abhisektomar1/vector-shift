import React, { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';
import { Input, Label } from '../components/UI';


export const DateTimeNode = ({ id, data }) => {
  const [format, setFormat] = useState(data?.format || 'YYYY-MM-DD HH:mm:ss');

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
  };

  return (
    <AbstractedNode id={id} type="Date/Time" outputs={['currentDateTime']}>
      <div className="space-y-2">
        <Label htmlFor={`${id}-format`} className="text-gray-700 dark:text-gray-300">
          Date/Time Format:
        </Label>
        
        <Input
          id={`${id}-format`}
          type="text"
          value={format}
          onChange={handleFormatChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
        />
      </div>
    </AbstractedNode>
  );
};
