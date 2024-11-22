"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
type Testimonial = {
  name: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Naruto Uzumaki",
    text: "The best manga store in the Hidden Leaf Village!",
  },
  { name: "Monkey D. Luffy", text: "I found my One Piece collection here!" },
  { name: "Goku Son", text: "The power levels of this store are over 9000!" },
  { name: "Saitama", text: "I completed my manga quest with one punch!" },
  { name: "Saitama", text: "I completed my manga quest with one punch!" },
  { name: "Saitama", text: "I completed my manga quest with one punch!" },
  { name: "Saitama", text: "I completed my manga quest with one punch!" },
];

const Testimonials = () => {
  return (
    <div className="sticky py-32 w-full">
      {/* Sticky full-width "Testimonials" header within this section */}
      <h2 className="text-6xl text-center text-black font-bold uppercase tracking-wide  top-0 w-full anime-header z-10 py-4">
        Testimonials
      </h2>

      {/* Testimonial carousel section */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          spaceBetween={50}
          slidesPerView={1.5}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div className=" bg-zinc-100 p-8 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-500">
                  <p className="sm:text-xl font-semibold text-black italic">
                    {`"${testimonial.text}"`}
                  </p>
                  <h4 className="mt-4 sm:text-2xl text-yellow-500 font-bold">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
