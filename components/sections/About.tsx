'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { personalInfo } from '@/lib/siteConfig'
import { ArrowUpRight } from 'lucide-react'
import styles from './About.module.css'

export const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.inner}>
                {/* Left: Image placeholder with editorial treatment */}
                <motion.div
                    className={styles.imageCol}
                    initial={{ opacity: 0, rotateY: -30, scale: 0.8, transformPerspective: 1000 }}
                    whileInView={{ opacity: 1, rotateY: 0, scale: 1, transformPerspective: 1000 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: 'spring', damping: 15, mass: 0.8, bounce: 0.4 }}
                >
                    <div className={styles.imageFrame}>
                        {personalInfo.avatarUrl ? (
                            <Image
                                src={personalInfo.avatarUrl}
                                alt={personalInfo.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={styles.avatarImage}
                            />
                        ) : (
                            <div className={styles.imagePlaceholder}>
                                <span className={styles.initial}>{personalInfo.firstName[0]}</span>
                            </div>
                        )}
                        <div className={styles.imageOverlay}>
                            <span className={styles.overlayText}>PORTRAIT</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Bio content */}
                <motion.div
                    className={styles.contentCol}
                    initial={{ opacity: 0, rotateX: 30, scale: 0.9, transformPerspective: 1000 }}
                    whileInView={{ opacity: 1, rotateX: 0, scale: 1, transformPerspective: 1000 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: 'spring', damping: 15, mass: 0.8, bounce: 0.4, delay: 0.1 }}
                >
                    <div className={styles.headerRow}>
                        <h2 className={styles.title}>ABOUT ME</h2>
                        <span className={styles.sectionNum}>02</span>
                    </div>

                    <div className={styles.bioBlock}>
                        <motion.p
                            className={styles.bio}
                            initial={{ opacity: 0, y: 30, rotateX: 20 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', damping: 15, delay: 0.2 }}
                        >
                            {personalInfo.bio}
                        </motion.p>

                        <motion.div
                            className={styles.details}
                            initial={{ opacity: 0, y: 30, rotateX: 20 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', damping: 15, delay: 0.3 }}
                        >
                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>Full Name</span>
                                <span className={styles.detailValue}>{personalInfo.name}</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>Role</span>
                                <span className={styles.detailValue}>{personalInfo.title}</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>Location</span>
                                <span className={styles.detailValue}>{personalInfo.location}</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>Email</span>
                                <a href={`mailto:${personalInfo.email}`} className={styles.detailValue}>
                                    {personalInfo.email}
                                </a>
                            </div>
                        </motion.div>

                        <motion.a
                            href={personalInfo.resumeUrl}
                            download="Manas_Bhavsar_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.resumeBtn}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', damping: 12, delay: 0.4 }}
                        >
                            Download Resume <ArrowUpRight size={16} />
                        </motion.a>
                    </div>

                    <motion.p
                        className={styles.tagline}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', damping: 15, delay: 0.5 }}
                    >
                        {personalInfo.tagline}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
