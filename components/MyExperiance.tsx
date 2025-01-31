import ProjectsCardSection from "./ProjectsCardSection";

const MyExperiance = () => {
  return (
    <section
      id="experiance"
      className="min-h-screen py-20 bg-gray-100 dark:bg-gray-800 w-full max-w-7xl mx-auto"
    >
      {/* $ */}
      <h1 className="text-4xl sm:text-7xl font-semibold text-center mb-9">
        My work Experiance
      </h1>

      <ProjectsCardSection />
    </section>
  );
};

export default MyExperiance;
