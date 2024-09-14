import myPhoto from "../../assets/me.jpg";
import { ButtonHyperLink } from "../utility/Button";
import vitalySinitsinResumeSoftwareDev from "../../assets/vitalySinitsinResumeSoftwareDev.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { PiPhoneCallDuotone, PiEnvelopeDuotone } from "react-icons/pi";
import { MdFileDownload } from "react-icons/md";
import Project from "../utility/Project";
import { useEffect, useState } from "react";

function AboutMe() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/hungryvito/repos")
      .then((res) => res.json())
      .then((allGithubRepos) => {
        // excluding my course material
        setRepos(
          allGithubRepos
            .filter((repo) => repo.name !== "courses")
            .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
        );
        console.log({ allGithubRepos });
      });
  }, []);

  return (
    <div className="flex flex-wrap mx-auto max-w-2xl w-full h-max overflow-hidden shadow-lg gap-y-2 justify-items-center">
      <section className="w-full bg-[#F4ECE6] flex flex-col pt-4 gap-4 justify-between md:w-[20rem]">
        <img
          className="mx-auto h-40 w-40 rounded-full"
          src={myPhoto}
          alt="myPhoto"
        />
        <div className="flex items-center flex-col">
          <span className="text-center text-2xl font-extrabold">Vitaly</span>
          <span className="text-center text-2xl font-extrabold">Sinitsin</span>
        </div>
        <div className="h-0.5 w-14 bg-blue-500 flex self-center"></div>
        <span className="text-center text-sm tracking-widest">
          SOFTWARE DEVELOPER
        </span>
        <footer className="flex items-center justify-center gap-6 bg-white w-full h-14">
          <a href="tel:+16479073762" title="Call me @ +16479073762">
            <PiPhoneCallDuotone color="green" />
          </a>
          <a
            href="mailto:vsinitsin94@gmail.com"
            title="Email me @ vsinitsin94@gmail.com"
          >
            <PiEnvelopeDuotone color="#CE3C30" />
          </a>
          <a
            href="https://www.linkedin.com/in/vsinitsin/"
            target="_blank"
            rel="noreferrer"
            title="My Linkedin"
          >
            <FaLinkedin color="#0A66C2" />
          </a>
          <a
            href="https://www.github.com/hungryvito"
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
        <div className="flex gap-4">
          <ButtonHyperLink
            href={vitalySinitsinResumeSoftwareDev}
            download="vitalySinitsinResumeSoftwareDev.pdf"
          >
            <MdFileDownload size="20" className="mr-1" />
            <span>RESUME</span>
          </ButtonHyperLink>
        </div>
        <p>
          I'm a software developer dedicated to creating effective and impactful
          software solutions. My experience includes launching several web
          applications in the environmental sector and developing a public
          safety platform that has aided police officers globally.
        </p>
      </section>
      <section className="p-3 bg-white border-t w-full">
        <span className="py-1 text-2xl font-extrabold">Projects</span>
        <div className="w-full h-1 bg-green-500 my-4" alt="greenLine"></div>
        <div className="flex flex-wrap gap-2">
          {repos.map(
            (repo, index) => index < 4 && <Project repo={repo} key={repo.id} />
          )}
        </div>
        <ButtonHyperLink
          buttonStyle="link"
          href="https://github.com/hungryvito?tab=repositories"
          hidden={repos?.length < 5}
        >
          More...
        </ButtonHyperLink>
      </section>
    </div>
  );
}

export default AboutMe;
