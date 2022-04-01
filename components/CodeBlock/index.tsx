// @flow
/**
 * CodeBlock.jsx
 */
 import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
 import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
 import tomorrow from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow';
 
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
      style={tomorrow}
    >
      {props.children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
