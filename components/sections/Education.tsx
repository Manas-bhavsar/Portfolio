'use client'

import { motion } from 'framer-motion'
import { education } from '@/lib/siteConfig'
import styles from './Education.module.css'

export const Education = () => {
    return (
        <section id="education" className={styles.education}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.id}
                            className={styles.card}
                            initial={{ opacity: 0, x: -100, scaleX: 1.2 }}
                            whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', damping: 12, stiffness: 200, delay: i * 0.05 }}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.cardLetter}>
                                    {String.fromCharCode(65 + i)}
                                </span>
                                <div className={styles.cardMeta}>
                                    <h3 className={styles.institution}>{edu.institution.toUpperCase()}</h3>
                                    <span className={styles.period}>{edu.period}</span>
                                </div>
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.degree}>{edu.degree}</p>
                                <p className={styles.description}>{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.right}
                    initial={{ opacity: 0, x: 100, scaleX: 1.2 }}
                    whileInView={{ opacity: 1, x: 0, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', damping: 14, stiffness: 160, delay: 0.1 }}
                >
                    <h2 className={styles.title}>EDUCATION</h2>
                    <p className={styles.subtitle}>
                        My academic journey and qualifications that shaped my career in technology.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
