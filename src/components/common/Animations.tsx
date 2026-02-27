'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export const FadeIn = ({ children, delay = 0, duration = 0.5 }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

interface SlideInProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  duration?: number
}

export const SlideIn = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
}: SlideInProps) => {
  const initialY = direction === 'up' ? 20 : direction === 'down' ? -20 : 0
  const initialX = direction === 'left' ? -20 : direction === 'right' ? 20 : 0

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export const ScaleIn = ({ children, delay = 0, duration = 0.5 }: ScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
