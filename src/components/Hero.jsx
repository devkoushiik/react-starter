import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import img from "../../project-assets/img.jpg";
const Hero = () => {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            I&apos;m <span className="text-blue-600">Koushik</span>
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End-Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/devkoushiik">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/devkoushiik/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            {/* <a href="">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a> */}
          </div>
        </article>
        <article className="hidden md:block">
          <img src={img} alt="img" className="h-80 lg:h-96 rounded-3xl" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
