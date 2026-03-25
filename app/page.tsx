import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Contents } from '@/components/sections/Contents'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Hobbies } from '@/components/sections/Hobbies'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Contents />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Hobbies />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
