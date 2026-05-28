import { type ReactNode, useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Trophy,
} from 'lucide-react';
import resumeFile from '../resume/PRANESH KUMAR N RESUME .pdf';

type SkillGroup = {
  title: string;
  items: string[];
};

type RevealProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const skillGroups: SkillGroup[] = [
  { title: 'Languages', items: ['Python', 'Java'] },
  { title: 'Cloud Services', items: ['AWS', 'Microsoft Azure'] },
  { title: 'Frameworks & Libraries', items: ['React.js', 'Node.js', 'Express.js'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL', 'Firebase'] },
  { title: 'Developer Tools', items: ['GitHub', 'VS Code'] },
  { title: 'Other Tools', items: ['Canva', 'Blender', 'MIT App Inventor', 'Eclipse IDE', 'Figma'] },
];

const internships = [
  {
    title: 'Cloud Engineer Intern — Viruzverse Solutions (2025)',
    description:
      'Worked on cloud-based projects with focus on AWS services, deployment automation, and scalable application architecture. Gained hands-on experience in cloud infrastructure, containerization, DevOps workflows, and supporting real-world client solutions.',
    stack: 'AWS, Azure, Docker',
  },
  {
    title: 'MERN Stack Intern — The Better Tomorrow (2025)',
    description:
      'Developed secure APIs and implemented database connections for authentication in dynamic web applications. Collaborated in a team environment and gained hands-on experience building production-ready MERN applications.',
    stack: 'Node.js, React.js, MongoDB, Express.js',
  },
];

const projects = [
  {
    title: 'CloudCrypt — Encrypted Cloud Storage Platform',
    description:
      'Developed a secure cloud file storage platform with encrypted file upload, file management, and monitoring using scalable AWS services.',
    stack: 'React, AWS S3, DynamoDB, Amplify',
  },
  {
    title: 'Thozhan — Job Portal for Blue Collar Workers',
    description:
      'Built a platform connecting blue-collar job seekers with employers across construction, transportation, manufacturing, and service industries. Included job posting and profile management features.',
    stack: 'React, Node.js, MongoDB, Express.js',
  },
  {
    title: 'Udhaviyaalan — Smart Emergency Response System',
    description:
      'Built a real-time emergency response system connecting users, ambulance drivers, hospitals, and police. Added GPS-based ambulance dispatch, hospital recommendations, and live tracking.',
    stack: 'Firebase, GPS tracking',
  },
];

const certifications = [
  'AWS Cloud Practitioner',
  'Mastering Data Structures & Algorithms using C and C++',
  'SQL Intermediate — HackerRank',
  'Web Development Internship — Better Tomorrow',
  'JavaScript — EduPyramids',
];

const achievements = [
  'CloudVerse Hackathon — Second Prize',
  'HackerRank Bronze Level (Java & C++)',
  'Skillrack — 200+ problems solved in Java and MySQL',
];

const imageModules = import.meta.glob('../assests/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const heroImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

function RevealSection({ id, className = '', children }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`transition-all duration-700 ${className} ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      {children}
    </section>
  );
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const showNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.16),transparent_50%)]" />

      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-[0.18em] text-cyan-300">
            PRANESH
          </a>
          <div className="hidden gap-5 text-sm text-slate-300 md:flex">
            <a className="hover:text-cyan-300" href="#about">About</a>
            <a className="hover:text-cyan-300" href="#skills">Skills</a>
            <a className="hover:text-cyan-300" href="#projects">Projects</a>
            <a className="hover:text-cyan-300" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <RevealSection id="home" className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">Portfolio</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Pranesh Kumar N
            </h1>
            <p className="mt-4 bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
              Cloud Engineer | MERN Stack Developer | IT Student
            </p>
            <p className="mt-6 max-w-3xl text-base text-slate-300 md:text-lg">
              Passionate Information Technology student focused on cloud engineering, full-stack web development,
              and building scalable real-world applications. Experienced with AWS, React, Node.js, and cloud deployment
              through internships and projects.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              B.Tech Information Technology, Sri Eshwar College of Engineering (2023-2027) | CGPA: 7.2
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-cyan-400/50 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:border-cyan-300"
              >
                Contact Me
              </a>
              <a
                href={resumeFile}
                download="Pranesh-Kumar-N-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-300"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="https://github.com" target="_blank" rel="noreferrer">
                <Github size={16} />
                GitHub
              </a>
              <a className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="mailto:pranesh@example.com">
                <Mail size={16} />
                Email
              </a>
            </div>
            <a href="#about" className="mt-10 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300">
              About Me <ArrowDown size={16} />
            </a>
          </div>

          <div className="mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md">
            <div className="rounded-3xl border border-cyan-300/30 bg-gradient-to-b from-cyan-400/10 to-violet-400/10 p-2 shadow-[0_0_60px_-25px_rgba(56,189,248,0.7)]">
              <div className="relative h-[420px] w-full overflow-hidden rounded-[1.25rem] md:h-[480px]">
                {heroImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Pranesh Kumar N ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}

                {heroImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrevious}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-700/80 bg-slate-950/70 p-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-700/80 bg-slate-950/70 p-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
                      aria-label="Next image"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {heroImages.map((image, index) => (
                        <button
                          key={`${image}-dot`}
                          type="button"
                          onClick={() => setCurrentSlide(index)}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            index === currentSlide ? 'bg-cyan-300' : 'bg-slate-500/80 hover:bg-slate-300'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="about" className="mx-auto mt-20 max-w-6xl px-6">
        <h2 className="text-2xl font-semibold md:text-3xl">About Me</h2>
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
          <p className="leading-relaxed text-slate-300">
            I am an Information Technology undergraduate at Sri Eshwar College of Engineering with strong interest in cloud computing,
            full-stack development, and scalable application architecture. I enjoy building secure web applications and cloud-based solutions
            using AWS and modern JavaScript frameworks. My internship experiences and hackathon participation have helped me gain practical
            exposure to real-world development and teamwork.
          </p>
        </div>
      </RevealSection>

      <RevealSection id="skills" className="mx-auto mt-20 max-w-6xl px-6">
        <h2 className="text-2xl font-semibold md:text-3xl">Skills</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <h3 className="text-lg font-semibold text-cyan-300">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-6xl px-6">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold md:text-3xl">
          <Briefcase size={24} className="text-violet-300" />
          Internship Experience
        </h2>
        <div className="mt-6 space-y-5">
          {internships.map((internship) => (
            <article
              key={internship.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-violet-400/50"
            >
              <h3 className="text-lg font-semibold text-violet-300">{internship.title}</h3>
              <p className="mt-3 text-slate-300">{internship.description}</p>
              <p className="mt-4 text-sm uppercase tracking-wide text-slate-400">{internship.stack}</p>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="projects" className="mx-auto mt-20 max-w-6xl px-6">
        <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_30px_-12px_rgba(56,189,248,0.6)]"
            >
              <h3 className="text-lg font-semibold text-cyan-300">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">{project.stack}</p>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-6xl px-6">
        <h2 className="text-2xl font-semibold md:text-3xl">Certifications</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification}
              className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-4 text-slate-200 transition hover:border-cyan-400/50"
            >
              {certification}
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto mt-20 max-w-6xl px-6">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold md:text-3xl">
          <Trophy size={24} className="text-amber-300" />
          Achievements
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {achievements.map((achievement) => (
            <article
              key={achievement}
              className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-4 text-slate-200 transition hover:border-amber-300/50"
            >
              {achievement}
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="contact" className="mx-auto mt-20 max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="inline-flex items-center gap-2 text-slate-300">
              <Phone size={16} className="text-cyan-300" /> Phone: +91 90253 22858 .
            </p>
            <p className=" mt-3 inline-flex items-center gap-2 text-slate-300">
              <Mail size={16} className="text-cyan-300" /> Email: pranesh3620@gmail.com
            </p>
            <p className="mt-3 text-slate-300">LinkedIn: linkedin.com</p>
            <p className="mt-3 text-slate-300">GitHub: github.com</p>
          </div>
        </div>
      </RevealSection>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        © 2026 Pranesh Kumar N. Built with React & Tailwind.
      </footer>
    </main>
  );
}

export default App;
