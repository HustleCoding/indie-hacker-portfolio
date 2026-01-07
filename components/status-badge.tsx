export function StatusBadge() {
  return (
    <div className="flex items-center gap-2 px-3 py-1 border border-foreground">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      <span className="font-mono text-xs uppercase tracking-wide">Building</span>
    </div>
  )
}
