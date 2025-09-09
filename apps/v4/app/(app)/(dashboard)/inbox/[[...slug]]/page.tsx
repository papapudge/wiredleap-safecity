"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york-v4/ui/avatar"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { MessageSquare, Clock, CheckCircle, Reply, Heart, Share2, ExternalLink, MapPin } from "lucide-react"

export default function InboxPage() {
  const [selectedThread, setSelectedThread] = useState<string | null>(null)
  const [replyText, setReplyText] = useState("")

  const inboxItems = [
    {
      id: "1",
      type: "mention",
      platform: "Twitter",
      author: {
        name: "Rajesh Kumar",
        username: "@rajeshkumar",
        avatar: "/avatars/01.png",
        verified: false
      },
      content: "@BangaloreTraffic Why are challan messages coming with suspicious links? This looks like a scam!",
      timestamp: "2 min ago",
      priority: "high",
      sentiment: "negative",
      location: "Bangalore",
      status: "unread",
      engagement: { likes: 23, retweets: 12, replies: 5 },
      linkedIncident: null,
      tags: ["traffic", "scam", "challan"]
    },
    {
      id: "2", 
      type: "mention",
      platform: "Facebook",
      author: {
        name: "Priya Sharma",
        username: "priya.sharma.xyz",
        avatar: "/avatars/02.png",
        verified: false
      },
      content: "Dear @BangalorePolice, there&apos;s a huge traffic jam on Ring Road due to waterlogged roads. No police personnel visible for traffic management.",
      timestamp: "8 min ago",
      priority: "medium",
      sentiment: "negative", 
      location: "Ring Road, Bangalore",
      status: "assigned",
      engagement: { likes: 45, retweets: 0, replies: 8 },
      linkedIncident: "INC-2024-1234",
      tags: ["traffic", "waterlogging", "ring-road"]
    },
    {
      id: "3",
      type: "complaint",
      platform: "WhatsApp",
      author: {
        name: "Anonymous Citizen",
        username: "+91XXXXXXXXX",
        avatar: "/avatars/03.png",
        verified: false
      },
      content: "Pothole on 100ft Road is causing accidents. Multiple vehicles damaged today. Please fix urgently!",
      timestamp: "15 min ago",
      priority: "high",
      sentiment: "negative",
      location: "100ft Road, Indiranagar",
      status: "unread",
      engagement: { likes: 0, retweets: 0, replies: 0 },
      linkedIncident: null,
      tags: ["pothole", "accidents", "infrastructure"]
    },
    {
      id: "4",
      type: "appreciation",
      platform: "Twitter",
      author: {
        name: "Metro Commuter",
        username: "@bangalorecommuter",
        avatar: "/avatars/04.png",
        verified: true
      },
      content: "Thank you @BengaluruMetro for the quick resolution of the technical snag on Purple Line. Commute was smooth today!",
      timestamp: "1 hour ago", 
      priority: "low",
      sentiment: "positive",
      location: "Purple Line Metro",
      status: "resolved",
      engagement: { likes: 156, retweets: 23, replies: 12 },
      linkedIncident: "INC-2024-1230",
      tags: ["metro", "appreciation", "purple-line"]
    }
  ]

  const aiSuggestions = [
    "Thank you for bringing this to our attention. We are investigating the suspicious challan messages and will take appropriate action.",
    "We have noted the traffic congestion on Ring Road. Our team has been dispatched to manage traffic flow.",
    "Your concern about road safety has been registered. We will coordinate with the Municipal Corporation for pothole repairs."
  ]

  const tabCounts = {
    all: inboxItems.length,
    mentions: inboxItems.filter(item => item.type === 'mention').length,
    priority: inboxItems.filter(item => item.priority === 'high').length,
    assigned: inboxItems.filter(item => item.status === 'assigned').length,
    resolved: inboxItems.filter(item => item.status === 'resolved').length
  }

  const filterItems = (filter: string) => {
    switch (filter) {
      case 'mentions': return inboxItems.filter(item => item.type === 'mention')
      case 'priority': return inboxItems.filter(item => item.priority === 'high') 
      case 'assigned': return inboxItems.filter(item => item.status === 'assigned')
      case 'resolved': return inboxItems.filter(item => item.status === 'resolved')
      default: return inboxItems
    }
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-500'
      case 'negative': return 'text-red-500' 
      case 'neutral': return 'text-gray-500'
      default: return 'text-muted-foreground'
    }
  }

  return (
    <div className="container-wrapper px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Social Inbox</h1>
          <p className="text-muted-foreground">Manage social media mentions, complaints, and citizen engagement</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/templates">Manage Templates</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/incidents/create">Create Incident</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          {Object.entries(tabCounts).map(([key, count]) => (
            <TabsTrigger key={key} value={key} className="relative">
              {key[0].toUpperCase() + key.slice(1)}
              <Badge variant="secondary" className="ml-2">
                {count}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(tabCounts).map((tab) => (
          <TabsContent key={tab} value={tab} className="space-y-4">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                {filterItems(tab).map((item) => (
                  <Card 
                    key={item.id} 
                    className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                      selectedThread === item.id ? 'ring-2 ring-primary' : ''
                    } ${item.status === 'unread' ? 'border-l-4 border-l-primary' : ''}`}
                    onClick={() => setSelectedThread(item.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={item.author.avatar} />
                          <AvatarFallback>{item.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{item.author.name}</span>
                            {item.author.verified && <CheckCircle className="h-4 w-4 text-blue-500" />}
                            <span className="text-sm text-muted-foreground">@{item.author.username}</span>
                            <Badge variant="outline" className="text-xs">{item.platform}</Badge>
                          </div>
                          
                          <p className="text-sm mb-2 line-clamp-2">{item.content}</p>
                          
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <Clock className="h-3 w-3" />
                            <span>{item.timestamp}</span>
                            {item.location && (
                              <>
                                <MapPin className="h-3 w-3" />
                                <span>{item.location}</span>
                              </>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              <Badge variant="secondary">
                                {item.priority}
                              </Badge>
                              <Badge variant="outline" className={getSentimentColor(item.sentiment)}>
                                {item.sentiment}
                              </Badge>
                              {item.linkedIncident && (
                                <Badge variant="secondary">
                                  {item.linkedIncident}
                                </Badge>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              {item.engagement.likes > 0 && (
                                <span className="flex items-center gap-1">
                                  <Heart className="h-3 w-3" />
                                  {item.engagement.likes}
                                </span>
                              )}
                              {item.engagement.retweets > 0 && (
                                <span className="flex items-center gap-1">
                                  <Share2 className="h-3 w-3" />
                                  {item.engagement.retweets}
                                </span>
                              )}
                              {item.engagement.replies > 0 && (
                                <span className="flex items-center gap-1">
                                  <Reply className="h-3 w-3" />
                                  {item.engagement.replies}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex gap-1 mt-2">
                            {item.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                {selectedThread ? (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Reply className="h-5 w-5" />
                        Reply to Thread
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">AI Suggested Responses</label>
                        <div className="space-y-2">
                          {aiSuggestions.map((suggestion, i) => (
                            <Button
                              key={i}
                              variant="outline"
                              className="w-full text-left h-auto p-3 justify-start"
                              onClick={() => setReplyText(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Custom Response</label>
                        <Textarea
                          placeholder="Type your response..."
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          rows={4}
                        />
                      </div>

                      <div className="flex gap-2">
                        <Select defaultValue="official">
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="official">Official</SelectItem>
                            <SelectItem value="empathetic">Empathetic</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        <Select defaultValue="public">
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public Reply</SelectItem>
                            <SelectItem value="dm">Direct Message</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1">Send Reply</Button>
                        <Button variant="outline">Save Draft</Button>
                      </div>

                      <div className="border-t pt-4 space-y-2">
                        <h4 className="font-medium">Quick Actions</h4>
                        <div className="flex gap-2 flex-wrap">
                          <Button variant="outline" size="sm">Create Incident</Button>
                          <Button variant="outline" size="sm">Assign Team</Button>
                          <Button variant="outline" size="sm">Escalate</Button>
                          <Button variant="outline" size="sm">Mark Resolved</Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View Original
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="flex items-center justify-center h-64">
                      <div className="text-center text-muted-foreground">
                        <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Select a thread to view details and compose a reply</p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Inbox Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-500">{tabCounts.priority}</div>
                        <div className="text-sm text-muted-foreground">High Priority</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{tabCounts.assigned}</div>
                        <div className="text-sm text-muted-foreground">Assigned</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-500">{tabCounts.resolved}</div>
                        <div className="text-sm text-muted-foreground">Resolved</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">4.2 min</div>
                        <div className="text-sm text-muted-foreground">Avg Response</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}


