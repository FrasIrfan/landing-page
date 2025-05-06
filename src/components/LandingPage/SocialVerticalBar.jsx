import React from "react";

const socials = [
  {
    name: "Facebook",
    src: "/assets/logos/facebook.png",
    alt: "Facebook",
    href: "#"
  },
  {
    name: "Instagram",
    src: "/assets/logos/instagram.png",
    alt: "Instagram",
    href: "#"
  },
  {
    name: "LinkedIn",
    src: "/assets/logos/linkedin.png",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/aglivo/posts/?feedView=all"
  }
];

const SocialVerticalBar = () => (
  <div
    className="absolute"
    style={{
      width: "32px",
      height: "156px",
      top: "350px",
      left: "40px",
      zIndex: 50
    }}
  >
    <div className="flex flex-col items-center justify-between h-full bg-transparent">
      {socials.map((social, idx) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-0"
        >
          <img
            src={social.src}
            alt={social.alt}
            width={32}
            height={32}
            className="rounded p-1"
            style={{
              width: "32px",
              height: "32px",
              marginBottom: idx !== socials.length - 1 ? "10px" : "0"
            }}
          />
        </a>
      ))}
    </div>
  </div>
);

export default SocialVerticalBar;