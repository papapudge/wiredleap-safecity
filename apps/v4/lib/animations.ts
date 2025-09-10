// Apple-inspired smooth animations and micro-interactions
export const springTransition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
  mass: 1,
} as const

export const smoothTransition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for Apple-like feel
} as const

export const fastTransition = {
  duration: 0.2,
  ease: [0.25, 0.46, 0.45, 0.94],
} as const

export const slowTransition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
} as const

// Animation variants for different component states
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 20,
    filter: "blur(4px)"
  },
  animate: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)"
  },
  exit: { 
    opacity: 0, 
    y: -10,
    filter: "blur(4px)"
  }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const scaleIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 }
}

export const slideInRight = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 }
}

export const slideInLeft = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 }
}

// Interactive hover and tap animations
export const hoverScale = {
  scale: 1.02,
  transition: springTransition
}

export const tapScale = {
  scale: 0.98,
  transition: fastTransition
}

export const buttonHover = {
  scale: 1.02,
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  transition: springTransition
}

export const buttonTap = {
  scale: 0.98,
  transition: fastTransition
}

export const cardHover = {
  y: -4,
  scale: 1.01,
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  transition: springTransition
}

export const iconSpin = {
  rotate: 360,
  transition: {
    duration: 0.8,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop" as const
  }
}

export const iconBounce = {
  y: [0, -5, 0],
  transition: {
    duration: 0.6,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
  }
}

export const pulseGlow = {
  boxShadow: [
    "0 0 0 0 rgba(59, 130, 246, 0.4)",
    "0 0 0 10px rgba(59, 130, 246, 0)",
    "0 0 0 0 rgba(59, 130, 246, 0)"
  ],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop" as const
  }
}

// Page transition variants
export const pageTransition = {
  initial: { 
    opacity: 0, 
    y: 20,
    filter: "blur(4px)"
  },
  animate: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...smoothTransition,
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    filter: "blur(4px)",
    transition: fastTransition
  }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransition
  }
}

// Loading animations
export const skeletonPulse = {
  opacity: [0.4, 1, 0.4],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

export const spinLoader = {
  rotate: 360,
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "linear"
  }
}

// Notification animations
export const notificationSlide = {
  initial: { 
    x: "100%", 
    opacity: 0,
    scale: 0.8
  },
  animate: { 
    x: 0, 
    opacity: 1,
    scale: 1,
    transition: springTransition
  },
  exit: { 
    x: "100%", 
    opacity: 0,
    scale: 0.8,
    transition: smoothTransition
  }
}

// Modal animations
export const modalOverlay = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const modalContent = {
  initial: { 
    scale: 0.9, 
    opacity: 0,
    y: 20
  },
  animate: { 
    scale: 1, 
    opacity: 1,
    y: 0,
    transition: springTransition
  },
  exit: { 
    scale: 0.9, 
    opacity: 0,
    y: 20,
    transition: smoothTransition
  }
}

// Chart animations
export const chartFadeIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      ...smoothTransition,
      delay: 0.2
    }
  }
}

// Navigation animations
export const navItemHover = {
  x: 4,
  backgroundColor: "rgba(59, 130, 246, 0.1)",
  transition: fastTransition
}

export const navItemTap = {
  scale: 0.95,
  transition: fastTransition
}