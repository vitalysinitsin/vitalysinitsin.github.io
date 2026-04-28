import myPhoto from "../../assets/me.jpg";
import { ButtonHyperLink } from "../utility/Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { PiEnvelopeDuotone } from "react-icons/pi";
import Project from "../utility/Project";
import { useEffect, useState } from "react";

const EXCLUDED_REPOS = [
  "courses",
  "vitalysinitsin.github.io",
  "vitalysinitsin",
];

function AboutMe() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/vitalysinitsin/repos")
      .then((res) => res.json())
      .then((allGithubRepos) => {
        // excluding my course material
        setRepos(
          allGithubRepos
            .filter((repo) => !EXCLUDED_REPOS.includes(repo.name))
            .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)),
        );
      });
  }, []);

  return (
    <div className="overflow-auto">
      <div className="flex w-full my-2 max-w-2xl mx-auto flex-wrap gap-2 justify-items-center shadow-lg">
        <section className="w-full bg-[#F4ECE6] flex flex-col pt-4 gap-4 justify-between md:w-[20rem]">
          <img
            className="mx-auto h-40 w-40 rounded-full"
            src={myPhoto}
            alt="myPhoto"
          />
          <div className="flex items-center flex-col">
            <span className="text-center text-2xl font-extrabold">Vitaly</span>
            <span className="text-center text-2xl font-extrabold">
              Sinitsin
            </span>
          </div>
          <div className="h-0.5 w-14 bg-blue-500 flex self-center"></div>
          <span className="text-center text-sm tracking-widest">
            SOFTWARE DEVELOPER
          </span>
          <footer className="flex items-center justify-center gap-6 bg-white w-full h-14">
            <a
              href="mailto:vsinitsin94@gmail.com"
              title="vsinitsin94@gmail.com"
            >
              <PiEnvelopeDuotone color="#CE3C30" />
            </a>
            <a
              href="https://www.linkedin.com/in/vitalysinitsin/"
              target="_blank"
              rel="noreferrer"
              title="My Linkedin"
            >
              <FaLinkedin color="#0A66C2" />
            </a>
            <a
              href="https://www.github.com/vitalysinitsin"
              target="_blank"
              rel="noreferrer"
              title="My Github"
            >
              <FaGithub />
            </a>
          </footer>
        </section>
        <section className="flex w-full items-start flex-col gap-8 p-4 bg-white md:w-[20rem]">
          <span className="text-7xl font-extrabold">Hello!</span>
          <span className="text-lg">Here's who I am & what I do</span>
          <p className="">
            I'm a Software Engineer with over 6 years of experience building
            scalable and responsive web applications. Skilled in designing
            reusable UI components, managing application state, and developing
            robust server-side logic to support performant, end-to-end systems.
          </p>
        </section>
        <section className="p-3 bg-white border-t w-full">
          <span className="text-2xl font-extrabold">Latest Projects</span>
          <div className="w-full h-1 bg-purple-300 my-2" alt="titleLine"></div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-2">
            {repos.map(
              (repo, index) =>
                index < 4 && <Project repo={repo} key={repo.id} />,
            )}
          </div>
          <ButtonHyperLink
            className="mt-2 float-right"
            buttonStyle="link"
            href="https://github.com/vitalysinitsin?tab=repositories"
            hidden={repos.length < 5}
          >
            More...
          </ButtonHyperLink>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
