import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";
import CustomSection from "./CustomSection";

const Testemonials = () => {
  return (
    <CustomSection id="testimonials" className="">
      <h2 className="subHeader">Testimonials from clients</h2>

      <div className="h-full w-full sm:h-[25rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </CustomSection>
  );
};

export default Testemonials;
