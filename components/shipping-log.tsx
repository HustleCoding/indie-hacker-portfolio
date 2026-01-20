import Link from "next/link"

const projects = [
  {
    name: "Time Tracker",
    url: "https://github.com/HustleCoding/time-tracker",
    description: "Local-first desktop time tracking (Tauri + React)",
    status: "Open Source",
    year: "2025",
  },
  {
    name: "Am I Raining",
    url: "https://v0-weather-dashboard-pink.vercel.app",
    description: "Weather dashboard app",
    status: "Active",
    year: "2026",
  },
  {
    name: "tuned.today",
    url: "https://tuned.today",
    description: "Work in progress",
    status: "Active",
    year: "2026",
    highlight: true,
  },
  {
    name: "Paje.ai",
    url: "https://paje.ai",
    description: "AI-driven page optimization",
    status: "Active",
    year: "2025",
  },
  {
    name: "Deeproductivity",
    url: "https://deeproductivity.com",
    description: "High-performance focus tools",
    status: "Active",
    year: "2025",
  },
  {
    name: "MarketRoute",
    url: "https://getmarketroute.com",
    description: "GTM strategy automation",
    status: "Active",
    year: "2025",
  },
  {
    name: "UIforSaaS",
    url: "https://uiforsaas.dev",
    description: "Design systems for developers",
    status: "Active",
    year: "2025",
  },
  {
    name: "Louis Purple Iasi",
    url: "https://louispurpleiasi.com",
    description: "Specialized retail digital transformation",
    status: "Active",
    year: "2024",
  },
]

export function ShippingLog() {
  return (
    <div className="border border-foreground overflow-x-auto">
      <table className="w-full font-mono text-xs sm:text-sm min-w-[400px]">
        <thead>
          <tr className="border-b border-foreground bg-foreground text-background">
            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-bold uppercase tracking-wide">Project</th>
            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-bold uppercase tracking-wide hidden sm:table-cell">
              Description
            </th>
            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-bold uppercase tracking-wide">Status</th>
            <th className="px-3 sm:px-4 py-2 sm:py-3 text-right font-bold uppercase tracking-wide">Year</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr
              key={project.name}
              className={[
                index !== projects.length - 1 ? "border-b border-foreground" : "",
                project.highlight ? "bg-foreground/5" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <td className="px-3 sm:px-4 py-2 sm:py-3 font-bold">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  {project.name}
                </Link>
              </td>
              <td
                className={[
                  "px-3 sm:px-4 py-2 sm:py-3 hidden sm:table-cell",
                  project.highlight ? "text-foreground font-semibold" : "text-muted-foreground",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {project.description}
              </td>
              <td className="px-3 sm:px-4 py-2 sm:py-3">
                <span
                  className={`text-xs uppercase ${
                    project.status === "Building" || project.status === "Active"
                      ? "text-green-600"
                      : project.status === "Open Source"
                        ? "text-blue-600"
                        : "text-muted-foreground"
                  }`}
                >
                  {project.status}
                </span>
              </td>
              <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-muted-foreground">{project.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
