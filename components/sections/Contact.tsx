'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, socialLinks } from '@/lib/siteConfig'
import { ArrowUpRight, Send } from 'lucide-react'
import styles from './Contact.module.css'

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message) return
        setStatus('sending')
        // Simulate send
        setTimeout(() => {
            setStatus('sent')
            setFormData({ name: '', email: '', message: '' })
        }, 1500)
    }

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <motion.div
                        className={styles.titleBlock}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className={styles.title}>GET IN</h2>
                        <h2 className={styles.titleIndent}>TOUCH</h2>
                    </motion.div>

                    <motion.div
                        className={styles.contactInfo}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Email</span>
                            <a href={`mailto:${personalInfo.email}`} className={styles.infoValue}>
                                {personalInfo.email} <ArrowUpRight size={14} />
                            </a>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Location</span>
                            <span className={styles.infoValue}>{personalInfo.location}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.socialBlock}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <span className={styles.socialLabel}>Find me on</span>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                >
                                    {link.name} <ArrowUpRight size={12} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.span
                        className={styles.sectionLetter}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        E
                    </motion.span>
                </div>

                <motion.div
                    className={styles.right}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="contact-name" className={styles.formLabel}>Name</label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="contact-email" className={styles.formLabel}>Email</label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="contact-message" className={styles.formLabel}>Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                                placeholder="Tell me about your project..."
                                rows={6}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? (
                                <span>Sending...</span>
                            ) : status === 'sent' ? (
                                <span>Message Sent ✓</span>
                            ) : (
                                <span className={styles.btnContent}>
                                    <Send size={16} />
                                    Send Message
                                </span>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
