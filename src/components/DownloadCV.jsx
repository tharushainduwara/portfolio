import { Download, FileText, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const DownloadCV = ({ variant = 'default' }) => {
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/K.D.T Iduwara.pdf';
    link.download = 'K.D.T Iduwara.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 2000)
  }

  if (variant === 'button') {
    return (
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 text-black text-sm font-bold hover:bg-purple-400 transition"
      >
        {downloaded ? <CheckCircle className="w-4 h-4" /> : <Download className="w-4 h-4" />}
        {downloaded ? 'Downloaded!' : 'Download CV'}
      </button>
    )
  }

  if (variant === 'outline') {
    return (
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/50 text-purple-400 text-sm font-medium hover:bg-purple-500/10 transition"
      >
        <Download className="w-4 h-4" />
        Download CV
      </button>
    )
  }

  if (variant === 'card') {
    return (
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-6 text-center">
        <FileText className="w-12 h-12 text-purple-400 mx-auto mb-3" />
        <h3 className="text-xl font-semibold text-white mb-2">Download My Resume</h3>
        <p className="text-gray-400 text-sm mb-4">Complete CV with detailed experience and skills</p>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg transition-all"
        >
          {downloaded ? <CheckCircle className="w-4 h-4" /> : <Download className="w-4 h-4" />}
          {downloaded ? 'Downloaded!' : 'Download PDF'}
        </button>
      </div>
    )
  }

  // Default variant
  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
    >
      <Download className="w-4 h-4" />
      Download CV
    </button>
  )
}

export default DownloadCV