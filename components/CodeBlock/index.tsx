/**
 * CodeBlock.jsx
 */

import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface CodeBlockProps {
  // children?: string
  language?: string
  inline? : boolean
}

const CodeBlock: React.FC<CodeBlockProps> = (props): JSX.Element => {
  return (
    <SyntaxHighlighter
      language={props.language || "javascript"} 
      useInlineStyles={props.inline} 
      style={agate}
    >
      {props.children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
