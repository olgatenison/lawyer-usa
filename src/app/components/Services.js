import Image from "next/image";

export default function Services() {
  return (
    <section aria-labelledby="services-title">
      <div className="bg-[#040e17]">
        <div className="max-w-7xl px-6 lg:px-8 mx-auto pb-16">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
            {/* First Section */}
            <div className="flex p-px lg:col-span-3 justify-center items-center">
              <div className="overflow-hidden rounded-lg bg-[#0a1727] ring-1 ring-[#2064bc]/20 h-full">
                <div className="w-full p-10">
                  <p
                    id="services-title"
                    className="text-2xl/8 text-pretty font-semibold text-white/90"
                  >
                    Так же я представляю интересы клиентов по разным вопросам в
                    США и консультирую по ведению бизнеса в стране.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Section (Image) */}
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-lg ring-1 ring-[#2064bc]/20">
                <Image
                  alt="Рукопожатие — символ юридического партнёрства в США"
                  src="/img/hands.webp"
                  className="object-cover w-full h-full"
                  width={1536}
                  height={1024}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
