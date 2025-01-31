import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

export function About() {
  return (
    <section
      id="about"
      className="lg:min-h-screen bg-gray-50 dark:bg-gray-200 p-9"
    >
      {" "}
      <BentoGrid className="w-full max-w-7xl mx-auto">
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            {...item}
            className={`${item.className} bg-white dark:bg-gray-100`}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
