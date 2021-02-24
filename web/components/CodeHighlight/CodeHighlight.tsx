import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

import styles from './CodeHighlight.module.scss';

type CodeHighlightProps = {
  code: string;
  language: Language;
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
          <pre className={`${className} ${styles['code-container']}`} style={style}>
            {tokens.map((line, i) => {
              // handles bug where an extra empty line was being added to the end of every code block
              if (line.length === 1 && line[0].empty === true && i === tokens.length - 1)
                return;
              // see https://github.com/FormidableLabs/prism-react-renderer#prop-getters
              return (
                <div {...getLineProps({ line, key: i })} className={styles['line']}>
                  <div className={styles['line-number']}>{i + 1}</div>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </>
  );
};
