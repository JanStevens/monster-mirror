import { jwtVerify, SignJWT } from 'jose';
import { createCookie } from 'react-router';

import { isProd } from 'utils/env';

const secretKey = process.env.SESSION_SECRET ?? '';
const encodedKey = new TextEncoder().encode(secretKey);

export type SessionPayload = {
  expiresAt: Date;
  userId: string;
  userName: string;
};

const sessionCookie = createCookie('session', {
  httpOnly: true,
  secure: isProd,
  sameSite: 'lax',
  path: '/',
});

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify<SessionPayload>(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch {
    console.error('Failed to verify session');
  }
}

export async function createSession(userId: string, userName: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, userName, expiresAt });
  return sessionCookie.serialize(session, { expires: expiresAt });
}

// export async function updateSession() {
//   const session = sessionCookie.parse()?.value;
//   const payload = await decrypt(session);

//   if (!session || !payload) {
//     return null;
//   }

//   const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
//   cookies().set('session', session, {
//     httpOnly: true,
//     secure: isProd,
//     expires: expires,
//     sameSite: 'lax',
//     path: '/',
//   });
// }

type Authenticated = {
  isAuth: true;
  userId: string;
  userName: string;
};

type Unauthenticated = {
  isAuth: false;
  userId: undefined;
  userName: undefined;
};

export const verifySession = async (
  cookieHeader: string | null,
): Promise<Authenticated | Unauthenticated> => {
  const cookie = await sessionCookie.parse(cookieHeader);
  const session = await decrypt(cookie);

  if (!session?.userId) {
    return { isAuth: false, userId: undefined, userName: undefined };
  }

  return {
    isAuth: true,
    userId: session.userId,
    userName: session.userName,
  };
};
