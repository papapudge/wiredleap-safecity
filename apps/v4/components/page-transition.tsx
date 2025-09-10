"use client"

import { motion } from "framer-motion"
import { pageTransition, staggerContainer } from "@/lib/animations"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredContainerProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function StaggeredContainer({ children, className, delay = 0 }: StaggeredContainerProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}