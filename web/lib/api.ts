import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from './sanity';

// https://www.sanity.io/docs/image-url
const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource): ImageUrlBuilder =>
  builder.image(source);

const postFields = `
  _id,
  name,
  title,
  content,
  'date': publishedAt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;
// old version that used 'body'
// const postFields = `
//   _id,
//   name,
//   title,
//   'body': body,
//   'date': publishedAt,
//   excerpt,
//   'slug': slug.current,
//   'coverImage': mainImage,
//   'author': author->{name, 'picture': image.asset->url},
// `;

export async function getPostBySlug(slug: string = '', fields: string[] = []) {
  const results = await client.fetch(
    `*[_type == "post" && slug.current == $slug] {
    ${postFields}
    body
  }`,
    {
      slug, // optional query params that gets interpolated by '$' sign
    }
  );

  if (!results) return { error: 'no results' };

  // when previewing unpbulished data, it will be the 2nd item in the response. when previewing published data, you need the 1st item
  // if (preview === true) return results[1] ? results[1] : results[0];

  return results[0];
}

export async function getAllPosts(fields: string[] = []) {
  const results = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {${postFields}}`
  );

  // console.log(results);

  return results;
}
