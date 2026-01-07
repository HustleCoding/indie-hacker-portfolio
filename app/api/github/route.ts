import { type NextRequest, NextResponse } from "next/server"

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql"

const query = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const username = searchParams.get("username")

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 })
  }

  const token = process.env.GITHUB_TOKEN

  if (!token) {
    return NextResponse.json({ error: "GitHub token not configured" }, { status: 500 })
  }

  try {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    })

    const data = await response.json()

    if (data.errors) {
      return NextResponse.json({ error: data.errors[0].message }, { status: 400 })
    }

    const calendar = data.data.user.contributionsCollection.contributionCalendar

    const formattedData = {
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks.map(
        (week: {
          contributionDays: Array<{ date: string; contributionCount: number; contributionLevel: string }>
        }) => ({
          days: week.contributionDays.map((day) => ({
            date: day.date,
            count: day.contributionCount,
            level: getLevelNumber(day.contributionLevel),
          })),
        }),
      ),
    }

    return NextResponse.json(formattedData)
  } catch (error) {
    console.error("GitHub API error:", error)
    return NextResponse.json({ error: "Failed to fetch contributions" }, { status: 500 })
  }
}

function getLevelNumber(level: string): number {
  switch (level) {
    case "NONE":
      return 0
    case "FIRST_QUARTILE":
      return 1
    case "SECOND_QUARTILE":
      return 2
    case "THIRD_QUARTILE":
      return 3
    case "FOURTH_QUARTILE":
      return 4
    default:
      return 0
  }
}
