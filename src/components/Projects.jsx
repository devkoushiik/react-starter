import { projects } from "../../project-assets/data";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
const Projects = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20" id="projects">
      <SectionTitle text={"web creation"} />

      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
