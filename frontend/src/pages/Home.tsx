import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
// import api from '../api/axios';

/**
 * Home Page Component
 * 
 * Backend API Integration:
 * 
 * GET /api/services
 * - Fetches list of services to display in ServicesPreview
 * - Response: { services: Service[] }
 * - Service: { _id, title, description, imageUrl }
 * 
 * Example API call (uncomment when backend is ready):
 * 
 * const [services, setServices] = useState([]);
 * const [loading, setLoading] = useState(true);
 * 
 * useEffect(() => {
 *   const fetchServices = async () => {
 *     try {
 *       const response = await api.get('/api/services');
 *       setServices(response.data.services);
 *     } catch (error) {
 *       console.error('Error fetching services:', error);
 *     } finally {
 *       setLoading(false);
 *     }
 *   };
 *   fetchServices();
 * }, []);
 * 
 * Then pass services to ServicesPreview component:
 * <ServicesPreview services={services} loading={loading} />
 */
const Home = () => {
  // TODO: Add state for services when backend is ready
  // const [services, setServices] = useState([]);
  // const [loading, setLoading] = useState(true);

  // TODO: Fetch services from API when backend is ready
  // useEffect(() => {
  //   const fetchServices = async () => {
  //     try {
  //       const response = await api.get('/api/services');
  //       setServices(response.data.services);
  //     } catch (error) {
  //       console.error('Error fetching services:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchServices();
  // }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesPreview />
    </div>
  );
};

export default Home;

