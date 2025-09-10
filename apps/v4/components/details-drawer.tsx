"use client"

import { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight } from "lucide-react"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/registry/new-york-v4/ui/sheet"

interface DetailsDrawerProps {
  trigger: ReactNode
  title: string
  description?: string
  children: ReactNode
  badge?: string
  size?: "default" | "sm" | "lg" | "xl" | "full"
}

export function DetailsDrawer({ 
  trigger, 
  title, 
  description, 
  children, 
  badge,
  size = "default" 
}: DetailsDrawerProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer"
        >
          {trigger}
        </motion.div>
      </SheetTrigger>
      
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-lg overflow-y-auto"
        size={size}
      >
        <SheetHeader className="space-y-4 pb-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="h-5 w-5 text-primary" />
              </motion.div>
              <SheetTitle className="text-xl font-semibold">{title}</SheetTitle>
              {badge && (
                <Badge variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              )}
            </div>
            <SheetClose asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </SheetClose>
          </div>
          {description && (
            <SheetDescription className="text-muted-foreground">
              {description}
            </SheetDescription>
          )}
        </SheetHeader>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="pt-6"
        >
          {children}
        </motion.div>
      </SheetContent>
    </Sheet>
  )
}

// Specific drawer for License Lookup Details
export function LicenseLookupDrawer({ 
  trigger, 
  licenseData 
}: { 
  trigger: ReactNode
  licenseData?: {
    licenseNumber: string
    holderName: string
    type: string
    status: string
    issueDate: string
    expiryDate: string
    violations?: number
    lastVerified: string
  }
}) {
  const defaultData = {
    licenseNumber: "DL-12345678",
    holderName: "Rajesh Kumar Sharma", 
    type: "Driving License",
    status: "Active",
    issueDate: "2020-03-15",
    expiryDate: "2025-03-15",
    violations: 2,
    lastVerified: "2024-12-10"
  }

  const data = licenseData || defaultData

  return (
    <DetailsDrawer
      trigger={trigger}
      title="License Lookup Details"
      description="Recent vehicle and driver license verifications"
      badge="Updated"
    >
      <div className="space-y-6">
        {/* License Information */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">License Information</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <span className="text-sm text-muted-foreground">License Number</span>
              <span className="font-mono font-semibold">{data.licenseNumber}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <span className="text-sm text-muted-foreground">Holder Name</span>
              <span className="font-semibold">{data.holderName}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <span className="text-sm text-muted-foreground">Type</span>
              <Badge variant="outline">{data.type}</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
              <span className="text-sm text-muted-foreground">Status</span>
              <Badge variant={data.status === "Active" ? "default" : "destructive"}>
                {data.status}
              </Badge>
            </div>
          </div>
        </div>

        {/* Validity */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Validity Period</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Issue Date</p>
              <p className="font-semibold">{data.issueDate}</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Expiry Date</p>
              <p className="font-semibold">{data.expiryDate}</p>
            </div>
          </div>
        </div>

        {/* Violations */}
        {data.violations !== undefined && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Violations Record</h3>
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Violations</span>
                <Badge variant="destructive" className="text-lg px-3 py-1">
                  {data.violations}
                </Badge>
              </div>
              {data.violations > 0 && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                  License holder has {data.violations} recorded violation(s)
                </p>
              )}
            </div>
          </div>
        )}

        {/* Last Verified */}
        <div className="pt-4 border-t">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Last Verified</span>
            <span>{data.lastVerified}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4">
          <Button className="flex-1">
            Update Verification
          </Button>
          <Button variant="outline" className="flex-1">
            Download Report
          </Button>
        </div>
      </div>
    </DetailsDrawer>
  )
}