'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/lib/siteConfig'
import { ArrowUpRight } from 'lucide-react'
import styles from './Projects.module.css'

export const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.inner}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: -50, rotateZ: -2 }}
                    whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', damping: 12, mass: 0.8, bounce: 0.2 }}
                >
                    <h2 className={styles.titleLeft}>THE</h2>
                    <h2 className={styles.titleRight}>WORK</h2>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, i) => (
                        <motion.article
                            key={project.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: -100, rotateZ: 5, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, rotateZ: 0, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ type: 'spring', damping: 14, mass: 1.0, bounce: 0.4, delay: i * 0.08 }}
                        >
                            {/* Image Area */}
                            <div className={styles.imageArea}>
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className={styles.projectImage}
                                    />
                                ) : (
                                    <div className={styles.imagePlaceholder}>
                                        <span className={styles.projectNumber}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                )}
                                {project.featured && (
                                    <span className={styles.featuredBadge}>Featured</span>
                                )}
                            </div>

                            {/* Content */}
                            <div className={styles.content}>
                                <div className={styles.contentHeader}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <span className={styles.year}>{project.year}</span>
                                </div>

                                <p className={styles.description}>{project.description}</p>

                                <div className={styles.techRow}>
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span key={t} className={styles.techTag}>{t}</span>
                                    ))}
                                </div>

                                <div className={styles.links}>
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                            Live <ArrowUpRight size={14} />
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                            Code <ArrowUpRight size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
