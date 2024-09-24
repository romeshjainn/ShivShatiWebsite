import React from 'react';

import config from '../config/index.json';
import Canvas from "../components/Canvas";


const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  const icons = [
    {
      label: "whatsapp",
      icon: "https://img.icons8.com/?size=96&id=16713&format=png",
      url: "https://web.whatsapp.com/send/?phone=917987222325&text&type=phone_number&app_absent=0",
    },
    {
      label: "linkedin",
      icon: "https://img.icons8.com/?size=96&id=13930&format=png",
      url: "https://www.linkedin.com/company/shivshaktiinstitute",
    },
    {
      label: "facebook",
      icon: "https://img.icons8.com/?size=96&id=118497&format=png",
      url: "https://www.facebook.com/shivshaktiinstituteofficial",
    },
    {
      label: "instgram",
      icon: "https://cdn2.iconfinder.com/data/icons/oneui/24/Instagram-128.png",
      url: "https://www.instagram.com/shivshaktiinstituteofficial",
    },
  ];
  return (
    <div
      id="about"
      className="mx-auto container xl:px-4 lg:px-12 sm:px-6 px-4 py-12"
    >
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            We are a premier development and training institute dedicated to
            empowering individuals and businesses through technology. Our
            programs and services are designed to drive success and growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Training Programs
              </h3>
              <p className="text-gray-600">
                Equip yourself with essential tech skills through our diverse
                training programs, including coding bootcamps and workshops
                tailored to your career goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Tech Projects
              </h3>
              <p className="text-gray-600">
                From custom software solutions to innovative tech strategies,
                our project management services are designed to meet your
                specific needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Digital Marketing
              </h3>
              <p className="text-gray-600">
                Enhance your online presence with our digital marketing
                expertise, including SEO and social media management strategies
                that drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Canvas />

      <div className=" flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className=" h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          {icons.map((item, index) => {
            return (
              <a target="_blank" key={item.label} href={item.url}>
                <img
                  className={`${index == 3 ? "h-8 w-8" : "h-10 w-10"}`}
                  src={item.icon}
                />
              </a>
            );
          })}

          {/* <a
            aria-label="github"
            href={socialMedia.github}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a> */}
          {/* <a
            aria-label="linkedin"
            href={socialMedia.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            aria-label="twitter"
            href={socialMedia.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
            </svg>
          </a> */}
        </div>
        <div className="flex items-center mt-6 ">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} Designed & Developed by{" "}
            <a href="" rel="nofollow">
              SPEGI Technologies Pvt Ltd
            </a>
          </p>
        </div>

       
      </div>
    </div>
  );
};
export default About;
