"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/registry/new-york-v4/ui/card"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { X, Activity, Bell, TrendingUp, Shield, MapPin, Users, AlertTriangle, Car, Eye, Brain, MessageSquare } from "lucide-react"

interface BannerConfig {
  title: string
  description: string
  icon: React.ComponentType<any>
  color: string
  gradient: string
  stats: Array<{
    label: string
    value: string
    trend?: string
  }>
  animation: string
  tips: string[]
}

const bannerConfigs: Record<string, BannerConfig> = {
  "control-room": {
    title: "Control Room Dashboard",
    description: "Real-time monitoring and alerts across all departments",
    icon: Activity,
    color: "text-blue-600",
    gradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
    stats: [
      { label: "Viral Topics", value: "23 Active", trend: "trending" },
      { label: "Live Alerts", value: "7 Critical", trend: "urgent" },
      { label: "Geo Hotspots", value: "12 Zones", trend: "monitored" }
    ],
    animation: "pulse",
    tips: [
      "🚨 Traffic fine scam is 10x viral - consider immediate public clarification",
      "📍 Whitefield has 23 incidents - deploy additional patrol units",
      "📊 68% negative sentiment - focus on positive news amplification"
    ]
  },
  "traffic": {
    title: "Traffic Intelligence",
    description: "ANPR violations, driver profiles, and traffic sentiment monitoring",
    icon: Car,
    color: "text-orange-600",
    gradient: "from-orange-500/10 via-red-500/10 to-orange-500/10",
    stats: [
      { label: "ANPR Violations", value: "1,247", trend: "+89 today" },
      { label: "License Lookups", value: "342", trend: "+23 today" },
      { label: "Fine Collection", value: "₹2.3M", trend: "pending" }
    ],
    animation: "wave",
    tips: [
      "🚗 89 new violations today - prioritize high-risk areas for enforcement",
      "👤 23 license lookups - verify expired licenses for immediate action",
      "💰 ₹2.3M in pending fines - send automated reminders to violators"
    ]
  },
  "law-order": {
    title: "Law & Order Dashboard",
    description: "Crime monitoring, protests, and public safety intelligence",
    icon: Shield,
    color: "text-red-600",
    gradient: "from-red-500/10 via-pink-500/10 to-red-500/10",
    stats: [
      { label: "Active Incidents", value: "15", trend: "+3 today" },
      { label: "Crowd Monitoring", value: "4 Areas", trend: "2 authorized" },
      { label: "Response Teams", value: "12 Deployed", trend: "ready" }
    ],
    animation: "glow",
    tips: [
      "🚨 3 new incidents today - review escalation protocols for high-risk cases",
      "👥 2 unauthorized gatherings detected - deploy crowd control units",
      "⚡ 12 teams deployed - coordinate with traffic for emergency routes"
    ]
  },
  "municipal": {
    title: "Municipal Services",
    description: "Infrastructure complaints, utilities, and civic services monitoring",
    icon: Users,
    color: "text-green-600",
    gradient: "from-green-500/10 via-emerald-500/10 to-green-500/10",
    stats: [
      { label: "Complaint Tickets", value: "89", trend: "+12 today" },
      { label: "Service Response", value: "6.8 hrs", trend: "avg. time" },
      { label: "Citizen Satisfaction", value: "87%", trend: "high" }
    ],
    animation: "bounce",
    tips: [
      "🏗️ 12 new complaints today - prioritize pothole repairs in high-traffic areas",
      "⏱️ 6.8hr avg response time - optimize field team deployment routes",
      "😊 87% satisfaction rate - maintain quality while reducing response time"
    ]
  },
  "safe-city": {
    title: "Unified Safe City",
    description: "Cross-departmental intelligence and coordinated response management",
    icon: Brain,
    color: "text-purple-600",
    gradient: "from-purple-500/10 via-indigo-500/10 to-purple-500/10",
    stats: [
      { label: "Cross-Dept Cases", value: "12", trend: "+2 today" },
      { label: "Escalated Alerts", value: "5", trend: "3 resolved" },
      { label: "Coordination Score", value: "94%", trend: "excellent" }
    ],
    animation: "rotate",
    tips: [
      "🤝 2 new cross-dept cases - coordinate traffic & law enforcement for Ring Road incident",
      "📢 3 alerts resolved today - maintain 94% coordination score for optimal response",
      "🎯 Focus on Whitefield-Koramangala corridor for integrated patrol deployment"
    ]
  },
  "map": {
    title: "Geographic Intelligence",
    description: "Spatial analysis and geographic intelligence for smart city operations",
    icon: MapPin,
    color: "text-indigo-600",
    gradient: "from-indigo-500/10 via-blue-500/10 to-indigo-500/10",
    stats: [
      { label: "Active Zones", value: "12", trend: "monitored" },
      { label: "High Priority", value: "3", trend: "urgent" },
      { label: "Coverage", value: "85%", trend: "excellent" }
    ],
    animation: "pulse",
    tips: [
      "🗺️ 3 high-priority zones need immediate attention - Whitefield, MG Road, Electronic City",
      "📍 85% coverage achieved - focus on remaining 15% for complete city monitoring",
      "🚨 Real-time incident tracking active - monitor traffic accidents and crowd gatherings"
    ]
  }
}

