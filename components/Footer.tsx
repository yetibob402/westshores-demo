export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">West Shores</h3>
            <p className="text-gray-400">
              A premier lakeside community offering exceptional amenities and quality of life.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/amenities" className="hover:text-white">Amenities</a></li>
              <li><a href="/events" className="hover:text-white">Events</a></li>
              <li><a href="/documents" className="hover:text-white">Documents</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>West Shores Association</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@westshoreslake.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} West Shores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
