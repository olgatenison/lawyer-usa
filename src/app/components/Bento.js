import Image from "next/image";

export default function Bento() {
  return (
    <div className="relative py-10 lg:py-20" id="about">
      <div className="mx-auto px-6 lg:max-w-7xl lg:px-8 ">
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
          <rect
            width="100%"
            height="100%"
            fill="url(#pattern)"
            strokeWidth="0"
          />
        </svg>

        {/* blur blob */}
        <div
          className="absolute inset-x-0 top-10 -z-1 flex justify-center overflow-hidden blur-3xl"
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

        {/* content */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2 ">
          {/* 1 */}
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-[#0a1727] ring-1 ring-[#2064bc]/20">
              <div className="w-full p-10">
                <div className="mb-12 rounded-full px-14 py-2 w-fit font-semibold text-sm text-[#5395ff] bg-[#2064bc]/10 ring-1 ring-inset ring-[#2064bc]/20 backdrop-blur-md shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_0px_40px_5px_rgba(255,255,255,0.025)] ">
                  Обо мне
                </div>
                <p className=" text-2xl/8 text-pretty font-semibold text-white/90">
                  Хотя я не практикую право с США, по опыту работы в России и
                  образованию я юрист, в том числе, со степенью магистра права
                  от одного из ведущих американских частных ВУЗов: Университета
                  Джорджа Вашингтона.
                </p>
                <p className="mt-8 text-base/6 lg:text-justify font-thin text-white/80">
                  Я написал большое количество научных и общеполитических статей
                  на русском и английском языках, которые опубликованы в США и в
                  России.
                </p>

                <p className="mt-8 text-base/6 lg:text-justify font-thin text-white/80">
                  Являюсь одним из ведущих русскоязычных экспертов по правовой и
                  политической системе США. Комментирую события в США для
                  большого количества СМИ и известных блогеров/ютьюб-каналов:
                  «Голос Америки», «Дождь», «Радио Свобода», «Эхо Москвы»,
                  «Популярная Политика», «Настоящее время», «Sota Vision»,
                  «Бюро», «Редакция», «Вот так», «Медуза», «Форбс», «Ведомости»,
                  «Коммерсант», «Insider», «Каспаров.ру», Александр Плющев,
                  Станислав Кучер, Дмитрий Колезев и другие.
                </p>
              </div>
            </div>
          </div>

          {/* 2 (Large Screens) */}
          <div className="rounded-lg ring-1 ring-[#2064bc]/20 overflow-hidden lg:col-span-2 h-full lg:flex  bg-[#0a1727] text-xl/8 p-10">
            <p className="lg:mt-24  text-white ">
              Вместе с коллегами веду программу{" "}
              <a
                href="https://www.youtube.com/watch?v=-Qyx5ugwp7o"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center font-semibold hover:text-[#aa0f24] transition-colors"
              >
                «Трифекты»
              </a>
              , которая с конца 2023 года каждую неделю рассказывает про новости
              США на канале «Живой Гвоздь».
            </p>
            {/* <Image
              alt="Статуя Фемиды, символизирующая справедливость, с завязанными глазами и весами в руках, вертикальная версия изображения"
              src="/img/bd-02.webp"
              className="object-cover w-full h-full"
              width={1024}
              height={1536}
            /> */}
          </div>

          {/* 3 Large Screens*/}
          <div className="lg:flex p-px lg:col-span-2 h-full ">
            <div className="flex flex-col  gap-4">
              <div className="overflow-hidden rounded-lg bg-[#020508] ring-1 ring-[#2064bc]/20 h-3/4">
                <Image
                  alt=""
                  src="/_MG_0512.jpeg"
                  className="object-cover w-full h-full"
                  width={1536}
                  height={1024}
                />
              </div>
              <div className="overflow-hidden rounded-lg bg-[#0a1727]  ring-1 ring-[#2064bc]/20 h-full">
                <p
                  id="services-title"
                  className=" text-xl/8 text-pretty font-semibold text-white/90 p-10 "
                >
                  Так же я представляю интересы клиентов по разным вопросам в
                  США и консультирую по ведению бизнеса в стране.
                </p>
              </div>
            </div>
            <div></div>
          </div>

          {/* 4 */}
          <div className="flex p-px lg:col-span-4" id="services">
            <div className="overflow-hidden rounded-lg bg-[#0a1727] ring-1 ring-[#2064bc]/20 ">
              <div className="w-full p-10">
                <div className="mb-12 rounded-full px-14 py-2 w-fit font-semibold text-sm text-[#5395ff] bg-[#2064bc]/10 ring-1 ring-inset ring-[#2064bc]/20 backdrop-blur-md shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_0px_40px_5px_rgba(255,255,255,0.025)] ">
                  Услуги
                </div>

                <div className="w-full ">
                  <p className="mt-5 text-base/6 sm:text-justify font-thin text-white/80">
                    Американский юридический рынок очень сегментирован: как
                    правило, адвокаты и юридические компании имеют узкую
                    специализацию. Например, есть юридические компании, которые
                    занимаются не просто трудовым правом в целом, а только
                    дискриминацией в трудовых отношениях, причем имеют
                    специализацию внутри дискриминации и работают только с
                    истцами или ответчиками. Или, например адвокаты
                    специализируются не просто на уголовных делах, но на
                    отдельных категориях уголовных дел типа преступлений «белых
                    воротничков» и не работают с другими категориями дел.
                  </p>

                  <figure className="border-l-4 border-[#aa0f24] pl-8 mt-10">
                    <blockquote className="text-xl/8 font-semibold tracking-tight text-white/80 max-w-xl">
                      Только самые простые дела ведут адвокаты, которые не имеют
                      четкой специализации.
                    </blockquote>
                  </figure>

                  <p className="mt-10 text-base/6 font-thin text-white/80">
                    Я помогаю искать правильного адвоката и при необходимости
                    сопровождаю проект как менеджер: моя практика показывает,
                    что американский адвокат и русскоязычный клиент не только в
                    прямом смысле слова говорят на разных языках, но у них и
                    разные ожидания друг от друга. Я же помогаю эти ожидания
                    свести к общему знаменателю.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
