"use client"

import * as React from "react"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Progress } from "@/registry/new-york-v4/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york-v4/ui/table"
import { 
  Eye, 
  Plus, 
  AlertTriangle, 
  TrendingUp, 
  Activity, 
  Clock, 
  Users,
  MessageSquare,
  Settings,
  Play,
  Pause,
  Trash2
} from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/registry/new-york-v4/ui/chart"

export default function MonitoringPage() {
  const [keyword, setKeyword] = React.useState("")

  const activeMonitors = [
    {
      id: 1,
      keyword: "Mumbai Traffic",
      type: "Keyword",
      status: "Active",
      alerts: 47,
      lastAlert: "2 mins ago",
      sensitivity: "High",
      mentions: 1234
    },
    {
      id: 2,
      keyword: "@MumbaiPolice",
      type: "Entity",
      status: "Active", 
      alerts: 23,
      lastAlert: "15 mins ago",
      sensitivity: "Medium",
      mentions: 892
    },
    {
      id: 3,
      keyword: "Protest Bandra",
      type: "Keyword",
      status: "Paused",
      alerts: 12,
      lastAlert: "1 hour ago",
      sensitivity: "Critical",
      mentions: 456
    },
    {
      id: 4,
      keyword: "Road Closure",
      type: "Keyword",
      status: "Active",
      alerts: 8,
      lastAlert: "5 mins ago",
      sensitivity: "Medium",
      mentions: 234
    }
  ]

  const recentAlerts = [
    {
      monitor: "Mumbai Traffic",
      message: "High volume spike detected - 347% increase in mentions",
      timestamp: "2 mins ago",
      severity: "High",
      platform: "Twitter"
    },
    {
      monitor: "@MumbaiPolice", 
      message: "Negative sentiment trending - 78% negative mentions",
      timestamp: "15 mins ago",
      severity: "Medium",
      platform: "Facebook"
    },
    {
      monitor: "Road Closure",
      message: "Breaking news detection - Multiple news outlets reporting",
      timestamp: "5 mins ago", 
      severity: "Medium",
      platform: "News"
    },
    {
      monitor: "Protest Bandra",
      message: "Geographical clustering detected in Bandra West",
      timestamp: "1 hour ago",
      severity: "Critical",
      platform: "Instagram"
    }
  ]

  const systemMetrics = [
    { label: "Active Monitors", value: "47", change: "+3", icon: Eye },
    { label: "Total Alerts Today", value: "234", change: "+12%", icon: AlertTriangle },
    { label: "Processing Speed", value: "2.3ms", change: "98.7%", icon: Activity },
    { label: "Coverage Platforms", value: "12", change: "100%", icon: MessageSquare }
  ]

  // Chart data for monitoring analytics
  const monitoringTrendData = [
    { hour: "00:00", mentions: 45, alerts: 2 },
    { hour: "04:00", mentions: 32, alerts: 1 },
    { hour: "08:00", mentions: 156, alerts: 8 },
    { hour: "12:00", mentions: 234, alerts: 12 },
    { hour: "16:00", mentions: 189, alerts: 6 },
    { hour: "20:00", mentions: 98, alerts: 3 },
  ]

  const sentimentData = [
    { platform: "Twitter", positive: 65, negative: 25, neutral: 10 },
    { platform: "Facebook", positive: 45, negative: 35, neutral: 20 },
    { platform: "Instagram", positive: 70, negative: 20, neutral: 10 },
    { platform: "News", positive: 30, negative: 50, neutral: 20 },
  ]

  const chartConfig = {
    mentions: {
      label: "Mentions",
      color: "var(--chart-1)",
    },
    alerts: {
      label: "Alerts",
      color: "var(--chart-2)",
    },
    positive: {
      label: "Positive",
      color: "var(--chart-1)",
    },
    negative: {
      label: "Negative", 
      color: "var(--chart-2)",
    },
    neutral: {
      label: "Neutral",
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Eye className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Intelligent Monitoring</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {systemMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </div>
                <div className="flex flex-col items-end">
                  <metric.icon className="h-8 w-8 text-primary mb-1" />
                  <Badge variant="secondary" className="text-xs">
                    {metric.change}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Tabs defaultValue="monitors" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="monitors">Active Monitors</TabsTrigger>
          <TabsTrigger value="alerts">Recent Alerts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="create">Create Monitor</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="monitors" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Active Monitoring Systems</h3>
              <p className="text-sm text-muted-foreground">Real-time keyword and entity tracking</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Quick Monitor
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Monitor</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Alerts</TableHead>
                    <TableHead>Mentions</TableHead>
                    <TableHead>Last Alert</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeMonitors.map((monitor) => (
                    <TableRow key={monitor.id}>
                      <TableCell className="font-medium">{monitor.keyword}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{monitor.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${
                            monitor.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'
                          }`} />
                          {monitor.status}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{monitor.alerts}</span>
                          <Badge variant={monitor.sensitivity === 'Critical' ? 'destructive' : 
                                         monitor.sensitivity === 'High' ? 'secondary' : 'outline'}>
                            {monitor.sensitivity}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{monitor.mentions}</TableCell>
                      <TableCell>{monitor.lastAlert}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost">
                            {monitor.status === 'Active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Settings className="h-4 w-4" />
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

        <TabsContent value="alerts" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Alert Stream</h3>
              <p className="text-sm text-muted-foreground">Real-time intelligence alerts and notifications</p>
            </div>
            <Button variant="outline">Export Alerts</Button>
          </div>

          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{alert.monitor}</Badge>
                        <Badge variant={alert.severity === 'Critical' ? 'destructive' : 
                                       alert.severity === 'High' ? 'secondary' : 'outline'}>
                          {alert.severity}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{alert.platform}</span>
                      </div>
                      <p className="text-sm">{alert.message}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {alert.timestamp}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Monitoring Analytics</h3>
              <p className="text-sm text-muted-foreground">Real-time trends and sentiment analysis</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Monitoring Trends Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Mention Volume & Alerts</CardTitle>
                <CardDescription>Hourly monitoring activity and alert generation</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <AreaChart data={monitoringTrendData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="hour"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <Area
                      dataKey="mentions"
                      type="natural"
                      fill="var(--color-mentions)"
                      fillOpacity={0.4}
                      stroke="var(--color-mentions)"
                    />
                    <Area
                      dataKey="alerts"
                      type="natural"
                      fill="var(--color-alerts)"
                      fillOpacity={0.4}
                      stroke="var(--color-alerts)"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Sentiment Analysis Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Sentiment Analysis by Platform</CardTitle>
                <CardDescription>Positive, negative, and neutral sentiment distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <LineChart data={sentimentData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="platform"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Line
                      dataKey="positive"
                      type="monotone"
                      stroke="var(--color-positive)"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      dataKey="negative"
                      type="monotone"
                      stroke="var(--color-negative)"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      dataKey="neutral"
                      type="monotone"
                      stroke="var(--color-neutral)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Monitor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="monitor-keyword">Keyword or Entity</Label>
                  <Input 
                    id="monitor-keyword"
                    placeholder="e.g., 'Mumbai Traffic' or '@MumbaiPolice'"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Monitor Type</Label>
                  <Select defaultValue="keyword">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="keyword">Keyword Monitor</SelectItem>
                      <SelectItem value="entity">Entity Monitor</SelectItem>
                      <SelectItem value="hashtag">Hashtag Monitor</SelectItem>
                      <SelectItem value="location">Location Monitor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Sensitivity Level</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Major events only</SelectItem>
                      <SelectItem value="medium">Medium - Moderate activity</SelectItem>
                      <SelectItem value="high">High - All activity</SelectItem>
                      <SelectItem value="critical">Critical - Immediate alerts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="real-time" defaultChecked />
                  <Label htmlFor="real-time">Real-time alerts</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="sentiment" defaultChecked />
                  <Label htmlFor="sentiment">Sentiment analysis</Label>
                </div>

                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Monitor
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monitor Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="h-4 w-4 text-primary" />
                    <span className="font-medium">{keyword || "Your Monitor"}</span>
                    <Badge variant="outline">Keyword</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sensitivity:</span>
                      <span>Medium</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Real-time:</span>
                      <span className="text-green-600">Enabled</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sentiment:</span>
                      <span className="text-green-600">Enabled</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Monitoring Platforms</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {['Twitter', 'Facebook', 'Instagram', 'News', 'Reddit', 'Telegram'].map((platform) => (
                      <div key={platform} className="flex items-center gap-2 text-sm p-2 border rounded">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monitoring Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Global Real-time Processing</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Auto-escalate Critical Alerts</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Cross-platform Correlation</Label>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>AI-powered Threat Detection</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Default Alert Threshold</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low Sensitivity</SelectItem>
                        <SelectItem value="medium">Medium Sensitivity</SelectItem>
                        <SelectItem value="high">High Sensitivity</SelectItem>
                        <SelectItem value="critical">Critical Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Processing Interval (seconds)</Label>
                    <Input type="number" defaultValue="5" />
                  </div>
                  <div className="space-y-2">
                    <Label>Data Retention Period</Label>
                    <Select defaultValue="30days">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7days">7 Days</SelectItem>
                        <SelectItem value="30days">30 Days</SelectItem>
                        <SelectItem value="90days">90 Days</SelectItem>
                        <SelectItem value="1year">1 Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <Button>Update Configuration</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


