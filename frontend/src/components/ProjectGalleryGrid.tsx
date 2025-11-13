interface Project {
  id: number;
  imageUrl: string;
  title: string;
  category: 'cleaning' | 'renovation' | 'landscaping';
}

interface ProjectGalleryGridProps {
  projects?: Project[];
}

const ProjectGalleryGrid = ({ projects }: ProjectGalleryGridProps) => {
  // Default projects if none provided
  const defaultProjects: Project[] = [
    {
      id: 1,
      imageUrl: '/images/projects/project1.jpg',
      title: 'Modern Kitchen Renovation',
      category: 'renovation',
    },
    {
      id: 2,
      imageUrl: '/images/projects/project2.jpg',
      title: 'Office Deep Cleaning',
      category: 'cleaning',
    },
    {
      id: 3,
      imageUrl: '/images/projects/project3.jpg',
      title: 'Garden Landscape Design',
      category: 'landscaping',
    },
    {
      id: 4,
      imageUrl: '/images/projects/project4.jpg',
      title: 'Bathroom Remodel',
      category: 'renovation',
    },
    {
      id: 5,
      imageUrl: '/images/projects/project5.jpg',
      title: 'Residential Cleaning',
      category: 'cleaning',
    },
    {
      id: 6,
      imageUrl: '/images/projects/project6.jpg',
      title: 'Outdoor Patio Design',
      category: 'landscaping',
    },
  ];

  const displayProjects = projects || defaultProjects;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cleaning':
        return 'bg-blue-500';
      case 'renovation':
        return 'bg-orange-500';
      case 'landscaping':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our portfolio of completed projects across different categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/400x300?text=Project+Image';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${getCategoryColor(
                      project.category
                    )}`}
                  >
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                  </span>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(
                    project.category
                  )}`}
                >
                  {project.category.charAt(0).toUpperCase() +
                    project.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGalleryGrid;

