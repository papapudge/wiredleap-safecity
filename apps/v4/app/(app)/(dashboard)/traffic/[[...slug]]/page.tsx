"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Progress } from "@/registry/new-york-v4/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york-v4/ui/avatar"
import { Car, Camera, AlertTriangle, MapPin, Phone, User, CreditCard, Search, TrendingUp, Shield } from "lucide-react"

export default function TrafficPage() {
  const [licensePlate, setLicensePlate] = useState("")
  const [searchResults, setSearchResults] = useState<{
    plate: string;
    owner: {
      name: string;
      phone: string;
      address: string;
    };
    vehicle: {
      make: string;
      model: string;
      year: string;
      color: string;
      registrationDate: string;
      expiryDate: string;
    };
    violations: Array<{
      id: string;
      type: string;
      location: string;
      date: string;
      time: string;
      fine: string;
      status: string;
    }>;
  } | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleVehicleLookup = () => {
    if (!licensePlate.trim()) return
    setIsSearching(true)
    setTimeout(() => {
      setSearchResults({
        plate: licensePlate,
        owner: {
          name: "Rajesh Kumar Singh",
          phone: "+91 9876543210",
          address: "123, MG Road, Indiranagar, Bangalore - 560038",
          licenseNumber: "KA0320220012345",
          photo: "/avatars/driver.jpg"
        },
        vehicle: {
          model: "Honda City 2019",
          color: "White", 
          chassisNumber: "ABCD1234567890",
          registrationDate: "15-March-2019",
          insurance: "Valid till 14-March-2025",
          fitness: "Valid till 14-March-2024"
        },
        violations: [
          {
            id: "V001",
            type: "Overspeeding",
            location: "Ring Road, Koramangala",
            date: "2024-01-15",
            time: "14:30",
            fine: 1000,
            status: "unpaid",
            camera: "CAM-RR-12",
            speed: "78 km/h in 50 km/h zone"
          },
          {
            id: "V002",
            type: "Signal Jump", 
            location: "MG Road Traffic Signal",
            date: "2024-01-10",
            time: "09:15",
            fine: 1500,
            status: "paid",
            camera: "CAM-MG-05",
            evidence: "Red light violation captured"
          },
          {
            id: "V003",
            type: "Wrong Lane",
            location: "Electronic City Flyover",
            date: "2024-01-05",
            time: "18:45", 
            fine: 500,
            status: "disputed",
            camera: "CAM-EC-18",
            evidence: "Lane violation during peak hours"
          }
        ],
        socialSentiment: {
          mentions: 12,
          sentiment: "negative",
          complaints: [
            "This vehicle was involved in rash driving near school",
            "Saw this car jumping signals multiple times"
          ]
        }
      })
      setIsSearching(false)
    }, 1500)
  }

  const violationsStats = [
    { type: "Overspeeding", count: 1247, fine: 1247000, icon: TrendingUp },
    { type: "Signal Jump", count: 892, fine: 1338000, icon: AlertTriangle },
    { type: "Wrong Lane", count: 634, fine: 317000, icon: Car },
    { type: "Parking", count: 423, fine: 211500, icon: MapPin }
  ]

  const recentViolations = [
    {
      id: "V2024001",
      plate: "KA01AB1234", 
      type: "Overspeeding",
      location: "Ring Road",
      time: "2 min ago",
      fine: 1000,
      camera: "CAM-RR-12"
    },
    {
      id: "V2024002",
      plate: "KA05CD5678",
      type: "Signal Jump",
      location: "MG Road",
      time: "5 min ago", 
      fine: 1500,
      camera: "CAM-MG-05"
    },
    {
      id: "V2024003",
      plate: "KA02EF9012",
      type: "No Helmet",
      location: "Brigade Road",
      time: "8 min ago",
      fine: 500,
      camera: "CAM-BR-08"
    }
  ]

  const cameraStatus = [
    { id: "CAM-RR-12", location: "Ring Road Junction", status: "online", violations: 45 },
    { id: "CAM-MG-05", location: "MG Road Signal", status: "online", violations: 32 },
    { id: "CAM-EC-18", location: "Electronic City", status: "offline", violations: 0 },
    { id: "CAM-BR-08", location: "Brigade Road", status: "online", violations: 28 }
  ]

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Traffic Intelligence</h1>
          <p className="text-muted-foreground">ANPR violations, driver profiles, and traffic enforcement</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/campaigns">Traffic Campaigns</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/incidents/create">Report Incident</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="lookup" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="lookup">Vehicle Lookup</TabsTrigger>
          <TabsTrigger value="violations">Live Violations</TabsTrigger>
          <TabsTrigger value="cameras">Camera Network</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="lookup" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Vehicle Information Lookup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input 
                    placeholder="Enter license plate (e.g., KA01AB1234)" 
                    value={licensePlate}
                    onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
                    onKeyDown={(e) => e.key === 'Enter' && handleVehicleLookup()}
                  />
                </div>
                <Button onClick={handleVehicleLookup} disabled={isSearching || !licensePlate.trim()}>
                  {isSearching ? "Searching..." : "Lookup Vehicle"}
                </Button>
              </div>

              <div className="flex gap-4 text-sm">
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    <SelectItem value="ka">Karnataka</SelectItem>
                    <SelectItem value="tn">Tamil Nadu</SelectItem>
                    <SelectItem value="ap">Andhra Pradesh</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Vehicles</SelectItem>
                    <SelectItem value="car">Cars</SelectItem>
                    <SelectItem value="bike">Two Wheelers</SelectItem>
                    <SelectItem value="truck">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {searchResults && (
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Owner Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={searchResults.owner.photo} />
                      <AvatarFallback>{searchResults.owner.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{searchResults.owner.name}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3" />
                          {searchResults.owner.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          {searchResults.owner.address}
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-3 w-3" />
                          License: {searchResults.owner.licenseNumber}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    Vehicle Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Model:</span>
                      <p className="font-medium">{searchResults.vehicle.model}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Color:</span>
                      <p className="font-medium">{searchResults.vehicle.color}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Registration:</span>
                      <p className="font-medium">{searchResults.vehicle.registrationDate}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Insurance:</span>
                      <p className="font-medium text-green-600">{searchResults.vehicle.insurance}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Violation History ({searchResults.violations.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {searchResults.violations.map((violation, i: number) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Badge variant={
                            violation.status === 'paid' ? 'secondary' : 
                            violation.status === 'disputed' ? 'default' : 'destructive'
                          }>
                            {violation.type}
                          </Badge>
                          <div>
                            <p className="font-medium">{violation.location}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{violation.date} at {violation.time}</span>
                              <span>Camera: {violation.camera}</span>
                              {violation.speed && <span>{violation.speed}</span>}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-semibold">₹{violation.fine}</p>
                            <Badge variant={
                              violation.status === 'paid' ? 'default' :
                              violation.status === 'disputed' ? 'secondary' : 'destructive'
                            } className="text-xs">
                              {violation.status}
                            </Badge>
                          </div>
                          <Button size="sm" variant="outline">View</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Total Outstanding: ₹{
                        searchResults.violations
                          .filter(v => v.status === 'unpaid')
                          .reduce((sum: number, v) => sum + parseFloat(v.fine.replace('₹', '')), 0)
                      }</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Generate Notice</Button>
                      <Button size="sm">Collect Fine</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {searchResults.socialSentiment.mentions > 0 && (
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Social Intelligence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-medium">{searchResults.socialSentiment.mentions}</span> social media mentions found
                      </p>
                      {searchResults.socialSentiment.complaints.map((complaint: string, i: number) => (
                        <div key={i} className="text-sm p-2 bg-muted rounded">
                          &ldquo;{complaint}&rdquo;
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="violations" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            {violationsStats.map((stat, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.type}</CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.count}</div>
                  <p className="text-xs text-muted-foreground">₹{stat.fine.toLocaleString()} collected</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Live Violation Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentViolations.map((violation, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Badge variant="destructive">{violation.type}</Badge>
                      <div>
                        <p className="font-medium">{violation.plate}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{violation.location}</span>
                          <span>{violation.time}</span>
                          <span>Camera: {violation.camera}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-semibold">₹{violation.fine}</p>
                        <p className="text-sm text-muted-foreground">Fine</p>
                      </div>
                      <Button size="sm">Process</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cameras" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Cameras</CardTitle>
                <Camera className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{cameraStatus.length}</div>
                <p className="text-xs text-muted-foreground">ANPR enabled</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Online</CardTitle>
                <div className="h-2 w-2 bg-green-500 rounded-full" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {cameraStatus.filter(c => c.status === 'online').length}
                </div>
                <Progress value={75} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Offline</CardTitle>
                <div className="h-2 w-2 bg-red-500 rounded-full" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  {cameraStatus.filter(c => c.status === 'offline').length}
                </div>
                <p className="text-xs text-muted-foreground">Requires attention</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Camera Network Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cameraStatus.map((camera, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`h-3 w-3 rounded-full ${
                        camera.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                      }`} />
                      <div>
                        <p className="font-medium">{camera.id}</p>
                        <p className="text-sm text-muted-foreground">{camera.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-semibold">{camera.violations}</p>
                        <p className="text-sm text-muted-foreground">violations today</p>
                      </div>
                      <Badge variant={camera.status === 'online' ? 'default' : 'destructive'}>
                        {camera.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                Analytics dashboard with charts would be implemented here
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


