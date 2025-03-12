/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { testimonials } from "@/data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="bg-base-200 py-20 min-h-[80vh] flex flex-col justify-center items-center"
    >
      <h2 className="subHeader">Testimonials</h2>

      <div className="max-w-4xl mx-auto ">
        <div className="relative bg-base-100 rounded-xl mx-5 shadow-lg p-6 md:p-8 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-primary opacity-20 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 translate-x-1/2 translate-y-1/2 bg-secondary opacity-20 rounded-full blur-xl"></div>

          {/* Quote icon */}
          <div className="absolute top-6 left-6 text-5xl text-primary/20">
            &ldquo;
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 relative z-10">
            {/* Profile picture */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-base-300 shadow-md flex-shrink-0">
              <img
                src={
                  testimonials[currentIndex].profileImg
                    ? testimonials[currentIndex].profileImg
                    : "/profile.jpg"
                }
                alt={testimonials[currentIndex].name}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Testimonial content */}
            <div className="flex-1">
              <p className="text-base-content/80 text-sm md:text-base italic mb-4">
                {testimonials[currentIndex].text}
              </p>

              <div className="flex flex-col">
                <div className="font-bold text-base-content">
                  {testimonials[currentIndex].name}
                </div>
                <span className="text-sm text-base-content/70">
                  {testimonials[currentIndex].title}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="btn btn-circle btn-sm btn-ghost"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index ? "w-4 bg-primary" : "bg-base-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="btn btn-circle btn-sm btn-ghost"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
