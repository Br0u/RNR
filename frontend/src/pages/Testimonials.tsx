import { useEffect, useState } from 'react';
import TestimonialCard from '../components/TestimonialCard';
// import api from '../api/axios';

/**
 * Testimonials Page Component
 * 
 * Backend API Integration (Optional):
 * 
 * Note: Testimonials can be static content or fetched from API
 * If you want to manage testimonials through admin panel, use API:
 * 
 * GET /api/testimonials
 * - Fetches all approved testimonials from database
 * - Response: { testimonials: Testimonial[] }
 * - Testimonial: {
 *     _id: string,
 *     name: string,
 *     role: string,
 *     content: string,
 *     rating: number (1-5),
 *     avatar?: string,  // Optional avatar image URL
 *     approved: boolean,  // Only show approved testimonials
 *     createdAt: Date
 *   }
 * 
 * Query Parameters (optional):
 * - ?approved=true - Only get approved testimonials
 * - ?limit=10 - Limit number of results
 * 
 * Example API call (uncomment if using backend):
 * 
 * const [testimonials, setTestimonials] = useState([]);
 * const [loading, setLoading] = useState(true);
 * 
 * useEffect(() => {
 *   const fetchTestimonials = async () => {
 *     try {
 *       const response = await api.get('/api/testimonials?approved=true');
 *       setTestimonials(response.data.testimonials);
 *     } catch (error) {
 *       console.error('Error fetching testimonials:', error);
 *     } finally {
 *       setLoading(false);
 *     }
 *   };
 *   fetchTestimonials();
 * }, []);
 */
const Testimonials = () => {
  // TODO: Add state for testimonials if using API
  // const [testimonials, setTestimonials] = useState([]);
  // const [loading, setLoading] = useState(true);

  // TODO: Fetch testimonials from API if using backend
  // useEffect(() => {
  //   const fetchTestimonials = async () => {
  //     try {
  //       const response = await api.get('/api/testimonials?approved=true');
  //       setTestimonials(response.data.testimonials);
  //     } catch (error) {
  //       console.error('Error fetching testimonials:', error);
  //       // Fallback to default testimonials
  //       setTestimonials(defaultTestimonials);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchTestimonials();
  // }, []);

  // Default testimonials (static content - can be replaced with API data)
  const defaultTestimonials = [
    {
      name: 'Sam',
      role: 'Homeowner',
      content:
        'RNR build did an amazing job renovating our kitchen. The team was professional, on time, and the quality exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Otto',
      role: 'Business Owner',
      content:
        'We use RNR build for our office cleaning services. They are reliable, thorough, and always leave our space spotless. Great service!',
      rating: 5,
    },
    {
      name: 'Frank',
      role: 'Property Manager',
      content:
        'The landscaping work RNR build did for our property was outstanding. The design was beautiful and they maintained it perfectly throughout the season.',
      rating: 5,
    },
    {
      name: 'Vi',
      role: 'Homeowner',
      content:
        'I was impressed with their attention to detail during our bathroom renovation. The project was completed on schedule and the results are fantastic.',
      rating: 5,
    },
    {
      name: 'Pat',
      role: 'Restaurant Owner',
      content:
        'RNR build handles our deep cleaning needs. Professional, efficient, and they use eco-friendly products. Our customers always comment on how clean the place is.',
      rating: 5,
    },
    {
      name: 'Thomas',
      role: 'Homeowner',
      content:
        'We hired RNR build for a complete home renovation. They transformed our entire house beautifully. The team was courteous and the workmanship was excellent.',
      rating: 5,
    },
  ];

  // Use API testimonials if available, otherwise use default
  const displayTestimonials = defaultTestimonials; // Change to: testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Client Testimonials
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have
              to say about working with RNR build.
            </p>
          </div>

          {/* TODO: Add loading state when using API */}
          {/* {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading testimonials...</p>
            </div>
          )} */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

