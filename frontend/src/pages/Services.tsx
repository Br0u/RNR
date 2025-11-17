// import { useEffect, useState } from 'react';
import ServiceCard from "../components/ServiceCard";
// import api from '../api/axios';

/**
 * Services Page Component
 *
 * Backend API Integration:
 *
 * GET /api/services
 * - Fetches all available services from database
 * - Response: { services: Service[] }
 * - Service: {
 *     _id: string,
 *     title: string,
 *     description: string,
 *     imageUrl: string,
 *     createdAt: Date,
 *     updatedAt: Date
 *   }
 *
 * Error Handling:
 * - If API fails, show error message to user
 * - Fallback to empty array or default services
 *
 * Loading State:
 * - Show loading spinner while fetching data
 * - Display services once loaded
 */
const Services = () => {
  // TODO: Uncomment when backend is ready
  // State for services from API
  // const [services, setServices] = useState<any[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  // TODO: Uncomment when backend is ready
  // useEffect(() => {
  //   const fetchServices = async () => {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const response = await api.get('/api/services');
  //       setServices(response.data.services || []);
  //     } catch (err: any) {
  //       console.error('Error fetching services:', err);
  //       setError('Failed to load services. Please try again later.');
  //       // Fallback to default services if API fails
  //       setServices(defaultServices);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchServices();
  // }, []);

  // Default services (fallback when API is not available)
  const defaultServices = [
    {
      title: "Cleaning Services",
      description:
        "Professional deep cleaning for homes and offices. We ensure every corner is spotless with eco-friendly products and attention to detail.",
      imageUrl: "/images/services/Home-Cleaning-Services-Toronto.jpg",
      link: "/contact",
    },
    {
      title: "Renovation",
      description:
        "Complete renovation services from design to execution. Transform your space with our expert team handling everything from planning to finishing touches.",
      imageUrl: "/images/services/renovation.webp",
      link: "/contact",
    },
    {
      title: "Landscaping",
      description:
        "Beautiful garden design and maintenance. Create your perfect outdoor space with our professional landscaping services including design, installation, and ongoing care.",
      imageUrl: "/images/services/landscape.webp",
      link: "/contact",
    },
  ];

  // Use API services if available, otherwise use default
  // TODO: Change to: const displayServices = services.length > 0 ? services : defaultServices;
  const displayServices = defaultServices;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer comprehensive building and maintenance services to meet
              all your needs. From cleaning to renovation to landscaping, we've
              got you covered.
            </p>
          </div>

          {/* TODO: Add loading state when backend is ready */}
          {/* {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading services...</p>
            </div>
          )} */}

          {/* TODO: Add error message when backend is ready */}
          {/* {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )} */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service, index) => (
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
        </div>
      </section>
    </div>
  );
};

export default Services;
