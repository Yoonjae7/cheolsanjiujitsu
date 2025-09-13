import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cheolsanjiujitsu.vercel.app'
  const currentDate = new Date().toISOString().split('T')[0]

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
