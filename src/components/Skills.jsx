import { skills } from "../../project-assets/data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="mx-auto max-w-7xl px-8 py-20" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </div>
  );
};
export default Skills;
