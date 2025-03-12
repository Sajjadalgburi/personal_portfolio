import React from "react";

const CustomSection = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <section id={id} className={`md:py-20 py-10 min-h-screen ${className}`}>
      {children}
    </section>
  );
};

export default CustomSection;
