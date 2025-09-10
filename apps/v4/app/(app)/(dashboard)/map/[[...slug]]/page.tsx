"use client"

import * as React from "react"
import { useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Slider } from "@/registry/new-york-v4/ui/slider"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import { 
  MapPin, 
  Layers, 
  Filter, 
  AlertTriangle, 
  Car, 
  Users, 
  Activity,
  Eye,
  Navigation,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Settings,
  Download,
  Share,
  Maximize
} from "lucide-react"
import { GoogleMap } from "@/components/google-map"
import { ContextualBanner } from "@/components/contextual-banner"

export default function MapPage({ params }: { params: { slug?: string[] } }) {
  const [selectedLayer, setSelectedLayer] = useState("incidents")
  const [filterRadius, setFilterRadius] = useState([5])
  const [realTimeMode, setRealTimeMode] = useState(true)
  const [selectedZone, setSelectedZone] = useState<string | null>(null)
  const [mapCenter, setMapCenter] = useState({ lat: 12.9716, lng: 77.5946 })
  const [mapZoom, setMapZoom] = useState(12)

  const resolvedParams = params
  const slug = resolvedParams.slug ?? []
  const view = slug[0] ?? "overview"

  const zones = [
    { id: "zone-1", name: "Whitefield", incidents: 23, severity: "high", lat: 12.9698, lng: 77.7500, alerts: 5 },
    { id: "zone-2", name: "Koramangala", incidents: 18, severity: "medium", lat: 12.9279, lng: 77.6271, alerts: 3 },
    { id: "zone-3", name: "Indiranagar", incidents: 15, severity: "medium", lat: 12.9716, lng: 77.6412, alerts: 2 },
    { id: "zone-4", name: "HSR Layout", incidents: 12, severity: "low", lat: 12.9082, lng: 77.6476, alerts: 1 },
    { id: "zone-5", name: "Electronic City", incidents: 20, severity: "high", lat: 12.8456, lng: 77.6603, alerts: 4 },
    { id: "zone-6", name: "MG Road", incidents: 25, severity: "high", lat: 12.9753, lng: 77.6047, alerts: 6 },
    { id: "zone-7", name: "Jayanagar", incidents: 14, severity: "medium", lat: 12.9279, lng: 77.5837, alerts: 2 },
    { id: "zone-8", name: "BTM Layout", incidents: 16, severity: "medium", lat: 12.9165, lng: 77.6101, alerts: 3 },
    { id: "zone-9", name: "Banashankari", incidents: 8, severity: "low", lat: 12.9081, lng: 77.5753, alerts: 1 },
    { id: "zone-10", name: "Marathahalli", incidents: 19, severity: "high", lat: 12.9591, lng: 77.6974, alerts: 4 },
    { id: "zone-11", name: "Rajajinagar", incidents: 11, severity: "low", lat: 12.9886, lng: 77.5535, alerts: 1 },
    { id: "zone-12", name: "JP Nagar", incidents: 13, severity: "medium", lat: 12.9098, lng: 77.5951, alerts: 2 },
  ]

  const layers = [
    { id: "incidents", name: "Active Incidents", icon: AlertTriangle, count: 67, color: "bg-red-500" },
    { id: "traffic", name: "Traffic Flow", icon: Car, count: 234, color: "bg-orange-500" },
    { id: "crowds", name: "Crowd Density", icon: Users, count: 45, color: "bg-yellow-500" },
    { id: "cameras", name: "CCTV Coverage", icon: Eye, count: 1247, color: "bg-blue-500" },
    { id: "patrols", name: "Police Patrols", icon: Navigation, count: 89, color: "bg-green-500" },
  ]

  const recentActivities = [
    { type: "Incident", message: "Traffic accident reported", location: "Ring Road", time: "2 min ago", severity: "high" },
    { type: "Alert", message: "Crowd gathering detected", location: "Freedom Park", time: "5 min ago", severity: "medium" },
    { type: "Traffic", message: "Heavy congestion buildup", location: "Outer Ring Road", time: "8 min ago", severity: "low" },
    { type: "Patrol", message: "Unit dispatched to location", location: "Koramangala", time: "12 min ago", severity: "info" },
  ]

  if (view !== "overview" && view !== "heatmap" && view !== "clusters" && view !== "routes") {
    return notFound()
  }

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold tracking-tight">Geographic Intelligence</h1>
            <Badge variant="secondary" className="rounded">Real-time</Badge>
          </div>
          <p className="text-muted-foreground">Spatial analysis and geographic intelligence for smart city operations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Share className="h-4 w-4 mr-1" />
            Share
          </Button>
          <Button size="sm">
            <Settings className="h-4 w-4 mr-1" />
            Configure
          </Button>
        </div>
      </div>

      {/* Contextual Banner */}
      <ContextualBanner pageKey="map" />

      <div className="grid grid-cols-12 gap-6">
        {/* Map Controls Panel */}
        <div className="col-span-3 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                Map Layers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {layers.map((layer) => (
                <div key={layer.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${layer.color}`} />
                    <span className="text-sm">{layer.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{layer.count}</span>
                    <Switch 
                      checked={selectedLayer === layer.id}
                      onCheckedChange={() => setSelectedLayer(layer.id)}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="zone-select">Zone Selection</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Zones</SelectItem>
                    {zones.map((zone) => (
                      <SelectItem key={zone.id} value={zone.id}>
                        {zone.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Search Radius: {filterRadius[0]} km</Label>
                <Slider
                  value={filterRadius}
                  onValueChange={setFilterRadius}
                  max={20}
                  min={1}
                  step={1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="time-range">Time Range</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Last 24 hours" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1h">Last 1 hour</SelectItem>
                    <SelectItem value="6h">Last 6 hours</SelectItem>
                    <SelectItem value="24h">Last 24 hours</SelectItem>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="realtime">Real-time Updates</Label>
                <Switch 
                  checked={realTimeMode}
                  onCheckedChange={setRealTimeMode}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Zone Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {zones.slice(0, 3).map((zone) => (
                  <div 
                    key={zone.id}
                    className={`p-3 rounded-lg border cursor-pointer hover:bg-muted/50 ${
                      selectedZone === zone.id ? 'bg-muted border-primary' : ''
                    }`}
                    onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{zone.name}</span>
                      <Badge variant={zone.severity === 'high' ? 'destructive' : zone.severity === 'medium' ? 'default' : 'secondary'} className="text-xs">
                        {zone.incidents}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {zone.alerts} active alerts
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Map Area */}
        <div className="col-span-6">
          <Card className="h-[800px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Interactive Map View</CardTitle>
              <div className="flex gap-1">
                <Button variant="outline" size="sm">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-full">
                <GoogleMap
                  center={mapCenter}
                  zoom={mapZoom}
                  className="h-full w-full rounded-b-lg"
                  markers={zones.map(zone => ({
                    id: zone.id,
                    lat: zone.lat,
                    lng: zone.lng,
                    title: zone.name,
                    severity: zone.severity as 'high' | 'medium' | 'low',
                    incidents: zone.incidents
                  }))}
                  onMarkerClick={(markerId) => {
                    const zone = zones.find(z => z.id === markerId)
                    if (zone) {
                      setSelectedZone(selectedZone === markerId ? null : markerId)
                      setMapCenter({ lat: zone.lat, lng: zone.lng })
                      setMapZoom(14)
                    }
                  }}
                />

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                  <div className="text-xs font-medium mb-2">Incident Severity</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <span className="text-xs">High (15+)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full" />
                      <span className="text-xs">Medium (5-15)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-xs">Low (0-5)</span>
                    </div>
                  </div>
                </div>

                {/* Current View Info */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                  <div className="text-xs text-muted-foreground">Viewing: Bangalore City</div>
                  <div className="text-sm font-medium">Active Layer: {layers.find(l => l.id === selectedLayer)?.name}</div>
                  {selectedZone && (
                    <div className="text-xs text-blue-600 font-medium mt-1">
                      Selected: {zones.find(z => z.id === selectedZone)?.name}
                    </div>
                  )}
                </div>

                {/* Zoom Reset Button */}
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => {
                      setMapCenter({ lat: 12.9716, lng: 77.5946 })
                      setMapZoom(12)
                      setSelectedZone(null)
                    }}
                  >
                    Reset View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Panel */}
        <div className="col-span-3 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Live Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-2 p-2 rounded-lg hover:bg-muted/50">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.severity === 'high' ? 'bg-red-500' : 
                    activity.severity === 'medium' ? 'bg-orange-500' : 
                    activity.severity === 'low' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{activity.message}</div>
                    <div className="text-xs text-muted-foreground">{activity.location} • {activity.time}</div>
                  </div>
                  <Badge variant="outline" className="text-xs">{activity.type}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                Create Geo-fence
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Navigation className="h-4 w-4 mr-2" />
                Dispatch Unit
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Report Incident
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Eye className="h-4 w-4 mr-2" />
                View Cameras
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Zone Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Incidents</span>
                  <span className="font-bold">88</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Alerts</span>
                  <span className="font-bold text-orange-600">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Units Deployed</span>
                  <span className="font-bold text-green-600">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Response Time</span>
                  <span className="font-bold">4.2 min</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* View Tabs */}
      <div className="mt-6">
        <Tabs defaultValue={view} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" asChild>
              <Link href="/map/overview">Overview</Link>
            </TabsTrigger>
            <TabsTrigger value="heatmap" asChild>
              <Link href="/map/heatmap">Heat Map</Link>
            </TabsTrigger>
            <TabsTrigger value="clusters" asChild>
              <Link href="/map/clusters">Clusters</Link>
            </TabsTrigger>
            <TabsTrigger value="routes" asChild>
              <Link href="/map/routes">Routes</Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Geographic Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">High-risk zones</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Coverage area</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Active cameras</span>
                      <span className="font-medium">1,247</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Patrol Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Optimal routes</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Time saved</span>
                      <span className="font-medium">23%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Fuel efficiency</span>
                      <span className="font-medium">+18%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Predictive Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Risk forecast</span>
                      <span className="font-medium text-orange-600">Medium</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Next hotspot</span>
                      <span className="font-medium">HSR Layout</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Confidence</span>
                      <span className="font-medium">76%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="heatmap" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Heat Map Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center text-muted-foreground">
                  Advanced heat map visualization would be displayed here with incident density overlays
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clusters" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Incident Clustering</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center text-muted-foreground">
                  Machine learning-based incident clustering analysis would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="routes" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Optimized Patrol Routes</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Machine learning algorithms analyze historical data, current incidents, and traffic patterns to generate optimal patrol routes
                  </p>
                </CardHeader>
                <CardContent>
                  <GoogleMap
                    center={mapCenter}
                    zoom={mapZoom}
                    className="h-96 w-full rounded-lg"
                    markers={zones.filter(zone => zone.severity === 'high').map(zone => ({
                      id: `route-${zone.id}`,
                      lat: zone.lat,
                      lng: zone.lng,
                      title: `Priority Route - ${zone.name}`,
                      severity: zone.severity as 'high' | 'medium' | 'low',
                      incidents: zone.incidents
                    }))}
                    onMarkerClick={(markerId) => {
                      const zoneId = markerId.replace('route-', '')
                      const zone = zones.find(z => z.id === zoneId)
                      if (zone) {
                        setMapCenter({ lat: zone.lat, lng: zone.lng })
                        setMapZoom(15)
                      }
                    }}
                  />
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Route Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {zones
                      .filter(zone => zone.severity === 'high')
                      .slice(0, 3)
                      .map((zone, index) => (
                        <div key={zone.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge variant="destructive" className="text-xs">
                                Priority {index + 1}
                              </Badge>
                              <span className="font-medium">{zone.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {zone.incidents} incidents
                            </span>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Estimated patrol time:</span>
                              <span className="font-medium">{25 + index * 5} min</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Risk reduction:</span>
                              <span className="font-medium text-green-600">{35 - index * 5}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Optimal deployment time:</span>
                              <span className="font-medium">
                                {new Date(Date.now() + (index * 30 * 60 * 1000)).toLocaleTimeString('en-US', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </span>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => {
                                setMapCenter({ lat: zone.lat, lng: zone.lng })
                                setMapZoom(15)
                              }}
                            >
                              <MapPin className="h-3 w-3 mr-1" />
                              View Route
                            </Button>
                            <Button size="sm" variant="outline">
                              <Navigation className="h-3 w-3 mr-1" />
                              Dispatch Unit
                            </Button>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Route Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-primary">12</div>
                          <div className="text-xs text-muted-foreground">Active Routes</div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">23%</div>
                          <div className="text-xs text-muted-foreground">Time Saved</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Coverage efficiency:</span>
                          <span className="font-medium">87%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Fuel savings:</span>
                          <span className="font-medium text-green-600">₹2,340/day</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Response time improvement:</span>
                          <span className="font-medium text-blue-600">-2.3 min</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


