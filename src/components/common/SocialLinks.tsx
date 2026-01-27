import { contactInfo } from "@/constants/personals";
import { Github, Linkedin, Mail, NotebookPen } from "lucide-react";

const icons = { Github, Linkedin, Email: Mail, Mail, NotebookPen };

const SocialLinks = ({ className = "" }: { className?: string }) => (
  <ul className={`flex items-center gap-4 ${className}`}>
    {contactInfo.socialLinks.map(({ name, url, icon, color }) => {
      const Icon = icons[icon as keyof typeof icons] ?? Github;
      return (
        <li key={name}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="transition-transform hover:scale-110"
            style={{ color }}
          >
            <Icon size={26} />
          </a>
        </li>
      );
    })}
  </ul>
);

export default SocialLinks;
