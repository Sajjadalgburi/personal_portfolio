import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

export function About() {
  return (
    <section id="about" className="lg:min-h-screen bg-gray-300 p-9">
      {" "}
      <BentoGrid className="w-full max-w-7xl mx-auto">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            imgClassName,
            titleClassName,
            img,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}
