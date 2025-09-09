"use client"

import * as React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york-v4/ui/table"
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import { 
  FileText, 
  Download, 
  Plus, 
  Calendar, 
  CheckCircle, 
  AlertTriangle,
  FileSpreadsheet,
  FileJson,
  Database,
  Eye,
  Edit,
  Share,
  Clock,
  Pause
} from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, Bar, BarChart, Pie, PieChart, Cell } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/registry/new-york-v4/ui/chart"

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const reports = [
    {
      id: "RPT-001",
      name: "Daily Incident Summary",
      type: "scheduled",
      format: "PDF",
      status: "completed",
      lastRun: "2024-01-15 06:00",
      nextRun: "2024-01-16 06:00",
      size: "2.4 MB",
      recipients: ["rajesh@mumbaipolice.gov.in", "priya@mumbaipolice.gov.in"],
      description: "Daily summary of all incidents and response metrics"
    },
    {
      id: "RPT-002",
      name: "Traffic Analysis Report",
      type: "on-demand",
      format: "Excel",
      status: "generating",
      lastRun: "2024-01-15 14:30",
      nextRun: "Manual",
      size: "5.7 MB",
      recipients: ["traffic@mumbaipolice.gov.in"],
      description: "Weekly traffic patterns and congestion analysis"
    },
    {
      id: "RPT-003",
      name: "Security Threat Assessment",
      type: "scheduled",
      format: "PDF",
      status: "failed",
      lastRun: "2024-01-15 12:00",
      nextRun: "2024-01-16 12:00",
      size: "N/A",
      recipients: ["security@mumbaipolice.gov.in"],
      description: "Monthly security threat analysis and recommendations"
    },
    {
      id: "RPT-004",
      name: "Resource Utilization Report",
      type: "on-demand",
      format: "JSON",
      status: "completed",
      lastRun: "2024-01-15 10:15",
      nextRun: "Manual",
      size: "1.2 MB",
      recipients: ["admin@mumbaipolice.gov.in"],
      description: "Analysis of police resource allocation and efficiency"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "secondary"
      case "generating": return "default"
      case "failed": return "destructive"
      case "scheduled": return "outline"
      default: return "outline"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4" />
      case "generating": return <Clock className="h-4 w-4" />
      case "failed": return <AlertTriangle className="h-4 w-4" />
      case "scheduled": return <Calendar className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const getFormatIcon = (format: string) => {
    switch (format) {
      case "PDF": return <FileText className="h-4 w-4" />
      case "Excel": return <FileSpreadsheet className="h-4 w-4" />
      case "JSON": return <FileJson className="h-4 w-4" />
      default: return <Database className="h-4 w-4" />
    }
  }

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || report.status === statusFilter
    const matchesType = typeFilter === "all" || report.type === typeFilter
    
    return matchesSearch && matchesStatus && matchesType
  })

  // Chart data for analytics
  const reportGenerationData = [
    { month: "Jan", generated: 45, failed: 2 },
    { month: "Feb", generated: 52, failed: 1 },
    { month: "Mar", generated: 38, failed: 3 },
    { month: "Apr", generated: 61, failed: 1 },
    { month: "May", generated: 47, failed: 2 },
    { month: "Jun", generated: 55, failed: 1 },
  ]

  const reportTypeData = [
    { name: "Incident Reports", value: 35, color: "var(--chart-1)" },
    { name: "Traffic Analysis", value: 25, color: "var(--chart-2)" },
    { name: "Security Reports", value: 20, color: "var(--chart-3)" },
    { name: "Resource Reports", value: 15, color: "var(--chart-4)" },
    { name: "Other", value: 5, color: "var(--chart-5)" },
  ]

  const reportPerformanceData = [
    { day: "Mon", avgTime: 2.1, success: 95 },
    { day: "Tue", avgTime: 1.8, success: 98 },
    { day: "Wed", avgTime: 2.5, success: 92 },
    { day: "Thu", avgTime: 1.9, success: 97 },
    { day: "Fri", avgTime: 2.2, success: 94 },
    { day: "Sat", avgTime: 1.7, success: 99 },
    { day: "Sun", avgTime: 2.3, success: 93 },
  ]

  const chartConfig = {
    generated: {
      label: "Generated",
      color: "var(--chart-1)",
    },
    failed: {
      label: "Failed",
      color: "var(--chart-2)",
    },
    avgTime: {
      label: "Avg Time (min)",
      color: "var(--chart-1)",
    },
    success: {
      label: "Success Rate (%)",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate and manage automated reports for city operations</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Auto-generated</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">100% success rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Needs attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Input
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="generating">Generating</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
          </SelectContent>
        </Select>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="on-demand">On-demand</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="reports" className="w-full">
        <TabsList>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="schedules">Schedules</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Report Library</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Format</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Run</TableHead>
                    <TableHead>Next Run</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{report.name}</div>
                          <div className="text-sm text-muted-foreground">{report.description}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={report.type === "scheduled" ? "default" : "secondary"}>
                          {report.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {getFormatIcon(report.format)}
                          {report.format}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(report.status)} className="flex items-center gap-1 w-fit">
                          {getStatusIcon(report.status)}
                          {report.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{report.lastRun}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{report.nextRun}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{report.size}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share className="h-3 w-3" />
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

        <TabsContent value="analytics" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Report Generation Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Report Generation Trends</CardTitle>
                <CardDescription>Monthly report generation and failure rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <AreaChart data={reportGenerationData}>
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
                      dataKey="generated"
                      type="natural"
                      fill="var(--color-generated)"
                      fillOpacity={0.4}
                      stroke="var(--color-generated)"
                    />
                    <Area
                      dataKey="failed"
                      type="natural"
                      fill="var(--color-failed)"
                      fillOpacity={0.4}
                      stroke="var(--color-failed)"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Report Type Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Report Type Distribution</CardTitle>
                <CardDescription>Breakdown of report types by volume</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                    />
                    <Pie
                      data={reportTypeData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                    >
                      {reportTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Report Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Report Performance Metrics</CardTitle>
              <CardDescription>Daily report generation time and success rates</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart data={reportPerformanceData}>
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
                    dataKey="success"
                    fill="var(--color-success)"
                    fillOpacity={0.7}
                    radius={4}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Incident Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Standard template for incident reporting and analysis
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Preview</Button>
                  <Button size="sm">Use Template</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-4 w-4" />
                  Traffic Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive traffic flow and congestion analysis
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Preview</Button>
                  <Button size="sm">Use Template</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Resource Utilization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Police resource allocation and efficiency metrics
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Preview</Button>
                  <Button size="sm">Use Template</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="schedules" className="mt-6">
      <Card>
        <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
        </CardHeader>
        <CardContent>
              <div className="space-y-4">
                {filteredReports.filter(r => r.type === "scheduled").map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Checkbox />
                      <div>
                        <div className="font-medium">{report.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Next run: {report.nextRun}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={getStatusColor(report.status)} className="flex items-center gap-1">
                        {getStatusIcon(report.status)}
                        {report.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Pause className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
        </CardContent>
      </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


