import {
    PersonalInfo,
    Skill,
    CommunicationSkill,
    Project,
    Experience,
    Education,
    Testimonial,
    SocialLink,
    NavItem,
    Stat,
    Hobby,
} from './types'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SITE CONFIGURATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ── Personal Info ──
export const personalInfo: PersonalInfo = {
    name: 'Manas Bhavsar',
    firstName: 'Manas',
    lastName: 'Bhavsar',
    title: 'Developer',
    tagline: 'Crafting pixel-perfect digital experiences with modern web technologies.',
    bio: "I'm a frontend developer passionate about crafting pixel-perfect, accessible, and performant user interfaces. I specialize in React, Next.js, and modern CSS — turning complex problems into elegant, intuitive solutions. I believe great design is invisible, and every interaction should feel natural.",
    email: 'manas.bhavsar45@gmail.com',
    location: 'India',
    resumeUrl: '/resume.pdf',
    avatarUrl: '',
}

// ── Navigation ──
export const navItems: NavItem[] = [
    { id: 'hero', label: 'Home', number: '01' },
    { id: 'about', label: 'About', number: '02' },
    { id: 'experience', label: 'Experience', number: '03' },
    { id: 'education', label: 'Education', number: '04' },
    { id: 'skills', label: 'Skills', number: '05' },
    { id: 'projects', label: 'Projects', number: '06' },
    { id: 'hobbies', label: 'Hobbies', number: '07' },
    { id: 'contact', label: 'Contact', number: '08' },
]

// ── Stats ──
export const stats: Stat[] = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Built' },
]

// ── Technical Skills ──
export const skills: Skill[] = [
    { name: 'React / Next.js', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'JavaScript (ES6+)', level: 92, category: 'frontend' },
    { name: 'HTML5 / CSS3', level: 95, category: 'frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend' },
    { name: 'Framer Motion', level: 80, category: 'frontend' },
    { name: 'Node.js', level: 70, category: 'backend' },
    { name: 'REST APIs', level: 78, category: 'backend' },
    { name: 'Git / GitHub', level: 85, category: 'tools' },
    { name: 'Figma', level: 75, category: 'tools' },
    { name: 'Vercel', level: 82, category: 'tools' },
]

// ── Communication Skills ──
export const communicationSkills: CommunicationSkill[] = [
    { name: 'English', level: 90 },
    { name: 'Gujarati', level: 95 },
    { name: 'Hindi', level: 95 },
    { name: 'Technical Writing', level: 80 },
    { name: 'Team Collaboration', level: 88 },
]

// ── Projects ──
export const projects: Project[] = [
    {
        id: '1',
        title: 'Mark UI',
        description: 'Mark UI is a modern, lightweight component library designed for building clean and consistent user interfaces. It offers a curated set of ready-to-use components with a focus on simplicity, performance, and developer experience — making it easy to craft polished web applications without the overhead of complex configuration',
        tech: ['React', 'Next.JS', 'Tailwind CSS', 'TypeScript'],
        image: '',
        liveUrl: 'https://markui.vercel.app/',
        githubUrl: 'https://github.com/Manas-bhavsar/mark-ui',
        featured: true,
        category: 'Frontend',
        year: '2024',
    },
    {
        id: '2',
        title: 'ResuKnow',
        description: 'RESUKNOW is an AI-powered resume analysis platform that helps job seekers create optimized, ATS-friendly resumes. It analyzes uploaded resumes and provides real-time feedback on keywords, formatting, and content quality to improve chances of getting shortlisted by recruiters.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        image: '',
        liveUrl: 'https://resuknow.vercel.app/',
        githubUrl: 'https://github.com/meghp2356/ResuKnowVercel',
        featured: true,
        category: 'Frontend',
        year: '2025',
    },
    {
        id: '3',
        title: 'SalesDesk Dashboard',
        description: 'A comprehensive dashboard application for sales analytics and management. Features include Excel data import, intuitive data tables, interactive charts, and real-time statistics, all wrapped in a premium UI with dark and light modes.',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        image: '',
        liveUrl: '',
        githubUrl: 'https://github.com/Manas-bhavsar/salesdesk',
        featured: true,
        category: 'Fullstack',
        year: '2024',
    },
]

// ── Experience ──
export const experience: Experience[] = [
    {
        id: '1',
        title: 'Intern',
        company: 'Ingenious Erectors',
        period: '2025',
        description: 'During my internship, I worked extensively with PHP to develop a school attendance system, gaining hands-on experience in building real-world applications from the ground up. I was involved in implementing core features and ensuring a smooth, user-friendly interface. This experience strengthened my practical development skills and changed my approach to coding—making me more focused on writing clean, efficient, and user-centered solutions.',
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    },

]

// ── Education ──
export const education: Education[] = [
    {
        id: '1',
        degree: 'Diploma in Computer Engineering',
        institution: 'LJ Polytechnic',
        period: '2018 — 2022',
        description: 'Specialized in software engineering and web technologies. Graduated with distinction.',
    },
    {
        id: '2',
        degree: 'Bachelors in Computer Engineering',
        institution: 'Gandhinagar University',
        period: '2025 — 2028',
        description: 'Science stream with Computer Science. Scored 92% in board examinations.',
    },
]

// ── Testimonials ──
export const testimonials: Testimonial[] = [
    // {
    //     id: '1',
    //     name: 'Alex Chen',
    //     role: 'Product Manager',
    //     company: 'TechCorp',
    //     text: 'Manas delivered an exceptional frontend that exceeded our expectations. His attention to performance and accessibility set him apart.',
    // },
    // {
    //     id: '2',
    //     name: 'Sarah Johnson',
    //     role: 'CTO',
    //     company: 'StartupHub',
    //     text: 'Working with Manas was a game-changer. He transformed our legacy UI into a modern, responsive application that our users love.',
    // },
    // {
    //     id: '3',
    //     name: 'David Park',
    //     role: 'Design Lead',
    //     company: 'CreativeStudio',
    //     text: 'Manas has a rare ability to translate complex designs into flawless code. His eye for detail and smooth animations bring designs to life.',
    // },
]

// ── Social Links ──
export const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/Manas-bhavsar', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manas-bhavsar-21a9a53a4/', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:manas.bhavsar45@gmail.com', icon: 'email' },
    { name: 'Instagram', url: 'https://www.instagram.com/saras_manas/', icon: 'instagram' },
]

// ── Hobbies ──
export const hobbies: Hobby[] = [
    { name: 'Open Source', description: 'Contributing to open-source projects and building developer tools.', icon: '💻' },
    { name: 'UI/UX Design', description: 'Exploring design trends and crafting beautiful user interfaces.', icon: '🎨' },
    { name: 'Reading', description: 'Tech blogs, software architecture books, and sci-fi novels.', icon: '📚' },
    { name: 'Photography', description: 'Capturing landscapes and street photography in my spare time.', icon: '📸' },
    { name: 'Gaming', description: 'Strategy games and indie titles that push creative boundaries.', icon: '🎮' },
    { name: 'Music', description: 'Discovering new genres and creating lo-fi playlists for coding sessions.', icon: '🎵' },
]
