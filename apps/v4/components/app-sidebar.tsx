"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Shield,
  Activity,
  Search,
  Users,
  MapPin,
  AlertTriangle,
  Car,
  TrendingUp,
  Eye,
  Brain,
  Bell,
  FileText,
  Settings,
  LogOut,
  Monitor,
  MessageSquare,
  Calendar,
  BarChart3,
} from "lucide-react"

const menuItems = [
  {
    title: "Dashboards",
    icon: Monitor,
    items: [
      { title: "Control Room", href: "/dashboards/control-room", icon: Shield },
      { title: "Traffic", href: "/dashboards/traffic", icon: Car },
      { title: "Law & Order", href: "/dashboards/law-order", icon: AlertTriangle },
      { title: "Municipal", href: "/dashboards/municipal", icon: MapPin },
      { title: "Safe City", href: "/dashboards/safe-city", icon: Shield },
    ],
  },
  {
    title: "Intelligence",
    icon: Brain,
    items: [
      { title: "Analysis", href: "/analysis", icon: Search },
      { title: "Intelligence Center", href: "/intelligence", icon: Activity },
      { title: "Social Inbox", href: "/inbox", icon: MessageSquare },
      { title: "Monitoring", href: "/monitoring", icon: Eye },
    ],
  },
  {
    title: "Operations",
    icon: AlertTriangle,
    items: [
      { title: "Incidents", href: "/incidents", icon: AlertTriangle },
      { title: "Traffic Intelligence", href: "/traffic", icon: Car },
      { title: "Lookup", href: "/lookup", icon: Search },
      { title: "Map View", href: "/map", icon: MapPin },
    ],
  },
  {
    title: "Automation",
    icon: Bell,
    items: [
      { title: "Alerts", href: "/alerts", icon: Bell },
      { title: "Templates", href: "/templates", icon: FileText },
      { title: "Campaigns", href: "/campaigns", icon: TrendingUp },
      { title: "Integrations", href: "/integrations", icon: Settings },
    ],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    items: [
      { title: "Reports", href: "/reports", icon: FileText },
      { title: "Exports", href: "/exports", icon: FileText },
      { title: "Explore", href: "/explore", icon: Search },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b">
        <Shield className="h-8 w-8 text-primary" />
        <div>
          <h2 className="text-lg font-bold">WiredLeap</h2>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>v1.0</span>
            <span>•</span>
            <span>History</span>
          </div>
          <p className="text-xs text-muted-foreground">Safe City Intelligence</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-2">
          {menuItems.map((section) => (
            <div key={section.title} className="mb-2">
              <div className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-muted-foreground">
                <section.icon className="h-4 w-4" />
                {section.title}
              </div>
              <div className="ml-6 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t p-2">
        <div className="space-y-1">
          <Link
            href="/admin"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Settings className="h-4 w-4" />
            Admin Settings
          </Link>
          <Link
            href="/auth/login"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-red-600 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </div>
        <div className="mt-4 p-2 text-xs text-muted-foreground">
          <div className="font-medium">Officer Rajesh Kumar</div>
          <div>Control Room Operator</div>
        </div>
      </div>
    </div>
  )
}