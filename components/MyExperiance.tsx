import CustomSection from "./CustomSection";
import ProjectsCardSection from "./ProjectsCardSection";

const MyExperience = () => {
  return (
    <CustomSection id="experience" className="w-full bg-base-300">
      <h2 className="subHeader">Work And Project Experience</h2>
      <ProjectsCardSection />
    </CustomSection>
  );
};

export default MyExperience;
