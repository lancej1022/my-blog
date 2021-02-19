import sanityClient from '@sanity/client';

const options = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME || '',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  useCdn: process.env.NODE_ENV === 'production', // use the cdn when running prod build, otherwise fetch uncached data when running locally
};

export default sanityClient(options);
