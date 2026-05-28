import { Award, BookOpen, Users, Code2, Download, FileText, ArrowRight, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const Resume = () => {
  const [downloaded, setDownloaded] = useState(false)

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Tharusha Iduwara CV.pdf';
    link.download = 'Tharusha Iduwara CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 3000)
  }

  const certifications = [
    { name: "Flutter Mobile Application Development", issuer: "zero2lab Institute", url: "https://www.zero2lab.com/certificates/679f953283c05c220eeda2f1" },
    { name: "Computer Hardware Technician (NVQ Level 3)", issuer: "Department of Industries" },
    { name: "Certificate in Computer Application", issuer: "Kalutara Zonal Computer Research Center" },
  ]

  const experiences = [
    {
      role: "Head of Social Media Managing & Editor",
      org: "Heart of Agni Media Unit — SEUSL",
      period: "2026 – Present",
      desc: "Leading social media strategy, content planning, and digital media creation for faculty events.",
    },
    {
      role: "Media Person",
      org: "13th International Symposium — SEUSL",
      period: "2025",
      desc: "Supported videography and full media coverage for an international academic symposium.",
    },
  ]

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Sinhala", level: "Native" }
  ]

  return (
    <section id="experience" className="py-24 bg-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-purple-400" />
              <div className="section-label">Credentials</div>
            </div>
            <h2 className="section-title" style={{ marginBottom: 32 }}>Certifications</h2>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-[3px] border-l-purple-400">
                  <div className="font-medium text-white text-sm mb-1">{cert.name}</div>
                  <div className="text-xs font-['Space_Mono'] text-gray-500 mb-2">{cert.issuer}</div>
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noreferrer" className="text-xs text-purple-400 border border-purple-400/30 px-3 py-1 rounded-md inline-block hover:bg-purple-400/10 transition">
                      View Certificate ↗
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <div className="font-['Space_Mono'] text-xs text-purple-400 uppercase tracking-wider">Languages</div>
              </div>
              <div className="space-y-2">
                {languages.map(lang => (
                  <div key={lang.name} className="flex justify-between text-sm">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-gray-500 font-['Space_Mono']">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-purple-400" />
              <div className="section-label">Activities</div>
            </div>
            <h2 className="section-title" style={{ marginBottom: 32 }}>Leadership</h2>

            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-[3px] border-l-green-400">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                    <div className="font-medium text-white text-sm">{exp.role}</div>
                    <span className="text-[10px] font-['Space_Mono'] text-green-400 bg-green-400/10 px-2 py-0.5 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-['Space_Mono'] text-gray-500 mb-2">{exp.org}</div>
                  <p className="text-sm text-gray-400 leading-relaxed">{exp.desc}</p>
                </div>
              ))}

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 border-l-[3px] border-l-yellow-400">
                <div className="font-medium text-white text-sm mb-1">Photography & Videography</div>
                <div className="text-xs font-['Space_Mono'] text-gray-500 mb-2">Content Creation</div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Editing and digital content creation for online platforms including social media and event coverage.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-purple-500/20 to-green-500/20 border border-purple-400/30 rounded-xl p-6 text-center">
              <Code2 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="font-['Syne'] font-bold text-white text-xl mb-2">Tools & Technologies</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Git", "GitHub", "VS Code", "Visual Studio", "Adobe Illustrator", "Figma", "Postman", "Firebase", "MongoDB Atlas"].map(tool => (
                  <span key={tool} className="text-xs font-['Space_Mono'] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Banner */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-green-500/5 border border-purple-400/20 rounded-2xl p-8 flex items-center gap-6 flex-wrap">
          <div className="text-5xl">🎓</div>
          <div>
            <div className="font-['Space_Mono'] text-xs text-purple-400 uppercase tracking-wider mb-2">Education</div>
            <div className="font-['Syne'] font-bold text-xl text-white mb-1">BSc in Management & Information Technology</div>
            <div className="text-sm text-gray-400">South Eastern University of Sri Lanka · Final Year Undergraduate</div>
          </div>
        </div>

        {/* Large Download Section at Bottom */}
        <div className="mt-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-2 border-purple-400/40 rounded-2xl p-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
            <Download className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Ready to see my full profile?</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Download my complete CV for a detailed look at my skills, experience, and achievements.
          </p>
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all group text-lg"
          >
            {downloaded ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Downloaded Successfully!
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Download CV (PDF)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          <p className="text-xs text-gray-500 mt-4">PDF format · 1 page · Updated 2026</p>
        </div>
      </div>
    </section>
  )
}

export default Resume