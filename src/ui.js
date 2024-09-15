// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";
import { MathOperationNode } from "./nodes/mathOperationNode";
import "reactflow/dist/style.css";
import { DateTimeNode } from "./nodes/dateTimeNode";
import { RandomGeneratorNode } from "./nodes/randomGeneratorNode";
import { ColorPickerNode } from "./nodes/colorPickerNode";
import { LanguageTranslatorNode } from "./nodes/languageTranslatorNode";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  mathOperation: MathOperationNode,
  dateTime: DateTimeNode,
  randomGenerator: RandomGeneratorNode,
  colorPicker: ColorPickerNode,
  languageTranslator: LanguageTranslatorNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = {
      id: nodeID,
      nodeType: `${type}`,
    };
    // eslint-disable-next-line default-case
    switch (type) {
      case "customInput":
        nodeData.inputName = `input_${nodeID}`;
        nodeData.inputType = "Text";
        break;
      case "customOutput":
        nodeData.outputName = `output_${nodeID}`;
        nodeData.outputType = "Text";
        break;
      case "mathOperation":
        nodeData.operation = "+";
        break;
      case "dateTime":
        nodeData.format = "YYYY-MM-DD HH:mm:ss";
        break;
      case "randomGenerator":
        nodeData.min = 0;
        nodeData.max = 100;
        break;
      case "colorPicker":
        nodeData.color = "#000000";
        break;
      case "languageTranslator":
        nodeData.sourceLang = "en";
        nodeData.targetLang = "es";
        break;
    }

    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;

        // check if the dropped element is valid
        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <>
      <div ref={reactFlowWrapper} style={{ width: "100wv", height: "70vh" }} className="h-screen bg-gray-100 dark:bg-gray-900">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
          className="bg-white dark:bg-gray-800"
        >
          <Background color="#aaa" gap={gridSize} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </>
  );
};
