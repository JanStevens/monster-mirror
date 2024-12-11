import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('./page.tsx'),
  route('/scenarios/:id', './scenarios/[id]/page.tsx'),
  route('/api/liveblocks-auth', './api/liveblocks-auth/route.ts'),
] satisfies RouteConfig;
