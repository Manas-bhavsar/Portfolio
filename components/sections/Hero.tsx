'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { personalInfo, stats, socialLinks } from '@/lib/siteConfig'
import { ArrowDown } from 'lucide-react'
import styles from './Hero.module.css'

const letterVariants = {
    hidden: { clipPath: 'inset(100% 0% 0% 0%)', filter: 'blur(10px)', y: 40 },
    visible: {
        clipPath: 'inset(0% 0% 0% 0%)',
        filter: 'blur(0px)',
        y: 0,
    },
}

export const Hero = () => {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const nameY = useTransform(scrollYProgress, [0, 1], [0, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const firstNameLetters = personalInfo.firstName.toUpperCase().split('')
    const lastNameLetters = personalInfo.lastName.toUpperCase().split('')

    return (
        <section id="hero" className={styles.hero} ref={ref}>
            {/* Giant Name */}
            <motion.div className={styles.nameBlock} style={{ y: nameY, opacity }}>
                <h1 className={styles.name}>
                    <span className={styles.nameRow}>
                        {firstNameLetters.map((letter, i) => (
                            <motion.span
                                key={`first-${i}`}
                                className={styles.letter}
                                initial="hidden"
                                animate="visible"
                                variants={letterVariants}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.1 + i * 0.03,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </span>
                    <span className={styles.nameRow}>
                        {lastNameLetters.map((letter, i) => (
                            <motion.span
                                key={`last-${i}`}
                                className={styles.letter}
                                initial="hidden"
                                animate="visible"
                                variants={letterVariants}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.1 + (firstNameLetters.length + i) * 0.03,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </span>
                </h1>
            </motion.div>

            {/* Info Grid */}
            <motion.div
                className={styles.infoGrid}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Role</span>
                    <span className={styles.infoValue}>{personalInfo.title}</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Based In</span>
                    <span className={styles.infoValue}>{personalInfo.location}</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Email</span>
                    <a href={`mailto:${personalInfo.email}`} className={styles.infoValue}>
                        {personalInfo.email}
                    </a>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Availability</span>
                    <span className={`${styles.infoValue} ${styles.available}`}>
                        <span className={styles.statusDot} />
                        Open to Work
                    </span>
                </div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
                className={styles.statsBar}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
                {stats.map((stat, i) => (
                    <div key={stat.label} className={styles.stat}>
                        <span className={styles.statNum}>{stat.number}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                        {i < stats.length - 1 && <div className={styles.statDivider} />}
                    </div>
                ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
                className={styles.socials}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href={personalInfo.resumeUrl}
                    download="Manas_Bhavsar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    Resume
                </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown size={20} />
                </motion.div>
                <span>Scroll</span>
            </motion.div>

            {/* Decorative Page Number */}
            <motion.span
                className={styles.pageNumber}
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
                01
            </motion.span>
        </section>
    )
}
