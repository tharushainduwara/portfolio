import { useState } from 'react'
import { ExternalLink, Github, Code2, Sparkles, Star } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: "Beauty Shop",
      subtitle: "MERN Stack E-commerce Platform",
      description: "Full-stack cosmetics e-commerce platform with advanced product management, secure authentication, and seamless payment processing.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      githubLink: "https://github.com/tharushainduwara/cosmetic-site-frontend",
      category: "Web",
      icon: "🛍️",
      gradient: "from-pink-500 to-rose-500",
      featured: true
    },
    {
      title: "MovieFlix",
      subtitle: "Movie Discovery Platform",
      description: "Feature-rich movie browsing platform with advanced filtering, user watchlists, and comprehensive admin dashboard.",
      techStack: ["PHP", "MySQL", "JavaScript", "Tailwind"],
      githubLink: "https://github.com/tharushainduwara/movieflix-website",
      category: "Web",
      icon: "🎬",
      gradient: "from-blue-500 to-cyan-500",
      featured: false
    },
    {
      title: "CoffeeStore",
      subtitle: "Inventory Management System",
      description: "Enterprise-grade inventory management system with role-based access, real-time tracking, and automated reporting.",
      techStack: ["C#", ".NET", "SQL Server", "WinForms"],
      githubLink: "https://github.com/tharushainduwara/coffee-store-inventory-management-system",
      category: "Desktop",
      icon: "☕",
      gradient: "from-amber-500 to-orange-500",
      featured: false
    },
    {
      title: "Student Details",
      subtitle: "CRUD Application",
      description: "Comprehensive student management system with full CRUD operations and advanced search capabilities.",
      techStack: ["C#", ".NET", "SQL Server", "WinForms"],
      githubLink: "https://github.com/tharushainduwara/student-personal-details-form",
      category: "Desktop",
      icon: "🎓",
      gradient: "from-emerald-500 to-teal-500",
      featured: false
    },
    {
      title: "Cocktail Recipes",
      subtitle: "Mobile Recipe App",
      description: "Feature-rich cocktail discovery app with search, favorites, and offline support using local storage.",
      techStack: ["Flutter", "Dart", "REST API", "SharedPreferences"],
      githubLink: "https://github.com/tharushainduwara/cocktail-recipe-app",
      category: "Mobile",
      icon: "🍹",
      gradient: "from-purple-500 to-indigo-500",
      featured: true
    },
    {
      title: "Note Handler",
      subtitle: "Smart Notes App",
      description: "Full-featured notes application with cloud sync, rich text editing, and real-time updates.",
      techStack: ["Flutter", "Dart", "REST API", "Provider"],
      githubLink: "https://github.com/tharushainduwara/note-handling-app",
      category: "Mobile",
      icon: "📝",
      gradient: "from-yellow-500 to-orange-500",
      featured: false
    }
  ]

  const filterTypes = ['All', 'Web', 'Mobile', 'Desktop']
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 via-transparent to-transparent" />
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label text-center">My Portfolio</div>
          <h2 className="section-title mb-6">Featured Projects</h2>
          <p className="text-gray-400 leading-relaxed">
            Here are some of my best works. Each project represents a unique challenge 
            and an opportunity to create something meaningful.
          </p>
        </div>

        {/* Featured Projects Carousel Style */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative glass rounded-2xl overflow-hidden hover-glow transition-all duration-500"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl animate-float">{project.icon}</div>
                  {project.featured && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{project.subtitle}</p>
                <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          {filterTypes.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-['Space_Grotesk'] transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <div 
              key={idx} 
              className="group glass rounded-xl p-6 hover-glow transition-all duration-300 animate-scale"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{project.icon}</div>
                <Code2 className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-gray-500 mb-3">{project.subtitle}</p>
              <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 3).map(tech => (
                  <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-500">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects