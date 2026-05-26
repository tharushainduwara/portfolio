const Home = () => {
  const handleDownloadCV = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = '/K.D.T Iduwara.pdf';  // Make sure your PDF is in the public folder
    link.download = 'K.D.T Iduwara.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              
              {/* Download CV Button */}
              <button 
                onClick={handleDownloadCV}
                className="border border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-['Space_Mono'] text-sm font-bold hover:bg-purple-500/10 hover:border-purple-400 transition flex items-center gap-2"
              >
                📄 Download CV
              </button>
              
              <a href="https://github.com/tharushainduwara" target="_blank" rel="noreferrer" className="border border-white/15 text-gray-300 px-6 py-3 rounded-lg font-['Space_Mono'] text-sm hover:border-white/30 hover:bg-white/5 transition">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/tharusha-iduwara-4aa46b3a4" target="_blank" rel="noreferrer" className="border border-white/15 text-gray-300 px-6 py-3 rounded-lg font-['Space_Mono'] text-sm hover:border-white/30 hover:bg-white/5 transition">
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

          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated gradient ring around photo */}
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 rounded-full opacity-70 group-hover:opacity-100 blur-md transition duration-500 group-hover:duration-200" />
              
              {/* Main photo container */}
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