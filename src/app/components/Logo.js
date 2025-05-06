/* eslint-disable @next/next/no-img-element */

export default function Logo() {
  const logos = [
    "logo_1.svg",
    "logo_2.svg",
    "logo_3.svg",
    "logo_4.svg",
    "logo_5.svg",
    "logo_6.svg",
    "logo_7.svg",
    "logo_8.svg",
    "logo_9.svg",
    "logo_10.svg",
    "logo_11.svg",
    "logo_12.svg",
    "logo_14.svg",
    "logo_15.svg",
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#040e17] pt-10 pb-32 group"
      aria-labelledby="logo-cloud-title"
    >
      <h2 id="logo-cloud-title" className="sr-only">
        Медиа и партнёры, с которыми я сотрудничаю
      </h2>

      <div className="group/marquee">
        <div className="flex gap-x-16 w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative h-20 min-w-[80px] shrink-0"
              aria-hidden="true"
            >
              <img
                src={`/img/svg/${logo}`}
                className="h-24 w-auto object-contain"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
