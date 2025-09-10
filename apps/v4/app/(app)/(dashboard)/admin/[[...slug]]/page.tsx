"use client"

import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york-v4/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/registry/new-york-v4/ui/dialog"
import { 
  Settings, 
  Users, 
  Shield, 
  Database, 
  Bell, 
  Globe, 
  Key, 
  Server, 
  Activity,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  UserPlus,
  UserMinus,
  Lock,
  Unlock
} from "lucide-react"
import { PageTransition, StaggeredContainer } from "@/components/page-transition"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"

export default function AdminPage({ params }: { params: { slug?: string[] } }) {
  const [activeTab, setActiveTab] = useState("users")
  const [showAddUser, setShowAddUser] = useState(false)
  const [showApiKeys, setShowApiKeys] = useState(false)

  const [systemSettings, setSystemSettings] = useState({
    maintenance: false,
    debugMode: false,
    autoBackup: true,
    dataRetention: "365",
    maxUsers: "1000",
    sessionTimeout: "30"
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailEnabled: true,
    smsEnabled: false,
    pushEnabled: true,
    alertThreshold: "5",
    escalationTime: "15"
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorRequired: true,
    passwordPolicy: "strong",
    loginAttempts: "5",
    sessionTimeout: "30",
    ipWhitelist: false,
    auditLogging: true
  })

  const users = [
    { id: 1, name: "Rajesh Kumar", email: "rajesh.kumar@bangalorepolice.gov.in", role: "Admin", status: "active", lastLogin: "2024-01-15 14:30" },
    { id: 2, name: "Priya Sharma", email: "priya.sharma@bangalorepolice.gov.in", role: "Manager", status: "active", lastLogin: "2024-01-15 13:45" },
    { id: 3, name: "Vikram Singh", email: "vikram.singh@bangalorepolice.gov.in", role: "Operator", status: "inactive", lastLogin: "2024-01-14 16:20" },
    { id: 4, name: "Maya Patel", email: "maya.patel@bangalorepolice.gov.in", role: "Analyst", status: "active", lastLogin: "2024-01-15 12:15" },
    { id: 5, name: "Suresh Reddy", email: "suresh.reddy@bangalorepolice.gov.in", role: "Operator", status: "active", lastLogin: "2024-01-15 11:30" }
  ]

  const apiKeys = [
    { id: 1, name: "Traffic API", key: "tr_****_****_****_****_****_****_****", status: "active", lastUsed: "2024-01-15 14:25", permissions: ["read", "write"] },
    { id: 2, name: "Analytics API", key: "an_****_****_****_****_****_****_****", status: "active", lastUsed: "2024-01-15 13:40", permissions: ["read"] },
    { id: 3, name: "Emergency API", key: "em_****_****_****_****_****_****_****", status: "inactive", lastUsed: "2024-01-14 18:15", permissions: ["read", "write", "admin"] }
  ]

  const auditLogs = [
    { id: 1, user: "Rajesh Kumar", action: "User created", target: "Priya Sharma", time: "2024-01-15 14:30:25", ip: "192.168.1.100" },
    { id: 2, user: "Priya Sharma", action: "Settings updated", target: "Notification Settings", time: "2024-01-15 13:45:12", ip: "192.168.1.101" },
    { id: 3, user: "Vikram Singh", action: "Failed login", target: "System", time: "2024-01-15 12:20:45", ip: "192.168.1.102" },
    { id: 4, user: "Maya Patel", action: "API key generated", target: "Analytics API", time: "2024-01-15 11:15:30", ip: "192.168.1.103" },
    { id: 5, user: "Suresh Reddy", action: "User deactivated", target: "John Doe", time: "2024-01-15 10:30:15", ip: "192.168.1.104" }
  ]

  const systemStats = {
    totalUsers: 247,
    activeUsers: 189,
    totalIncidents: 1247,
    systemUptime: "99.9%",
    storageUsed: "2.3 TB",
    apiCalls: "1.2M"
  }

  return (
    <PageTransition className="container-wrapper px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Admin Settings</h1>
            <p className="text-muted-foreground">System administration and user management</p>
          </div>
          <div className="flex gap-2">
            <AnimatedButton variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </AnimatedButton>
            <AnimatedButton>
              <Save className="h-4 w-4 mr-2" />
              Save All
            </AnimatedButton>
          </div>
        </div>
      </motion.div>

      {/* System Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <AnimatedCard delay={0.1}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-muted-foreground">Total Users</span>
            </div>
            <div className="text-2xl font-bold mt-1">{systemStats.totalUsers}</div>
            <div className="text-xs text-green-600">{systemStats.activeUsers} active</div>
          </CardContent>
        </AnimatedCard>
        <AnimatedCard delay={0.2}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-green-600" />
              <span className="text-sm text-muted-foreground">System Uptime</span>
            </div>
            <div className="text-2xl font-bold mt-1">{systemStats.systemUptime}</div>
            <div className="text-xs text-green-600">Last 30 days</div>
          </CardContent>
        </AnimatedCard>
        <AnimatedCard delay={0.3}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-orange-600" />
              <span className="text-sm text-muted-foreground">Storage Used</span>
            </div>
            <div className="text-2xl font-bold mt-1">{systemStats.storageUsed}</div>
            <div className="text-xs text-muted-foreground">of 5 TB</div>
          </CardContent>
        </AnimatedCard>
        <AnimatedCard delay={0.4}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-muted-foreground">API Calls</span>
            </div>
            <div className="text-2xl font-bold mt-1">{systemStats.apiCalls}</div>
            <div className="text-xs text-muted-foreground">This month</div>
          </CardContent>
        </AnimatedCard>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
          <TabsTrigger value="audit">Audit Log</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          <AnimatedCard delay={0.1}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Management
                </CardTitle>
                <Dialog open={showAddUser} onOpenChange={setShowAddUser}>
                  <DialogTrigger asChild>
                    <AnimatedButton>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add User
                    </AnimatedButton>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New User</DialogTitle>
                      <DialogDescription>
                        Create a new user account with appropriate permissions.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter email address" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="operator">Operator</SelectItem>
                            <SelectItem value="analyst">Analyst</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Button variant="outline" onClick={() => setShowAddUser(false)}>
                          Cancel
                        </Button>
                        <Button onClick={() => setShowAddUser(false)}>
                          Create User
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.role}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            {user.status === 'active' ? <Lock className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </AnimatedCard>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedCard delay={0.1}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  System Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable maintenance mode</p>
                  </div>
                  <Switch 
                    checked={systemSettings.maintenance}
                    onCheckedChange={(checked) => setSystemSettings({...systemSettings, maintenance: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Debug Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable debug logging</p>
                  </div>
                  <Switch 
                    checked={systemSettings.debugMode}
                    onCheckedChange={(checked) => setSystemSettings({...systemSettings, debugMode: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto Backup</Label>
                    <p className="text-sm text-muted-foreground">Automatic daily backups</p>
                  </div>
                  <Switch 
                    checked={systemSettings.autoBackup}
                    onCheckedChange={(checked) => setSystemSettings({...systemSettings, autoBackup: checked})}
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Data Retention (days)</Label>
                  <Input 
                    value={systemSettings.dataRetention}
                    onChange={(e) => setSystemSettings({...systemSettings, dataRetention: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Max Users</Label>
                  <Input 
                    value={systemSettings.maxUsers}
                    onChange={(e) => setSystemSettings({...systemSettings, maxUsers: e.target.value})}
                  />
                </div>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Enable email alerts</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.emailEnabled}
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, emailEnabled: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Enable SMS alerts</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.smsEnabled}
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, smsEnabled: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Enable push alerts</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.pushEnabled}
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, pushEnabled: checked})}
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Alert Threshold</Label>
                  <Input 
                    value={notificationSettings.alertThreshold}
                    onChange={(e) => setNotificationSettings({...notificationSettings, alertThreshold: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Escalation Time (minutes)</Label>
                  <Input 
                    value={notificationSettings.escalationTime}
                    onChange={(e) => setNotificationSettings({...notificationSettings, escalationTime: e.target.value})}
                  />
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <AnimatedCard delay={0.1}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
                </div>
                <Switch 
                  checked={securitySettings.twoFactorRequired}
                  onCheckedChange={(checked) => setSecuritySettings({...securitySettings, twoFactorRequired: checked})}
                />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Password Policy</Label>
                <Select value={securitySettings.passwordPolicy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weak">Weak</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="strong">Strong</SelectItem>
                    <SelectItem value="very-strong">Very Strong</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Max Login Attempts</Label>
                <Input 
                  value={securitySettings.loginAttempts}
                  onChange={(e) => setSecuritySettings({...securitySettings, loginAttempts: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label>Session Timeout (minutes)</Label>
                <Input 
                  value={securitySettings.sessionTimeout}
                  onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: e.target.value})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>IP Whitelist</Label>
                  <p className="text-sm text-muted-foreground">Restrict access by IP address</p>
                </div>
                <Switch 
                  checked={securitySettings.ipWhitelist}
                  onCheckedChange={(checked) => setSecuritySettings({...securitySettings, ipWhitelist: checked})}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Audit Logging</Label>
                  <p className="text-sm text-muted-foreground">Log all user activities</p>
                </div>
                <Switch 
                  checked={securitySettings.auditLogging}
                  onCheckedChange={(checked) => setSecuritySettings({...securitySettings, auditLogging: checked})}
                />
              </div>
            </CardContent>
          </AnimatedCard>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <AnimatedCard delay={0.1}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  API Key Management
                </CardTitle>
                <AnimatedButton>
                  <Plus className="h-4 w-4 mr-2" />
                  Generate Key
                </AnimatedButton>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Key</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Used</TableHead>
                    <TableHead>Permissions</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {apiKeys.map((key) => (
                    <TableRow key={key.id}>
                      <TableCell className="font-medium">{key.name}</TableCell>
                      <TableCell className="font-mono text-sm">{key.key}</TableCell>
                      <TableCell>
                        <Badge variant={key.status === 'active' ? 'default' : 'secondary'}>
                          {key.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{key.lastUsed}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {key.permissions.map((perm) => (
                            <Badge key={perm} variant="outline" className="text-xs">
                              {perm}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </AnimatedCard>
        </TabsContent>

        <TabsContent value="audit" className="space-y-6">
          <AnimatedCard delay={0.1}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Audit Log
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>IP Address</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">{log.user}</TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>{log.target}</TableCell>
                      <TableCell>{log.time}</TableCell>
                      <TableCell className="font-mono text-sm">{log.ip}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </AnimatedCard>
        </TabsContent>
      </Tabs>
    </PageTransition>
  )
}