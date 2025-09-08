"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york-v4/ui/table"
import { 
  FileText, 
  Plus, 
  Edit, 
  Copy, 
  Trash2, 
  MessageSquare, 
  AlertTriangle,
  Search,
  Filter,
  Clock,
  User
} from "lucide-react"

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = React.useState("")

  const replyTemplates = [
    {
      id: 1,
      title: "Traffic Update Response",
      category: "Traffic",
      content: "Thank you for bringing this to our attention. Our traffic management team is aware of the situation on [LOCATION] and is working to resolve it. Expected clearance time: [TIME]. Please use alternate routes via [ALTERNATE_ROUTE].",
      variables: ["LOCATION", "TIME", "ALTERNATE_ROUTE"],
      lastUsed: "2 hours ago",
      useCount: 47
    },
    {
      id: 2,
      title: "Incident Acknowledgment",
      category: "Incidents", 
      content: "We have received your report regarding [INCIDENT_TYPE] at [LOCATION]. Incident reference: [REF_NUMBER]. Our officers are dispatched and will be on scene within [ETA] minutes. We will keep you updated.",
      variables: ["INCIDENT_TYPE", "LOCATION", "REF_NUMBER", "ETA"],
      lastUsed: "1 hour ago",
      useCount: 23
    },
    {
      id: 3,
      title: "General Information Request",
      category: "Information",
      content: "Thank you for your query. For [REQUEST_TYPE], please contact our [DEPARTMENT] at [PHONE_NUMBER] during business hours (9 AM - 5 PM) or visit our office at [ADDRESS]. Reference: [REF_NUMBER]",
      variables: ["REQUEST_TYPE", "DEPARTMENT", "PHONE_NUMBER", "ADDRESS", "REF_NUMBER"],
      lastUsed: "30 mins ago",
      useCount: 156
    }
  ]

  const incidentTemplates = [
    {
      id: 1,
      title: "Traffic Accident Report",
      severity: "High",
      department: "Traffic Police",
      content: "Traffic accident reported at [LOCATION]. Time: [TIME]. Vehicles involved: [VEHICLE_COUNT]. Injuries: [INJURY_STATUS]. Road status: [ROAD_STATUS]. Estimated clearance: [CLEARANCE_TIME].",
      assignedUnits: ["Traffic Unit 1", "Ambulance 203"],
      lastUsed: "45 mins ago"
    },
    {
      id: 2,
      title: "Public Disturbance",
      severity: "Medium",
      department: "Law & Order",
      content: "Public disturbance reported at [LOCATION]. Nature: [DISTURBANCE_TYPE]. Crowd size: [CROWD_SIZE]. Officers required: [OFFICER_COUNT]. Backup needed: [BACKUP_STATUS].",
      assignedUnits: ["Patrol Unit 12", "Patrol Unit 15"],
      lastUsed: "2 hours ago"
    },
    {
      id: 3,
      title: "Emergency Response",
      severity: "Critical",
      department: "Emergency Response",
      content: "Emergency situation at [LOCATION]. Type: [EMERGENCY_TYPE]. Immediate response required. Units dispatched: [UNITS]. ETA: [ETA]. Command post: [COMMAND_LOCATION].",
      assignedUnits: ["Emergency Response Team", "Command Unit"],
      lastUsed: "3 hours ago"
    }
  ]

  const keywordTemplates = [
    {
      id: 1,
      keyword: "traffic jam",
      autoResponse: true,
      template: "Traffic Update Response",
      priority: "Medium",
      department: "Traffic Police",
      actions: ["Send Traffic Update", "Dispatch Unit", "Update Social Media"],
      triggerCount: 234
    },
    {
      id: 2,
      keyword: "accident",
      autoResponse: true,
      template: "Traffic Accident Report",
      priority: "High", 
      department: "Emergency Response",
      actions: ["Create Incident", "Dispatch Emergency Unit", "Alert Hospitals"],
      triggerCount: 89
    },
    {
      id: 3,
      keyword: "protest",
      autoResponse: false,
      template: "Public Disturbance",
      priority: "Critical",
      department: "Law & Order",
      actions: ["Create Incident", "Alert Command Center", "Deploy Additional Units"],
      triggerCount: 12
    }
  ]

  const tabs = [
    { v: "replies", t: "Reply Templates", icon: MessageSquare },
    { v: "incidents", t: "Incident Templates", icon: AlertTriangle },
    { v: "keywords", t: "Keyword Automation", icon: Search },
    { v: "create", t: "Create Template", icon: Plus }
  ]

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Response Templates</h1>
      </div>
      
      <Tabs defaultValue="replies" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {tabs.map(({ v, t, icon: Icon }) => (
            <TabsTrigger key={v} value={v} className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{t}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="replies" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Reply Templates</h3>
              <p className="text-sm text-muted-foreground">Pre-configured responses for common citizen inquiries</p>
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Template
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {replyTemplates.map((template) => (
              <Card key={template.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">{template.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{template.category}</Badge>
                        <span className="text-xs text-muted-foreground">
                          Used {template.useCount} times • Last used {template.lastUsed}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm bg-muted/50 p-3 rounded">{template.content}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground">Variables:</span>
                      {template.variables.map((variable) => (
                        <Badge key={variable} variant="secondary" className="text-xs">
                          {variable}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="incidents" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Incident Report Templates</h3>
              <p className="text-sm text-muted-foreground">Standardized formats for incident documentation</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Incident Template
            </Button>
          </div>

          <div className="grid gap-4">
            {incidentTemplates.map((template) => (
              <Card key={template.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">{template.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={
                          template.severity === 'Critical' ? 'destructive' : 
                          template.severity === 'High' ? 'secondary' : 'outline'
                        }>
                          {template.severity}
                        </Badge>
                        <Badge variant="outline">{template.department}</Badge>
                        <span className="text-xs text-muted-foreground">
                          Last used {template.lastUsed}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm bg-muted/50 p-3 rounded">{template.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Assigned Units:</span>
                        {template.assignedUnits.map((unit) => (
                          <Badge key={unit} variant="secondary" className="text-xs">
                            {unit}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" variant="outline">Use Template</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Keyword Automation</h3>
              <p className="text-sm text-muted-foreground">Automated responses triggered by specific keywords</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Keyword Rule
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Keyword</TableHead>
                    <TableHead>Template</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Auto Response</TableHead>
                    <TableHead>Triggers</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywordTemplates.map((keyword) => (
                    <TableRow key={keyword.id}>
                      <TableCell className="font-medium">{keyword.keyword}</TableCell>
                      <TableCell>{keyword.template}</TableCell>
                      <TableCell>
                        <Badge variant={
                          keyword.priority === 'Critical' ? 'destructive' : 
                          keyword.priority === 'High' ? 'secondary' : 'outline'
                        }>
                          {keyword.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{keyword.department}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${
                            keyword.autoResponse ? 'bg-green-500' : 'bg-gray-400'
                          }`} />
                          {keyword.autoResponse ? 'Enabled' : 'Disabled'}
                        </div>
                      </TableCell>
                      <TableCell>{keyword.triggerCount}</TableCell>
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

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Automation Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {keywordTemplates.map((keyword) => (
                <div key={keyword.id} className="p-3 border rounded">
                  <div className="font-medium text-sm mb-2">{keyword.keyword}</div>
                  <div className="space-y-1">
                    {keyword.actions.map((action, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                        <div className="h-1 w-1 rounded-full bg-primary" />
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Template</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="template-title">Template Title</Label>
                  <Input id="template-title" placeholder="e.g., Traffic Update Response" />
                </div>

                <div className="space-y-2">
                  <Label>Template Type</Label>
                  <Select defaultValue="reply">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reply">Reply Template</SelectItem>
                      <SelectItem value="incident">Incident Template</SelectItem>
                      <SelectItem value="keyword">Keyword Automation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Category/Department</Label>
                  <Select defaultValue="traffic">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="traffic">Traffic Police</SelectItem>
                      <SelectItem value="law-order">Law & Order</SelectItem>
                      <SelectItem value="emergency">Emergency Response</SelectItem>
                      <SelectItem value="intelligence">Intelligence</SelectItem>
                      <SelectItem value="general">General Information</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Priority Level</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="template-content">Template Content</Label>
                  <Textarea 
                    id="template-content" 
                    placeholder="Enter your template content. Use [VARIABLE_NAME] for dynamic variables..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="template-variables">Variables (comma-separated)</Label>
                  <Input id="template-variables" placeholder="LOCATION, TIME, REF_NUMBER" />
                </div>

                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Template
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Template Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="font-medium">Your Template</span>
                    <Badge variant="outline">Reply</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    Preview of how your template will appear to officers
                  </div>
                  <div className="bg-background p-3 rounded border text-sm">
                    Template content will appear here with highlighted [VARIABLES] in place.
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Template Guidelines</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Use [VARIABLE_NAME] for dynamic content</li>
                    <li>• Keep responses professional and clear</li>
                    <li>• Include reference numbers for tracking</li>
                    <li>• Test templates before deployment</li>
                    <li>• Regular review and updates recommended</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


