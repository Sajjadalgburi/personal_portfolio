import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";

const Testemonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-72 flex flex-col items-center justify-center py-[14rem] bg-gray-50 dark:bg-gray-200"
    >
      <h1 className="header_text text-gray-800">Testimonials from clients</h1>

      <div className="h-full w-full sm:h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-gray-200 items-center justify-center relative overflow-hidden">
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
