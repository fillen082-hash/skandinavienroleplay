import { createFileRoute } from '@tanstack/react-router'
import { getDiscordInfo, getServerStats, getServerStatus } from '@/server/status.functions'
import { seo } from '@/lib/seo'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Features } from '@/components/sections/Features'
import { Stats } from '@/components/sections/Stats'
import { ApplicationsTeaser } from '@/components/sections/ApplicationsTeaser'
import { Staff } from '@/components/sections/Staff'
import { DiscordCta } from '@/components/sections/DiscordCta'

export const Route = createFileRoute('/')({
  loader: async () => {
    const [status, stats, discord] = await Promise.all([getServerStatus(), getServerStats(), getDiscordInfo()])
    return { status, stats, discord }
  },
  head: () => seo({}),
  component: Home,
})

function Home() {
  const { status, stats, discord } = Route.useLoaderData()
  return (
    <>
      <Hero status={status} />
      <Stats stats={stats} />
      <About />
      <Features />
      <ApplicationsTeaser />
      <Staff />
      <DiscordCta discord={discord} />
    </>
  )
}
