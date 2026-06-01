import { Users, TrendingUp, ShoppingCart, DollarSign, Activity } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { StatCard } from '@/components/common/StatCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAuthStore } from '@/store/auth.store';
import { formatRelativeTime } from '@/utils/formatters';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    icon: DollarSign,
    trend: { value: 20.1, label: 'from last month' },
  },
  {
    title: 'Active Users',
    value: '2,350',
    icon: Users,
    trend: { value: 15.3, label: 'from last month' },
  },
  {
    title: 'New Orders',
    value: '1,247',
    icon: ShoppingCart,
    trend: { value: -4.6, label: 'from last month' },
  },
  {
    title: 'Growth Rate',
    value: '12.5%',
    icon: TrendingUp,
    trend: { value: 2.4, label: 'from last month' },
  },
];

const recentActivity = [
  { id: '1', user: 'Alice Johnson', action: 'Created a new project', time: new Date(Date.now() - 1000 * 60 * 5).toISOString(), avatar: '' },
  { id: '2', user: 'Bob Smith', action: 'Updated team settings', time: new Date(Date.now() - 1000 * 60 * 30).toISOString(), avatar: '' },
  { id: '3', user: 'Carol White', action: 'Invited 3 new members', time: new Date(Date.now() - 1000 * 60 * 90).toISOString(), avatar: '' },
  { id: '4', user: 'David Lee', action: 'Submitted Q4 report', time: new Date(Date.now() - 1000 * 60 * 180).toISOString(), avatar: '' },
  { id: '5', user: 'Eva Martinez', action: 'Closed 5 support tickets', time: new Date(Date.now() - 1000 * 60 * 300).toISOString(), avatar: '' },
];

const topUsers = [
  { name: 'Alice Johnson', email: 'alice@example.com', revenue: '$4,200', status: 'active' },
  { name: 'Bob Smith', email: 'bob@example.com', revenue: '$3,800', status: 'active' },
  { name: 'Carol White', email: 'carol@example.com', revenue: '$2,950', status: 'pending' },
  { name: 'David Lee', email: 'david@example.com', revenue: '$2,600', status: 'active' },
  { name: 'Eva Martinez', email: 'eva@example.com', revenue: '$2,100', status: 'inactive' },
];

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase();
}

function StatusBadge({ status }: { status: string }) {
  const variantMap: Record<string, 'success' | 'warning' | 'secondary'> = {
    active: 'success',
    pending: 'warning',
    inactive: 'secondary',
  };
  return <Badge variant={variantMap[status] ?? 'secondary'}>{status}</Badge>;
}

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);

  return (
    <div className="space-y-8">
      <PageHeader
        title={`Good morning, ${user?.name?.split(' ')[0] ?? 'there'} 👋`}
        description="Here's what's happening with your platform today."
      />

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Activity className="h-4 w-4 text-primary" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest actions across your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 mt-0.5">
                    <AvatarImage src={item.avatar} />
                    <AvatarFallback className="text-xs">{getInitials(item.user)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-none truncate">{item.user}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {formatRelativeTime(item.time)}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Users */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Users className="h-4 w-4 text-primary" />
              Top Users
            </CardTitle>
            <CardDescription>Highest revenue contributors this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topUsers.map((u) => (
                <div key={u.email} className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="text-xs">{getInitials(u.name)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-none truncate">{u.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{u.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{u.revenue}</span>
                    <StatusBadge status={u.status} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Placeholder chart area */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Revenue Overview</CardTitle>
          <CardDescription>Monthly revenue for the past 12 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-48 rounded-lg bg-muted/50 border-2 border-dashed border-muted-foreground/20">
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto text-muted-foreground/40 mb-2" />
              <p className="text-sm text-muted-foreground">
                Connect a charting library (e.g. Recharts) to render this panel
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
