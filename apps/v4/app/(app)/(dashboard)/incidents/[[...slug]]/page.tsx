"use client"

import * as React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york-v4/ui/table"
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Phone, 
  Plus,
  Search,
  Eye,
  Edit,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react"

export default function IncidentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const incidents = [
    {
      id: "INC-001",
      title: "Traffic Accident - Ring Road",
      description: "Two-vehicle collision causing traffic backup",
      status: "active",
      priority: "high",
      location: "Ring Road, Sector 5",
      reporter: "Rajesh Kumar",
      phone: "+91 98765 43210",
      timestamp: "2024-01-15 14:30",
      assignedTo: "Traffic Unit Alpha",
      eta: "5 mins"
    },
    {
      id: "INC-002", 
      title: "Public Disturbance - Mall Area",
      description: "Crowd gathering causing obstruction",
      status: "investigating",
      priority: "medium",
      location: "City Mall, Ground Floor",
      reporter: "Priya Sharma",
      phone: "+91 98765 43211",
      timestamp: "2024-01-15 14:15",
      assignedTo: "Patrol Unit Beta",
      eta: "8 mins"
    },
    {
      id: "INC-003",
      title: "Suspicious Activity - Park",
      description: "Unattended bag reported by security",
      status: "resolved",
      priority: "low",
      location: "Central Park, Gate 2",
      reporter: "Amit Patel",
      phone: "+91 98765 43212",
      timestamp: "2024-01-15 13:45",
      assignedTo: "Bomb Squad",
      eta: "Resolved"
    },
    {
      id: "INC-004",
      title: "Traffic Violation - Highway",
      description: "Speeding vehicle causing danger",
      status: "active",
      priority: "high",
      location: "Highway 7, Km 15",
      reporter: "Deepika Singh",
      phone: "+91 98765 43213",
      timestamp: "2024-01-15 14:45",
      assignedTo: "Traffic Unit Gamma",
      eta: "3 mins"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "destructive"
      case "investigating": return "default"
      case "resolved": return "secondary"
      default: return "outline"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive"
      case "medium": return "default"
      case "low": return "secondary"
      default: return "outline"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <AlertCircle className="h-4 w-4" />
      case "investigating": return <Clock className="h-4 w-4" />
      case "resolved": return <CheckCircle className="h-4 w-4" />
      default: return <XCircle className="h-4 w-4" />
    }
  }

  const filteredIncidents = incidents.filter(incident => {
    const matchesSearch = incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         incident.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         incident.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || incident.status === statusFilter
    const matchesPriority = priorityFilter === "all" || incident.priority === priorityFilter
    
    return matchesSearch && matchesStatus && matchesPriority
  })

  const tabs = [
    { v: "kanban", t: "Kanban" },
    { v: "timeline", t: "Timeline" },
    { v: "table", t: "Table" },
    { v: "map", t: "Map" },
  ]

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Incident Management</h1>
          <p className="text-muted-foreground">Track and manage all city incidents in real-time</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Incident
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Incidents</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Under Investigation</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">-1 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">+5 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2m</div>
            <p className="text-xs text-muted-foreground">-0.8m improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search incidents..."
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
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="investigating">Investigating</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="table" className="w-full">
        <TabsList>
          {tabs.map(({ v, t }) => (
            <TabsTrigger key={v} value={v}>{t}</TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="table" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Incident List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Reporter</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredIncidents.map((incident) => (
                    <TableRow key={incident.id}>
                      <TableCell className="font-medium">{incident.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{incident.title}</div>
                          <div className="text-sm text-muted-foreground">{incident.description}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(incident.status)} className="flex items-center gap-1 w-fit">
                          {getStatusIcon(incident.status)}
                          {incident.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getPriorityColor(incident.priority)}>
                          {incident.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {incident.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{incident.reporter}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {incident.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{incident.timestamp}</div>
                          <div className="text-sm text-muted-foreground">ETA: {incident.eta}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-3 w-3" />
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

        <TabsContent value="kanban" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  Active
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {filteredIncidents.filter(i => i.status === "active").map((incident) => (
                  <div key={incident.id} className="p-3 border rounded-lg hover:bg-muted/50">
                    <div className="font-medium text-sm">{incident.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{incident.location}</div>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant={getPriorityColor(incident.priority)} className="text-xs">
                        {incident.priority}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{incident.eta}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  Investigating
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {filteredIncidents.filter(i => i.status === "investigating").map((incident) => (
                  <div key={incident.id} className="p-3 border rounded-lg hover:bg-muted/50">
                    <div className="font-medium text-sm">{incident.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{incident.location}</div>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant={getPriorityColor(incident.priority)} className="text-xs">
                        {incident.priority}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{incident.eta}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Resolved
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {filteredIncidents.filter(i => i.status === "resolved").map((incident) => (
                  <div key={incident.id} className="p-3 border rounded-lg hover:bg-muted/50">
                    <div className="font-medium text-sm">{incident.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{incident.location}</div>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant={getPriorityColor(incident.priority)} className="text-xs">
                        {incident.priority}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{incident.eta}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Incident Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredIncidents.map((incident, index) => (
                  <div key={incident.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        incident.status === "active" ? "bg-red-500" :
                        incident.status === "investigating" ? "bg-yellow-500" : "bg-green-500"
                      }`} />
                      {index < filteredIncidents.length - 1 && (
                        <div className="w-px h-16 bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="font-medium">{incident.title}</div>
                      <div className="text-sm text-muted-foreground">{incident.description}</div>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span>{incident.timestamp}</span>
                        <span>{incident.location}</span>
                        <Badge variant={getStatusColor(incident.status)} className="text-xs">
                          {incident.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="map" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Incident Map View</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Interactive map showing incident locations</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {filteredIncidents.length} incidents displayed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


