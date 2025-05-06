import Image from "next/image";

export default function Bento() {
  return (
    <div className="relative pt-20 pb-4 " id="about">
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
          <div className="lg:flex p-px hidden lg:col-span-2 group">
            <a
              href="https://www.youtube.com/watch?v=-Qyx5ugwp7o"
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-lg ring-1 ring-[#2064bc]/20 relative group-hover:ring-[#aa0f24] group-hover:border-[#aa0f24] block"
              aria-label="Смотреть выпуск программы «Трифекты» на YouTube"
            >
              <Image
                alt="Иконка YouTube с кнопкой воспроизведения, символизирующая запуск видео передачи «Трифекты»"
                src="/img/youtube.webp"
                className="h-full w-full object-cover"
                width={1030}
                height={1480}
              />
              <div className="absolute bottom-0 lg:bottom-10 left-0 right-0 flex items-center justify-center p-10">
                <p className="text-base font-thin text-white lg:text-justify">
                  В программе{" "}
                  <span className="group-hover:text-[#aa0f24] relative inline-flex items-center font-semibold hover:text-[#aa0f24] transition-colors">
                    «Трифекты»
                    <span className="absolute -top-5 right-3 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 20"
                        className="w-10 h-8 drop-shadow"
                        aria-hidden="true"
                      >
                        <rect width="30" height="20" rx="5" fill="#aa0f24" />
                        <path d="M12 7L18 10L12 13V7Z" fill="white" />
                      </svg>
                    </span>
                  </span>
                  , которая с конца 2023 года еженедельно выходит на канале
                  «Живой Гвоздь» и рассказывает про новости США, я являюсь
                  соведущим.
                </p>
              </div>
            </a>
          </div>

          {/* 2 Small Screens */}
          <div className="flex lg:hidden p-px flex-col sm:flex-row">
            <a
              href="https://www.youtube.com/watch?v=-Qyx5ugwp7o"
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-lg ring-1 ring-[#2064bc]/20 relative h-fit bg-[#060b14] block group sm:hover:ring-[#aa0f24] sm:hover:border-[#aa0f24] transition-all"
              aria-label="Смотреть выпуск программы «Трифекты» на YouTube"
            >
              <div className="flex items-center justify-center p-10 text-base md:text-2xl gap-10 flex-col sm:flex-row wrap">
                <Image
                  alt="Иконка YouTube для передачи «Трифекты» с кнопкой воспроизведения"
                  src="/img/small.webp"
                  className="h-full sm:w-1/2 object-cover sm:mb-0 mb-5"
                  width={640}
                  height={360}
                />
                <p className="font-thin text-white min-w-[240px]">
                  В программе
                  <span className="group-hover:text-[#aa0f24] relative inline-flex items-center font-semibold hover:text-[#aa0f24] transition-colors">
                    «Трифекты»,
                  </span>
                  которая с конца 2023 года еженедельно выходит на канале «Живой
                  Гвоздь» и рассказывает про новости США, я являюсь соведущим.
                </p>
              </div>
            </a>
          </div>

          {/* 3 Large Screens*/}
          <div className="lg:flex p-px hidden lg:col-span-2 ">
            <div className="overflow-hidden rounded-lg bg-[#0a1727] ring-1 ring-[#2064bc]/20 ">
              <Image
                alt="Статуя Фемиды, символизирующая справедливость, с завязанными глазами и весами в руках, вертикальная версия изображения"
                src="/img/bd-02.webp"
                className="object-cover w-full h-full"
                width={1024}
                height={1536}
              />
            </div>
          </div>

          {/* 4 */}
          <div className="flex p-px lg:col-span-4" id="services">
            <div className="overflow-hidden rounded-lg bg-[#0a1727] ring-1 ring-[#2064bc]/20 ">
              <div className="w-full p-10">
                <div className="mb-12 rounded-full px-14 py-2 w-fit font-semibold text-sm text-[#5395ff] bg-[#2064bc]/10 ring-1 ring-inset ring-[#2064bc]/20 backdrop-blur-md shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_0px_40px_5px_rgba(255,255,255,0.025)] ">
                  Услуги
                </div>

                <p className="mt-5 text-base/6 sm:text-justify font-thin text-white/80">
                  Американский юридический рынок очень сегментирован: как
                  правило, адвокаты и юридические компании имеют узкую
                  специализацию. Например, есть юридические компании, которые
                  занимаются не просто трудовым правом в целом, а только
                  дискриминацией в трудовых отношениях, причем имеют
                  специализацию внутри дискриминации и работают только с истцами
                  или ответчиками. Или, например адвокаты специализируются не
                  просто на уголовных делах, но на отдельных категориях
                  уголовных дел типа преступлений «белых воротничков» и не
                  работают с другими категориями дел.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Small Screens */}
          <div className="flex lg:hidden p-px">
            <div className="overflow-hidden rounded-lg bg-[#0a1727] ring-1 ring-[#2064bc]/20 ">
              <Image
                alt="Статуя Фемиды, олицетворяющая справедливость, с завязанными глазами, держащая весы и меч, символ правосудия"
                src="/img/bd-03.webp"
                className="object-cover w-full h-auto"
                width={1536}
                height={1024}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
