const vercelEnv = process.env.VERCEL_ENV ?? 'local';

export const isProd = vercelEnv === 'production';
export const isLocal = vercelEnv === 'local';
