"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Progress } from "@/registry/new-york-v4/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york-v4/ui/table"
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import { Calendar } from "@/registry/new-york-v4/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/new-york-v4/ui/popover"
import { 
  FileText, 
  Download, 
  Plus, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle, 
  FileSpreadsheet,
  FileJson,
  Database,
  Trash2,
  RefreshCw,
  Play,
  Pause
} from "lucide-react"

export default function ExportsPage() {
  const [fromDate, setFromDate] = React.useState<Date>()
  const [toDate, setToDate] = React.useState<Date>()
  const [selectedDataSources, setSelectedDataSources] = React.useState<string[]>([])

  const exportJobs = [
    {
      id: 1,
      name: "Weekly Intelligence Report",
      type: "PDF Report",
      status: "Completed",
      progress: 100,
      createdAt: "2024-01-15 09:30:00",
      completedAt: "2024-01-15 09:45:00",
      fileSize: "2.4 MB",
      downloadUrl: "/exports/weekly-intel-2024-01-15.pdf",
      dataSource: "Intelligence Analysis",
      recordCount: 1234,
      schedule: "Weekly"
    },
    {
      id: 2,
      name: "Traffic Incident Data Export",
      type: "CSV Export",
      status: "Processing",
      progress: 67,
      createdAt: "2024-01-15 10:15:00",
      completedAt: null,
      fileSize: null,
      downloadUrl: null,
      dataSource: "Traffic Management",
      recordCount: 8976,
      schedule: "On Demand"
    },
    {
      id: 3,
      name: "Monthly Campaign Analytics",
      type: "Excel Report", 
      status: "Failed",
      progress: 0,
      createdAt: "2024-01-15 08:00:00",
      completedAt: null,
      fileSize: null,
      downloadUrl: null,
      dataSource: "Campaigns",
      recordCount: 567,
      schedule: "Monthly"
    },
    {
      id: 4,
      name: "API Data Backup",
      type: "JSON Export",
      status: "Scheduled",
      progress: 0,
      createdAt: "2024-01-15 11:00:00",
      completedAt: null,
      fileSize: null,
      downloadUrl: null,
      dataSource: "System Logs",
      recordCount: 45678,
      schedule: "Daily"
    }
  ]

  const scheduledExports = [
    {
      id: 1,
      name: "Daily System Backup",
      frequency: "Daily",
      nextRun: "2024-01-16 02:00:00",
      lastRun: "2024-01-15 02:00:00",
      status: "Active",
      format: "JSON",
      dataSource: "All Systems"
    },
    {
      id: 2,
      name: "Weekly Intelligence Summary",
      frequency: "Weekly",
      nextRun: "2024-01-21 09:00:00", 
      lastRun: "2024-01-14 09:00:00",
      status: "Active",
      format: "PDF",
      dataSource: "Intelligence"
    },
    {
      id: 3,
      name: "Monthly Performance Report",
      frequency: "Monthly",
      nextRun: "2024-02-01 08:00:00",
      lastRun: "2024-01-01 08:00:00", 
      status: "Paused",
      format: "Excel",
      dataSource: "Analytics"
    }
  ]

  const dataSources = [
    { id: "intelligence", name: "Intelligence Analysis", records: 15634, description: "Intelligence reports, alerts, and analysis data" },
    { id: "traffic", name: "Traffic Management", records: 89234, description: "Traffic incidents, violations, and flow data" },
    { id: "incidents", name: "Incident Reports", records: 5677, description: "Police incident reports and case files" },
    { id: "monitoring", name: "Social Monitoring", records: 234567, description: "Social media monitoring and sentiment data" },
    { id: "campaigns", name: "Campaign Data", records: 1234, description: "Marketing campaign performance and metrics" },
    { id: "users", name: "User Activity", records: 45678, description: "System user logs and activity data" },
    { id: "system", name: "System Logs", records: 678901, description: "Application logs and system events" }
  ]

  const exportMetrics = [
    { label: "Total Exports Today", value: "23", change: "+5", icon: Download },
    { label: "Active Schedules", value: "12", change: "+2", icon: Clock },
    { label: "Data Processed (GB)", value: "45.8", change: "+12%", icon: Database },
    { label: "Success Rate", value: "98.7%", change: "+1.2%", icon: CheckCircle }
  ]

  const tabs = [
    { v: "jobs", t: "Export Jobs", icon: FileText },
    { v: "create", t: "Create Export", icon: Plus },
    { v: "scheduled", t: "Scheduled Exports", icon: Clock },
    { v: "data-sources", t: "Data Sources", icon: Database }
  ]

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Download className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Data Export Center</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {exportMetrics.map((metric, index) => (
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
      
      <Tabs defaultValue="jobs" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {tabs.map(({ v, t, icon: Icon }) => (
            <TabsTrigger key={v} value={v} className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{t}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="jobs" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Export Jobs</h3>
              <p className="text-sm text-muted-foreground">Monitor and download your data exports</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Export
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Export Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Records</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exportJobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {job.type.includes('PDF') && <FileText className="h-4 w-4 text-red-500" />}
                          {job.type.includes('CSV') && <FileSpreadsheet className="h-4 w-4 text-green-500" />}
                          {job.type.includes('Excel') && <FileSpreadsheet className="h-4 w-4 text-green-600" />}
                          {job.type.includes('JSON') && <FileJson className="h-4 w-4 text-blue-500" />}
                          {job.type}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={
                          job.status === 'Completed' ? 'secondary' :
                          job.status === 'Processing' ? 'outline' :
                          job.status === 'Failed' ? 'destructive' : 'outline'
                        }>
                          {job.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Progress value={job.progress} className="w-16 h-2" />
                            <span className="text-xs">{job.progress}%</span>
                          </div>
                          {job.fileSize && (
                            <div className="text-xs text-muted-foreground">{job.fileSize}</div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{job.recordCount.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="text-sm">{job.createdAt.split(' ')[0]} {job.createdAt.split(' ')[1].slice(0,5)}</div>
                        <div className="text-xs text-muted-foreground">{job.schedule}</div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {job.status === 'Completed' && (
                            <Button size="sm" variant="ghost">
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
                          {job.status === 'Processing' && (
                            <Button size="sm" variant="ghost">
                              <Pause className="h-4 w-4" />
                            </Button>
                          )}
                          {job.status === 'Failed' && (
                            <Button size="sm" variant="ghost">
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                          )}
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

        <TabsContent value="create" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Export</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="export-name">Export Name</Label>
                  <Input id="export-name" placeholder="e.g., Weekly Intelligence Report" />
                </div>

                <div className="space-y-2">
                  <Label>Export Format</Label>
                  <Select defaultValue="pdf">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF Report</SelectItem>
                      <SelectItem value="csv">CSV File</SelectItem>
                      <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                      <SelectItem value="json">JSON Data</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Data Sources</Label>
                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                    {dataSources.map((source) => (
                      <div key={source.id} className="flex items-center space-x-2 p-2 border rounded">
                        <Checkbox 
                          id={`source-${source.id}`}
                          checked={selectedDataSources.includes(source.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedDataSources([...selectedDataSources, source.id])
                            } else {
                              setSelectedDataSources(selectedDataSources.filter(id => id !== source.id))
                            }
                          }}
                        />
                        <div className="flex-1">
                          <Label htmlFor={`source-${source.id}`} className="font-medium text-sm">
                            {source.name}
                          </Label>
                          <div className="text-xs text-muted-foreground">
                            {source.records.toLocaleString()} records • {source.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>From Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {fromDate ? fromDate.toLocaleDateString() : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={fromDate} onSelect={setFromDate} />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>To Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {toDate ? toDate.toLocaleDateString() : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={toDate} onSelect={setToDate} />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Schedule Type</Label>
                  <Select defaultValue="once">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="once">Run Once</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Export Job
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="font-medium">Your Export</span>
                    <Badge variant="outline">PDF Report</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Data Sources:</span>
                      <span>{selectedDataSources.length} selected</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date Range:</span>
                      <span>
                        {fromDate && toDate ? 
                          `${fromDate.toLocaleDateString()} - ${toDate.toLocaleDateString()}` : 
                          'Not set'
                        }
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated Records:</span>
                      <span>
                        {selectedDataSources.reduce((total, id) => {
                          const source = dataSources.find(s => s.id === id)
                          return total + (source?.records || 0)
                        }, 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Export Guidelines</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Large exports may take several minutes to process</li>
                    <li>• You&apos;ll receive an email when your export is ready</li>
                    <li>• Exports are available for 30 days</li>
                    <li>• Sensitive data is automatically filtered</li>
                    <li>• Maximum 1M records per export</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Scheduled Exports</h3>
              <p className="text-sm text-muted-foreground">Automated data export schedules</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Schedule
            </Button>
          </div>

          <div className="grid gap-4">
            {scheduledExports.map((schedule) => (
              <Card key={schedule.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium">{schedule.name}</h4>
                        <Badge variant={schedule.status === 'Active' ? 'secondary' : 'outline'}>
                          {schedule.status}
                        </Badge>
                        <Badge variant="outline">{schedule.format}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Frequency: {schedule.frequency}</span>
                        <span>Data: {schedule.dataSource}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        {schedule.status === 'Active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t">
                    <div>
                      <div className="text-xs text-muted-foreground">Next Run</div>
                      <div className="text-sm">{schedule.nextRun}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Last Run</div>
                      <div className="text-sm">{schedule.lastRun}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="data-sources" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Available Data Sources</h3>
              <p className="text-sm text-muted-foreground">System data available for export</p>
            </div>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Data
            </Button>
          </div>

          <div className="grid gap-4">
            {dataSources.map((source) => (
              <Card key={source.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="font-medium">{source.name}</h4>
                      <p className="text-sm text-muted-foreground">{source.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-lg">{source.records.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">records</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Quick Export
                    </Button>
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


