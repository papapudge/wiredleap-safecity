"use client"

import * as React from "react"
import { Card, CardContent } from "@/registry/new-york-v4/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Avatar, AvatarFallback } from "@/registry/new-york-v4/ui/avatar"
import { Progress } from "@/registry/new-york-v4/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { 
  Search, 
  TrendingUp, 
  MessageCircle, 
  Share2, 
  Heart,
  User,
  Globe,
  Calendar,
  Filter,
  ExternalLink,
  Eye
} from "lucide-react"

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = React.useState("")

  const highImpactPosts = [
    {
      id: 1,
      content: "Major traffic jam at Bandra-Worli Sea Link. Alternative routes recommended via Eastern Express Highway #MumbaiTraffic",
      author: "@CitizenReporter1",
      platform: "Twitter",
      engagement: 12400,
      reach: 89000,
      sentiment: "negative",
      verified: true,
      timestamp: "2 hours ago",
      impact_score: 92,
      shares: 234,
      likes: 1240
    },
    {
      id: 2,
      content: "Peaceful protest march starting from Azad Maidan. Police providing security escort. Traffic diversions in place.",
      author: "@MumbaiNewsLive",
      platform: "Facebook", 
      engagement: 8900,
      reach: 45000,
      sentiment: "neutral",
      verified: true,
      timestamp: "4 hours ago",
      impact_score: 78,
      shares: 156,
      likes: 890
    },
    {
      id: 3,
      content: "Flash flooding in Kurla area due to burst water main. Municipal authorities responding. Avoid the area.",
      author: "@WeatherMumbai",
      platform: "Instagram",
      engagement: 15600,
      reach: 67000,
      sentiment: "negative",
      verified: false,
      timestamp: "6 hours ago",
      impact_score: 85,
      shares: 345,
      likes: 1560
    }
  ]

  const profiles = [
    {
      id: 1,
      username: "@MumbaiPoliceHQ",
      name: "Mumbai Police",
      followers: 2400000,
      verification: "official",
      category: "Government",
      influence_score: 95,
      recent_activity: "Posted traffic update 1 hour ago",
      engagement_rate: "8.5%"
    },
    {
      id: 2,
      username: "@MumbaiTrafficPolice", 
      name: "Mumbai Traffic Police",
      followers: 890000,
      verification: "official",
      category: "Government",
      influence_score: 88,
      recent_activity: "Shared road safety tips 3 hours ago",
      engagement_rate: "12.3%"
    },
    {
      id: 3,
      username: "@CitizenWatchdog",
      name: "Mumbai Citizen Watch",
      followers: 156000,
      verification: "verified",
      category: "Community",
      influence_score: 72,
      recent_activity: "Reported civic issue 30 minutes ago",
      engagement_rate: "15.7%"
    }
  ]

  const entities = [
    {
      id: 1,
      name: "Bandra-Worli Sea Link",
      type: "Infrastructure",
      mentions: 1240,
      sentiment: "negative",
      trend: "rising",
      description: "Major bridge connection experiencing heavy traffic",
      risk_level: "high"
    },
    {
      id: 2,
      name: "Mumbai Local Trains",
      type: "Transportation",
      mentions: 3456,
      sentiment: "mixed",
      trend: "stable", 
      description: "Primary urban transport system",
      risk_level: "medium"
    },
    {
      id: 3,
      name: "Dharavi",
      type: "Location",
      mentions: 567,
      sentiment: "neutral",
      trend: "declining",
      description: "Dense urban settlement area",
      risk_level: "low"
    }
  ]

  const news = [
    {
      id: 1,
      headline: "Mumbai Police Launch New AI-Powered Traffic Management System",
      source: "Mumbai Mirror",
      timestamp: "3 hours ago",
      category: "Technology",
      impact: "high",
      url: "#"
    },
    {
      id: 2,
      headline: "Community Policing Initiative Shows 40% Reduction in Crime",
      source: "Times of India",
      timestamp: "5 hours ago", 
      category: "Safety",
      impact: "high",
      url: "#"
    },
    {
      id: 3,
      headline: "Monsoon Preparedness: Emergency Response Teams on Standby",
      source: "Indian Express",
      timestamp: "8 hours ago",
      category: "Emergency",
      impact: "medium",
      url: "#"
    }
  ]

  const tabs = [
    { v: "posts", t: "High-impact Posts", icon: TrendingUp },
    { v: "profiles", t: "Influential Profiles", icon: User },
    { v: "entities", t: "Key Entities", icon: Globe },
    { v: "news", t: "News & Media", icon: MessageCircle },
  ]

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Search className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight">Intelligence Explorer</h1>
      </div>

      <div className="flex gap-4 mb-6">
        <Input 
          placeholder="Search across all data sources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
            <SelectItem value="news">News Media</SelectItem>
            <SelectItem value="official">Official Sources</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>
      
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {tabs.map(({ v, t, icon: Icon }) => (
            <TabsTrigger key={v} value={v} className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{t}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="posts" className="space-y-4">
          {highImpactPosts.map((post) => (
            <Card key={post.id}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{post.author.slice(1, 3).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{post.author}</span>
                          {post.verified && <Badge variant="secondary" className="text-xs">Verified</Badge>}
                          <Badge variant="outline" className="text-xs">{post.platform}</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">{post.timestamp}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{post.impact_score}</div>
                      <div className="text-xs text-muted-foreground">Impact Score</div>
                    </div>
                  </div>
                  
                  <p className="text-sm">{post.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {post.likes.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="h-4 w-4" />
                        {post.shares}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {post.reach.toLocaleString()} reach
                      </div>
                    </div>
                    <Badge variant={
                      post.sentiment === 'negative' ? 'destructive' :
                      post.sentiment === 'positive' ? 'secondary' : 'outline'
                    }>
                      {post.sentiment}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="profiles" className="space-y-4">
          {profiles.map((profile) => (
            <Card key={profile.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{profile.name}</h3>
                        <Badge variant={profile.verification === 'official' ? 'secondary' : 'outline'}>
                          {profile.verification}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{profile.username}</div>
                      <div className="text-xs text-muted-foreground">{profile.category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{profile.followers.toLocaleString()} followers</div>
                    <div className="text-sm text-muted-foreground">Influence: {profile.influence_score}/100</div>
                    <Progress value={profile.influence_score} className="w-20 h-2 mt-1" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <div className="flex justify-between text-sm">
                    <span>{profile.recent_activity}</span>
                    <span className="text-muted-foreground">Engagement: {profile.engagement_rate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="entities" className="space-y-4">
          {entities.map((entity) => (
            <Card key={entity.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium">{entity.name}</h3>
                      <Badge variant="outline">{entity.type}</Badge>
                      <Badge variant={entity.risk_level === 'high' ? 'destructive' : 
                                     entity.risk_level === 'medium' ? 'secondary' : 'outline'}>
                        {entity.risk_level} risk
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{entity.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{entity.mentions.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">mentions</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className={`h-3 w-3 ${
                        entity.trend === 'rising' ? 'text-red-500' :
                        entity.trend === 'declining' ? 'text-green-500' : 'text-gray-500'
                      }`} />
                      <span className="text-xs">{entity.trend}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <div className="flex justify-between">
                    <Badge variant={
                      entity.sentiment === 'negative' ? 'destructive' :
                      entity.sentiment === 'positive' ? 'secondary' : 'outline'
                    }>
                      {entity.sentiment} sentiment
                    </Badge>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      Analyze
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="news" className="space-y-4">
          {news.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{item.category}</Badge>
                      <Badge variant={item.impact === 'high' ? 'secondary' : 'outline'}>
                        {item.impact} impact
                      </Badge>
                    </div>
                    <h3 className="font-medium">{item.headline}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{item.source}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.timestamp}
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Read
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}


