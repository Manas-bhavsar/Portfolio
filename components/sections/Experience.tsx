'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/siteConfig'
import styles from './Experience.module.css'

export const Experience = () => {
    return (
        <section id="experience" className={`${styles.experience}`}>
            <div className={styles.inner}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className={styles.eyebrow}>03 — Work</span>
                    <h2 className={styles.title}>EXPERIENCE</h2>
                </motion.div>

                <div className={styles.grid}>
                    {experience.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardLetter}>
                                        {String.fromCharCode(65 + i)}
                                    </span>
                                    <div className={styles.cardMeta}>
                                        <h3 className={styles.company}>{exp.company.toUpperCase()}</h3>
                                        <span className={styles.period}>{exp.period}</span>
                                    </div>
                                </div>

                                <div className={styles.cardBody}>
                                    <p className={styles.role}>{exp.title}</p>
                                    <p className={styles.description}>{exp.description}</p>
                                </div>

                                <div className={styles.techRow}>
                                    {exp.tech.map((t) => (
                                        <span key={t} className={styles.techTag}>{t}</span>
                                    ))}
                                </div>
                            </div>

                            <h3 className={styles.cardTitle}>JOB POSITION</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
