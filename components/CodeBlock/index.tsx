/**
 * CodeBlock.jsx
 */

import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface CodeBlockProps {
  value: string
  language?: string
  inline? : boolean
}

const CodeBlock: React.FC<CodeBlockProps> = (props): JSX.Element => {
  console.log(props)
  return (
    <SyntaxHighlighter
      language={props.language || "javascript"} 
      useInlineStyles={props.inline} 
      style={agate}
    >
      {props.value}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
