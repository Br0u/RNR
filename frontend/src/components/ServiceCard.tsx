import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
  link?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  imageUrl,
  link = "/services",
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border border-gray-100">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden bg-gray-200">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        {icon && !imageUrl && (
          <div className="text-4xl mb-4 text-blue-600">{icon}</div>
        )}
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
