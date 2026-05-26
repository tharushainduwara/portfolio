import { ExternalLink, Github } from 'lucide-react'

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, category, icon, color, subtitle }) => {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/10">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl animate-float">{icon || '📁'}</div>
        <span className="text-[10px] font-['Space_Mono'] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400">
          {category}
        </span>
      </div>
      
      <div className={`w-8 h-0.5 rounded mb-3 opacity-70`} style={{ background: color || '#a78bfa' }} />
      
      <h3 className="font-['Syne'] font-bold text-xl text-white mb-1 group-hover:text-purple-400 transition">
        {title}
      </h3>
      
      {subtitle && (
        <div className="text-xs font-['Space_Mono'] text-gray-500 mb-3">{subtitle}</div>
      )}
      
      <p className="text-sm text-gray-400 leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, idx) => (
          <span key={idx} className="text-[10px] font-['Space_Mono'] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-xs font-['Space_Mono'] text-purple-400 border border-purple-400/30 px-3 py-1 rounded-md hover:bg-purple-400/10 transition">
            GitHub ↗
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-xs font-['Space_Mono'] text-purple-400 border border-purple-400/30 px-3 py-1 rounded-md hover:bg-purple-400/10 transition">
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard