const Home = () => {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(167,139,250,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.04)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      
      {/* Gradient Blobs */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-[15%] left-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-green-500/8 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="glow-dot" />
          <span className="text-xs font-['Space_Mono'] text-gray-400">Available for internship & entry-level roles</span>
        </div>

        <h1 className="font-['Syne'] font-extrabold text-[clamp(42px,7vw,80px)] leading-none text-white tracking-tighter mb-4">
          K.D. Tharusha<br />
          <span className="bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradShift_4s_ease_infinite]">
            Iduwara
          </span>
        </h1>

        <p className="text-lg text-gray-400 max-w-[560px] leading-relaxed mb-8 font-light">
          Full-stack developer & mobile app enthusiast. Building practical, user-focused digital experiences.
        </p>

        <div className="flex gap-3 flex-wrap mb-12">
          <a href="#contact" className="bg-purple-500 text-black px-6 py-3 rounded-lg font-['Space_Mono'] text-sm font-bold hover:bg-purple-400 transition">
            Get in touch →
          </a>
          <a href="https://github.com/tharushainduwara" target="_blank" rel="noreferrer" className="border border-white/15 text-gray-300 px-6 py-3 rounded-lg font-['Space_Mono'] text-sm hover:border-white/30 hover:bg-white/5 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/tharusha-iduwara" target="_blank" rel="noreferrer" className="border border-white/15 text-gray-300 px-6 py-3 rounded-lg font-['Space_Mono'] text-sm hover:border-white/30 hover:bg-white/5 transition">
            LinkedIn
          </a>
        </div>

        <div className="flex gap-10 flex-wrap">
          {[["6+", "Projects Built"], ["3+", "Tech Stacks"], ["2026", "Expected Graduate"]].map(([num, label]) => (
            <div key={label}>
              <div className="font-['Syne'] text-3xl font-bold text-white">{num}</div>
              <div className="text-xs font-['Space_Mono'] text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home