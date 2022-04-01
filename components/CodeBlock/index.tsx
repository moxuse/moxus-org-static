// @flow
/**
 * CodeBlock.jsx
 */

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  // children?: string
  language?: string;
  inline?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = (props): JSX.Element => {
  return (
    <SyntaxHighlighter
      language={props.language || "javascript"} 
      useInlineStyles={props.inline} 
      style={tomorrow}
    >
      {props.children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
