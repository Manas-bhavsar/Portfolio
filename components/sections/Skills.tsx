'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills, communicationSkills } from '@/lib/siteConfig'
import styles from './Skills.module.css'

export const Skills = () => {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="skills" className={styles.skills} ref={ref}>
            <div className={styles.inner}>
                {/* Left: Technical Skills */}
                <motion.div
                    className={styles.technicalBlock}
                    initial={{ opacity: 0, x: -100, scaleX: 1.2 }}
                    whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', damping: 10, stiffness: 200 }}
                >
                    <div className={styles.skillsList}>
                        {skills.slice(0, 8).map((skill, i) => (
                            <div key={skill.name} className={styles.skillRow}>
                                <span className={styles.skillName}>{skill.name.toUpperCase()}</span>
                                <div className={styles.barTrack}>
                                    <motion.div
                                        className={styles.barFill}
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: `${skill.level}%` } : {}}
                                        transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                </div>
                                <span className={styles.skillPercent}>{skill.level}%</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.skillsLabel}>
                        <h3 className={styles.blockTitle}>TECHNICAL</h3>
                        <h3 className={styles.blockTitleIndent}>SKILLS</h3>
                    </div>
                </motion.div>

                {/* Right: Communication Skills */}
                <motion.div
                    className={styles.commBlock}
                    initial={{ opacity: 0, x: 100, scaleX: 1.2 }}
                    whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', damping: 12, stiffness: 160, delay: 0.1 }}
                >
                    <h2 className={styles.commTitle}>COMMUNICATION</h2>
                    <h2 className={styles.commTitleIndent}>SKILLS</h2>

                    <div className={styles.commCard}>
                        <span className={styles.commCardLetter}>C</span>
                        <h4 className={styles.commCardTitle}>COMMUNICATION SKILLS</h4>
                        <span className={styles.commCardPeriod}>2022-2023</span>
                    </div>

                    <div className={styles.commList}>
                        {communicationSkills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                className={styles.commRow}
                                initial={{ opacity: 0, x: 50, scaleX: 1.5 }}
                                whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', damping: 10, stiffness: 200, delay: 0.2 + i * 0.05 }}
                            >
                                <span className={styles.commName}>{skill.name}</span>
                                <div className={styles.commDots}>
                                    {[...Array(5)].map((_, j) => (
                                        <span
                                            key={j}
                                            className={`${styles.dot} ${j < Math.round(skill.level / 20) ? styles.dotFilled : ''}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
