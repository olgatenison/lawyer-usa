export default function About() {
  return (
    <section
      className="bg-[#040e17]"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="overflow-hidden py-10">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex justify-between lg:flex-row flex-col lg:w-full md:w-3/4 w-full">
            {/* Левая часть */}
            <div className="flex flex-col items-start lg:items-end lg:w-1/2 lg:pr-16 pr-6">
              <span className="rounded-full px-14 py-2 w-fit font-semibold text-sm text-[#5395ff] bg-[#2064bc]/10 ring-1 ring-inset ring-[#2064bc]/20 backdrop-blur-md shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_0px_40px_5px_rgba(255,255,255,0.025)] mb-5">
                Обо мне
              </span>
              <h2
                className="text-pretty text-4xl sm:text-6xl font-bold tracking-tight text-white text-left lg:text-right"
                id="about-heading"
              >
                <span className="sm:block mr-3">Игорь</span>Слабых
              </h2>
            </div>

            {/* Правая часть */}
            <div className="w-full lg:w-1/2 lg:pl-8 py-6">
              <p className="sm:mt-16 text-xl/7 text-pretty font-semibold text-white/80">
                Юрист с российским и американским образованием. Имею степень
                магистра права (LL.M) одного из ведущих частных университетов
                США — Университета Джорджа Вашингтона.
              </p>
              <p className="mt-8 text-base/6 font-thin text-white/80 text-justify">
                С конца 2023 года я — соведущий еженедельной программы{" "}
                <a
                  href="https://www.youtube.com/watch?v=-Qyx5ugwp7o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center font-semibold hover:text-[#aa0f24] transition"
                  aria-label="Смотреть выпуск программы «Трифекты» на YouTube"
                >
                  «Трифекты»
                  <span className="absolute -top-7 right-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
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
                </a>{" "}
                на YouTube-канале «Живой Гвоздь», где мы обсуждаем ключевые
                события и тренды американской политики и общества.
              </p>
              <p className="mt-5 text-base/6 text-justify font-thin text-white/80">
                Являюсь одним из ведущих русскоязычных экспертов по правовой и
                политической системе США. Регулярно комментирую события в США
                для крупных независимых СМИ и популярных блогеров/ютьюб-каналов.
                Среди тех, с кем сотрудничаю — «Голос Америки», «Дождь», «Радио
                Свобода», «Эхо Москвы», «Популярная Политика», «Настоящее
                время», «Sota Vision», «Бюро», «Редакция», «Вот так», «Медуза»,
                «Форбс», «Ведомости», «Коммерсант», «Insider», «Каспаров.ру», а
                также журналисты и медийные личности — Александр Плющев,
                Станислав Кучер, Дмитрий Колезев и другие. Выше — логотипы
                некоторых изданий, с которыми я работаю.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
