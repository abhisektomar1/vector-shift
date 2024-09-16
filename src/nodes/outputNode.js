import { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';
import { Label, Input, Select } from '../components/UI';  

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const outputTypeOptions = [
    { value: 'Text', label: 'Text' },
    { value: 'File', label: 'Image' }
  ];

  return (
    <AbstractedNode
      id={id}
      type="Output"
      inputs={['value']}
      outputs={[]}
    >
      <div className="space-y-2">
        <Label htmlFor={`${id}-name`} className="text-gray-700 dark:text-gray-300">
          Name:
        </Label>
        <Input 
          id={`${id}-name`}
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
        />

        <Label htmlFor={`${id}-type`} className="text-gray-700 dark:text-gray-300">
          Type:
        </Label>
        <Select 
          id={`${id}-type`} 
          value={outputType} 
          onChange={handleTypeChange} 
          options={outputTypeOptions} 
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
        />
      </div>
    </AbstractedNode>
  );
};
