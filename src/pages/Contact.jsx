import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("tharushaiduwara1234@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <div className="section-label text-center">Get in touch</div>
          <h2 className="section-title text-center" style={{ marginBottom: 16 }}>Let's work together</h2>
          <p className="text-gray-400 leading-relaxed mb-10">
            I'm actively looking for internship and entry-level opportunities in web and mobile development. Feel free to reach out!
          </p>

          <div className="flex gap-3 justify-center flex-wrap mb-8">
            <button onClick={copyEmail} className="bg-purple-500 text-black px-6 py-3 rounded-lg font-['Space_Mono'] text-sm font-bold hover:bg-purple-400 transition">
              {copied ? "✓ Copied!" : "📧 tharushaiduwara1234@gmail.com"}
            </button>
            <a href="tel:+94705321114" className="border border-white/15 text-gray-300 px-6 py-3 rounded-lg font-['Space_Mono'] text-sm hover:border-white/30 hover:bg-white/5 transition">
              📞 +94 705 321 114
            </a>
          </div>

          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com/tharushainduwara" target="_blank" className="text-gray-500 hover:text-purple-400 transition text-sm font-['Space_Mono']">GitHub ↗</a>
            <a href="https://linkedin.com/in/tharusha-iduwara" target="_blank" className="text-gray-500 hover:text-purple-400 transition text-sm font-['Space_Mono']">LinkedIn ↗</a>
            <span className="text-gray-500 text-sm font-['Space_Mono']">Wadduwa, Sri Lanka</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact