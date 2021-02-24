import PostType from 'types/post';

const WORDS_PER_MIN = 220; // estimated # of words the average person can read per min

const IMAGE_READ_TIME = 12; // in seconds

const IMAGE_TAGS = ['img', 'Image'];

export const humanReadableEstimate = (blogPost: PostType) => {
  const wordArr = blogPost.content.split(' ');
  const mins = wordArr.length / WORDS_PER_MIN;

  if (mins < 1) return 'less than a minute';
  if (mins < 2) return '1 minute';
  return `${Math.ceil(mins)} minutes`;
};
