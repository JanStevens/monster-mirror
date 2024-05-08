'use server';

import { createSession } from 'app/lib/session';
import { randomUUID } from 'node:crypto';

// Ensures nobody can just access the app
const PASSPHRASE = process.env.SECRET_PASSPHRASE ?? '';

export const connectRoom = async (
  _prevState: unknown,
  formData: FormData | undefined,
) => {
  const userId = formData?.get('userId')?.toString() || randomUUID();
  const userName = formData?.get('userName')?.toString();
  const password = formData?.get('password');

  if (!password || typeof password !== 'string' || !userId || !userName) {
    return { errors: 'unauthorized' };
  }

  if (password?.toLowerCase() !== PASSPHRASE.toLowerCase()) {
    return { errors: 'unauthorized' };
  } else {
    await createSession(userId, userName);
    return { success: true, userId, userName };
  }
};
