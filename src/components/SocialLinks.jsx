import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/imanishita",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "Email",
    displayName: "Email",
    subText: "imanishita17@gmail.com",
    icon: ExternalLink,
    url: "mailto:imanishita17@gmail.com",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "imanishita",
    icon: Github,
    url: "https://github.com/imanishita",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@imanishita",
    icon: Instagram,
    url: "https://www.instagram.com/imanishita",
    color: "#E1306C",
    gradient: "from-[#E1306C] to-[#C13584]",
  },
  {
    name: "LeetCode",
    displayName: "LeetCode",
    subText: "leetcode.com/imanishita",
    icon: SiLeetcode,
    url: "https://leetcode.com/imanishita",
    color: "#FFA116",
    gradient: "from-[#FFA116] to-[#F2B700]",
  },
  {
    name: "Discord",
    displayName: "Discord",
    subText: "@imanishita#0000",
    icon: FaDiscord,
    url: "https://discord.com/users/imanishita",
    color: "#5865F2",
    gradient: "from-[#5865F2] to-[#404EED]",
  },
  {
    name: "Twitter",
    displayName: "Twitter",
    subText: "@imanishita",
    icon: FaTwitter,
    url: "https://twitter.com/imanishita",
    color: "#1DA1F2",
    gradient: "from-[#1DA1F2] to-[#0D8BCE]",
  },
  
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {linkedIn && (
          <a
            href={linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
              bg-white/5 border border-white/10 overflow-hidden
              hover:border-white/20 transition-all duration-500"
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                bg-gradient-to-r ${linkedIn.gradient}`}
            />
            <div className="relative flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                    group-hover:scale-110 group-hover:opacity-30"
                  style={{ backgroundColor: linkedIn.color }}
                />
                <div className="relative p-2 rounded-md">
                  <linkedIn.icon
                    className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                    style={{ color: linkedIn.color }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  {linkedIn.displayName}
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {linkedIn.subText}
                </span>
              </div>
            </div>
            <ExternalLink
              className="relative w-5 h-5 text-gray-500 group-hover:text-white
                opacity-0 group-hover:opacity-100 transition-all duration-300
                transform group-hover:translate-x-0 -translate-x-1"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          </a>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                bg-white/5 border border-white/10 overflow-hidden
                hover:border-white/20 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                bg-gradient-to-r ${link.gradient}`}
              />
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                    group-hover:scale-125 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
              <ExternalLink
                className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                opacity-0 group-hover:opacity-100 transition-all duration-300
                transform group-hover:translate-x-0 -translate-x-2"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
