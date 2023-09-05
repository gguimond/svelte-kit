import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { getContext } from 'svelte';

export const load: PageServerLoad = async (event) => {
  return event.locals.user;
};

export const actions = {
  login: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email')
    if (!data.get('email') || !data.get('password')) {
			return fail(400, { email, missing: true });
		}
    return { success: true };
  },
} satisfies Actions;