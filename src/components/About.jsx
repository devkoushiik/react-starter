import img from "../../project-assets/img.jpg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-10" id="about">
      <div className="mx-auto max-w-7xl px-8 items-center gap-16 grid md:grid-cols-2">
        <img src={img} className="h-64 rounded-3xl ml-20" />
        <article>
          <SectionTitle text={"about me"} />
          <p className="text-slate-600 mt-8 leading-loose">
            Hi, I am Koushik. I want to give you a Thanks, You have visited my
            portfolio. I am currently completing my undergraduate program in
            Bangladesh University Of Business and Technology. Beside that I am
            exploring new upcoming front-end technologies. I am extremely
            passionate about coding. I hope if you need any help, i can help you
            out. Again Thanks.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
