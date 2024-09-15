import React, { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';

export const DateTimeNode = ({ id, data }) => {
  const [format, setFormat] = useState(data.format || 'YYYY-MM-DD HH:mm:ss');

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
  };

  return (
    <AbstractedNode
      id={id} 
      type="Date/Time" 
      outputs={['currentDateTime']}
    >
      <div>
        <label>
          Format:
          <input 
            type="text" 
            value={format} 
            onChange={handleFormatChange} 
          />
        </label>
      </div>
    </AbstractedNode>
  );
};