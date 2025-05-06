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

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden  h-auto pt-10 pb-3 lg:pb-28">
      {/* background SVG */}
      <svg
        className="absolute inset-0 -z-1 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
        <rect width="100%" height="100%" fill="url(#pattern)" strokeWidth="0" />
      </svg>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5395ff] to-[#2b7ddb] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Block with name and text */}
      <div className="max-w-7xl mx-auto flex justify-between lg:items-center px-8 lg:flex-row flex-col">
        <div className="lg:pr-16">
          <h2 className="font-black tracking-tight text-[#d71148] text-7xl mt-36">
            Игорь Слабых
          </h2>
          <p className="py-8 text-pretty font-thin text-white/80 text-xl/8  max-w-lg ">
            Юрист, автор телеграм-канала USLegalNews, эксперт в правовой и
            политической системе США
          </p>

          {/* Social Links */}
          <div className="flex justify-start  items-center sm:gap-6 flex-wrap gap-4 mt-10 lg:mt-36">
            {socialLinks.map(({ href, src, alt }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Перейти в: ${alt}`}
                className="rounded-full p-1 w-12 h-12 flex items-center justify-center bg-[#2064bc]/10 ring-1 ring-inset ring-[#2064bc]/20 shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25)] hover:bg-[#3470bf]/20 transition hover:ring-[#aa0f24] focus-visible:ring-[#aa0f24] focus-visible:outline-none duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <Image src={src} alt={alt} width={32} height={32} />
                </div>
              </a>
            ))}
            <span className="py-8 text-pretty font-thin text-[#5ca5ff] text-xl/8  max-w-lg">
              Подписывайтесь!
            </span>
          </div>
        </div>

        <div className=" max-w-full lg:max-w-1/2">
          <Image
            alt="Игорь Слабых"
            src="/img/i-hero.jpg"
            className="mt-10 aspect-[6/5] w-full  rounded-2xl object-cover sm:mt-16 lg:mt-0  xl:row-span-2 xl:row-end-2 xl:mt-20"
            width={800}
            height={600}
          />
        </div>
      </div>

      {/* фон */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#5395ff] to-[#155892] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
