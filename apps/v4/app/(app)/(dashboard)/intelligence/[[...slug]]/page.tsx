import * as React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Progress } from "@/registry/new-york-v4/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { TrendingUp, TrendingDown, AlertTriangle, MapPin, Users, MessageSquare, Clock, Eye, Share2, Brain } from "lucide-react"

export default function IntelligencePage({ params }: { params: { slug?: string[] } }) {
  const viralTopics = [
    { 
      topic: "Traffic fine scam", 
      virality: "10.2x", 
      trend: "up", 
      posts: 1247, 
      engagement: 89234, 
      baseline: 120, 
      current: 1247,
      timeframe: "Last 6 hours",
      sentiment: { positive: 12, negative: 78, neutral: 10 },
      geography: ["Bangalore", "Delhi", "Pune"],
      sources: ["Twitter", "Facebook", "WhatsApp"]
    },
    { 
      topic: "Metro delays", 
      virality: "5.8x", 
      trend: "up", 
      posts: 892, 
      engagement: 34567, 
      baseline: 154, 
      current: 892,
      timeframe: "Last 4 hours",
      sentiment: { positive: 8, negative: 82, neutral: 10 },
      geography: ["Delhi", "Mumbai"],
      sources: ["Twitter", "Reddit"]
    },
    { 
      topic: "New metro line", 
      virality: "3.2x", 
      trend: "stable", 
      posts: 634, 
      engagement: 23456, 
      baseline: 198, 
      current: 634,
      timeframe: "Last 8 hours",
      sentiment: { positive: 65, negative: 15, neutral: 20 },
      geography: ["Bangalore", "Hyderabad"],
      sources: ["Twitter", "News", "Facebook"]
    },
    { 
      topic: "Pothole complaints", 
      virality: "2.1x", 
      trend: "down", 
      posts: 423, 
      engagement: 12345, 
      baseline: 201, 
      current: 423,
      timeframe: "Last 12 hours",
      sentiment: { positive: 5, negative: 85, neutral: 10 },
      geography: ["Mumbai", "Pune", "Chennai"],
      sources: ["Twitter", "Municipal App"]
    }
  ]

  const sentimentData = [
    { location: "Bangalore", positive: 25, negative: 60, neutral: 15, incidents: 23, population: "12M" },
    { location: "Delhi", positive: 20, negative: 65, neutral: 15, incidents: 18, population: "32M" },
    { location: "Mumbai", positive: 30, negative: 55, neutral: 15, incidents: 15, population: "20M" },
    { location: "Pune", positive: 35, negative: 50, neutral: 15, incidents: 12, population: "7M" },
    { location: "Chennai", positive: 28, negative: 62, neutral: 10, incidents: 14, population: "11M" },
    { location: "Hyderabad", positive: 40, negative: 45, neutral: 15, incidents: 8, population: "10M" }
  ]

  const misinformationClusters = [
    {
      cluster: "Fake traffic challan messages",
      posts: 234,
      sources: 45,
      similarity: 89,
      firstSeen: "2 hours ago",
      platforms: ["WhatsApp", "Telegram"],
      risk: "high",
      keywords: ["challan", "fake", "payment", "link"]
    },
    {
      cluster: "Metro service disruption rumors",
      posts: 167,
      sources: 23,
      similarity: 76,
      firstSeen: "4 hours ago",
      platforms: ["Twitter", "Facebook"],
      risk: "medium",
      keywords: ["metro", "breakdown", "cancelled", "strike"]
    },
    {
      cluster: "Road closure misinformation",
      posts: 89,
      sources: 12,
      similarity: 92,
      firstSeen: "6 hours ago",
      platforms: ["Twitter", "WhatsApp"],
      risk: "low",
      keywords: ["road", "closed", "accident", "detour"]
    }
  ]

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Intelligence Center</h1>
          <p className="text-muted-foreground">Virality detection, sentiment analysis, and misinformation tracking</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/analysis">Run Analysis</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/alerts">Configure Alerts</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="virality" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="virality">Virality Tracking</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Intelligence</TabsTrigger>
          <TabsTrigger value="misinformation">Misinformation Detection</TabsTrigger>
        </TabsList>

        <TabsContent value="virality" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Viral Topics</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{viralTopics.length}</div>
                <p className="text-xs text-muted-foreground">Above 2x baseline</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Peak Virality</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-500">{viralTopics[0].virality}</div>
                <p className="text-xs text-muted-foreground">{viralTopics[0].topic}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Engagement</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {viralTopics.reduce((sum, topic) => sum + topic.engagement, 0).toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">Cross-platform reach</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Locations</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-muted-foreground">Major cities affected</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Viral Topics Leaderboard</CardTitle>
                <div className="flex gap-2">
                  <Select defaultValue="6hours">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1hour">Last hour</SelectItem>
                      <SelectItem value="6hours">Last 6 hours</SelectItem>
                      <SelectItem value="24hours">Last 24 hours</SelectItem>
                      <SelectItem value="week">This week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {viralTopics.map((topic, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-muted-foreground">#{i + 1}</span>
                        {topic.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 text-red-500" />
                        ) : topic.trend === 'down' ? (
                          <TrendingDown className="h-4 w-4 text-green-500" />
                        ) : (
                          <div className="h-4 w-4 rounded-full bg-yellow-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{topic.topic}</h3>
                          <Badge variant="destructive">{topic.virality} viral</Badge>
                          <Badge variant="outline">{topic.timeframe}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            {topic.posts.toLocaleString()} posts
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {topic.engagement.toLocaleString()} views
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {topic.geography.slice(0, 2).join(", ")}
                          </span>
                        </div>
                        <div className="mt-2">
                          <div className="text-xs text-muted-foreground mb-1">
                            Sentiment: {topic.sentiment.negative}% negative, {topic.sentiment.positive}% positive
                          </div>
                          <Progress value={topic.sentiment.negative} className="h-1" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm">Monitor</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overall Sentiment</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-500">58% Negative</div>
                <Progress value={58} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">High Risk Zones</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Above 60% negative</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sentiment Trend</CardTitle>
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-500">-8%</div>
                <p className="text-xs text-muted-foreground">vs. last week</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Geographic Sentiment Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sentimentData.map((location, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-16">
                        <h3 className="font-semibold">{location.location}</h3>
                        <p className="text-sm text-muted-foreground">{location.population}</p>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Negative ({location.negative}%)</span>
                          <span>Positive ({location.positive}%)</span>
                        </div>
                        <div className="flex">
                          <div 
                            className="h-2 bg-red-500 rounded-l" 
                            style={{ width: `${location.negative}%` }}
                          />
                          <div 
                            className="h-2 bg-gray-300" 
                            style={{ width: `${location.neutral}%` }}
                          />
                          <div 
                            className="h-2 bg-green-500 rounded-r" 
                            style={{ width: `${location.positive}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-semibold">{location.incidents}</p>
                        <p className="text-sm text-muted-foreground">incidents</p>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="misinformation" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Clusters</CardTitle>
                <Brain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{misinformationClusters.length}</div>
                <p className="text-xs text-muted-foreground">Detected patterns</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">High Risk</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-500">
                  {misinformationClusters.filter(c => c.risk === 'high').length}
                </div>
                <p className="text-xs text-muted-foreground">Require immediate action</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                <Share2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {misinformationClusters.reduce((sum, cluster) => sum + cluster.posts, 0)}
                </div>
                <p className="text-xs text-muted-foreground">Potential misinformation</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Similarity</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round(misinformationClusters.reduce((sum, c) => sum + c.similarity, 0) / misinformationClusters.length)}%
                </div>
                <p className="text-xs text-muted-foreground">Content similarity</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Misinformation Clusters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {misinformationClusters.map((cluster, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className={`h-4 w-4 ${
                          cluster.risk === 'high' ? 'text-red-500' : 
                          cluster.risk === 'medium' ? 'text-yellow-500' : 'text-green-500'
                        }`} />
                        <Badge variant={
                          cluster.risk === 'high' ? 'destructive' : 
                          cluster.risk === 'medium' ? 'default' : 'secondary'
                        }>
                          {cluster.risk} risk
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{cluster.cluster}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{cluster.posts} posts</span>
                          <span>{cluster.sources} sources</span>
                          <span>{cluster.similarity}% similarity</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {cluster.firstSeen}
                          </span>
                        </div>
                        <div className="mt-2 flex gap-2">
                          {cluster.platforms.map((platform, j) => (
                            <Badge key={j} variant="outline" className="text-xs">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-2 flex gap-1 flex-wrap">
                          {cluster.keywords.map((keyword, j) => (
                            <Badge key={j} variant="secondary" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="outline">Investigate</Button>
                      <Button size="sm" variant="destructive">Flag Content</Button>
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


