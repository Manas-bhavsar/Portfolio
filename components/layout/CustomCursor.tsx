'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setMounted(true)
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        const checkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Check if hovering over clickable elements
            const isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                              target.tagName.toLowerCase() === 'a' ||
                              target.tagName.toLowerCase() === 'button' ||
                              target.closest('a') !== null ||
                              target.closest('button') !== null
            
            setIsHovering(isClickable)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mousemove', checkHover)
        document.body.addEventListener('mouseleave', handleMouseLeave)
        document.body.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousemove', checkHover)
            document.body.removeEventListener('mouseleave', handleMouseLeave)
            document.body.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [isVisible])

    // Reset hover state on route change
    useEffect(() => {
        setIsHovering(false)
    }, [pathname])

    if (!mounted) return null

    // Disable on touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        return null
    }

    return (
        <>
            <motion.div
                className="custom-cursor-dot"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
            />
            <motion.div
                className="custom-cursor-ring"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(128, 128, 128, 0.1)' : 'transparent',
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
            />
        </>
    )
}
