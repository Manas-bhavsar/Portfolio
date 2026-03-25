// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TYPE DEFINITIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface PersonalInfo {
    name: string
    firstName: string
    lastName: string
    title: string
    tagline: string
    bio: string
    email: string
    phone?: string
    location: string
    resumeUrl?: string
    avatarUrl?: string
}

export interface Skill {
    name: string
    level: number // 0-100
    category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface Project {
    id: string
    title: string
    description: string
    tech: string[]
    image?: string
    liveUrl?: string
    githubUrl?: string
    featured: boolean
    category: string
    year: string
}

export interface Experience {
    id: string
    title: string
    company: string
    companyUrl?: string
    period: string
    description: string
    tech: string[]
}

export interface Education {
    id: string
    degree: string
    institution: string
    period: string
    description: string
}

export interface Testimonial {
    id: string
    name: string
    role: string
    company: string
    text: string
}

export interface SocialLink {
    name: string
    url: string
    icon: string
}

export interface NavItem {
    id: string
    label: string
    number: string
}

export interface Stat {
    number: string
    label: string
}

export interface Hobby {
    name: string
    description: string
    icon: string
}

export interface CommunicationSkill {
    name: string
    level: number
}

export interface SiteConfig {
    personalInfo: PersonalInfo
    navItems: NavItem[]
    stats: Stat[]
    skills: Skill[]
    communicationSkills: CommunicationSkill[]
    projects: Project[]
    experience: Experience[]
    education: Education[]
    testimonials: Testimonial[]
    socialLinks: SocialLink[]
    hobbies: Hobby[]
}
