import Image from "next/image";

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      role="region"
      aria-labelledby="what-i-do-heading"
      className="relative z-10 bg-gray-900"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
          <div
            className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#153ab6] to-[#2c4c86] opacity-25"
            style={{
              clipPath:
                "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
        <div className="-mt-8 w-full max-w-2xl mb-0 xl:-mb-8 xl:w-96 xl:flex-none">
          <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto z-10">
            <picture>
              <source media="(max-width: 1280px)" srcSet="/img/bd-03.webp" />
              <Image
                className="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl ring-1 ring-[#2064bc]/20"
                src="/img/bd-02.webp"
                alt="Атмосферное изображение для секции"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                loading="lazy"
              />
            </picture>
          </div>
        </div>

        <div className="w-full max-w-2xl xl:max-w-none px-10 sm:px-0 xl:flex-auto xl:px-20">
          <figure className="relative isolate pb-20 pt-10 lg:py-20 sm:text-left text-center">
            <blockquote className=" text-3xl tracking-tight text-white sm:text-4xl text-pretty font-bold max-w-xl">
              <div className="rounded-full px-10 py-2 w-fit font-semibold text-sm text-[#3470bf] bg-[#2064bc]/10 ring-1 ring-inset ring-[#2064bc]/20 backdrop-blur-md shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_0px_40px_5px_rgba(255,255,255,0.025)] mb-10 mx-auto sm:mx-0">
                Что я делаю?
              </div>
              <h3 id="what-i-do-heading">
                Консультирую, помогаю наладить диалог с адвокатами и избежать
                ошибок, стоящих времени и денег
              </h3>
            </blockquote>
          </figure>
        </div>
      </div>

      {/* Long description */}
      <div className="relative isolate px-6 py-10 sm:py-16 lg:px-0 bg-[#040e17]">
        <svg
          className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="longdesc-bg"
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
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#longdesc-bg)"
          />
        </svg>

        <div className="max-w-7xl mx-auto flex">
          <div className="w-full sm:w-3/4 lg:w-1/2 lg:pl-8">
            <p className="mt-5 text-base/6 sm:text-justify font-thin text-white/80">
              Американский юридический рынок очень сегментирован: как правило,
              адвокаты и юридические компании имеют узкую специализацию.
              Например, есть юридические компании, которые занимаются не просто
              трудовым правом в целом, а только дискриминацией в трудовых
              отношениях, причем имеют специализацию внутри дискриминации и
              работают только с истцами или ответчиками. Или, например адвокаты
              специализируются не просто на уголовных делах, но на отдельных
              категориях уголовных дел типа преступлений «белых воротничков» и
              не работают с другими категориями дел.
            </p>

            <figure className="border-l-4 border-[#aa0f24] pl-8 mt-10">
              <blockquote className="text-xl/8 font-semibold tracking-tight text-white/80">
                Только самые простые дела ведут адвокаты, которые не имеют
                чёткой специализации.
              </blockquote>
            </figure>

            <p className="mt-10 text-base/6 font-thin text-white/80">
              Моя практика показывает, что американский адвокат и русскоязычный
              клиент не только в прямом смысле слова говорят на разных языках,
              но у них и разные ожидания друг от друга. Я же помогаю эти
              ожидания свести к общему знаменателю.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
