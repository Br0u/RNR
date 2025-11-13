import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServicesPreview = () => {
  const services = [
    {
      title: "Cleaning Services",
      description:
        "Professional deep cleaning for homes and offices. We ensure every corner is spotless.",
      imageUrl: "/images/services/Home-Cleaning-Services-Toronto.jpg",
      link: "/services#cleaning",
    },
    {
      title: "Renovation",
      description:
        "Complete renovation services from design to execution. Transform your space.",
      imageUrl: "/images/services/renovation.webp",
      link: "/services#renovation",
    },
    {
      title: "Landscaping",
      description:
        "Beautiful garden design and maintenance. Create your perfect outdoor space.",
      imageUrl: "/images/services/landscape.webp",
      link: "/services#landscaping",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer a wide range of professional building and maintenance
            services to meet all your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                link={service.link}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
