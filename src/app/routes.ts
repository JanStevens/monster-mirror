import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('./routes/home.tsx'),
  route('/scenarios/:id', './routes/scenario-detail.tsx'),
  route('/api/liveblocks-auth', './routes/liveblocks-auth.api.ts'),
] satisfies RouteConfig;
