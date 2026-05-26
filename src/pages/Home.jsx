const Home = () => {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(167,139,250,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.04)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div>
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

          {/* Right Content - Photo (No Gradient Ring) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main photo container */}
              <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-2 backdrop-blur-sm">
                <div className="relative rounded-xl overflow-hidden">
                  {/* Replace this path with your actual photo path */}
                  <img 
                    src="/profile.jpg"  /* ← CHANGE THIS TO YOUR PHOTO PATH */
                    alt="Tharusha Iduwara"
                    className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://ui-avatars.com/api/?name=Tharusha+Iduwara&background=8B5CF6&color=fff&size=400&rounded=true&bold=true";
                    }}
                  />
                  
                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-500/20 rounded-full blur-xl" />
              </div>
              
              {/* Status badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1.5 shadow-lg">
                <div className="bg-black/80 rounded-full px-3 py-1">
                  <div className="flex items-center gap-1.5">
                    <span className="glow-dot w-2 h-2" />
                    <span className="text-[10px] font-['Space_Mono'] text-white">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home