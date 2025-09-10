"use client"

import { motion } from "framer-motion"
import { forwardRef } from "react"
import { Card, CardProps } from "@/registry/new-york-v4/ui/card"
import { cardHover, fadeInUp, smoothTransition } from "@/lib/animations"

interface AnimatedCardProps extends CardProps {
  children: React.ReactNode
  hoverable?: boolean
  delay?: number
}

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ children, className, hoverable = false, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        exit={fadeInUp.exit}
        transition={{
          ...smoothTransition,
          delay
        }}
        whileHover={undefined}
        className="inline-block w-full"
      >
        <Card
          ref={ref}
          className={`transition-all duration-300 ${className}`}
          {...props}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...smoothTransition, delay: delay + 0.1 }}
          >
            {children}
          </motion.div>
        </Card>
      </motion.div>
    )
  }
)

AnimatedCard.displayName = "AnimatedCard"