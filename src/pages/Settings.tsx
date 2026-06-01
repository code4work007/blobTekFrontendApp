import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/common/PageHeader';
import { useUiStore } from '@/store/ui.store';
import type { Theme } from '@/types';

const themes: { value: Theme; label: string; description: string }[] = [
  { value: 'light', label: 'Light', description: 'Clean white interface' },
  { value: 'dark', label: 'Dark', description: 'Easy on the eyes' },
  { value: 'system', label: 'System', description: 'Follows OS preference' },
];

const notifications = [
  { id: 'email_updates', label: 'Product updates', description: 'Receive emails about new features and improvements.' },
  { id: 'security_alerts', label: 'Security alerts', description: 'Get notified about sign-ins and security events.' },
  { id: 'team_activity', label: 'Team activity', description: 'Daily digest of your team\'s activity.' },
  { id: 'billing_reminders', label: 'Billing reminders', description: 'Invoices, payment reminders, and receipts.' },
];

export default function Settings() {
  const { theme, setTheme } = useUiStore();

  return (
    <div className="space-y-8 max-w-3xl">
      <PageHeader
        title="Settings"
        description="Manage your application preferences and account settings."
      />

      <Tabs defaultValue="appearance">
        <TabsList className="mb-6">
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Appearance */}
        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>Choose the color scheme for your interface.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3">
                {themes.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTheme(t.value)}
                    className={`
                      relative flex flex-col items-start gap-1 rounded-lg border p-4 text-left transition-all
                      hover:border-primary/50
                      ${theme === t.value ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border'}
                    `}
                  >
                    {theme === t.value && (
                      <Badge variant="default" className="absolute top-2 right-2 text-[10px] px-1.5 py-0">
                        Active
                      </Badge>
                    )}
                    <span className="font-medium text-sm">{t.label}</span>
                    <span className="text-xs text-muted-foreground">{t.description}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Choose what updates you receive via email.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((item, i) => (
                <div key={item.id}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <Label htmlFor={item.id} className="text-sm font-medium cursor-pointer">
                        {item.label}
                      </Label>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                    </div>
                    <Switch id={item.id} defaultChecked={i < 2} />
                  </div>
                  {i < notifications.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
              <div className="flex justify-end pt-2">
                <Button size="sm">Save preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Authenticator app</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Use an authenticator app to generate one-time codes.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Not enabled</Badge>
                  <Button variant="outline" size="sm">
                    Enable
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">SMS verification</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Receive a verification code via SMS.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Not enabled</Badge>
                  <Button variant="outline" size="sm">
                    Enable
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>Irreversible account actions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Delete account</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Permanently delete your account and all associated data.
                  </p>
                </div>
                <Button variant="destructive" size="sm">
                  Delete account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
