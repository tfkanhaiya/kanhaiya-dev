import { useEffect, useRef } from "react";
import { PROJECTS } from "../constants"; 
import { RiArrowRightUpLine } from "@remixicon/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    if (!projectsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, projectsRef);

    // Cleanup function to revert GSAP context when component unmounts
    return () => ctx.revert();
  }, []);

  if (!PROJECTS || PROJECTS.length === 0) {
    return (
      <section className="pt-16" id="projects" ref={projectsRef}>
        <div className="px-4">
          <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
            Projects
          </h2>
          <p className="text-center text-lg">No projects to display.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16" id="projects" ref={projectsRef}>
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">Projects</h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View details of ${project.title}`}
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-60 w-full object-cover"
                  />
                </a>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="mb-4">
                    <strong>Tech Stack:</strong>
                    <ul className="flex flex-wrap">
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-purple-600 px-6 py-2 text-white font-semibold hover:bg-purple-700 transition duration-300"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      GitHub
                      <RiArrowRightUpLine className="ml-2" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-purple-500 px-6 py-2 text-white font-semibold hover:bg-purple-600 transition duration-300 ml-2"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      Demo
                      <RiArrowRightUpLine className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;