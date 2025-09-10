"use client"

import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york-v4/ui/card"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york-v4/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield, 
  Bell, 
  Lock, 
  Camera, 
  Edit3,
  Save,
  X,
  CheckCircle,
  AlertCircle,
  Activity,
  Clock,
  Award,
  Settings
} from "lucide-react"
import { PageTransition, StaggeredContainer } from "@/components/page-transition"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")
  
  const [profileData, setProfileData] = useState({
    firstName: "Rajesh",
    lastName: "Kumar",
    email: "rajesh.kumar@bangalorepolice.gov.in",
    phone: "+91 98765 43210",
    department: "Traffic Police",
    designation: "Assistant Commissioner",
    badgeNumber: "ACP-2024-001",
    location: "Bangalore, Karnataka",
    joinDate: "2020-03-15",
    lastLogin: "2024-01-15 14:30:25",
    status: "active",
    avatar: "/avatars/rajesh-kumar.jpg"
  })

  const [preferences, setPreferences] = useState({
    notifications: {
      email: true,
      sms: false,
      push: true,
      alerts: true,
      reports: false
    },
    privacy: {
      profileVisible: true,
      activityTracking: true,
      dataSharing: false
    },
    display: {
      theme: "system",
      language: "en",
      timezone: "Asia/Kolkata"
    }
  })

  const activityLog = [
    { action: "Logged in", time: "2024-01-15 14:30", status: "success" },
    { action: "Updated incident report", time: "2024-01-15 13:45", status: "success" },
    { action: "Accessed traffic dashboard", time: "2024-01-15 12:20", status: "success" },
    { action: "Failed login attempt", time: "2024-01-15 11:15", status: "error" },
    { action: "Changed password", time: "2024-01-14 16:30", status: "success" }
  ]

  const achievements = [
    { title: "First Response", description: "Responded to 100+ incidents", icon: Award, earned: "2024-01-10" },
    { title: "Data Analyst", description: "Analyzed 500+ traffic patterns", icon: Activity, earned: "2024-01-05" },
    { title: "Team Leader", description: "Led 10+ successful operations", icon: Shield, earned: "2023-12-20" }
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form data if needed
  }

  return (
    <PageTransition className="container-wrapper px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Profile</h1>
            <p className="text-muted-foreground">Manage your account settings and preferences</p>
          </div>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <AnimatedButton variant="outline" onClick={handleCancel}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </AnimatedButton>
                <AnimatedButton onClick={handleSave}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </AnimatedButton>
              </>
            ) : (
              <AnimatedButton onClick={() => setIsEditing(true)}>
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Profile
              </AnimatedButton>
            )}
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Vertical Navigation */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-2">
                <Button
                  variant={activeTab === "profile" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button
                  variant={activeTab === "preferences" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("preferences")}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Preferences
                </Button>
                <Button
                  variant={activeTab === "activity" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("activity")}
                >
                  <Activity className="h-4 w-4 mr-2" />
                  Activity
                </Button>
                <Button
                  variant={activeTab === "achievements" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("achievements")}
                >
                  <Award className="h-4 w-4 mr-2" />
                  Achievements
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">

        {activeTab === "profile" && (
          <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Profile Overview */}
            <AnimatedCard delay={0.1} className="md:col-span-1">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <Avatar className="h-24 w-24 mx-auto">
                    <AvatarImage src={profileData.avatar} alt={profileData.firstName} />
                    <AvatarFallback className="text-lg">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <CardTitle className="text-xl">
                  {profileData.firstName} {profileData.lastName}
                </CardTitle>
                <p className="text-muted-foreground">{profileData.designation}</p>
                <Badge variant={profileData.status === 'active' ? 'default' : 'secondary'} className="mt-2">
                  {profileData.status}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span>Badge: {profileData.badgeNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined: {new Date(profileData.joinDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Last login: {profileData.lastLogin}</span>
                </div>
              </CardContent>
            </AnimatedCard>

            {/* Profile Details */}
            <AnimatedCard delay={0.2} className="md:col-span-2">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select disabled={!isEditing}>
                      <SelectTrigger>
                        <SelectValue value={profileData.department} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="traffic">Traffic Police</SelectItem>
                        <SelectItem value="law-order">Law & Order</SelectItem>
                        <SelectItem value="municipal">Municipal Services</SelectItem>
                        <SelectItem value="cyber">Cyber Crime</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                      id="designation"
                      value={profileData.designation}
                      onChange={(e) => setProfileData({...profileData, designation: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
          </div>
        )}

        {activeTab === "preferences" && (
          <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Notification Preferences */}
            <AnimatedCard delay={0.1}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch 
                    checked={preferences.notifications.email}
                    onCheckedChange={(checked) => setPreferences({
                      ...preferences,
                      notifications: {...preferences.notifications, email: checked}
                    })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive updates via SMS</p>
                  </div>
                  <Switch 
                    checked={preferences.notifications.sms}
                    onCheckedChange={(checked) => setPreferences({
                      ...preferences,
                      notifications: {...preferences.notifications, sms: checked}
                    })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications</p>
                  </div>
                  <Switch 
                    checked={preferences.notifications.push}
                    onCheckedChange={(checked) => setPreferences({
                      ...preferences,
                      notifications: {...preferences.notifications, push: checked}
                    })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Critical Alerts</Label>
                    <p className="text-sm text-muted-foreground">Always receive critical alerts</p>
                  </div>
                  <Switch 
                    checked={preferences.notifications.alerts}
                    onCheckedChange={(checked) => setPreferences({
                      ...preferences,
                      notifications: {...preferences.notifications, alerts: checked}
                    })}
                  />
                </div>
              </CardContent>
            </AnimatedCard>

            {/* Privacy Settings */}
            <AnimatedCard delay={0.2}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Profile Visibility</Label>
                    <p className="text-sm text-muted-foreground">Make profile visible to colleagues</p>
                  </div>
                  <Switch 
                    checked={preferences.privacy.profileVisible}
                    onCheckedChange={(checked) => setPreferences({
                      ...preferences,
                      privacy: {...preferences.privacy, profileVisible: checked}
                    })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Activity Tracking</Label>
                    <p className="text-sm text-muted-foreground">Track user activity for analytics</p>
                  </div>
                  <Switch 
                    checked={preferences.privacy.activityTracking}
                    onCheckedChange={(checked) => setPreferences({
                      ...preferences,
                      privacy: {...preferences.privacy, activityTracking: checked}
                    })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Data Sharing</Label>
                    <p className="text-sm text-muted-foreground">Share anonymized data for research</p>
                  </div>
                  <Switch 
                    checked={preferences.privacy.dataSharing}
                    onCheckedChange={(checked) => setPreferences({
                      ...preferences,
                      privacy: {...preferences.privacy, dataSharing: checked}
                    })}
                  />
                </div>
                <Separator />
                <AnimatedButton variant="outline" className="w-full">
                  <Lock className="h-4 w-4 mr-2" />
                  Change Password
                </AnimatedButton>
              </CardContent>
            </AnimatedCard>
          </div>
          </div>
        )}

        {activeTab === "activity" && (
          <div className="space-y-6">
          <AnimatedCard delay={0.1}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activityLog.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg border"
                  >
                    <div className={`p-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {activity.status === 'success' ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <AlertCircle className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </AnimatedCard>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                    <Badge variant="outline" className="text-xs">
                      Earned: {new Date(achievement.earned).toLocaleDateString()}
                    </Badge>
                  </CardContent>
                </AnimatedCard>
              )
            })}
          </div>
          </div>
        )}
        </div>
      </div>
    </PageTransition>
  )
}
