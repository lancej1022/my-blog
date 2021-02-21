import BlockContent from '@sanity/block-content-to-react';
import { Language } from 'prism-react-renderer';
import { Typography, Container } from '@material-ui/core';

import { CodeHighlight } from 'components/CodeHighlight';
import { urlFor } from 'lib/api';
import styles from './BlogContent.module.scss';

type CodeProps = {
  node: {
    language: Language;
    filename: string;
    code: string;
  };
};

type ImageProps = {
  node: {
    asset: string;
    alt: string;
    position: string;
  };
};

const serializers = {
  types: {
    // Render code blocks
    code: ({ node: { language, filename, code } }: CodeProps) => (
      <div className={styles['code-width-wrapper']}>
        <CodeHighlight code={code} language={language} />
        <br />
      </div>
    ),
    // Render text blocks
    block: (block) => {
      // console.log(block);
      const style = block.node.style || 'normal';
      if (/^h\d$/.test(style)) {
        return (
          <div className={styles['text-container']}>
            <Typography
              align="left"
              variant={`h${Number(style[1]) + 1}`}
              component={style}
              gutterBottom
            >
              {block.children}
            </Typography>
          </div>
        );
      }
      if (style === 'normal' && block.children != '') {
        return (
          <div className={styles['text-container']}>
            <Typography variant="body1">{block.children}</Typography>
            <br />
          </div>
        );
      }
      return null;
    },
    // render images
    image: ({ node: { asset, alt, position = 'center' } }: ImageProps) => (
      <div className={`blog-image blog-image-${position}`}>
        <img alt={alt} src={urlFor(asset).height(300).fit('max').url() || ''} />
        <span className="image-alt">{alt}</span>
      </div>
    ),
  },
};

type ContentProp = {
  _key: string;
  _type?: string;
  code?: string;
  filename?: string;
};

// TODO : figure out how to properly type `content`
export const BlogContent = ({ content }: any): JSX.Element => {
  // console.log(content);
  return <BlockContent blocks={content} serializers={serializers} />;
};
