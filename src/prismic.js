import * as prismic from '@prismicio/client';

export const repositoryName = 'chemsetu';

export const client = prismic.createClient(repositoryName, {
  routes: [
    {
      type: 'compound',
      path: '/compounds/:uid',
    },
  ],
});
