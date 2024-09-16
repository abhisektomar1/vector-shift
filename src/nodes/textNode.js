import React, { useState, useEffect, useRef } from 'react';
import { AbstractedNode } from './AbstractedNode';
import { Label } from '../components/UI';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textRef = useRef(null);

  useEffect(() => {
    const extractedVariables = text.match(/{{(.*?)}}/g) || [];
    const cleanedVariables = extractedVariables.map(v => v.replace(/{{|}}/g, '').trim());
    setVariables([...new Set(cleanedVariables)]);
  }, [text]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <AbstractedNode
      id={id} 
      type="Text"
      inputs={variables}
      outputs={['output']}
    >
      <div className="space-y-2">
        <Label htmlFor={`${id}-text`}>Text:</Label>
        <textarea
          ref={textRef}
          id={`${id}-text`}
          value={text}
          onChange={handleTextChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300 resize-none overflow-hidden"
          style={{ 
            minHeight: '60px',
            height: 'auto',
          }}
        />
      </div>
    </AbstractedNode>
  );
};