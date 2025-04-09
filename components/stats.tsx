interface StatProps {
  value: string
  label: string
}

function StatItem({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
      <StatItem value="10" label="Years of Experience" />
      <StatItem value="250+" label="Projects Completed" />
      <StatItem value="10" label="Years of Experience" />
    </div>
  )
}
