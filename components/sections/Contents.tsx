'use client'

import { motion } from 'framer-motion'
import { navItems } from '@/lib/siteConfig'
import styles from './Contents.module.css'

export const Contents = () => {
    const handleNav = (id: string) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className={styles.contents}>
            <div className={styles.inner}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    CONTENTS
                </motion.h2>

                <div className={styles.list}>
                    {navItems.map((item, i) => (
                        <motion.button
                            key={item.id}
                            className={styles.item}
                            onClick={() => handleNav(item.id)}
                            initial={{ opacity: 0, filter: 'blur(5px)', x: -20 }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className={styles.number}>{item.number}</span>
                            <span className={styles.dividerLine} />
                            <span className={styles.label}>{item.label}</span>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    )
}
