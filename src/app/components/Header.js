// src/app/components/Header.js
import Image from "next/image";

const pages = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8 pt-7"
        aria-label="Главная навигация"
      >
        <ul className="flex sm:gap-6 flex-wrap gap-4 items-center justify-center sm:justify-start sm:items-start mx-auto ">
          {pages.map(({ href, label }, index) => (
            <li key={index}>
              <a
                href={href}
                className="font-light text-base text-[#5395ff] hover:text-[#aa0f24] transition-colors duration-300 focus-visible:outline-1 focus:text-[#aa0f24] focus-visible:outline-white p-2 focus-visible:rounded-2xl"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
