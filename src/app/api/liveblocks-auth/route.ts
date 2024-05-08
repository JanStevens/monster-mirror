import { Liveblocks } from '@liveblocks/node';
import { verifySession } from 'app/lib/session';

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_API_SECRET ?? '',
});

export async function POST(request: Request) {
  const { isAuth, userId } = await verifySession();
  if (!isAuth) {
    return Response.json({
      error: 'forbidden',
      reason: 'not authenticated',
    });
  }

  const { room } = await request.json();
  const scenarioId = (room as string).split(':')[2];

  // try to create a room
  try {
    await liveblocks.createRoom(room, {
      defaultAccesses: [],
      metadata: {
        description: `Monster Mirror scenario ${scenarioId} room`,
      },
    });
  } catch {
    console.info('Room already exists');
    await liveblocks.updateRoom(room, {
      defaultAccesses: [],
      metadata: {
        description: `Monster Mirror scenario ${scenarioId} room`,
      },
    });
  }

  const session = liveblocks.prepareSession(userId);
  session.allow(`mm:scenarios:*`, session.FULL_ACCESS);

  const { body, status } = await session.authorize();

  return new Response(body, { status });
}
