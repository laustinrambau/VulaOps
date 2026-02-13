import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, EffectFade } from "swiper/modules"; // ✅ Correct
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { h1 } from "framer-motion/client";

const slides = [
  {
    heading: "What we do",
    title: "Threat Modelling",
    text: "Visit Hallstatt, Austria, a beautiful village by a clear lake, surrounded by tall mountains. Walk through old streets, see ancient salt mines, and enjoy the peaceful views. This tour is perfect for nature lovers and history fans.",
    bg: "https://images.pexels.com/photos/1181334/pexels-photo-1181334.jpeg",
  },
  {
    heading: "What we do",
    title: "Code Auditing",
    text: "Explore Paris, the City of Light, known for its romance and famous landmarks like the Eiffel Tower. Enjoy delicious food, visit the Louvre, and stroll along the Seine River. Choose this tour to experience the charm and culture of France.",
    bg: "https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg",
  },
  {
    heading: "What we do",
    title: "Code Fuzzing",
    text: "Discover Amsterdam, a city full of canals, bicycles, and culture. Visit the Van Gogh Museum, take a canal cruise, and explore lively streets. This tour is great for those who love art, history, and a vibrant city atmosphere.",
    bg: "https://images.pexels.com/photos/4976712/pexels-photo-4976712.jpeg",
  },
  {
    heading: "What we do",
    title: "Penetration Testing",
    text: "Travel to Kyoto, Japan, a city rich in tradition and beauty. Visit ancient temples, enjoy beautiful gardens, and see colorful geisha districts. This tour is perfect for those who want to experience Japan's history and culture.",
    bg: "https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg",
  },
  {
    heading: "What we do",
    title: "Red Teaming",
    text: "Experience New York City, where excitement and adventure await at every corner. See the Statue of Liberty, enjoy a Broadway show, and taste food from around the world. This tour is ideal for those who want to feel the energy of a big city.",
    bg: "https://images.pexels.com/photos/8108727/pexels-photo-8108727.jpeg",
  },
  ,
  {
    heading: "What we do",
    title: "Advisory",
    text: "Experience New York City, where excitement and adventure await at every corner. See the Statue of Liberty, enjoy a Broadway show, and taste food from around the world. This tour is ideal for those who want to feel the energy of a big city.",
    bg: "https://images.pexels.com/photos/8761336/pexels-photo-8761336.jpeg",
  },
];

export default function TravelSlider() {
  useEffect(() => {
    // Optional: handle extra animations if needed
  }, []);

  return (
    
    <div className="relative w-full h-[430px] bg-gray-900 font-quicksand">
      <Swiper
        direction="vertical"
        effect="fade"
        speed={1000}
        loop
        pagination={{ clickable: true }}
        mousewheel={{ thresholdDelta: 50 }}
        modules={[Pagination, Mousewheel, EffectFade]} // ✅ register modules
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-screen">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center filter brightness-90 transition-all duration-1000"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
            {/* Content */}
            <div className="absolute top-1/4 text-center text-white z-10 p-[40px] grid grid-cols-2 ">
              <div className="flex items-center justify-center">
                     <h1 className="text-4xl md:text-6xl font-salsa mb-4 animate-slideDown">
                      {slide.heading}
              </h1>
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-salsa mb-4 animate-slideDown">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl font-medium animate-slideDown delay-1000">
                  {slide.text}
                </p>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}