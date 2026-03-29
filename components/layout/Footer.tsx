'use client'

import { motion } from 'framer-motion'
import { personalInfo, socialLinks } from '@/lib/siteConfig'
import styles from './Footer.module.css'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <motion.footer
            className={styles.footer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className={styles.inner}>
                <div className={styles.top}>
                    <span className={styles.brand}>{personalInfo.firstName.toUpperCase()}</span>
                    <div className={styles.links}>
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            Resume
                        </a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <span className={styles.copy}>
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </span>
                    <span className={styles.credit}>
                        Designed & Built with ♥
                    </span>
                </div>
            </div>
        </motion.footer>
    )
}
