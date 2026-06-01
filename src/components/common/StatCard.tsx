import { type LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}: StatCardProps) {
  const trendPositive = trend && trend.value > 0;
  const trendNegative = trend && trend.value < 0;

  return (
    <Card className={cn('transition-shadow hover:shadow-md', className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold tracking-tight">{value}</p>
          </div>
          {Icon && (
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
          )}
        </div>
        {(description || trend) && (
          <div className="mt-4 flex items-center gap-2">
            {trend && (
              <span
                className={cn(
                  'flex items-center gap-0.5 text-xs font-medium',
                  trendPositive && 'text-green-600 dark:text-green-400',
                  trendNegative && 'text-red-600 dark:text-red-400',
                  !trendPositive && !trendNegative && 'text-muted-foreground'
                )}
              >
                {trendPositive && <TrendingUp className="h-3.5 w-3.5" />}
                {trendNegative && <TrendingDown className="h-3.5 w-3.5" />}
                {!trendPositive && !trendNegative && <Minus className="h-3.5 w-3.5" />}
                {Math.abs(trend.value)}%
              </span>
            )}
            {(description || trend?.label) && (
              <p className="text-xs text-muted-foreground">
                {description ?? trend?.label}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
