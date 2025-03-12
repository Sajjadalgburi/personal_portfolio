import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

export function About() {
  return (
    <section id="about" className="lg:min-h-screen  p-9">
      {" "}
      <BentoGrid className="w-full max-w-7xl mx-auto">
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            {...item}
            className={`${item.className} `}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
