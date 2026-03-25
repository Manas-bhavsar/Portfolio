'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/siteConfig'
import styles from './About.module.css'

export const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.inner}>
                {/* Left: Image placeholder with editorial treatment */}
                <motion.div
                    className={styles.imageCol}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.imageFrame}>
                        <div className={styles.imagePlaceholder}>
                            <span className={styles.initial}>{personalInfo.firstName[0]}</span>
                        </div>
                        <div className={styles.imageOverlay}>
                            <span className={styles.overlayText}>PORTRAIT</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Bio content */}
                <motion.div
                    className={styles.contentCol}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.headerRow}>
                        <h2 className={styles.title}>ABOUT ME</h2>
                        <span className={styles.sectionNum}>02</span>
                    </div>

                    <div className={styles.bioBlock}>
                        <motion.p
                            className={styles.bio}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {personalInfo.bio}
                        </motion.p>

                        <motion.div
                            className={styles.details}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
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
                    </div>

                    <motion.p
                        className={styles.tagline}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        {personalInfo.tagline}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
