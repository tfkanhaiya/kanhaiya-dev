import { useEffect, useRef } from "react";
import { ABOUT_ME } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImage from "../assets/my-pfp.jpeg";



gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    const aboutMeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-item", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                stagger: 0.3,
                scrollTrigger: {
                    trigger: aboutMeRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });
        }, aboutMeRef);
        
        return () => ctx.revert();
    }, []);

    return (
      <section className="py-16" id="aboutme" ref={aboutMeRef}>
          <div className="mx-auto max-w-4xl px-4">
              <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
                  About Me
              </h2>
              <div className="about-item flex flex-col items-center space-y-6 p-6 rounded-xl border border-purple-300/20 sm:flex-row sm:space-x-6 sm:space-y-0">
                 <div className="w-40 h-52 sm:w-48 sm:h-56 rounded-xl overflow-hidden border border-purple-300/20">
                     <img src={myImage} alt="Kanhaiya Kumar" className="w-full h-full object-cover" />
                 </div>

                  <div className="text-center sm:text-left max-w-md">
                      <h3 className="mb-2 text-lg sm:text-xl lg:text-2xl">
                          {ABOUT_ME.name}
                      </h3>
                      {/* <h4 className="text-lg font-medium sm:text-xl">
                          {ABOUT_ME.profession}
                      </h4> */}
                      <p className="text-sm sm:text-base">
                          {ABOUT_ME.description}
                      </p>
                      <p className="text-sm sm:text-base pt-2">
                          {ABOUT_ME.location}
                      </p>

                  </div>
              </div>
          </div>
      </section>
  );
};

export default AboutMe;