import * as React from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import dynamic from "next/dynamic"

const AreaChart = dynamic(() => import("recharts").then(mod => ({ default: mod.AreaChart })), { ssr: false })
const Area = dynamic(() => import("recharts").then(mod => ({ default: mod.Area })), { ssr: false })
const BarChart = dynamic(() => import("recharts").then(mod => ({ default: mod.BarChart })), { ssr: false })
const Bar = dynamic(() => import("recharts").then(mod => ({ default: mod.Bar })), { ssr: false })
const LineChart = dynamic(() => import("recharts").then(mod => ({ default: mod.LineChart })), { ssr: false })
const Line = dynamic(() => import("recharts").then(mod => ({ default: mod.Line })), { ssr: false })
const CartesianGrid = dynamic(() => import("recharts").then(mod => ({ default: mod.CartesianGrid })), { ssr: false })
const XAxis = dynamic(() => import("recharts").then(mod => ({ default: mod.XAxis })), { ssr: false })

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Progress } from "@/registry/new-york-v4/ui/progress"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/registry/new-york-v4/ui/chart"
import { AlertTriangle, Activity, MapPin, Bell, TrendingUp, Users, Car, Shield } from "lucide-react"

export default async function DashboardsPage({ params }: { params: { slug?: string[] } }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug ?? []
  const key = slug[0] ?? "control-room"
  
  const dashboardConfig = {
    "control-room": {
      title: "Control Room Dashboard",
      description: "Real-time monitoring and alerts across all departments",
      widgets: [
        { 
          name: "Viral Topics", 
          icon: TrendingUp,
          value: "23 Active",
          change: "+12%",
          trend: "up",
          data: [
            { topic: "Traffic fine scam", virality: "10x", sentiment: "negative" },
            { topic: "Pothole complaints", virality: "3x", sentiment: "negative" },
            { topic: "New metro line", virality: "2x", sentiment: "positive" }
          ]
        },
        { 
          name: "Live Alerts", 
          icon: Bell,
          value: "7 Critical",
          change: "3 new",
          trend: "critical",
          data: [
            { type: "Traffic", message: "Major accident on Ring Road", time: "2 min ago" },
            { type: "Law & Order", message: "Protest gathering detected", time: "5 min ago" },
            { type: "Municipal", message: "Water shortage complaints spike", time: "8 min ago" }
          ]
        },
        { 
          name: "Geo Hotspots", 
          icon: MapPin,
          value: "12 Zones",
          change: "+2 new",
          trend: "up",
          data: [
            { zone: "Whitefield", incidents: 23, severity: "high" },
            { zone: "Koramangala", incidents: 18, severity: "medium" },
            { zone: "Indiranagar", incidents: 15, severity: "medium" }
          ]
        },
        { 
          name: "Sentiment Trend", 
          icon: Activity,
          value: "68% Negative",
          change: "-5% from yesterday",
          trend: "down",
          progress: 68
        },
        { 
          name: "Active Monitors", 
          icon: Users,
          value: "45 Running",
          change: "All systems operational",
          trend: "stable",
          progress: 98
        },
        { 
          name: "Response Time", 
          icon: AlertTriangle,
          value: "4.2 min",
          change: "avg. response time",
          trend: "stable",
          progress: 85
        }
      ]
    },
    "traffic": {
      title: "Traffic Intelligence Dashboard",
      description: "ANPR violations, driver profiles, and traffic sentiment monitoring",
      widgets: [
        { 
          name: "ANPR Violations", 
          icon: Car,
          value: "1,247",
          change: "+89 today",
          trend: "up"
        },
        { 
          name: "License Lookups", 
          icon: Shield,
          value: "342",
          change: "+23 today",
          trend: "up"
        }
      ]
    },
    "law-order": {
      title: "Law & Order Dashboard", 
      description: "Crime monitoring, protests, and public safety intelligence",
      widgets: [
        { 
          name: "Active Incidents", 
          icon: AlertTriangle,
          value: "15",
          change: "+3 today",
          trend: "up"
        },
        { 
          name: "Crowd Monitoring", 
          icon: Users,
          value: "4 Gatherings",
          change: "2 authorized",
          trend: "stable"
        }
      ]
    },
    "municipal": {
      title: "Municipal Services Dashboard",
      description: "Infrastructure complaints, utilities, and civic services monitoring", 
      widgets: [
        { 
          name: "Complaint Tickets", 
          icon: AlertTriangle,
          value: "89",
          change: "+12 today",
          trend: "up"
        },
        { 
          name: "Service Response", 
          icon: Activity,
          value: "6.8 hrs",
          change: "avg. resolution time",
          trend: "stable"
        }
      ]
    },
    "safe-city": {
      title: "Unified Safe City Dashboard",
      description: "Cross-departmental intelligence and coordinated response management",
      widgets: [
        { 
          name: "Cross-Dept Cases", 
          icon: Shield,
          value: "12 Active",
          change: "+2 today",
          trend: "up"
        },
        { 
          name: "Escalated Alerts", 
          icon: Bell,
          value: "5 Pending",
          change: "3 resolved today",
          trend: "down"
        }
      ]
    }
  }

  const config = dashboardConfig[key as keyof typeof dashboardConfig]
  if (!config) return notFound()

  // Chart data for trend analysis
  const incidentTrendData = [
    { month: "Jan", incidents: 45, resolved: 42, responseTime: 4.2 },
    { month: "Feb", incidents: 52, resolved: 48, responseTime: 3.8 },
    { month: "Mar", incidents: 38, resolved: 35, responseTime: 4.5 },
    { month: "Apr", incidents: 61, resolved: 58, responseTime: 3.9 },
    { month: "May", incidents: 47, resolved: 44, responseTime: 4.1 },
    { month: "Jun", incidents: 55, resolved: 52, responseTime: 3.7 },
  ]

  const trafficFlowData = [
    { hour: "00:00", vehicles: 120, incidents: 2 },
    { hour: "04:00", vehicles: 80, incidents: 1 },
    { hour: "08:00", vehicles: 450, incidents: 8 },
    { hour: "12:00", vehicles: 380, incidents: 5 },
    { hour: "16:00", vehicles: 520, incidents: 12 },
    { hour: "20:00", vehicles: 320, incidents: 6 },
  ]

  const responseTimeData = [
    { day: "Mon", avgTime: 4.2, target: 5.0 },
    { day: "Tue", avgTime: 3.8, target: 5.0 },
    { day: "Wed", avgTime: 4.5, target: 5.0 },
    { day: "Thu", avgTime: 3.9, target: 5.0 },
    { day: "Fri", avgTime: 4.1, target: 5.0 },
    { day: "Sat", avgTime: 3.7, target: 5.0 },
    { day: "Sun", avgTime: 4.3, target: 5.0 },
  ]

  const chartConfig = {
    incidents: {
      label: "Incidents",
      color: "var(--chart-1)",
    },
    resolved: {
      label: "Resolved",
      color: "var(--chart-2)",
    },
    responseTime: {
      label: "Response Time (min)",
      color: "var(--chart-3)",
    },
    vehicles: {
      label: "Vehicles",
      color: "var(--chart-1)",
    },
    incidents: {
      label: "Traffic Incidents",
      color: "var(--chart-2)",
    },
    avgTime: {
      label: "Avg Response Time",
      color: "var(--chart-1)",
    },
    target: {
      label: "Target",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold tracking-tight">{config.title}</h1>
            <Badge variant="secondary" className="rounded">Live</Badge>
          </div>
          <p className="text-muted-foreground">{config.description}</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/analysis">New Analysis</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/monitoring">Create Monitor</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {config.widgets.map((widget, i) => {
              const IconComponent = widget.icon
              return (
                <Card key={i}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{widget.name}</CardTitle>
                    <IconComponent className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{widget.value}</div>
                    <p className={`text-xs ${
                      widget.trend === 'up' ? 'text-red-500' : 
                      widget.trend === 'down' ? 'text-green-500' : 
                      widget.trend === 'critical' ? 'text-orange-500' :
                      'text-muted-foreground'
                    }`}>
                      {widget.change}
                    </p>
                    {widget.progress && (
                      <Progress value={widget.progress} className="mt-2" />
                    )}
                    {widget.data && (
                      <div className="mt-3 space-y-1">
                        {widget.data.slice(0, 2).map((item, j) => (
                          <div key={j} className="text-xs text-muted-foreground">
                            {'topic' in item && (
                              <span>{item.topic} - {item.virality} viral</span>
                            )}
                            {'type' in item && (
                              <span>{item.type}: {item.message}</span>
                            )}
                            {'zone' in item && (
                              <span>{item.zone}: {item.incidents} incidents</span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <div className="grid gap-4">
            {[
              { type: "Critical", title: "Major traffic incident detected", location: "Ring Road", time: "2 min ago", severity: "high" },
              { type: "Warning", title: "Protest gathering forming", location: "Freedom Park", time: "5 min ago", severity: "medium" },
              { type: "Info", title: "Water complaints increasing", location: "HSR Layout", time: "8 min ago", severity: "low" }
            ].map((alert, i) => (
              <Card key={i}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Badge variant={alert.severity === 'high' ? 'destructive' : alert.severity === 'medium' ? 'default' : 'secondary'}>
                      {alert.type}
                    </Badge>
                    <div>
                      <p className="font-medium">{alert.title}</p>
                      <p className="text-sm text-muted-foreground">{alert.location} • {alert.time}</p>
                    </div>
                  </div>
                  <Button size="sm">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Incident Trends Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Incident Trends</CardTitle>
                <CardDescription>Monthly incident volume and resolution rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <AreaChart data={incidentTrendData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <Area
                      dataKey="incidents"
                      type="natural"
                      fill="var(--color-incidents)"
                      fillOpacity={0.4}
                      stroke="var(--color-incidents)"
                    />
                    <Area
                      dataKey="resolved"
                      type="natural"
                      fill="var(--color-resolved)"
                      fillOpacity={0.4}
                      stroke="var(--color-resolved)"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Response Time Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Response Time Performance</CardTitle>
                <CardDescription>Daily average response times vs target</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <BarChart data={responseTimeData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="day"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar
                      dataKey="avgTime"
                      fill="var(--color-avgTime)"
                      radius={4}
                    />
                    <Bar
                      dataKey="target"
                      fill="var(--color-target)"
                      fillOpacity={0.3}
                      radius={4}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Traffic Flow Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Traffic Flow & Incidents</CardTitle>
              <CardDescription>Hourly traffic volume and incident correlation</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <LineChart data={trafficFlowData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="hour"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Line
                    dataKey="vehicles"
                    type="monotone"
                    stroke="var(--color-vehicles)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="incidents"
                    type="monotone"
                    stroke="var(--color-incidents)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">Daily Summary Report</Button>
                <Button variant="outline" className="w-full justify-start">Weekly Trend Analysis</Button>
                <Button variant="outline" className="w-full justify-start">Incident Response Summary</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Create Custom Report</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


