import React from "react";

interface ServiceSectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const ServicesSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default ServicesSection;
