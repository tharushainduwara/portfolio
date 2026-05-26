import { useState, useEffect } from 'react'
import { Menu, X, Code2, Sparkles } from 'lucide-react'

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#05050A]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="container-custom py-4 md:py-5">
          <div className="flex justify-between items-center">
            <a 
              href="#about" 
              onClick={(e) => handleClick(e, '#about')}
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-500" />
              <div className="relative flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition duration-300" />
                <span className="font-['Space_Grotesk'] font-bold text-xl tracking-tight">
                  <span className="text-white">Tharusha</span>
                  <span className="gradient-text">.</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === link.name.toLowerCase()
                      ? 'text-purple-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeSection === link.name.toLowerCase() && (
                    <span className="absolute inset-0 bg-purple-500/10 rounded-lg" />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Hire Me Button */}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="hidden md:block px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-white/10 animate-fade-up">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`block py-3 text-sm font-medium transition-colors ${
                    activeSection === link.name.toLowerCase()
                      ? 'text-purple-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="block mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium text-center"
              >
                Hire Me
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar