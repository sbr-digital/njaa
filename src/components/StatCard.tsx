import { useCountUp } from '@/hooks/useCountUp'
import { useInView } from '@/hooks/useInView'
import type { TransparencyStat } from '@/types'
import { formatNumber } from '@/utils/format'

const colorMap: Record<TransparencyStat['color'], string> = {
  primary:   'bg-primary-50   border-primary-200   text-primary-600',
  secondary: 'bg-green-50     border-green-200     text-green-600',
  blue:      'bg-blue-50      border-blue-200      text-blue-600',
  purple:    'bg-purple-50    border-purple-200    text-purple-600',
  rose:      'bg-rose-50      border-rose-200      text-rose-600',
  amber:     'bg-amber-50     border-amber-200     text-amber-600',
}

interface StatCardProps {
  stat: TransparencyStat
  large?: boolean
}

export function StatCard({ stat, large = false }: StatCardProps) {
  const { ref, inView } = useInView()
  const count = useCountUp({ end: stat.value, duration: 2200 }, inView)

  return (
    <div
      ref={ref}
      className={`card border ${
        colorMap[stat.color].split(' ').slice(1).join(' ')
      } p-6 text-center flex flex-col items-center gap-3`}
    >
      <span className="text-4xl" role="img" aria-label={stat.label}>
        {stat.icon}
      </span>
      <div>
        <p
          className={`font-display font-bold text-dark ${
            large ? 'text-5xl' : 'text-4xl'
          }`}
        >
          {stat.prefix}
          {formatNumber(Math.floor(count))}
          {stat.suffix}
        </p>
        <p className="font-semibold text-gray-700 mt-1">{stat.label}</p>
        {stat.description && (
          <p className="text-sm text-gray-400 mt-0.5">{stat.description}</p>
        )}
      </div>
    </div>
  )
}
