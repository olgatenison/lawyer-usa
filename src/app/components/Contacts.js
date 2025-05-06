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
        <div className="relative px-6  lg:static lg:px-8">
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

            {/* blur blob */}
            <div
              className="absolute inset-x-0 top-10 -z-10 flex justify-center overflow-hidden blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              />
            </div>

            {/* Контент */}
            <div className="mx-auto max-w-2xl text-center">
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

              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Свяжитесь со мной
              </h2>
              <p className="mt-20 text-xl/7 text-pretty font-semibold text-white/90">
                Открыт к деловым запросам, консультациям и информационному
                партнёрству. Напишите мне — и я постараюсь ответить в ближайшее
                время.
              </p>
              <div className="mt-10 mb-0 lg:mb-10 p-6 text-xl/7 text-pretty font-light text-[#3470bf] group focus:outline-1 focus:rounded-2xl transition-all">
                <a href="mailto:igor.slabykh@gmail.com" className="group block">
                  <div className="p-3">
                    <span className="uppercase font-semibold text-[#5395ff] inline-block">
                      Написать на почту
                    </span>
                    <p className="max-w-lg mx-auto mb-7 text-lg text-white/80 font-light">
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
