'use client'

import { motion } from 'framer-motion'
import { hobbies } from '@/lib/siteConfig'
import styles from './Hobbies.module.css'

export const Hobbies = () => {
    return (
        <section id="hobbies" className={styles.hobbies}>
            <div className={styles.inner}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    HOBBIES
                </motion.h2>

                <div className={styles.list}>
                    {hobbies.map((hobby, i) => (
                        <motion.div
                            key={hobby.name}
                            className={styles.item}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className={styles.icon}>{hobby.icon}</span>
                            <div className={styles.itemContent}>
                                <h3 className={styles.itemName}>{hobby.name}</h3>
                                <p className={styles.itemDesc}>{hobby.description}</p>
                            </div>
                            <span className={styles.itemNumber}>{String(i + 1).padStart(2, '0')}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
