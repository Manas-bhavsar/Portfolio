'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
        
        try {
            const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
            if (!accessKey) {
                console.error("Web3Forms access key is missing");
                setStatus('error');
                return;
            }

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const result = await response.json();
            
            if (result.success) {
                setStatus('sent')
                setFormData({ name: '', email: '', message: '' })
            } else {
                console.error("Web3Forms submission failed", result)
                setStatus('error')
                setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
            }
        } catch (error) {
            console.error("Error submitting form", error)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000); // Reset after 5s
        }
    }

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <motion.div
                        className={styles.titleBlock}
                        initial={{ opacity: 0, scale: 1.15, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className={styles.title}>GET IN</h2>
                        <h2 className={styles.titleIndent}>TOUCH</h2>
                    </motion.div>

                    <motion.div
                        className={styles.contactInfo}
                        initial={{ opacity: 0, filter: 'blur(5px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Resume</span>
                            <a href={personalInfo.resumeUrl} download="Manas_Bhavsar_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.infoValue}>
                                Download CV <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.socialBlock}
                        initial={{ opacity: 0, filter: 'blur(5px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        E
                    </motion.span>
                </div>

                <motion.div
                    className={styles.right}
                    initial={{ opacity: 0, scale: 0.95, filter: 'saturate(0)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'saturate(1)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <AnimatePresence mode="wait">
                        {status === 'sent' ? (
                            <motion.div
                                key="success"
                                className={styles.successMessage}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className={styles.successIconWrapper}>
                                    <span className={styles.successIcon}>✓</span>
                                </div>
                                <h3 className={styles.successTitle}>Message Sent!</h3>
                                <p className={styles.successText}>Thank you for reaching out. I've successfully received your message and will get back to you as soon as possible.</p>
                                <button type="button" className={styles.submitBtn} onClick={() => setStatus('idle')} style={{ marginTop: '1.5rem' }}>
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form 
                                key="form"
                                onSubmit={handleSubmit} 
                                className={styles.form}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
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
                            ) : status === 'error' ? (
                                <span>Failed to Send ✗</span>
                            ) : (
                                <span className={styles.btnContent}>
                                    <Send size={16} />
                                    Send Message
                                </span>
                            )}
                        </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}
