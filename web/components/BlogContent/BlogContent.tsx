import BlockContent from '@sanity/block-content-to-react';
import { Language } from 'prism-react-renderer';
import { Typography, Container, makeStyles } from '@material-ui/core';

import { CodeHighlight } from 'components/CodeHighlight';
import { urlFor } from 'lib/api';
import styles from './BlogContent.module.scss';

const useStyles = makeStyles({
  headingMargin: {
    marginBottom: '1.8rem',
    marginTop: '.4rem',
  },
  textMargin: {
    marginBottom: '1.4rem',
  },
  bodyText: {
    fontSize: '1.2rem',
  },
});

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
      <>
        <CodeHighlight code={code} language={language} />
        <br />
      </>
    ),
    // Render text blocks
    block: (block) => {
      const style = block.node.style || 'normal';
      const classes = useStyles();
      if (/^h\d$/.test(style)) {
        return (
          <Typography
            align="left"
            className={`${styles['text-width-wrapper']} ${classes.headingMargin}`}
            variant={`h${Number(style[1]) + 1}`}
            component={style}
            gutterBottom
          >
            {block.children}
          </Typography>
        );
      }
      if (style === 'normal' && block.children != '') {
        return (
          <>
            <Typography
              className={`${styles['text-width-wrapper']} ${classes.textMargin} ${classes.bodyText}`}
              variant="body1"
            >
              {block.children}
            </Typography>
          </>
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
