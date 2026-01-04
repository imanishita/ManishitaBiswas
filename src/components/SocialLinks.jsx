import React from "react";
import { Mail, Github, Twitter, ExternalLink } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    label: "Email",
    value: "imanishita17@gmail.com",
    icon: Mail,
    url: "mailto:imanishita17@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/imanishita",
    icon: Github,
    url: "https://github.com/imanishita",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/imanishita",
    icon: SiLeetcode,
    url: "https://leetcode.com/imanishita",
  },
  {
    label: "Twitter",
    value: "@imanishita",
    icon: Twitter,
    url: "https://twitter.com/imanishita",
  },
];

const SocialLinks = () => {
  return (
    <div className="space-y-4">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-4
              rounded-xl border border-white/10
              bg-white/5 px-5 py-4
              hover:bg-white/10 hover:border-white/20
              transition-all duration-300
            "
          >
            {/* ICON (FIXED SIZE) */}
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-gray-300" />
            </div>

            {/* TEXT */}
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-sm font-medium text-gray-200">
                {item.label}
              </span>
              <span className="text-xs text-gray-400 truncate">
                {item.value}
              </span>
            </div>

            {/* ARROW */}
            <ExternalLink className="w-4 h-4 text-gray-500 shrink-0" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
