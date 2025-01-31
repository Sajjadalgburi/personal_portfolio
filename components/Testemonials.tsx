import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";

const Testemonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-72 flex flex-col items-center justify-center py-[10rem] bg-gray-300"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Testonomials from <span className="gradient_color">clients</span> and{" "}
        <span className="gradient_color">employees</span>
      </h1>

      <div className="h-[25rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testemonials;
