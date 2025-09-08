"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
  SidebarSeparator,
} from "@/registry/new-york-v4/ui/sidebar"
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
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-3">
          <Shield className="h-8 w-8 text-primary" />
          <div>
            <h2 className="text-lg font-bold">WiredLeap</h2>
            <p className="text-xs text-muted-foreground">Safe City Intelligence</p>
          </div>
        </div>
        <SidebarSeparator />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((section) => (
            <SidebarMenuItem key={section.title}>
              <SidebarMenuButton className="w-full justify-start font-medium text-sm">
                <section.icon className="h-4 w-4" />
                {section.title}
              </SidebarMenuButton>
              <SidebarMenuSub>
                {section.items.map((item) => (
                  <SidebarMenuSubItem key={item.href}>
                    <SidebarMenuSubButton asChild isActive={pathname === item.href}>
                      <Link href={item.href} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/admin" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Admin Settings
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/auth/login" className="flex items-center gap-2 text-red-600">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="p-4 text-xs text-muted-foreground">
          <div className="font-medium">Officer Rajesh Kumar</div>
          <div>Control Room Operator</div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}