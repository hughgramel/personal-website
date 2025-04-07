// components/ContactList.jsx
import { MapPin, Linkedin } from "lucide-react";
import { SiGithub } from 'react-icons/si';

export default function ContactList() {
  return (
    <div className="bg-[#1E1F29] border border-[#44475A] rounded-lg p-6 text-[#F8F8F2] w-full max-w-md shadow-md font-mono my-6">
        <ul className="text-[#F8F8F2] space-y-2 text-base" style={{
            fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Mona Sans", sans-serif',
        }}>
        <li className="flex items-center gap-2">
            <MapPin size={18} className="text-[#F8F8F2]" />
            Seattle, WA
        </li>
        <li className="flex items-center gap-2">
            <Linkedin size={18} className="text-[#F8F8F2]" />
            <a
            href="https://linkedin.com/in/hugh-gramelspacher"
            target="_blank"
            className="hover:underline"
            >
            /in/hugh-gramelspacher
            </a>
        </li>
        <li className="flex items-center gap-2">
            <SiGithub size={18} className="text-[#F8F8F2]" />
            <a
            href="https://github.com/hughgramel"
            target="_blank"
            className="hover:underline"
            >
            github.com/hughgramel
            </a>
        </li>
        </ul>
    </div>
  );
}
