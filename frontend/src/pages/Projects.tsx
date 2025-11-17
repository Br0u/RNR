import ProjectGalleryGrid from '../components/ProjectGalleryGrid';
// import api from '../api/axios';

/**
 * Projects Page Component
 * 
 * Backend API Integration:
 * 
 * GET /api/projects
 * - Fetches all completed projects from database
 * - Response: { projects: Project[] }
 * - Project: {
 *     _id: string,
 *     title: string,
 *     category: 'cleaning' | 'renovation' | 'landscaping',
 *     images: string[],  // Array of image URLs
 *     description: string,
 *     createdAt: Date,
 *     updatedAt: Date
 *   }
 * 
 * Query Parameters (optional):
 * - ?category=cleaning - Filter by category
 * - ?limit=10 - Limit number of results
 * - ?page=1 - Pagination
 * 
 * Example API call (uncomment when backend is ready):
 * 
 * const [projects, setProjects] = useState([]);
 * const [loading, setLoading] = useState(true);
 * 
 * useEffect(() => {
 *   const fetchProjects = async () => {
 *     try {
 *       const response = await api.get('/api/projects');
 *       setProjects(response.data.projects);
 *     } catch (error) {
 *       console.error('Error fetching projects:', error);
 *     } finally {
 *       setLoading(false);
 *     }
 *   };
 *   fetchProjects();
 * }, []);
 * 
 * Then pass projects to ProjectGalleryGrid:
 * <ProjectGalleryGrid projects={projects} loading={loading} />
 */
const Projects = () => {
  // TODO: Add state for projects when backend is ready
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // TODO: Fetch projects from API when backend is ready
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const response = await api.get('/api/projects');
  //       setProjects(response.data.projects || []);
  //     } catch (err: any) {
  //       console.error('Error fetching projects:', err);
  //       setError('Failed to load projects. Please try again later.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchProjects();
  // }, []);

  return (
    <div className="min-h-screen">
      {/* TODO: Pass projects and loading state when backend is ready */}
      {/* <ProjectGalleryGrid projects={projects} loading={loading} /> */}
      <ProjectGalleryGrid />
    </div>
  );
};

export default Projects;

