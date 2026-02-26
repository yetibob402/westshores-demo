export default function History() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">History</h1>
        
        <div className="prose prose-lg max-w-none">
          {/* History images - these will need to be downloaded from the original site */}
          <div className="mb-8 space-y-6">
            <img 
              src="/images/history-1.jpg" 
              alt="West Shores History" 
              className="w-full rounded-lg shadow-lg"
            />
            <img 
              src="/images/history-2.jpg" 
              alt="West Shores Development" 
              className="w-full rounded-lg shadow-lg"
            />
            <img 
              src="/images/history-3.jpg" 
              alt="West Shores Lake" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="mt-8">
            <a 
              href="https://www.westshoreslake.com/File/Get/d010dd3c-2dd3-4a2c-84b3-5c2b105c8bfa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Additional West Shores development history...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}