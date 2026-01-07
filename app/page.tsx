import { StatusBadge } from "@/components/status-badge"
import { ShippingLog } from "@/components/shipping-log"
import { GithubContributions } from "@/components/github-contributions"
import { AgentFooter } from "@/components/agent-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-[800px] px-4 sm:px-6 py-8 sm:py-16">
        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <h1 className="font-mono text-3xl sm:text-4xl font-bold tracking-tight">Florin</h1>
            <StatusBadge />
          </div>
          <p className="font-mono text-base sm:text-lg text-muted-foreground">
            Product Engineer. Shipping 12 projects in 2026.
          </p>
        </header>

        {/* Mission */}
        <section className="mb-8 sm:mb-12">
          <p className="font-mono text-sm sm:text-base leading-relaxed">
            High-velocity builder focused on AI, SaaS infrastructure, and Productivity tools. Based in Iasi, Romania.
            Open for high-impact collaborations and indie-hacking ventures.
          </p>
        </section>

        {/* Shipping Log */}
        <section className="mb-8 sm:mb-12">
          <h2 className="font-mono text-lg sm:text-xl font-bold mb-4 sm:mb-6 uppercase tracking-wide">Shipping Log</h2>
          <ShippingLog />
        </section>

        {/* GitHub Contributions */}
        <section className="mb-8 sm:mb-12">
          <h2 className="font-mono text-lg sm:text-xl font-bold mb-4 sm:mb-6 uppercase tracking-wide">
            GitHub Activity
          </h2>
          <GithubContributions username="HustleCoding" />
        </section>

        {/* Technical Toolkit */}
        <section className="mb-8 sm:mb-12">
          <h2 className="font-mono text-lg sm:text-xl font-bold mb-4 uppercase tracking-wide">Technical Toolkit</h2>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground">
            React, Next.js, TypeScript, Tailwind CSS, Supabase, PostgreSQL, OpenAI API, Codex, Claude Code, Cursor, V0
          </p>
        </section>

        {/* Agent Footer */}
        <AgentFooter />
      </article>
    </main>
  )
}
