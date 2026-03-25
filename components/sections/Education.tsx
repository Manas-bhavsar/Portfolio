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
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
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

                    <motion.h3
                        className={styles.bottomTitle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        INSTITUTION
                    </motion.h3>
                </div>

                <motion.div
                    className={styles.right}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
