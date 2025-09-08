"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york-v4/ui/avatar"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york-v4/ui/table"
import { Progress } from "@/registry/new-york-v4/ui/progress"
import { 
  Users, 
  Shield, 
  Key, 
  Database, 
  Activity, 
  Settings, 
  Plus,
  Edit,
  Trash2,
  Copy,
  Eye,
  EyeOff
} from "lucide-react"

export default function AdminPage() {
  const [showApiKey, setShowApiKey] = React.useState(false)
  
  const tabs = [
    { v: "org", t: "Organization", icon: Settings },
    { v: "users", t: "Users", icon: Users },
    { v: "roles", t: "Roles", icon: Shield },
    { v: "routing", t: "Routing", icon: Activity },
    { v: "data-retention", t: "Data Retention", icon: Database },
    { v: "audit-log", t: "Audit Log", icon: Activity },
    { v: "api-keys", t: "API Keys", icon: Key },
  ]

  const users = [
    { name: "Rajesh Kumar", email: "rajesh@mumbaipolice.gov.in", role: "Control Room Operator", status: "Active", lastSeen: "2 mins ago" },
    { name: "Priya Sharma", email: "priya@mumbaipolice.gov.in", role: "Intelligence Analyst", status: "Active", lastSeen: "1 hour ago" },
    { name: "Amit Patel", email: "amit@mumbaipolice.gov.in", role: "Traffic Manager", status: "Inactive", lastSeen: "2 days ago" },
    { name: "Deepika Singh", email: "deepika@mumbaipolice.gov.in", role: "Admin", status: "Active", lastSeen: "5 mins ago" },
  ]

  const roles = [
    { name: "Super Admin", permissions: 15, users: 2, color: "destructive" },
    { name: "Control Room Operator", permissions: 8, users: 12, color: "default" },
    { name: "Intelligence Analyst", permissions: 10, users: 6, color: "secondary" },
    { name: "Traffic Manager", permissions: 6, users: 8, color: "outline" },
    { name: "Field Officer", permissions: 4, users: 25, color: "outline" },
  ]

  const apiKeys = [
    { name: "Mobile App API", key: "wl_1a2b3c4d5e6f7g8h9i", lastUsed: "2 mins ago", requests: "1.2M", status: "Active" },
    { name: "Web Dashboard", key: "wl_9i8h7g6f5e4d3c2b1a", lastUsed: "1 min ago", requests: "856K", status: "Active" },
    { name: "External Integration", key: "wl_x1y2z3a4b5c6d7e8f9", lastUsed: "1 hour ago", requests: "234K", status: "Limited" },
  ]

  const auditLogs = [
    { user: "Rajesh Kumar", action: "Viewed Incident Report #12453", timestamp: "2 mins ago", ip: "192.168.1.45" },
    { user: "Priya Sharma", action: "Created Intelligence Alert", timestamp: "15 mins ago", ip: "192.168.1.67" },
    { user: "Admin System", action: "Automated Threat Detection", timestamp: "23 mins ago", ip: "Internal" },
    { user: "Amit Patel", action: "Updated Traffic Flow Parameters", timestamp: "1 hour ago", ip: "192.168.1.89" },
  ]

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">System Administration</h1>
      </div>
      
      <Tabs defaultValue="org" className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          {tabs.map(({ v, t, icon: Icon }) => (
            <TabsTrigger key={v} value={v} className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{t}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="org" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Organization Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization Name</Label>
                  <Input id="org-name" value="Mumbai Police Department" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-domain">Domain</Label>
                  <Input id="org-domain" value="mumbaipolice.gov.in" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-location">Primary Location</Label>
                  <Input id="org-location" value="Mumbai, Maharashtra, India" />
                </div>
                <Button>Update Organization</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Neural Processing</span>
                  <Badge variant="secondary">99.7% Uptime</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Threat Detection Engine</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Real-time Monitoring</span>
                  <Badge variant="secondary">Online</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Processing Load</span>
                    <span>47%</span>
                  </div>
                  <Progress value={47} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">User Management</h3>
              <p className="text-sm text-muted-foreground">Manage system users and their access</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Seen</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Badge variant={user.status === "Active" ? "secondary" : "outline"}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.lastSeen}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Role Management</h3>
              <p className="text-sm text-muted-foreground">Configure roles and permissions</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Role
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{role.name}</CardTitle>
                    <Badge variant={role.color as any}>{role.users} users</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Permissions</span>
                      <span>{role.permissions}/15</span>
                    </div>
                    <Progress value={(role.permissions / 15) * 100} />
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="routing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Intelligence Routing Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Auto-route High Priority Alerts</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Cross-Department Notifications</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Real-time Escalation</Label>
                    <Switch />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Default Route Priority</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low Priority</SelectItem>
                        <SelectItem value="medium">Medium Priority</SelectItem>
                        <SelectItem value="high">High Priority</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Response Timeout (minutes)</Label>
                    <Input type="number" defaultValue="15" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data-retention" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Retention Policies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Intelligence Reports</Label>
                    <Select defaultValue="2years">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6months">6 Months</SelectItem>
                        <SelectItem value="1year">1 Year</SelectItem>
                        <SelectItem value="2years">2 Years</SelectItem>
                        <SelectItem value="5years">5 Years</SelectItem>
                        <SelectItem value="permanent">Permanent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Traffic Data</Label>
                    <Select defaultValue="1year">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3months">3 Months</SelectItem>
                        <SelectItem value="6months">6 Months</SelectItem>
                        <SelectItem value="1year">1 Year</SelectItem>
                        <SelectItem value="2years">2 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Incident Records</Label>
                    <Select defaultValue="permanent">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2years">2 Years</SelectItem>
                        <SelectItem value="5years">5 Years</SelectItem>
                        <SelectItem value="permanent">Permanent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>System Logs</Label>
                    <Select defaultValue="6months">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1month">1 Month</SelectItem>
                        <SelectItem value="3months">3 Months</SelectItem>
                        <SelectItem value="6months">6 Months</SelectItem>
                        <SelectItem value="1year">1 Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <Button>Update Retention Policies</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit-log" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Audit Trail</h3>
              <p className="text-sm text-muted-foreground">System activity and user actions</p>
            </div>
            <Button variant="outline">Export Logs</Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>IP Address</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditLogs.map((log, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{log.user}</TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>{log.timestamp}</TableCell>
                      <TableCell className="text-muted-foreground">{log.ip}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api-keys" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">API Key Management</h3>
              <p className="text-sm text-muted-foreground">Manage system integrations and access keys</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Generate Key
            </Button>
          </div>

          <div className="space-y-4">
            {apiKeys.map((api, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium">{api.name}</h4>
                        <Badge variant={api.status === "Active" ? "secondary" : "outline"}>
                          {api.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-mono">
                          {showApiKey ? api.key : api.key.substring(0, 8) + "..."}
                        </span>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-sm font-medium">{api.requests} requests</div>
                      <div className="text-xs text-muted-foreground">Last used {api.lastUsed}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


