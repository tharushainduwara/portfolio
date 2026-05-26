import { Code2, Database, Layout, Smartphone, Sparkles, Target } from 'lucide-react'

const About = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: ["React", "Tailwind CSS", "JavaScript", "HTML5/CSS3"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "PHP", "Express.js", "C#/.NET"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Firebase", "Supabase"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Technologies",
      icon: Code2,
      skills: ["Git", "MongoDB", "MySQL", "REST APIs"],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label text-center">What I Do</div>
          <h2 className="section-title mb-6">Crafting Digital Solutions</h2>
          <p className="text-gray-400 leading-relaxed">
            I'm a passionate developer with a focus on creating beautiful, functional, 
            and user-centric applications. My goal is to bring ideas to life through clean code and innovative design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="group glass rounded-2xl p-6 hover-glow transition-all duration-500 animate-scale"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-purple-500 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Highlight */}
        <div className="mt-12 glass rounded-2xl p-8 animate-scale" style={{ animationDelay: '600ms' }}>
          <div className="flex items-start gap-6 flex-wrap md:flex-nowrap">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-sm text-purple-400 font-['Space_Grotesk'] tracking-wider mb-2">EDUCATION</div>
              <h3 className="text-xl font-semibold text-white mb-2">BSc in Management & Information Technology</h3>
              <p className="text-gray-400">South Eastern University of Sri Lanka · 2023 - Present · Final Year Undergraduate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About