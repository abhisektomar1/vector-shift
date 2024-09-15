import React, { useState } from 'react';
import { AbstractedNode } from './AbstractedNode';

export const LanguageTranslatorNode = ({ id, data }) => {
  const [sourceLang, setSourceLang] = useState(data.sourceLang || 'en');
  const [targetLang, setTargetLang] = useState(data.targetLang || 'es');

  return (
    <AbstractedNode 
      id={id} 
      type="Language Translator" 
      inputs={['textToTranslate']}
      outputs={['translatedText']}
    >
      <div>
        <label>
          From:
          <input 
            type="text" 
            value={sourceLang} 
            onChange={(e) => setSourceLang(e.target.value)} 
          />
        </label>
        <label>
          To:
          <input 
            type="text" 
            value={targetLang} 
            onChange={(e) => setTargetLang(e.target.value)} 
          />
        </label>
      </div>
    </AbstractedNode>
  );
};