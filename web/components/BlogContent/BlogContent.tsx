import BlockContent from '@sanity/block-content-to-react';
import { Language } from 'prism-react-renderer';

import { CodeHighlight } from 'components/CodeHighlight';
import { urlFor } from 'lib/api';
import { Typography } from '@material-ui/core';

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
    code: ({ node: { language, filename, code } }: CodeProps) => (
      <CodeHighlight code={code} language={language}>
        {/* <div className="code-filename">{filename}</div>
        {code} */}
      </CodeHighlight>
    ),
    span: ({ node: { text } }) => (
      <>
        <Typography variant="body1">{text}</Typography>
      </>
    ),
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
  console.log(content);
  return <BlockContent blocks={content} serializers={serializers} />;
};
