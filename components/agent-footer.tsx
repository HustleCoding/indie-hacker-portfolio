"use client"

import { useState } from "react"

export function AgentFooter() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      const response = await fetch("/llms.txt")
      const text = await response.text()
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <footer className="pt-8 sm:pt-12 border-t border-foreground">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/HustleCoding"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs sm:text-sm underline underline-offset-4 hover:text-muted-foreground"
          >
            GitHub
          </a>
          <a
            href="https://x.com/florin_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs sm:text-sm underline underline-offset-4 hover:text-muted-foreground"
          >
            X/Twitter
          </a>
          <a
            href="mailto:florin.dobinciuc.dev@gmail.com"
            className="font-mono text-xs sm:text-sm underline underline-offset-4 hover:text-muted-foreground"
          >
            Email
          </a>
          <a
            href="/llms.txt"
            target="_blank"
            className="font-mono text-xs sm:text-sm underline underline-offset-4 hover:text-muted-foreground"
            rel="noreferrer"
          >
            llms.txt
          </a>
        </div>
        <button
          onClick={handleCopy}
          className="w-full sm:w-auto font-mono text-xs sm:text-sm px-4 py-2 border border-foreground hover:bg-foreground hover:text-background"
        >
          {copied ? "Copied!" : "Copy for AI"}
        </button>
      </div>
      <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mt-4 sm:mt-6">
        Machine-readable at /llms.txt
      </p>
    </footer>
  )
}
