import Author from './author';

type PostType = {
  _id: string;
  author: Author;
  body: {
    _key: string;
    _type: string;
    children: { _key: string; _type: string; marks: never[]; text: string }[];
    markDefs: never[];
    style: string;
  }[];
  slug: string;
  title: string;
  date: string;
  coverImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  excerpt?: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
