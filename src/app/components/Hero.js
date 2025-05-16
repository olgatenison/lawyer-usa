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
      className="relative isolate overflow-hidden  max-w-7xl pb-10 h-auto mx-auto  bg-left-bottom lg:bg-bottom bg-cover"
      style={{
        backgroundImage: "url('/4.png')",
        // backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "left",
      }}
    >
      <div className="pt-20 lg:pt-7 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-between gap-20">
        {/* Block with name and text */}
        <div className="mx-0 mt-30 md:mt-[300px]">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-8xl">
            Игорь <span className=" block">Слабых</span>
          </h2>
          <p className="py-8 text-pretty font-thin text-white/80 text-lg lg:text-xl/8  max-w-80 mb-[80px] lg:mb-[120px]">
            Юрист, автор телеграм-канала USLegalNews, эксперт в правовой и
            политической системе США
          </p>
        </div>

        {/* Button and social links */}
        <div className="mx-auto max-w-7xl flex-col flex gap-10 sm:flex-row sm:justify-between justify-start sm:items-center items-start w-full wrap">
          {/* Social Links */}
          <div className="flex justify-start sm:justify-center items-center gap-6 mb-10 lg:mb-5 flex-wrap ">
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
    </div>
  );
}
