import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return{
    myvar: 'toto'
  }
}

export const prerender = true;
export const ssr = true;
