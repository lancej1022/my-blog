import { Typography } from '@material-ui/core';

import { CodeHighlight } from 'components/CodeHighlight';
import styles from './sanityComponentStyles.module.scss';

// list of components to pass into next-mdx-remote which will replace the interpreted MDX elements
export const sanityComponents = {
  // Render code blocks
  code: ({ children }) => (
    <>
      <CodeHighlight code={children} language="javascript" />
    </>
  ),
  pre: ({ children }) => <pre className={styles['code-wrapper']}>{children}</pre>,
  h1: ({ children }) => (
    <Typography
      className={`${styles['heading-margin']} ${styles['text-width-wrapper']} ${styles['text-margin']}`}
      variant="h4"
      component="h1"
      style={{ fontWeight: 500 }}
    >
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography
      className={`${styles['heading-margin']} ${styles['text-width-wrapper']} ${styles['text-margin']}`}
      variant="h5"
      component="h2"
      style={{ fontWeight: 500 }}
    >
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography
      className={`${styles['heading-margin']} ${styles['text-width-wrapper']} ${styles['text-margin']}`}
      variant="h6"
      component="h3"
      style={{ fontWeight: 500 }}
    >
      {children}
    </Typography>
  ),
  h4: ({ children }) => (
    <Typography
      className={`${styles['heading-margin']} ${styles['text-width-wrapper']} ${styles['text-margin']}`}
      variant="h6"
      component="h4"
      style={{ fontWeight: 500 }}
    >
      {children}
    </Typography>
  ),
  h5: ({ children }) => (
    <Typography
      className={`${styles['heading-margin']} ${styles['text-width-wrapper']} ${styles['text-margin']}`}
      variant="h6"
      component="h5"
      style={{ fontWeight: 500 }}
    >
      {children}
    </Typography>
  ),
  h6: ({ children }) => (
    <Typography
      className={`${styles['heading-margin']} ${styles['text-width-wrapper']} ${styles['text-margin']}`}
      variant="h6"
      component="h6"
      style={{ fontWeight: 500 }}
    >
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography
      className={`${styles['body-text']} ${styles['text-width-wrapper']} ${styles['text-margin']}`}
      variant="body1"
      component="p"
    >
      {children}
    </Typography>
  ),
};
