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
    <div
      className="relative isolate overflow-hidden  max-w-7xl pb-10 h-auto mx-auto  bg-left-bottom lg:bg-center bg-cover"
      style={{
        backgroundImage: "url('/4.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "right",
      }}
    >
      <div className="pt-20 lg:pt-7 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col  justify-start sm:justify-between sm:gap-20">
        {/* Block with name and text */}
        <div className="mx-0 mt-8 md:mt-40  md:mb-0">
          <h2 className="text-6xl sm:text-4xl md:text-8xl font-semibold tracking-tight text-white sm:text-left text-center">
            Игорь <span className=" sm:block">Слабых</span>
          </h2>
          <p className="py-8 text-pretty font-thin text-white/80 text-base md:text-lg lg:text-xl/8  sm:max-w-52 md:max-w-80 sm:text-left text-center">
            Юрист, автор телеграм-канала USLegalNews, эксперт в правовой и
            политической системе США
          </p>
        </div>

        {/* Button and social links */}

        {/* Social Links */}
        <div className="flex gap-6 items-center justify-center sm:justify-start sm:items-start flex-wrap sm:mb-0 mb-96 w-full">
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
        </div>
      </div>
    </div>
  );
}
