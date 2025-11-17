const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                About RNR Build
              </h1>
              <p className="text-gray-600 text-lg">
                Your trusted partner for quality construction and maintenance services
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                RNR Build is a professional construction and maintenance company
                dedicated to providing exceptional service to our clients. With years
                of experience in the industry, we have built a reputation for
                reliability, quality workmanship, and customer satisfaction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We specialize in a wide range of services including cleaning,
                renovation, and landscaping. Our team of skilled professionals is
                committed to delivering results that exceed expectations, whether
                you're looking to renovate your home, maintain your office space, or
                create a beautiful outdoor environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our mission is to provide high-quality construction and maintenance
                services that transform spaces and exceed client expectations. We
                believe in building lasting relationships with our clients through
                transparency, professionalism, and exceptional service.
              </p>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
                Why Choose Us
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>
                    Experienced and skilled professionals committed to excellence
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Eco-friendly products and sustainable practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Competitive pricing with transparent quotes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Timely project completion and reliable service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Comprehensive services from design to execution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