// SVG Animation Components
const PulseAnimation = () => (
  <motion.div
    className="absolute inset-0"
    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <div className="w-full h-full bg-blue-500/20 rounded-full" />
  </motion.div>
)

const WaveAnimation = () => (
  <motion.div
    className="absolute inset-0 overflow-hidden"
    animate={{ x: [-100, 100] }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
  >
    <div className="w-32 h-full bg-gradient-to-r from-transparent via-orange-500/30 to-transparent skew-x-12" />
  </motion.div>
)

const GlowAnimation = () => (
  <motion.div
    className="absolute inset-0"
    animate={{ 
      boxShadow: [
        "0 0 20px rgba(239, 68, 68, 0.3)",
        "0 0 40px rgba(239, 68, 68, 0.6)",
        "0 0 20px rgba(239, 68, 68, 0.3)"
      ]
    }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <div className="w-full h-full bg-red-500/10 rounded-lg" />
  </motion.div>
)

const BounceAnimation = () => (
  <motion.div
    className="absolute inset-0"
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <div className="w-full h-full bg-green-500/20 rounded-lg" />
  </motion.div>
)

const RotateAnimation = () => (
  <motion.div
    className="absolute inset-0"
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
  >
    <div className="w-full h-full bg-gradient-conic from-purple-500/20 via-transparent to-purple-500/20 rounded-lg" />
  </motion.div>
)

const animationComponents = {
  pulse: PulseAnimation,
  wave: WaveAnimation,
  glow: GlowAnimation,
  bounce: BounceAnimation,
  rotate: RotateAnimation
}

interface ContextualBannerProps {
  pageKey: string
  onDismiss?: () => void
  showDismiss?: boolean
}

export function ContextualBanner({ pageKey, onDismiss, showDismiss = true }: ContextualBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const config = bannerConfigs[pageKey]
  
  if (!config || !isVisible) return null

  const IconComponent = config.icon
  const AnimationComponent = animationComponents[config.animation as keyof typeof animationComponents]

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <Card className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <IconComponent className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {config.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {config.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3">
                {config.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                    {stat.trend && (
                      <div className="text-xs text-slate-500 dark:text-slate-500 ml-2">
                        {stat.trend}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="space-y-2">
                {config.tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-start gap-2 p-2 bg-slate-100 dark:bg-slate-800 rounded text-xs text-slate-700 dark:text-slate-300"
                  >
                    <span className="text-slate-500 dark:text-slate-400 mt-0.5">•</span>
                    <span>{tip}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {showDismiss && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDismiss}
                  className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
