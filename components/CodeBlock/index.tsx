// @flow
/**
 * CodeBlock.jsx
 */

 import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
 import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
 import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
 
 SyntaxHighlighter.registerLanguage('javascript', js);

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
      style={docco}
    >
      {props.children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
