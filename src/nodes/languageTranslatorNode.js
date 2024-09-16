import React, { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';
import { Label, Select } from '../components/UI';

export const LanguageTranslatorNode = ({ id, data }) => {
  const [sourceLang, setSourceLang] = useState(data?.sourceLang || 'en');
  const [targetLang, setTargetLang] = useState(data?.targetLang || 'es');

  const handleSourceLangChange = (e) => {
    setSourceLang(e.target.value);
  };

  const handleTargetLangChange = (e) => {
    setTargetLang(e.target.value);
  };

  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' }
    // Add more language options as needed
  ];

  return (
    <AbstractedNode 
      id={id} 
      type="Language Translator" 
      inputs={['textToTranslate']}
      outputs={['translatedText']}
    >
      <div className="space-y-2">
        {/* From Language Selector */}
        <Label htmlFor={`${id}-sourceLang`} className="text-gray-700 dark:text-gray-300">
          From:
        </Label>
        <Select 
          id={`${id}-sourceLang`} 
          value={sourceLang} 
          onChange={handleSourceLangChange} 
          options={languageOptions} // Passing options array
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
        />

        {/* To Language Selector */}
        <Label htmlFor={`${id}-targetLang`} className="text-gray-700 dark:text-gray-300">
          To:
        </Label>
        <Select 
          id={`${id}-targetLang`} 
          value={targetLang} 
          onChange={handleTargetLangChange} 
          options={languageOptions} // Passing options array
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
        />
      </div>
    </AbstractedNode>
  );
};
