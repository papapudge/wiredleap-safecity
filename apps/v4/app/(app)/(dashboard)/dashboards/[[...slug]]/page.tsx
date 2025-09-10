"use client"

import * as React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Area, AreaChart, CartesianGrid, XAxis, Bar, BarChart, Line, LineChart } from "recharts"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/registry/new-york-v4/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/registry/new-york-v4/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Progress } from "@/registry/new-york-v4/ui/progress"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/registry/new-york-v4/ui/chart"
import { AlertTriangle, Activity, MapPin, Bell, TrendingUp, Users, Car, Shield, Calendar, Clock, MapPin as LocationIcon, User } from "lucide-react"
import { 
  pageTransition, 
  staggerContainer, 
  staggerItem, 
  fadeInUp, 
  cardHover, 
  buttonHover, 
  buttonTap, 
  smoothTransition,
  chartFadeIn,
  modalOverlay,
  modalContent,
  pulseGlow
} from "@/lib/animations"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { PageTransition, StaggeredContainer } from "@/components/page-transition"
import { ContextualBanner } from "@/components/contextual-banner"

export default function DashboardsPage({ params }: { params: { slug?: string[] } }) {
  const { slug = [] } = params
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
    trafficIncidents: {
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

  const detailedData = {
    "ANPR Violations": {
      title: "ANPR Violations Details",
      description: "Recent traffic violations detected by ANPR cameras",
      data: [
        {
          id: "V001",
          vehicle: "MH-12-AB-1234",
          violation: "Speed Limit Exceeded",
          location: "Bandra-Kurla Complex, Mumbai",
          time: "2024-01-15 14:23:45",
          speed: "85 km/h (Limit: 60 km/h)",
          camera: "ANPR-BKC-03",
          status: "Pending",
          fine: "₹1,500",
          image: "/violations/violation-001.svg"
        },
        {
          id: "V002", 
          vehicle: "DL-3C-XY-9876",
          violation: "Signal Jump",
          location: "Connaught Place, Delhi",
          time: "2024-01-15 13:45:12",
          camera: "ANPR-CP-07",
          status: "Processed",
          fine: "₹5,000",
          image: "/violations/violation-002.svg"
        },
        {
          id: "V003",
          vehicle: "KA-05-MN-4567",
          violation: "Wrong Lane Usage",
          location: "Electronic City, Bangalore",
          time: "2024-01-15 12:15:30",
          camera: "ANPR-EC-12",
          status: "Under Review",
          fine: "₹2,000",
          image: "/violations/violation-003.svg"
        },
        {
          id: "V004",
          vehicle: "TN-09-PQ-7890",
          violation: "No Entry Zone",
          location: "T. Nagar, Chennai",
          time: "2024-01-15 11:30:18",
          camera: "ANPR-TN-05",
          status: "Issued",
          fine: "₹3,000",
          image: "/violations/violation-004.svg"
        }
      ]
    },
    "License Lookups": {
      title: "License Lookup Details", 
      description: "Recent vehicle and driver license verifications",
      data: [
        {
          id: "L001",
          vehicle: "MH-12-AB-1234",
          owner: "Rajesh Kumar Singh",
          licenseNo: "MH-1234567890",
          status: "Valid",
          expiry: "2025-08-15",
          location: "Mumbai Traffic Police Station",
          time: "2024-01-15 14:25:30",
          officer: "Constable Sharma"
        },
        {
          id: "L002",
          vehicle: "DL-3C-XY-9876", 
          owner: "Priya Gupta",
          licenseNo: "DL-0987654321",
          status: "Expired",
          expiry: "2023-12-10",
          location: "CP Traffic Control",
          time: "2024-01-15 13:50:45",
          officer: "Inspector Verma"
        },
        {
          id: "L003",
          vehicle: "KA-05-MN-4567",
          owner: "Suresh Reddy",
          licenseNo: "KA-5678901234",
          status: "Valid",
          expiry: "2026-03-22",
          location: "Electronic City Checkpoint",
          time: "2024-01-15 12:18:15",
          officer: "SI Rao"
        },
        {
          id: "L004",
          vehicle: "TN-09-PQ-7890",
          owner: "Meera Iyer",
          licenseNo: "TN-4567890123",
          status: "Suspended",
          expiry: "2025-11-30",
          location: "T. Nagar Traffic Booth",
          time: "2024-01-15 11:35:20",
          officer: "PC Murugan"
        }
      ]
    }
  }

  return (
    <PageTransition className="container-wrapper px-6 py-8">
      <motion.div
        variants={staggerItem}
        initial="initial"
        animate="animate"
        className="mb-6"
      >
        <motion.h1 
          className="text-3xl font-bold tracking-tight mb-2"
          variants={staggerItem}
        >
          {config.title}
        </motion.h1>
        <motion.p 
          className="text-muted-foreground"
          variants={staggerItem}
        >
          {config.description}
        </motion.p>
      </motion.div>

      {/* Contextual Banner */}
      <ContextualBanner pageKey={key} />

      <motion.div
        variants={staggerItem}
        initial="initial"
        animate="animate"
      >
        <div className="space-y-8">

        <Tabs defaultValue="overview" className="w-full">
        
        <TabsContent value="overview" className="space-y-6" id="section-overview">
          <StaggeredContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" delay={0.3}>
            {config.widgets.map((widget, i) => {
              const IconComponent = widget.icon
              const hasDetailedInfo = widget.name === "ANPR Violations" || widget.name === "License Lookups"
              
              const cardContent = (
                <AnimatedCard 
                  key={i} 
                  hoverable={false}
                  delay={i * 0.1 + 0.4}
                  className={`${hasDetailedInfo ? "cursor-pointer" : ""} group`}
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{widget.name}</CardTitle>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={smoothTransition}
                    >
                      <IconComponent className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="text-2xl font-bold"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ ...smoothTransition, delay: i * 0.1 + 0.5 }}
                    >
                      {widget.value}
                    </motion.div>
                    <motion.p 
                      className={`text-xs ${
                        widget.trend === 'up' ? 'text-red-500' : 
                        widget.trend === 'down' ? 'text-green-500' : 
                        widget.trend === 'critical' ? 'text-orange-500' :
                        'text-muted-foreground'
                      }`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...smoothTransition, delay: i * 0.1 + 0.6 }}
                    >
                      {widget.change}
                    </motion.p>
                    {'progress' in widget && widget.progress && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ ...smoothTransition, delay: i * 0.1 + 0.7 }}
                      >
                        <Progress value={widget.progress} className="mt-2" animated />
                      </motion.div>
                    )}
                    {'data' in widget && widget.data && (
                      <motion.div 
                        className="mt-3 space-y-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ...smoothTransition, delay: i * 0.1 + 0.8 }}
                      >
                        {widget.data.slice(0, 2).map((item: any, j: number) => (
                          <motion.div 
                            key={j} 
                            className="text-xs text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ ...smoothTransition, delay: i * 0.1 + 0.9 + j * 0.1 }}
                          >
                            {'topic' in item && (
                              <span>{item.topic} - {item.virality} viral</span>
                            )}
                            {'type' in item && (
                              <span>{item.type}: {item.message}</span>
                            )}
                            {'zone' in item && (
                              <span>{item.zone}: {item.incidents} incidents</span>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                    {hasDetailedInfo && (
                      <motion.p 
                        className="text-xs text-blue-500 mt-2 group-hover:text-blue-600 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ...smoothTransition, delay: i * 0.1 + 1.0 }}
                        whileHover={{ x: 2 }}
                      >
                        Click for details →
                      </motion.p>
                    )}
                  </CardContent>
                </AnimatedCard>
              )

              if (hasDetailedInfo) {
                return (
                  <Dialog key={i}>
                    <DialogTrigger asChild>
                      {cardContent}
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <motion.div
                        initial={modalContent.initial}
                        animate={modalContent.animate}
                        exit={modalContent.exit}
                      >
                        <DialogHeader>
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={smoothTransition}
                          >
                            <DialogTitle>{detailedData[widget.name as keyof typeof detailedData]?.title}</DialogTitle>
                            <DialogDescription>
                              {detailedData[widget.name as keyof typeof detailedData]?.description}
                            </DialogDescription>
                          </motion.div>
                        </DialogHeader>
                        <motion.div 
                          className="mt-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ ...smoothTransition, delay: 0.2 }}
                        >
                        <div className="space-y-4">
                          {detailedData[widget.name as keyof typeof detailedData]?.data.map((item, j) => (
                            <Card key={j} className="p-4">
                              {widget.name === "ANPR Violations" && 'violation' in item && (
                                <div className="flex flex-col lg:flex-row gap-4">
                                  {/* Violation Image */}
                                  <div className="lg:w-1/3">
                                    <div className="relative w-full h-48 lg:h-full min-h-[200px] rounded-lg overflow-hidden border">
                                      <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={`Violation ${item.id} - ${item.violation}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                      />
                                    </div>
                                  </div>
                                  
                                  {/* Violation Details */}
                                  <div className="lg:w-2/3">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                      <div>
                                        <p className="font-semibold text-muted-foreground">ID</p>
                                        <p>{item.id}</p>
                                      </div>
                                      <div>
                                        <p className="font-semibold text-muted-foreground">Vehicle</p>
                                        <p className="font-mono">{item.vehicle}</p>
                                      </div>
                                      <div>
                                        <p className="font-semibold text-muted-foreground">Violation</p>
                                        <p className="text-red-600 font-medium">{item.violation}</p>
                                      </div>
                                      <div className="md:col-span-2">
                                        <p className="font-semibold text-muted-foreground">Location</p>
                                        <p className="flex items-center gap-1">
                                          <LocationIcon className="h-3 w-3" />
                                          {item.location}
                                        </p>
                                      </div>
                                      <div>
                                        <p className="font-semibold text-muted-foreground">Time</p>
                                        <p className="flex items-center gap-1">
                                          <Clock className="h-3 w-3" />
                                          {item.time}
                                        </p>
                                      </div>
                                      {'speed' in item && (
                                        <div>
                                          <p className="font-semibold text-muted-foreground">Speed</p>
                                          <p className="text-red-600">{item.speed}</p>
                                        </div>
                                      )}
                                      <div>
                                        <p className="font-semibold text-muted-foreground">Camera</p>
                                        <p>{item.camera}</p>
                                      </div>
                                      <div>
                                        <p className="font-semibold text-muted-foreground">Status</p>
                                        <Badge variant={item.status === 'Processed' || item.status === 'Issued' ? 'default' : 
                                                     item.status === 'Pending' || item.status === 'Under Review' ? 'secondary' : 'destructive'}>
                                          {item.status}
                                        </Badge>
                                      </div>
                                      <div>
                                        <p className="font-semibold text-muted-foreground">Fine</p>
                                        <p className="text-green-600 font-semibold">{item.fine}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {widget.name === "License Lookups" && 'owner' in item && (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                      <p className="font-semibold text-muted-foreground">ID</p>
                                      <p>{item.id}</p>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-muted-foreground">Vehicle</p>
                                      <p className="font-mono">{item.vehicle}</p>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-muted-foreground">Owner</p>
                                      <p className="flex items-center gap-1">
                                        <User className="h-3 w-3" />
                                        {item.owner}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-muted-foreground">License No.</p>
                                      <p className="font-mono">{item.licenseNo}</p>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-muted-foreground">Status</p>
                                      <Badge variant={item.status === 'Valid' ? 'default' : 
                                                   item.status === 'Expired' || item.status === 'Suspended' ? 'destructive' : 'secondary'}>
                                        {item.status}
                                      </Badge>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-muted-foreground">Expiry</p>
                                      <p className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {item.expiry}
                                      </p>
                                    </div>
                                    <div className="md:col-span-2">
                                      <p className="font-semibold text-muted-foreground">Location</p>
                                      <p className="flex items-center gap-1">
                                        <LocationIcon className="h-3 w-3" />
                                        {item.location}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-muted-foreground">Time</p>
                                      <p className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {item.time}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="font-semibold text-muted-foreground">Officer</p>
                                      <p>{item.officer}</p>
                                    </div>
                                </div>
                              )}
                            </Card>
                          ))}
                        </div>
                        </motion.div>
                      </motion.div>
                    </DialogContent>
                  </Dialog>
                )
              }

              return cardContent
            })}
          </StaggeredContainer>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4" id="section-alerts">
          <StaggeredContainer className="grid gap-4">
            {[
              { type: "Critical", title: "Major traffic incident detected", location: "Ring Road", time: "2 min ago", severity: "high" },
              { type: "Warning", title: "Protest gathering forming", location: "Freedom Park", time: "5 min ago", severity: "medium" },
              { type: "Info", title: "Water complaints increasing", location: "HSR Layout", time: "8 min ago", severity: "low" }
            ].map((alert, i) => (
              <AnimatedCard key={i} hoverable={true} delay={i * 0.1}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ ...smoothTransition, delay: i * 0.1 + 0.2 }}
                    >
                      <Badge variant={alert.severity === 'high' ? 'destructive' : alert.severity === 'medium' ? 'default' : 'secondary'}>
                        {alert.type}
                      </Badge>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ...smoothTransition, delay: i * 0.1 + 0.3 }}
                    >
                      <p className="font-medium">{alert.title}</p>
                      <p className="text-sm text-muted-foreground">{alert.location} • {alert.time}</p>
                    </motion.div>
                  </div>
                  <AnimatedButton size="sm">View Details</AnimatedButton>
                </CardContent>
              </AnimatedCard>
            ))}
          </StaggeredContainer>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6" id="section-trends">
          <StaggeredContainer className="grid gap-6 md:grid-cols-2">
            {/* Incident Trends Chart */}
            <AnimatedCard hoverable={true} delay={0.1}>
              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...smoothTransition, delay: 0.2 }}
                >
                  <CardTitle>Incident Trends</CardTitle>
                  <CardDescription>Monthly incident volume and resolution rates</CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={chartFadeIn}
                  initial="initial"
                  animate="animate"
                >
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
                </motion.div>
              </CardContent>
            </AnimatedCard>

            {/* Response Time Chart */}
            <AnimatedCard hoverable={true} delay={0.2}>
              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...smoothTransition, delay: 0.3 }}
                >
                  <CardTitle>Response Time Performance</CardTitle>
                  <CardDescription>Daily average response times vs target</CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={chartFadeIn}
                  initial="initial"
                  animate="animate"
                >
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
                </motion.div>
              </CardContent>
            </AnimatedCard>
          </StaggeredContainer>

          {/* Traffic Flow Chart */}
          <AnimatedCard hoverable={true} delay={0.3}>
            <CardHeader>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...smoothTransition, delay: 0.4 }}
              >
                <CardTitle>Traffic Flow & Incidents</CardTitle>
                <CardDescription>Hourly traffic volume and incident correlation</CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={chartFadeIn}
                initial="initial"
                animate="animate"
                transition={{ ...smoothTransition, delay: 0.5 }}
              >
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
                      stroke="var(--color-trafficIncidents)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </motion.div>
            </CardContent>
          </AnimatedCard>
        </TabsContent>

        <TabsContent value="reports" id="section-reports">
          <StaggeredContainer className="grid gap-4 md:grid-cols-2">
            <AnimatedCard hoverable={true} delay={0.1}>
              <CardHeader>
                <CardTitle>Quick Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <AnimatedButton variant="outline" className="w-full justify-start">Daily Summary Report</AnimatedButton>
                <AnimatedButton variant="outline" className="w-full justify-start">Weekly Trend Analysis</AnimatedButton>
                <AnimatedButton variant="outline" className="w-full justify-start">Incident Response Summary</AnimatedButton>
              </CardContent>
            </AnimatedCard>
            <AnimatedCard hoverable={true} delay={0.2}>
              <CardHeader>
                <CardTitle>Custom Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatedButton className="w-full">Create Custom Report</AnimatedButton>
              </CardContent>
            </AnimatedCard>
          </StaggeredContainer>
        </TabsContent>
        </Tabs>
        </div>
      </motion.div>
    </PageTransition>
  )
}


