"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Settings, 
  LogOut, 
  ChevronUp,
  User,
  Shield
} from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/new-york-v4/ui/avatar"
import { Button } from "@/registry/new-york-v4/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"

export function ModernProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-auto p-3 hover:bg-accent/50 transition-all duration-200"
        >
          <Avatar className="h-8 w-8 border-2 border-primary/20">
            <AvatarImage src="/avatars/officer-rajesh.jpg" />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              RK
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 text-left">
            <div className="font-medium text-sm">Rajesh Kumar</div>
            <div className="text-xs text-muted-foreground">Control Room Operator</div>
          </div>
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-64 p-2"
        side="top"
      >
        <div className="flex items-center gap-3 p-2 mb-2">
          <Avatar className="h-10 w-10 border-2 border-primary/20">
            <AvatarImage src="/avatars/officer-rajesh.jpg" />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              RK
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium">Officer Rajesh Kumar</div>
            <div className="text-sm text-muted-foreground">Control Room Operator</div>
            <div className="flex items-center gap-1 mt-1">
              <Shield className="h-3 w-3 text-green-500" />
              <span className="text-xs text-green-500">Active Duty</span>
            </div>
          </div>
        </div>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
            <User className="h-4 w-4" />
            My Profile
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link href="/admin" className="flex items-center gap-2 cursor-pointer">
            <Settings className="h-4 w-4" />
            Admin Settings
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild>
          <Link 
            href="/auth/login" 
            className="flex items-center gap-2 cursor-pointer text-red-600 hover:text-red-700"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}