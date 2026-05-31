import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Teachers", to: "/teachers" },
  { label: "Holidays", to: "/holidays" },
  { label: "Contact Us", to: "/contacts" },
];

const resources = [
  "Free Coding Lessons",
  "Certification Courses",
  "Blog & Tutorials",
  "Community Forum",
];

const socials = [
  { icon: "ri-facebook-fill", href: "#" },
  { icon: "ri-instagram-line", href: "#" },
  { icon: "ri-twitter-x-fill", href: "#" },
  { icon: "ri-linkedin-fill", href: "#" },
  { icon: "ri-youtube-fill", href: "#" },
];

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1 — Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="./Photo/logo.webp" width="40" alt="Logo" className="rounded-full" />
            <h2 className="text-xl font-bold tracking-wide">CodingSchool</h2>
          </div>
          <div className="w-8 h-0.5 bg-indigo-400 mb-4"></div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Your future starts with one line of code. We help young minds learn
            coding interactively, practically, and creatively through real
            projects.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-500 transition-colors duration-300"
                aria-label={s.icon}
              >
                <i className={`${s.icon} text-base`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <div className="w-8 h-0.5 bg-indigo-400 mb-4"></div>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-slate-300 text-sm hover:text-indigo-300 hover:pl-1 transition-all duration-200"
                  style={{ textDecoration: "none" }}
                >
                  → {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Resources</h2>
          <div className="w-8 h-0.5 bg-indigo-400 mb-4"></div>
          <ul className="flex flex-col gap-2">
            {resources.map((r) => (
              <li
                key={r}
                className="text-slate-300 text-sm hover:text-indigo-300 cursor-pointer hover:pl-1 transition-all duration-200"
              >
                → {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Get in Touch</h2>
          <div className="w-8 h-0.5 bg-indigo-400 mb-4"></div>
          <ul className="flex flex-col gap-4 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <i className="ri-map-pin-fill text-indigo-400 text-base mt-0.5"></i>
              <span>Bangalore, Karnataka, India</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-mail-fill text-indigo-400 text-base"></i>
              <span>info@codingschool.in</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-phone-fill text-indigo-400 text-base"></i>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-time-fill text-indigo-400 text-base"></i>
              <span>Mon – Sat, 9 AM – 6 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-white/10 py-5 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">CodingSchool</span>. All rights reserved.
        Built with ❤️ by <span className="text-white font-medium">Prince Singh</span>.
      </div>
    </footer>
  );
}

export default Footer;
