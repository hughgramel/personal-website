// app/page.js
import Image from "next/image";
import READMECard from "../components/READMECard";
import ContactList from "@/components/ContactList";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16 px-4 font-mono">
      <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200 mb-8 border-[#44475A] border-3">
        <Image
          src="/hugh.png"
          width={300}
          height={300}
          alt="Profile photo"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <h1 className="text-[#F8F8F2] text-2xl mb-8 font-[family-name:var(--font-jetbrains-mono)]">
        Hi, I'm Hugh!
      </h1>
      <READMECard/>
      <ContactList/>

      <div className="max-w-2xl text-[#F8F8F2] text-center">
      </div>
    </div>

  );
}