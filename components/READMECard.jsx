export default function READMECard() {
    return (
      <div className="bg-[#1E1F29] border border-[#44475A] rounded-lg p-6 text-[#F8F8F2] w-full max-w-md shadow-md font-mono">
        <div className="text-sm text-[#6272A4] mb-3 font-[family-name:var(--font-jetbrains-mono)]">
          hughgramel <span>/</span> README<span>.md</span>
        </div>
  
        <ul className="space-y-3 list-disc list-inside text-base leading-relaxed " style={{
            fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Mona Sans", sans-serif',
        }}>
          <li>Computer science and history student at the University of Washington </li>
          <li>Enjoys learning, teaching, making projects, and helping people around me</li>
          <li>Loves exploring ideas and diving into complex topics to get lost in for hours</li>
          <li>Always looking for ways to combine creativity with problem-solving in a way that has a real impact on people</li>
        </ul>
      </div>
    );
  }
  