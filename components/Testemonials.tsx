import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";

const Testemonials = () => {
  return (
    <section id="testemonials" className="my-[10rem] min-w-full">
      <h1 className="body_header mb-10">
        Testonomials from <span className="gradient_color">clients</span> and{" "}
        <span className="gradient_color">employees</span>
      </h1>
      <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
        />
      </div>
    </section>
  );
};

export default Testemonials;
