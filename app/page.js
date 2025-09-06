import Image from "next/image";
import READMECard from "../components/READMECard";
import ContactList from "@/components/ContactList";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import RightBox from "../components/RightBox";
import GitHubImage from "../components/GitHubImage";
import TypewriterHero from "@/components/TypewriterHero";




export default function Home() {
  const sectionStyle = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Mona Sans", sans-serif',
  };

  return (
    <div className="flex flex-col min-h-screen pt-16 px-4 font-mono bg-[#282A36] text-[#F8F8F2]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Side Section - 1/3 width on large screens */}
        <div
          id="side-section"
          className="flex flex-col items-center lg:sticky lg:top-16 self-start"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200 mb-8 border-[#44475A] border-3">
            <GitHubImage
              src="/hugh.png"
              width={300}
              height={300}
              alt="Profile photo"
              className="object-cover w-full h-full"
              priority
              unoptimized
            />
          </div>
          <h1 className="text-3xl mb-8 font-[family-name:var(--font-jetbrains-mono)] flex items-center justify-center">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-4">
                <TypewriterHero/>
              </div>
              
            </div>
          </h1>

          <READMECard />

          <div className="flex items-center justify-center gap-4 mt-8">
                <a
                  href="mailto:hgram007@uw.edu"
                  className="hover:text-white transition"
                  aria-label="Email"
                >
                  <HiOutlineMail className="text-4xl " />
                </a>
                <a
                  href="https://linkedin.com/in/hugh-gramelspacher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                  aria-label="LinkedIn"
                >
                <SiLinkedin className="text-4xl" />
                </a>
                <a
                  href="https://github.com/hughgramel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                  aria-label="GitHub"
                >
                <SiGithub className="text-4xl " />
                </a>
                <a
                  href={`${process.env.NODE_ENV === 'production' ? '/personal-website' : ''}/Hugh_Gramelspacher_resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#BD93F9] hover:bg-[#A78BFA] text-[#282A36] px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2"
                  aria-label="Download Resume"
                >
                  <HiDownload className="text-lg" />
                  Resume
                </a>
              </div>
          {/* <ContactList /> */}
        </div>

        {/* Center Section (Education, Projects, Experience, Skills) */}
        <div className="flex flex-col space-y-12" style={sectionStyle}>
          <div className="space-y-12 flex-1/2">
            {/* Education Section */}
            <section id="education" className="w-full max-w-2xl self-center">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">🎓 Education</h2>
              <p className="text-xl font-semibold text-[#BD93F9]">BS in Computer Science & BA in History</p>
              <p className="text-base text-gray-400">University of Washington — Expected June 2026</p>
              <p className="text-base text-gray-400">GPA: 3.93</p>
              <ul className="list-disc list-inside text-lg">
                <li>Relevant Courses: Data Structures and Algorithms, Software Design and Implementation, Hardware/Software Interface, Systems Programming</li>
                <li>Web Development, Introduction to Database Systems</li>
              </ul>
            </section>

            {/* Projects Section */}
            <section id="projects" className="w-full max-w-2xl self-center">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">🛠️ Projects</h2>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold text-[#BD93F9]">Fantasy Football Draft Optimizer</p>
                  <a href="https://github.com/hughgramel/fantasy-football-optimizer" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="text-2xl hover:text-gray-400 transition" />
                  </a>
                </div>
                <p className="text-base text-gray-400">Python, NumPy, Pandas, R, Yahoo Fantasy API</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Designed Monte Carlo simulation engine to model thousands of draft scenarios, applying probability, data structures, and optimization techniques</li>
                  <li>Applied statistical analysis and visualization to generate probability distributions of league standings</li>
                  <li>Integrated with Yahoo Fantasy API for real-time computational analytics and predictive modeling</li>
                  <li>Created simulation models that improved decision-making accuracy under uncertainty in dynamic environments</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold text-[#BD93F9]">Language Learning Platform</p>
                  <a href="https://github.com/hughgramel/language-learning-platform" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="text-2xl hover:text-gray-400 transition" />
                  </a>
                </div>
                <p className="text-base text-gray-400">Next.js, TypeScript, Firebase, Azure TTS, Gemini API</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Built a scalable data system for adaptive spaced repetition, leveraging applied mathematics and computational models of memory</li>
                  <li>Implemented analytics pipeline to track user performance and optimize vocabulary retention</li>
                  <li>Collaborated in a multidisciplinary team environment to design and deploy scalable learning features</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold text-[#BD93F9]">Snack Business Sales Projection Model</p>
                  <a href="https://github.com/hughgramel/snack-business-model" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="text-2xl hover:text-gray-400 transition" />
                  </a>
                </div>
                <p className="text-base text-gray-400">NumPy, Pandas, scikit-learn, Tableau, MATLAB, R</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Developed regression and machine learning models for forecasting, improving operational effectiveness and resource planning</li>
                  <li>Prototyped mathematical models in MATLAB and R to validate long-term demand and profit optimization</li>
                  <li>Automated reporting with Tableau dashboards, enhancing decision-making and organizational efficiency</li>
                  <li>Applied optimization and decision-making frameworks to recommend actionable business strategies</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold text-[#BD93F9]">Cura - Screen Time Manager</p>
                  <a href="https://github.com/SlimeMan10/coughacks2025/" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="text-2xl hover:text-gray-400 transition" />
                  </a>
                </div>
                <p className="text-base text-gray-400">Flutter, Android, Accessibility APIs</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Built during Coughacks Everett to help reduce screentime distraction</li>
                  <li>Blocks selected apps and reports on app usage data in real-time</li>
                  <li>Incorporated a minimalist interface with motivational messaging</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold text-[#BD93F9]">Victoria 2 Save Game Analyzer</p>
                  <a href="https://github.com/hughgramel/victoria2-analyzer" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="text-2xl hover:text-gray-400 transition" />
                  </a>
                </div>
                <p className="text-base text-gray-400">Java, CSV Processing, Regex, Data Visualization</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Parsed 500MB+ Victoria 2 save files in under 5 seconds using optimized algorithms</li>
                  <li>Extracted demographics and exported to CSV for statistical analysis</li>
                  <li>Built a modular architecture to support other Paradox games and data formats</li>
                </ul>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="w-full max-w-2xl self-center">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">💼 Experience</h2>

              <div className="mb-6">
                <p className="text-xl font-semibold text-[#BD93F9]">Snack Lounge Operations Manager</p>
                <p className="text-base text-gray-400">ACM, University of Washington — Spring 2025–Present</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Applied data-driven decision-making and optimization to manage $20,000+ in annual purchasing and sales</li>
                  <li>Modeled inventory systems to reduce theft by 75% and improve operational efficiency</li>
                  <li>Increased profit margins by 50% by analyzing supply chain data and implementing transformation strategies</li>
                  <li>Coordinated with engineers, student leaders, and vendors to align technical models with operational goals</li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-xl font-semibold text-[#BD93F9]">Inventory and Reimbursement Specialist</p>
                <p className="text-base text-gray-400">University of Washington — Aug 2022–Present</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Streamlined 1,500+ asset tracking records using computational analytics to improve data accuracy and retrieval</li>
                  <li>Automated record reconciliation with Python scripts, improving data consistency across 1,500+ assets</li>
                  <li>Processed $10,000+ in monthly reimbursements with strict adherence to systems modeling and compliance requirements</li>
                </ul>
              </div>

              <div>
                <p className="text-xl font-semibold text-[#BD93F9]">Technology Assistant</p>
                <p className="text-base text-gray-400">Rochester School District — Summer 2022</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Deployed and tagged 200+ Chromebooks for district-wide use</li>
                  <li>Maintained and troubleshooted phone systems, TVs, and IT assets</li>
                </ul>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="w-full max-w-2xl self-center">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">⚡ Skills</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#BD93F9] mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Java</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">R</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">MATLAB</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Dart</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#BD93F9] mb-2">Data Science & Analytics</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">NumPy</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Pandas</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">scikit-learn</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Tableau</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Machine Learning</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Statistical Analysis</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#BD93F9] mb-2">Web Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Firebase</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Azure TTS</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Gemini API</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#BD93F9] mb-2">Mobile & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Flutter</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Android</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Git</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Linux</span>
                  <span className="bg-[#44475A] px-3 py-1 rounded-full text-sm">Yahoo Fantasy API</span>
                </div>
              </div>
            </section>
          </div>
        </div>

          {/* Right Section (Professional Highlights) */}
          <div id="right-section" className="flex flex-col md:col-span-2 lg:col-span-1 gap-8 lg:gap-12 lg:sticky lg:top-16 lg:self-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">💻 <span className="text-[#BD93F9]">About</span> Me</h2>
              <RightBox>
                <p className="text-base leading-relaxed mb-4">
                  CS student at the University of Washington passionate about engineering software to improve people's lives through technology and innovation.
                </p>
                <p className="text-base leading-relaxed">
                  <strong>Looking for:</strong> Software Engineering internships and full-time opportunities, roles where I can grow as a developer, and projects that make a meaningful impact.
                </p>
              </RightBox>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">🚀 <span className="text-[#BD93F9]">Impact</span> Metrics</h2>
              <RightBox>
                <ul className="list-disc list-inside space-y-2">
                  <li>Increased profit margins by 50% through data-driven optimization</li>
                  <li>Reduced inventory theft by 75% with predictive modeling</li>
                  <li>Managed $20,000+ in annual purchasing and sales operations</li>
                  <li>Processed $10,000+ monthly reimbursements with 100% accuracy</li>
                  <li>Parsed 500MB+ files in under 5 seconds using optimized algorithms</li>
                </ul>
              </RightBox>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">💡 <span className="text-[#BD93F9]">Data</span> Science</h2>
              <RightBox>
                <ul className="list-disc list-inside space-y-2">
                  <li>Monte Carlo simulation engines for predictive modeling</li>
                  <li>Machine learning models for business forecasting</li>
                  <li>Statistical analysis and probability distributions</li>
                  <li>Automated reporting with Tableau dashboards</li>
                  <li>Real-time computational analytics and optimization</li>
                </ul>
              </RightBox>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">🎯 <span className="text-[#BD93F9]">Leadership</span> Experience</h2>
              <RightBox>
                <ul className="list-disc list-inside space-y-2">
                  <li>Operations Manager for ACM Snack Lounge</li>
                  <li>Coordinated with engineers and student leaders</li>
                  <li>Multidisciplinary team collaboration</li>
                  <li>Vendor relationship management</li>
                  <li>Strategic planning and goal alignment</li>
                </ul>
              </RightBox>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">🌟 <span className="text-[#BD93F9]">Technical</span> Innovation</h2>
              <RightBox>
                <ul className="list-disc list-inside space-y-2">
                  <li>Scalable data systems and adaptive algorithms</li>
                  <li>API integrations and real-time analytics</li>
                  <li>Automated Python scripts for data consistency</li>
                  <li>Cross-platform mobile and web development</li>
                  <li>Modular architecture for extensible solutions</li>
                </ul>
              </RightBox>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">🎮 <span className="text-[#BD93F9]">Hobbies</span> & Interests</h2>
              <RightBox>
                <ul className="list-disc list-inside space-y-2">
                  <li>Reading and exploring historical literature</li>
                  <li>Building side projects and experimenting with new technologies</li>
                  <li>Fantasy sports and statistical analysis</li>
                  <li>Movies and storytelling</li>
                  <li>Strategy games focused on historical periods, politics, warfare, and economic systems</li>
                </ul>
              </RightBox>
            </div>
          </div>


      </div>
    </div>
  );
}
