interface FeedVideo {
  thumbnail: string;
  channel: string;
  title: string;
  views: number;
  createdAt: Date;
}

export const feedVideos: FeedVideo[] = [
  {
    thumbnail: 'https://i.ytimg.com/vi/yfXVPKnaZ9A/hqdefault.jpg',
    channel: 'Bad Normals',
    title: '100 BEST Infinite Renders Compilation | Road to Infinity',
    views: 3700,
    createdAt: new Date('2023-01-01')
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/CQ9VmCN2EsE/hqdefault.jpg',
    channel: 'Blender Guru',
    title: 'How to Render Millions of Objects in Blender',
    views: 15000000,
    createdAt: new Date('2020-7-01')
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/NgayZAuTgwM/hqdefault.jpg',
    channel: 'Web Dev Simplified',
    title: 'Learn Next.js With This One Project',
    views: 104000,
    createdAt: new Date('2023-05-01')
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/Dkx5ydvtpCA/hqdefault.jpg',
    channel: 'Beyond Fireship',
    title: '10 Rendering Patterns for Web Apps',
    views: 240000,
    createdAt: new Date('2023-02-01')
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/lHZwlzOUOZ4/hqdefault.jpg',
    channel: 'Fireship',
    title: 'Tailwind CSS is the worst...',
    views: 300,
    createdAt: new Date('2023-04-01')
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/FUGqzE6Je5c/hqdefault.jpg',
    channel: 'Unreal Sensei',
    title: 'Why Unreal Engine 5.1 is a Huge Deal',
    views: 5900000,
    createdAt: new Date('2022-12-04')
  },
];