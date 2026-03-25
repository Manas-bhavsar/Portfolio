'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo, navItems } from '@/lib/siteConfig'
import styles from './Navbar.module.css'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNav = (id: string) => {
        setIsOpen(false)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <motion.nav
                className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className={styles.inner}>
                    <button className={styles.logo} onClick={() => handleNav('hero')}>
                        {personalInfo.firstName.toUpperCase()}
                    </button>

                    <button
                        className={`${styles.menuBtn} ${isOpen ? styles.menuOpen : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2rem)' }}
                        animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2rem)' }}
                        exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2rem)' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className={styles.overlayContent}>
                            {navItems.map((item, i) => (
                                <motion.button
                                    key={item.id}
                                    className={styles.overlayLink}
                                    onClick={() => handleNav(item.id)}
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <span className={styles.linkNumber}>{item.number}</span>
                                    <span className={styles.linkLabel}>{item.label}</span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
