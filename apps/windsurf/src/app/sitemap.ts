import type { MCP } from '@directories/data/mcp'
import { getSections } from '@directories/data/rules'
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://windsurf.run'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all rules sections
  const sections = getSections()
  
  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/rules`,
      lastModified: new Date(),
      changeFrequency: 'daily', 
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/rules/popular`,
      lastModified: new Date(),
      changeFrequency: 'daily', 
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/learn`,
      lastModified: new Date(),
      changeFrequency: 'daily', 
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/mcp`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ]

  // Add routes for each rules section
  for (const section of sections) {
    for (const rule of section.rules) {
      routes.push({
        url: `${BASE_URL}/${rule.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  }

  // Add routes for each MCP integration
  const mcpRoutes = (await import('@directories/data/mcp')).default
  for (const mcp of mcpRoutes) {
    routes.push({
      url: `${BASE_URL}/mcp/${mcp.name.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  }

  return routes
}