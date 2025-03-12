import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";
import CustomSection from "./CustomSection";

export function AboutMe() {
  return (
    <CustomSection id="about" className="bg-base-200">
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
    </CustomSection>
  );
}
