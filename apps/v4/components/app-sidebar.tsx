"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { navItemHover, navItemTap, fadeInUp, staggerItem, smoothTransition } from "@/lib/animations"
import { ModernProfile } from "@/components/modern-profile"
import {
  Shield,
  Activity,
  Search,
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
    <motion.div 
      className="flex h-full flex-col bg-background"
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={smoothTransition}
    >
      {/* Header */}
      <motion.div 
        className="flex items-center gap-2 px-4 py-3 border-b"
        variants={staggerItem}
        initial="initial"
        animate="animate"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={smoothTransition}
        >
          <Shield className="h-8 w-8 text-primary" />
        </motion.div>
        <motion.div
          variants={staggerItem}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold">WiredLeap</h2>
            <div className="flex items-center gap-2">
              <motion.div
                className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-600 font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...smoothTransition, delay: 0.3 }}
              >
                v1.0
              </motion.div>
              <motion.div
                className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...smoothTransition, delay: 0.4 }}
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-green-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-xs text-green-600 font-medium">LIVE</span>
              </motion.div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Safe City Intelligence</p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="flex-1 overflow-y-auto"
        variants={staggerItem}
        initial="initial"
        animate="animate"
      >
        <nav className="p-2">
          <AnimatePresence>
            {menuItems.map((section, sectionIndex) => (
              <motion.div 
                key={section.title} 
                className="mb-2"
                variants={staggerItem}
                initial="initial"
                animate="animate"
                transition={{ ...smoothTransition, delay: sectionIndex * 0.1 }}
              >
                <motion.div 
                  className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-muted-foreground"
                  whileHover={undefined}
                  transition={smoothTransition}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={smoothTransition}
                  >
                    <section.icon className="h-4 w-4" />
                  </motion.div>
                  {section.title}
                </motion.div>
                <motion.div 
                  className="ml-6 space-y-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ...smoothTransition, delay: sectionIndex * 0.1 + 0.2 }}
                >
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.href}
                      variants={staggerItem}
                      initial="initial"
                      animate="animate"
                      transition={{ ...smoothTransition, delay: (sectionIndex * 0.1) + (itemIndex * 0.05) + 0.3 }}
                      whileHover={undefined}
                      whileTap={undefined}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-all duration-200 relative overflow-hidden",
                          pathname === item.href && "bg-accent text-accent-foreground shadow-sm"
                        )}
                      >
                        {/* Active indicator */}
                        {pathname === item.href && (
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-sm"
                            layoutId="activeIndicator"
                            transition={smoothTransition}
                          />
                        )}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={smoothTransition}
                        >
                          <item.icon className="h-4 w-4" />
                        </motion.div>
                        <span>{item.title}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>
      </motion.div>

      {/* Footer */}
      <motion.div 
        className="border-t p-2"
        variants={staggerItem}
        initial="initial"
        animate="animate"
        transition={{ ...smoothTransition, delay: 0.8 }}
      >
        <ModernProfile />
      </motion.div>
    </motion.div>
  )
}