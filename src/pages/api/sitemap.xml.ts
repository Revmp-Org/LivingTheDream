import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://www.revampmarketing.net';

  const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blog',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
      .map((page) => {
        return `
                <url>
                    <loc>${baseUrl}${page}</loc>
                    <changefreq>monthly</changefreq>
                    <priority>0.8</priority>
                </url>`;
      })
      .join('')}
    </urlset>`;
  console.log(sitemap);
  res.setHeader('Content-Type', 'text/xml');
  res.send(sitemap);
}
