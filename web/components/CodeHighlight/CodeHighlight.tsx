import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

// import { createRef, useEffect } from 'react';

type CodeHighlightProps = {
  code: string;
  language: Language;
  // plugins?: string[];
};

// See https://github.com/FormidableLabs/prism-react-renderer
export const CodeHighlight: React.FC<CodeHighlightProps> = ({ code, language }) => {
  return (
    <>
      <Highlight {...defaultProps} theme={theme} code={code} language={language}>
        {/* Here we are destructuring off a 'highlight' object, which is a function passed as `children` thanks to defaultProps from the library
        token: This is a doubly nested array of tokens. The outer array is for separate lines, the inner for tokens, so the actual content.
        className: This is the class you should apply to your wrapping element, typically a <pre>

        */}
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              // see https://github.com/FormidableLabs/prism-react-renderer#prop-getters
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
};

// export const CodeHighlight: React.FC<CodeHighlightProps> = ({
//   code,
//   children,
//   language,
//   plugins,
// }) => {
//   const codeRef = createRef();

//   useEffect(() => {
//     // Use setTimeout to push onto callback queue so it runs after the DOM is updated
//     setTimeout(() => Prism.highlightAll(), 0);
//   }, [codeRef]);

//   const highlight = () => {
//     if (codeRef && codeRef.current) Prism.highlightElement(codeRef);
//   };

//   return (
//     <pre className={!plugins ? '' : plugins.join(' ')}>
//       <code ref={codeRef} className={`language-${language}`}>
//         {code.trim()}
//       </code>
//     </pre>
//   );
// };
