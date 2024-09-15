// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-4 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex flex-wrap gap-4">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='mathOperation' label='Math Operation' />
                <DraggableNode type='dateTime' label='Date/Time' />
                <DraggableNode type='randomGenerator' label='Random Generator' />
                <DraggableNode type='colorPicker' label='Color Picker' />
                <DraggableNode type='languageTranslator' label='Language Translator' />
            </div>
        </div>
    );
};
