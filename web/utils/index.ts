import PostType from 'types/post';

const WORDS_PER_MIN = 220; // estimated # of words the average person can read per min

const IMAGE_READ_TIME = 12; // in seconds

const IMAGE_TAGS = ['img', 'Image'];

const buildWordArr = (blogPost: PostType) => {
  let str = '';
  blogPost.body.forEach((chunk) => {
    chunk.children?.forEach((child) => {
      str += child.text;
    });

    if (chunk.code) str += chunk.code;
  });
  return str.split(' ');
};

export const humanReadableEstimate = (blogPost: PostType) => {
  const wordArr = buildWordArr(blogPost);
  const mins = wordArr.length / WORDS_PER_MIN;

  if (mins < 1) return 'less than a minute';
  if (mins < 2) return '1 minute';
  return `${Math.ceil(mins)} minutes`;
};
