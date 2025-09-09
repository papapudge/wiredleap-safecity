"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Progress } from "@/registry/new-york-v4/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york-v4/ui/table"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import { 
  TrendingUp, 
  Plus, 
  Edit, 
  Play, 
  Pause, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Target,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Eye
} from "lucide-react"

export default function CampaignsPage() {

  const campaigns = [
    {
      id: 1,
      name: "Traffic Safety Awareness",
      status: "Active",
      type: "Public Awareness",
      startDate: "2024-01-15",
      endDate: "2024-03-15",
      budget: "₹2,50,000",
      spent: "₹1,80,000",
      progress: 72,
      reach: "1.2M",
      engagement: "89K",
      platforms: ["Facebook", "Twitter", "Instagram"],
      objective: "Reduce traffic violations by 30%",
      kpis: [
        { metric: "Reach", target: "1M", current: "1.2M", status: "exceeded" },
        { metric: "Engagement", target: "50K", current: "89K", status: "exceeded" },
        { metric: "CTR", target: "2%", current: "3.2%", status: "exceeded" }
      ]
    },
    {
      id: 2,
      name: "Community Policing Initiative",
      status: "Active",
      type: "Community Engagement",
      startDate: "2024-02-01",
      endDate: "2024-06-01",
      budget: "₹5,00,000",
      spent: "₹1,25,000",
      progress: 25,
      reach: "500K",
      engagement: "23K",
      platforms: ["Facebook", "WhatsApp", "Local News"],
      objective: "Improve police-community relations",
      kpis: [
        { metric: "Community Events", target: "20", current: "8", status: "on-track" },
        { metric: "Citizen Feedback", target: "4.5", current: "4.2", status: "on-track" },
        { metric: "Response Rate", target: "80%", current: "85%", status: "exceeded" }
      ]
    },
    {
      id: 3,
      name: "Anti-Drug Awareness",
      status: "Paused",
      type: "Prevention",
      startDate: "2024-01-01",
      endDate: "2024-04-01",
      budget: "₹3,75,000",
      spent: "₹2,10,000",
      progress: 56,
      reach: "800K",
      engagement: "45K",
      platforms: ["Instagram", "YouTube", "Schools"],
      objective: "Reduce youth drug abuse by 25%",
      kpis: [
        { metric: "School Visits", target: "50", current: "28", status: "behind" },
        { metric: "Awareness Videos", target: "20", current: "15", status: "on-track" },
        { metric: "Parent Engagement", target: "1K", current: "780", status: "behind" }
      ]
    }
  ]

  const upcomingCampaigns = [
    {
      id: 4,
      name: "Monsoon Safety Drive",
      launchDate: "2024-06-01",
      budget: "₹1,80,000",
      objective: "Reduce monsoon-related accidents"
    },
    {
      id: 5,
      name: "Women Safety Initiative",
      launchDate: "2024-04-15",
      budget: "₹4,20,000",
      objective: "Enhance women safety awareness"
    }
  ]

  const campaignMetrics = [
    { label: "Active Campaigns", value: "3", change: "+1", icon: TrendingUp },
    { label: "Total Reach", value: "2.5M", change: "+15%", icon: Users },
    { label: "Engagement Rate", value: "6.8%", change: "+2.1%", icon: MessageSquare },
    { label: "Budget Utilization", value: "68%", change: "+12%", icon: Target }
  ]

  const tabs = [
    { v: "overview", t: "Overview", icon: BarChart3 },
    { v: "active", t: "Active Campaigns", icon: Play },
    { v: "create", t: "Create Campaign", icon: Plus },
    { v: "analytics", t: "Analytics", icon: Target }
  ]

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Marketing Campaigns</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {campaignMetrics.map((metric, index) => (
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
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {tabs.map(({ v, t, icon: Icon }) => (
            <TabsTrigger key={v} value={v} className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{t}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Campaign Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.filter(c => c.status === "Active").map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-3 border rounded">
                      <div className="space-y-1">
                        <div className="font-medium text-sm">{campaign.name}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline">{campaign.type}</Badge>
                          <span>{campaign.reach} reach</span>
                          <span>{campaign.engagement} engagement</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{campaign.progress}%</div>
                        <Progress value={campaign.progress} className="w-16 h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Upcoming Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingCampaigns.map((campaign) => (
                    <div key={campaign.id} className="p-3 border rounded">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-sm">{campaign.name}</div>
                        <Badge variant="outline">{campaign.budget}</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Launch: {campaign.launchDate}
                        </div>
                        <div>{campaign.objective}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recent Campaign Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Traffic Safety Awareness exceeded engagement targets</div>
                    <div className="text-xs text-muted-foreground">89K engagements vs 50K target • 2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Anti-Drug Awareness campaign paused for review</div>
                    <div className="text-xs text-muted-foreground">Budget utilization review required • 4 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Community Policing Initiative showing positive results</div>
                    <div className="text-xs text-muted-foreground">4.2/5 citizen feedback rating • 6 hours ago</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Active Campaigns</h3>
              <p className="text-sm text-muted-foreground">Monitor and manage ongoing campaigns</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Campaign
            </Button>
          </div>

          <div className="grid gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base">{campaign.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={campaign.status === 'Active' ? 'secondary' : 'outline'}>
                          {campaign.status}
                        </Badge>
                        <Badge variant="outline">{campaign.type}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {campaign.startDate} - {campaign.endDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        {campaign.status === 'Active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground">Budget</div>
                      <div className="font-medium">{campaign.budget}</div>
                      <div className="text-xs">Spent: {campaign.spent}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Reach</div>
                      <div className="font-medium">{campaign.reach}</div>
                      <div className="text-xs">Engagement: {campaign.engagement}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Progress</div>
                      <div className="font-medium">{campaign.progress}%</div>
                      <Progress value={campaign.progress} className="mt-1" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Platforms</div>
                      <div className="flex gap-1 flex-wrap mt-1">
                        {campaign.platforms.map((platform) => (
                          <Badge key={platform} variant="secondary" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-muted/50 rounded">
                    <div className="text-sm font-medium mb-2">Objective: {campaign.objective}</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {campaign.kpis.map((kpi, idx) => (
                        <div key={idx} className="text-xs">
                          <div className="font-medium">{kpi.metric}</div>
                          <div className="flex items-center gap-2">
                            <span>{kpi.current} / {kpi.target}</span>
                            <Badge variant={
                              kpi.status === 'exceeded' ? 'secondary' :
                              kpi.status === 'on-track' ? 'outline' : 'destructive'
                            } className="text-xs">
                              {kpi.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Campaign</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input id="campaign-name" placeholder="e.g., Road Safety Initiative" />
                </div>

                <div className="space-y-2">
                  <Label>Campaign Type</Label>
                  <Select defaultValue="awareness">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="awareness">Public Awareness</SelectItem>
                      <SelectItem value="community">Community Engagement</SelectItem>
                      <SelectItem value="prevention">Prevention</SelectItem>
                      <SelectItem value="recruitment">Recruitment</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input id="end-date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (₹)</Label>
                  <Input id="budget" type="number" placeholder="250000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="objective">Campaign Objective</Label>
                  <Textarea 
                    id="objective" 
                    placeholder="Describe the main goal of this campaign..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Target Platforms</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Facebook', 'Twitter', 'Instagram', 'YouTube', 'WhatsApp', 'Local News'].map((platform) => (
                      <div key={platform} className="flex items-center space-x-2">
                        <Switch id={`platform-${platform.toLowerCase()}`} />
                        <Label htmlFor={`platform-${platform.toLowerCase()}`} className="text-sm">{platform}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Campaign
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="font-medium">Your Campaign</span>
                    <Badge variant="outline">Public Awareness</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>To be set</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Budget:</span>
                      <span>To be set</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Platforms:</span>
                      <span>To be selected</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Campaign Best Practices</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Define clear, measurable objectives</li>
                    <li>• Choose appropriate platforms for your audience</li>
                    <li>• Set realistic budget allocations</li>
                    <li>• Plan content calendar in advance</li>
                    <li>• Monitor performance regularly</li>
                    <li>• Engage with your audience actively</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded">
                  <div className="text-center text-muted-foreground">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                    <p>Campaign performance chart</p>
                    <p className="text-xs">Reach, engagement, and conversion trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Platform Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">Facebook</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">1.2M</div>
                      <div className="text-xs text-muted-foreground">48% of total reach</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                      <span className="font-medium">Twitter</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">800K</div>
                      <div className="text-xs text-muted-foreground">32% of total reach</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span className="font-medium">Instagram</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">500K</div>
                      <div className="text-xs text-muted-foreground">20% of total reach</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Campaign ROI Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Spent</TableHead>
                    <TableHead>Reach</TableHead>
                    <TableHead>Cost per Reach</TableHead>
                    <TableHead>ROI</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>{campaign.budget}</TableCell>
                      <TableCell>{campaign.spent}</TableCell>
                      <TableCell>{campaign.reach}</TableCell>
                      <TableCell>₹{(parseInt(campaign.spent.replace(/[₹,]/g, '')) / parseFloat(campaign.reach)).toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">+{(Math.random() * 200 + 50).toFixed(0)}%</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


