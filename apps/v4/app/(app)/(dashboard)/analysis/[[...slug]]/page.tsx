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
import { CalendarDateRangePicker } from "@/registry/new-york-v4/ui/date-range-picker"
import { Search, TrendingUp, MapPin, Clock, BarChart3, Users, MessageSquare, AlertCircle } from "lucide-react"

export default function AnalysisPage({ params }: { params: { slug?: string[] } }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setShowResults(true)
    }, 1500)
  }

  const mockSearchResults = {
    query: searchQuery,
    totalPosts: 1247,
    timeRange: "Last 3 months",
    sentiment: { positive: 15, negative: 70, neutral: 15 },
    virality: "3.2x above baseline",
    geography: [
      { location: "Bangalore", posts: 892, sentiment: "negative" },
      { location: "Delhi", posts: 234, sentiment: "negative" },
      { location: "Mumbai", posts: 121, sentiment: "neutral" }
    ],
    trending: [
      { keyword: "traffic fine scam", posts: 423, trend: "+145%" },
      { keyword: "challan fraud", posts: 289, trend: "+89%" },
      { keyword: "fake notice", posts: 167, trend: "+67%" }
    ],
    timeline: [
      { date: "Week 1", posts: 89 },
      { date: "Week 2", posts: 234 },
      { date: "Week 3", posts: 567 },
      { date: "Week 4", posts: 357 }
    ]
  }

  const searchHistory = [
    { query: "Traffic fine scam", date: "2 hours ago", results: "1,247 posts", sentiment: "negative" },
    { query: "Metro construction complaints", date: "1 day ago", results: "892 posts", sentiment: "mixed" },
    { query: "Garbage collection issues", date: "3 days ago", results: "634 posts", sentiment: "negative" },
    { query: "Police response time", date: "1 week ago", results: "445 posts", sentiment: "mixed" }
  ]

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analysis Module</h1>
          <p className="text-muted-foreground">Search and analyze topics across social media and local data sources</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/monitoring">Create Monitor</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="search" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="search">Static Search</TabsTrigger>
          <TabsTrigger value="history">Search History</TabsTrigger>
          <TabsTrigger value="saved">Saved Queries</TabsTrigger>
        </TabsList>

        <TabsContent value="search" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Historical Topic Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input 
                    placeholder="e.g., Traffic fine scam, Pothole complaints, Metro delays..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button onClick={handleSearch} disabled={isSearching || !searchQuery.trim()}>
                  {isSearching ? "Searching..." : "Analyze Topic"}
                </Button>
              </div>
              
              <div className="flex gap-4 text-sm">
                <Select defaultValue="3months">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1month">Last month</SelectItem>
                    <SelectItem value="3months">Last 3 months</SelectItem>
                    <SelectItem value="6months">Last 6 months</SelectItem>
                    <SelectItem value="1year">Last year</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Geography" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All locations</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Data sources" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All sources</SelectItem>
                    <SelectItem value="twitter">Twitter/X</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="news">News media</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {showResults && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">Analysis Results for "{mockSearchResults.query}"</h2>
                <Badge variant="secondary">{mockSearchResults.timeRange}</Badge>
                <Badge variant="outline">{mockSearchResults.totalPosts.toLocaleString()} posts found</Badge>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockSearchResults.totalPosts.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">Across all platforms</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Virality Score</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-500">{mockSearchResults.virality}</div>
                    <p className="text-xs text-muted-foreground">Above normal baseline</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Dominant Sentiment</CardTitle>
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-500">{mockSearchResults.sentiment.negative}% Negative</div>
                    <Progress value={mockSearchResults.sentiment.negative} className="mt-2" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Top Location</CardTitle>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockSearchResults.geography[0].location}</div>
                    <p className="text-xs text-muted-foreground">{mockSearchResults.geography[0].posts} posts</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Sentiment Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Negative</span>
                        <span className="text-red-500">{mockSearchResults.sentiment.negative}%</span>
                      </div>
                      <Progress value={mockSearchResults.sentiment.negative} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Neutral</span>
                        <span className="text-gray-500">{mockSearchResults.sentiment.neutral}%</span>
                      </div>
                      <Progress value={mockSearchResults.sentiment.neutral} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Positive</span>
                        <span className="text-green-500">{mockSearchResults.sentiment.positive}%</span>
                      </div>
                      <Progress value={mockSearchResults.sentiment.positive} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Geographic Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockSearchResults.geography.map((geo, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{geo.location}</p>
                          <p className="text-sm text-muted-foreground">{geo.posts} posts</p>
                        </div>
                        <Badge variant={geo.sentiment === 'negative' ? 'destructive' : geo.sentiment === 'positive' ? 'default' : 'secondary'}>
                          {geo.sentiment}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Trending Keywords</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockSearchResults.trending.map((trend, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{trend.keyword}</p>
                          <p className="text-sm text-muted-foreground">{trend.posts} mentions</p>
                        </div>
                        <Badge variant="outline" className="text-green-600">
                          {trend.trend}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Post Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 flex items-end justify-between gap-2">
                      {mockSearchResults.timeline.map((week, i) => (
                        <div key={i} className="flex flex-col items-center flex-1">
                          <div 
                            className="w-full bg-primary rounded-t" 
                            style={{ height: `${(week.posts / Math.max(...mockSearchResults.timeline.map(w => w.posts))) * 100}%` }}
                          />
                          <span className="text-xs mt-1">{week.date}</span>
                          <span className="text-xs text-muted-foreground">{week.posts}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-2">
                  <Button asChild>
                    <Link href="/monitoring">Start Monitoring This Topic</Link>
                  </Button>
                  <Button variant="outline">Export Report</Button>
                  <Button variant="outline">Save Query</Button>
                  <Button variant="outline">Create Alert Rule</Button>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Recent Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {searchHistory.map((search, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{search.date}</span>
                      </div>
                      <div>
                        <p className="font-medium">{search.query}</p>
                        <p className="text-sm text-muted-foreground">{search.results}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={search.sentiment === 'negative' ? 'destructive' : search.sentiment === 'positive' ? 'default' : 'secondary'}>
                        {search.sentiment}
                      </Badge>
                      <Button variant="outline" size="sm">Re-run</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saved">
          <Card>
            <CardHeader>
              <CardTitle>Saved Query Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                No saved queries yet. Create and save frequently used search templates.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


