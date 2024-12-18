const thumbnails = import.meta.glob('./thumbnails/*.png', {
  query: { format: 'webp', h: '100', scrset: true },
  eager: true,
  import: 'default',
});

export const thumbnailFor = (name: string): string => {
  return thumbnails[`./thumbnails/${name}`] as string;
};
