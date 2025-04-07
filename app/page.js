import Image from "next/image";
import READMECard from "../components/READMECard";
import ContactList from "@/components/ContactList";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import RightBox from "../components/RightBox";





export default function Home() {
  const sectionStyle = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Mona Sans", sans-serif',
  };

  return (
    <div className="flex flex-col min-h-screen pt-16 px-4 font-mono text-[#F8F8F2]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Side Section - 1/3 width on large screens */}
        <div
          id="side-section"
          className="flex flex-col items-center lg:sticky lg:top-16 self-start"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200 mb-8 border-[#44475A] border-3">
            <Image
              src="/hugh.png"
              width={300}
              height={300}
              alt="Profile photo"
              className="object-cover w-full h-full"
              priority
              unoptimized
            />
          </div>
          <h1 className="text-3xl mb-8 font-[family-name:var(--font-jetbrains-mono)] flex items-center justify-center gap-4">
            Hi, I'm Hugh!
            <a
              href="mailto:hgram007@uw.edu"
              className="hover:text-white transition"
              aria-label="Email"
            >
              <HiOutlineMail className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/in/hugh-gramelspacher"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/hughgramel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <SiGithub className="text-3xl" />
            </a>
          </h1>

          <READMECard />
          {/* <ContactList /> */}
        </div>

        {/* Center Section (Projects, Education, Work) */}
        <div className="flex flex-col space-y-12" style={sectionStyle}>
          <div className="space-y-12 flex-1/2">
            {/* Projects Section */}
            <section id="projects" className="w-full max-w-2xl self-center">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">🛠️ Projects</h2>

              <div className="mb-6">
              <div className="flex items-center gap-2">
                <p className="text-xl font-semibold">Cura</p>
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
                  <p className="text-xl font-semibold">Productivity Tracking Website</p>
                  <a href="https://github.com/yourusername/cura" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="text-2xl hover:text-gray-400 transition" />
                  </a>
                </div>
                <p className="text-base text-gray-400">React, TypeScript, Firebase</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Created a full-stack focus tracking app with real-time session logging</li>
                  <li>Used Firebase Auth and Hosting for scalable deployment</li>
                  <li>Gamified user engagement with badge rewards</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold">Victoria 2 Save Game Analyzer</p>
                  <a href="https://github.com/yourusername/cura" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="text-2xl hover:text-gray-400 transition" />
                  </a>
                </div>
                <p className="text-base text-gray-400">Java, CSV, Regex</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Parsed 500MB+ Victoria 2 save files in under 5 seconds</li>
                  <li>Extracted demographics and exported to CSV for visualization</li>
                  <li>Built a modular architecture to support other Paradox games</li>
                </ul>
                {/* <div className="rounded-xl border border-[#44475A] mt-4 overflow-hidden">
                  <Image
                    src="/screenshots/cura.png"
                    alt="Screenshot of Cura"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div> */}

                </div>

              <div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold">Discrete Math Learning Site</p>
                  <a href="https://github.com/yourusername/cura" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="text-2xl hover:text-gray-400 transition" />
                  </a>
                </div>
                <p className="text-base text-gray-400">TypeScript, React</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Interactive learning tool for visualizing logic expressions</li>
                  <li>Translates propositions into digital logic circuits</li>
                  <li>Supports equivalence checking and symbolic manipulation</li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="w-full max-w-2xl self-center">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">🎓 Education</h2>
              <p className="text-lg">Bachelor of Science in Computer Science & Bachelor of Arts in History</p>
              <p className="text-base text-gray-400">University of Washington — Expected June 2026</p>
              <p className="text-base text-gray-400 mb-2">GPA: 3.93</p>
              <ul className="list-disc list-inside text-lg">
                <li>Relevant Courses: Data Structures and Algorithms, Software Design and Implementation, Hardware/Software Interface, Systems Programming</li>
                <li>Web Development, Introduction to Database Systems</li>
              </ul>
            </section>

            {/* Work Section */}
            <section id="work" className="w-full max-w-2xl self-center">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">💼 Work</h2>

              <div className="mb-6">
                <p className="text-xl font-semibold">Software Development Intern</p>
                <p className="text-base text-gray-400">DawgPlan — Sep 2024–Present</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Built a dynamic course-scheduling platform with Next.js, TypeScript, and the T3 stack</li>
                  <li>Served 500+ UW students and integrated secure login via NextAuth</li>
                  <li>Optimized large dataset queries, improving performance by 30%</li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-xl font-semibold">Inventory & Reimbursement Specialist</p>
                <p className="text-base text-gray-400">University of Washington — Aug 2022–Present</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Managed 1,500+ asset entries and streamlined inventory tracking</li>
                  <li>Coordinated equipment logistics and monthly reimbursements ($10K+)</li>
                  <li>Enhanced accountability with advanced record-keeping</li>
                </ul>
              </div>

              <div>
                <p className="text-xl font-semibold">Technology Assistant</p>
                <p className="text-base text-gray-400">Rochester School District — Summer 2022</p>
                <ul className="list-disc list-inside text-lg">
                  <li>Deployed and tagged 200+ Chromebooks for district-wide use</li>
                  <li>Maintained and troubleshooted phone systems, TVs, and IT assets</li>
                </ul>
              </div>
            </section>
          </div>
        </div>

          {/* Right Section (Extras) */}
          <div id="right-section" className="flex flex-col md:col-span-2 lg:col-span-1 gap-8 lg:gap-30 ">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">👾 4 Favorite Video Games</h2>
              <RightBox>
                <ul className="list-disc list-inside">
                  <li>Victoria 2</li>
                  <li>Hearts of Iron 4</li>
                  <li>Civilization 6 </li>
                  <li>Holdfast - Nations At War</li>
                </ul>
              </RightBox>
            </div>


            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">🤔 3 Interesting Facts</h2>
              <RightBox>
                <ul className="list-disc list-inside space-y-1.333333">
                  <li>I was a History major for 2 years at UW before deciding I wanted to switch to Computer Science 👨‍💻</li>
                  <li>When you look me up, you can find 12 year old me in an <a
                      href="https://www.theolympian.com/news/local/education/article79208437.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-white transition"
                    >
                      article about the history bee
                    </a></li>
                  <li>I'm from Rochester (Which one? There are 15!)</li>
                </ul>
              </RightBox>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">📘 2 Books</h2>
              <RightBox>
                <ul className="list-disc list-inside space-y-1.333333">
                  <li>Brave New World</li>
                  <li>Atomic Habits</li>
                  
                </ul>
              </RightBox>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">💬 1 Quote</h2>
              <RightBox>
                <p className="italic">“Your time is limited, so don't waste it living someone else's life.”.” – Steve Jobs</p>
              </RightBox>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">❓ 0</h2>
              <RightBox>
                <ul className="list-disc list-inside space-y-1.333333">
                  <li>Times I've been to Canada</li>
                  <li>Number of NFTs I currently own</li>
                  <li>Hours slept during the hackathon</li>
                  <li>Wormholes I've personally gone through</li>
                  
                </ul>
              </RightBox>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-jetbrains-mono)]">-1</h2>
              <RightBox>
                <div className="text-sm text-[#F8F8F2] font-[family-name:var(--font-jetbrains-mono)]">
                  <p>Exception in thread "website" hugh.lang</p>
                  <p className="ml-8">.ArrayIndexOutOfBoundsException: Index -1 out of bounds for length 5 at website.main(home.hugh:94)</p>
                </div>
              </RightBox>
            </div>
          </div>


      </div>
    </div>
  );
}
