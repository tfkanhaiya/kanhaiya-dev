import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "@remixicon/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in animations for contact section
      gsap.from(".contact-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Fade-in animations for social icons
      gsap.from(".contact-icon", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Hover animations for social icons (jump effect)
      const icons = document.querySelectorAll(".contact-icon");
      icons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            y: -10, // Move icon up by 10px
            scale: 1.1, // Slightly scale up the icon
            duration: 0.3,
            ease: "power3.out",
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            y: 0, // Reset to original position
            scale: 1, // Reset scale
            duration: 0.3,
            ease: "power3.out",
          });
        });
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="contact-text mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
        <p className="contact-text mb-4 text-lg lg:text-xl">
          Feel free to reach out to me via e-mail:{" "}
          <a href="mailto:kanhaiyaakumarr4@gmail.com" className="border-b">
            kanhaiyaakumarr4@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/kanhaiya-kumar-649198236/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my LinkedIn profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://github.com/tfkanhaiya"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my GitHub profile"
          >
            <RiGithubFill className="text-3xl" />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my Twitter profile"
          >
            <RiTwitterFill className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
