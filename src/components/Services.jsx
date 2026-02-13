import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Mousewheel,
  EffectFade,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { section } from "framer-motion/client";
import './Services.css'

const slides = [
  {
    heading: "What we do",
    title: "Threat Modelling",
    text: "Together with your team, we proactively identify and assess potential security threats within your infrastructure designs and define effective mitigation strategies. Our threat modeling exercises enable you to address risks early in the design phase, reducing the likelihood and impact of security incidents on your business.",
    bg: "https://images.pexels.com/photos/1181334/pexels-photo-1181334.jpeg",
  },
  {
    heading: "What we do",
    title: "Code Auditing",
    text: "Our skilled security specialists conduct in-depth manual code reviews to identify vulnerabilities in your web applications and smart contracts. This white-box approach enables us to uncover complex security flaws that may remain undetected for months using traditional black-box testing methods.",
    bg: "https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg",
  },
  {
    heading: "What we do",
    title: "Code Fuzzing",
    text: "We leverage fuzz testing to automate the discovery of bugs in your code. This efficient technique identifies vulnerabilities faster than manual testing, saving you both time and resources. A key advantage of fuzz testing is continuous coverage—new issues can be detected months after the initial setup, ensuring your code remains resilient over time.",
    bg: "https://images.pexels.com/photos/4976712/pexels-photo-4976712.jpeg",
  },
  {
    heading: "What we do",
    title: "Penetration Testing",
    text: "We conduct penetration testing exercises to simulate how a skilled attacker might target your company’s network and applications. Our specialists attempt to identify and exploit vulnerabilities, providing insight into potential security gaps and helping you protect access to sensitive systems and critical information.",
    bg: "https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg",
  },
  {
    heading: "What we do",
    title: "Red Teaming",
    text: "Concerned about specific threat actors targeting your organization? Our red team exercises simulate the tactics, techniques, and procedures of a chosen hacking group, testing your people, processes, and technology defenses. These exercises are guided by the TIBER-EU framework, providing a realistic and structured assessment of your organization’s resilience.",
    bg: "https://images.pexels.com/photos/8108727/pexels-photo-8108727.jpeg",
  },
  {
    heading: "What we do",
    title: "Advisory",
    text: "We are here for you year-round. We don’t just deliver a report and walk away—we provide ongoing support across DevSecOps integration, domain/IP and threat monitoring, incident response, detection engineering, vulnerability testing, and industry-specific threat intelligence. Our team is always ready to assist, ensuring your security posture stays strong and up to date.",
    bg: "https://images.pexels.com/photos/8761336/pexels-photo-8761336.jpeg",
  },
];

export default function TravelSlider() {
  useEffect(() => {}, []);

  return (
    <section>
      
      <div className="relative w-full h-[420px] bg-slate-950">
        <Swiper
          direction="vertical"
          effect="fade"
          speed={1000}
          loop={true}
          pagination={{ clickable: true }}
          mousewheel={{ thresholdDelta: 50 }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Mousewheel, EffectFade, Autoplay]}
          className="h-full"
        >
          {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full overflow-hidden bg-slate-950">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${slide.bg})` }}
              />

              {/* Main Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-950/80 to-slate-900/70" />

              {/* Top Right Radial Accent */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(180,83,9,0.2),_transparent_50%)]" />

              {/* Bottom Left Radial Accent */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(71,85,105,0.15),_transparent_50%)]" />

              {/* Subtle Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full px-10">
                <div className="grid md:grid-cols-2 gap-10 text-white max-w-6xl w-full">

                  <div className="flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold">
                      {slide.heading}
                    </h1>
                  </div>

                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed text-slate-300">
                      {slide.text}
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  </section>
  );
}