interface TestimonialCardProps {
  name: string;
  role?: string;
  content: string;
  rating?: number;
  avatar?: string;
}

const TestimonialCard = ({
  name,
  role,
  content,
  rating = 5,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center mb-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
      <div className="mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`text-yellow-400 text-xl ${
              index < rating ? 'opacity-100' : 'opacity-30'
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-600 italic">"{content}"</p>
    </div>
  );
};

export default TestimonialCard;

