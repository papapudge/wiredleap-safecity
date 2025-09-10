"use client"

import { motion } from "framer-motion"
import { forwardRef } from "react"
import { Button, ButtonProps } from "@/registry/new-york-v4/ui/button"
import { buttonHover, buttonTap } from "@/lib/animations"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        whileHover={buttonHover}
        whileTap={buttonTap}
        className="inline-block"
      >
        <Button
          ref={ref}
          className={className}
          {...props}
        >
          <motion.span
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.9 }}
            className="flex items-center gap-2"
          >
            {children}
          </motion.span>
        </Button>
      </motion.div>
    )
  }
)

AnimatedButton.displayName = "AnimatedButton"