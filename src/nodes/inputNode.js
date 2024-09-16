import React, { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';
import { Input, Label, Select } from '../components/UI';


export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <AbstractedNode id={id} type="Input" outputs={['value']}>
      <div className="mb-4">
        <Label htmlFor="name">Name:</Label>
        <Input
          id="name"
          value={currName}
          onChange={handleNameChange}
          placeholder="Enter input name"
        />
      </div>
      <div>
        <Label htmlFor="type">Type:</Label>
        <Select
          id="type"
          value={inputType}
          onChange={handleTypeChange}
          options={[
            { label: 'Text', value: 'Text' },
            { label: 'File', value: 'File' }
          ]}
        />
      </div>
    </AbstractedNode>
  );
};
