"use client"

import { useEffect, useState } from "react"

interface ContributionDay {
  date: string
  count: number
  level: number
}

interface ContributionWeek {
  days: ContributionDay[]
}

interface ContributionData {
  totalContributions: number
  weeks: ContributionWeek[]
}

export function GithubContributions({ username }: { username: string }) {
  const [data, setData] = useState<ContributionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchContributions() {
      try {
        const response = await fetch(`/api/github?username=${username}`)
        if (!response.ok) {
          throw new Error("Failed to fetch contributions")
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }
    fetchContributions()
  }, [username])

  if (loading) {
    return (
      <div className="border border-foreground p-4 sm:p-6">
        <p className="font-mono text-xs sm:text-sm text-muted-foreground">Loading contributions...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="border border-foreground p-4 sm:p-6">
        <p className="font-mono text-xs sm:text-sm text-muted-foreground">
          Could not load contributions. Add GITHUB_TOKEN to environment variables.
        </p>
      </div>
    )
  }

  if (!data) return null

  const getLevelClass = (level: number) => {
    switch (level) {
      case 0:
        return "bg-muted"
      case 1:
        return "bg-foreground/20"
      case 2:
        return "bg-foreground/40"
      case 3:
        return "bg-foreground/60"
      case 4:
        return "bg-foreground"
      default:
        return "bg-muted"
    }
  }

  // Take the last 30 weeks for display
  const recentWeeks = data.weeks.slice(-30)

  return (
    <div className="border border-foreground p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4">
        <p className="font-mono text-xs sm:text-sm">
          <span className="font-bold">{data.totalContributions.toLocaleString()}</span>{" "}
          <span className="text-muted-foreground">contributions in the last year</span>
        </p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs underline underline-offset-4 hover:text-muted-foreground"
        >
          @{username}
        </a>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-[2px] sm:gap-1">
          {recentWeeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[2px] sm:gap-1">
              {week.days.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] ${getLevelClass(day.level)}`}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-1 sm:gap-2 mt-4">
        <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">Less</span>
        <div className="flex gap-[2px] sm:gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] ${getLevelClass(level)}`} />
          ))}
        </div>
        <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">More</span>
      </div>
    </div>
  )
}
