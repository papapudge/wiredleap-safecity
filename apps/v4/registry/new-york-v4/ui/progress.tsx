"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  animated?: boolean
}

function Progress({
  className,
  value,
  animated = false,
  ...props
}: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "bg-primary h-full w-full flex-1 transition-all duration-500 ease-out relative",
          animated && "bg-gradient-to-r from-primary via-primary/80 to-primary"
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      >
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        )}
        {animated && (
          <div 
            className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"
            style={{
              animation: "shimmer 2s infinite linear",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)"
            }}
          />
        )}
      </ProgressPrimitive.Indicator>
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
