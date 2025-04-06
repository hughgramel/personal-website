export default function READMECard() {
    return (
      <div className="bg-[#1E1F29] border border-[#44475A] rounded-lg p-6 text-[#F8F8F2] w-full max-w-md shadow-md font-mono">
        <div className="text-sm text-[#6272A4] mb-3 font-[family-name:var(--font-jetbrains-mono)]">
          hughgramel <span>/</span> README<span>.md</span>
        </div>
  
        <ul className="space-y-3 text-base leading-relaxed " style={{
            fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Mona Sans", sans-serif',
        }}>
          <li>👋 Hi, I’m @hughgramel</li>
          <li>👀 I’m interested in history, computer science, and making things!</li>
          <li>🌱 I’m studying Computer Science and History at the University of Washington.</li>
          <li>💞️ I want to collaborate on cool projects that can change the world.</li>
          <li>
            📫 You can email me at <a href="mailto:hgram007@uw.edu" className="underline hover:text-white transition">hgram007@uw.edu</a>, or find me on <a href="https://linkedin.com/in/hugh-gramelspacher" className="underline hover:text-white transition" target="_blank">LinkedIn</a>.
          </li>
        </ul>
      </div>
    );
  }
  