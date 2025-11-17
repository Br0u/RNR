import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import api from '../api/axios';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  serviceType: yup.string().required('Please select a service type'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  /**
   * Submit contact form to backend API
   * 
   * Backend API Integration:
   * 
   * POST /api/appointments
   * - Creates a new appointment/contact request
   * - Request Body: {
   *     name: string,
   *     phone: string,
   *     email: string,
   *     serviceType: string,
   *     message: string,
   *     photo?: File (optional - if file upload is needed)
   *   }
   * 
   * - Response: {
   *     success: boolean,
   *     message: string,
   *     appointment: {
   *       _id: string,
   *       name: string,
   *       phone: string,
   *       email: string,
   *       serviceType: string,
   *       message: string,
   *       status: 'pending' | 'contacted' | 'completed',
   *       createdAt: Date
   *     }
   *   }
   * 
   * Error Handling:
   * - 400: Validation error (show field-specific errors)
   * - 500: Server error (show generic error message)
   * 
   * Example API call (uncomment when backend is ready):
   * 
   * const response = await api.post('/api/appointments', data);
   * 
   * For file upload (if photo is needed):
   * const formData = new FormData();
   * formData.append('name', data.name);
   * formData.append('phone', data.phone);
   * formData.append('email', data.email);
   * formData.append('serviceType', data.serviceType);
   * formData.append('message', data.message);
   * if (photoFile) {
   *   formData.append('photo', photoFile);
   * }
   * const response = await api.post('/api/appointments', formData, {
   *   headers: { 'Content-Type': 'multipart/form-data' }
   * });
   */
  const onSubmit = async (data: ContactFormData) => {
    try {
      // TODO: Uncomment when backend is ready
      // const response = await api.post('/api/appointments', data);
      // console.log('Appointment created:', response.data);
      
      // Temporary: Simulate API call
      console.log('Form data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      alert('Thank you! Your message has been sent successfully.');
      reset();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      
      // TODO: Handle specific error types when backend is ready
      // if (error.response?.status === 400) {
      //   // Validation errors
      //   const errors = error.response.data.errors;
      //   // Display field-specific errors
      //   alert('Please check your form and try again.');
      // } else {
      //   // Generic error
      //   alert('Something went wrong. Please try again.');
      // }
      
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="serviceType" className="block text-gray-700 font-semibold mb-2">
                Service Type *
              </label>
              <select
                id="serviceType"
                {...register('serviceType')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.serviceType ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
              >
                <option value="">Select a service</option>
                <option value="cleaning">Cleaning Services</option>
                <option value="renovation">Renovation</option>
                <option value="landscaping">Landscaping</option>
                <option value="other">Other</option>
              </select>
              {errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={5}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="Tell us about your project..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

