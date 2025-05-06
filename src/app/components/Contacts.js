import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.youtube.com/@igorslabykh",
    src: "/img/svg/youtube.svg",
    alt: "YouTube",
  },

  {
    href: "https://t.me/uslegalnews",
    src: "/img/svg/telegram.svg",
    alt: "Telegram",
  },
  {
    href: "mailto:igor.slabykh@gmail.com",
    src: "/img/svg/message.svg",
    alt: "Email",
  },
];

export default function Contacts() {
  return (
    <section className="relative isolate bg-[#040e17]" id="contacts">
      <div className="mx-auto  max-w-7xl pt-16">
        <div className="relative px-6 lg:static lg:px-8">
          <div>
            {/* background SVG */}
            <svg
              className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="pattern"
                  width="200"
                  height="200"
                  x="50%"
                  y="0"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="0" className="overflow-visible fill-gray-800/20">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z"
                  strokeWidth="0"
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                fill="url(#pattern)"
                strokeWidth="0"
              />
            </svg>

            {/* Контент */}
            <div className="mx-auto max-w-2xl text-center pt-10 lg:pt-0">
              <div className="flex justify-center items-center gap-4 mb-5 flex-wrap">
                {socialLinks.map(({ href, src, alt }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Перейти в: ${alt}`}
                    className="rounded-full p-1 w-12 h-12 flex items-center justify-center bg-[#2064bc]/10 ring-1 ring-inset ring-[#2064bc]/20 shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25)] hover:bg-[#3470bf]/20 transition hover:ring-[#aa0f24] focus-visible:ring-[#aa0f24] focus-visible:outline-none duration-300"
                  >
                    <Image src={src} alt={alt} width={32} height={32} />
                  </a>
                ))}
              </div>

              <h2 className="mb-5 text-pretty text-4xl font-semibold tracking-tight text-[#c41034] sm:text-5xl">
                Свяжитесь со мной
              </h2>
              <p className="text-pretty font-thin text-white/80 text-lg/6  max-w-lg mx-auto">
                Открыт к деловым запросам, консультациям и информационному
                партнёрству. Напишите мне — и я постараюсь ответить в ближайшее
                время.
              </p>
              <div className="mb-0 lg:mb-10 p-6 text-xl/7 text-pretty font-light text-[#3470bf] group focus:outline-1 focus:rounded-2xl transition-all">
                <a href="mailto:igor.slabykh@gmail.com" className="group block">
                  <div className="p-3">
                    <span className="uppercase font-semibold text-[#5395ff] inline-block">
                      Написать на почту
                    </span>
                    <p className="text-pretty font-thin text-white/80 text-lg/6  max-w-lg mx-auto">
                      Свяжитесь со мной для консультаций и партнёрства
                    </p>

                    <div className="text-white/90 mt-7 font-semibold group-hover:text-[#aa0f24] group-focus:text-[#aa0f24] transition-colors duration-300">
                      igor.slabykh@gmail.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
