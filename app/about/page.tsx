export const metadata = {
  title: 'About - West Shores',
  description: 'Learn about the West Shores community',
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About West Shores</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Community</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              West Shores is a premier lakeside community offering residents an exceptional quality of life 
              with world-class amenities and beautiful natural surroundings. Established in 1998, our community 
              has grown into a vibrant neighborhood of families and individuals who value both tranquility and 
              active community engagement.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our 500-acre development features lakefront properties, wooded lots, and open spaces designed 
              to preserve the natural beauty of the area while providing modern conveniences and recreational 
              opportunities for all residents.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission & Values</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The West Shores Homeowners Association is committed to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Maintaining property values through consistent community standards</li>
              <li>Fostering a friendly and inclusive neighborhood atmosphere</li>
              <li>Providing exceptional amenities and services to all residents</li>
              <li>Preserving the natural environment and lakefront areas</li>
              <li>Ensuring transparent communication and governance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-1">Sarah Johnson</h3>
                <p className="text-sm text-gray-600 mb-2">President</p>
                <p className="text-sm text-gray-600">
                  Sarah has been a West Shores resident since 2010 and brings 15 years of property management 
                  experience to the board.
                </p>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-1">Michael Chen</h3>
                <p className="text-sm text-gray-600 mb-2">Vice President</p>
                <p className="text-sm text-gray-600">
                  Michael is a retired civil engineer with a passion for community development and infrastructure 
                  planning.
                </p>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-1">Jennifer Martinez</h3>
                <p className="text-sm text-gray-600 mb-2">Treasurer</p>
                <p className="text-sm text-gray-600">
                  Jennifer is a certified public accountant who ensures the community's financial health and 
                  transparency.
                </p>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-1">David Thompson</h3>
                <p className="text-sm text-gray-600 mb-2">Secretary</p>
                <p className="text-sm text-gray-600">
                  David manages community communications and maintains records for the association.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact the Board</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Board of Directors meets on the first Tuesday of every month at 7:00 PM in the clubhouse. 
              All residents are welcome to attend.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For questions or concerns, please email us at{' '}
              <a href="mailto:board@westshoreslake.com" className="text-primary-600 hover:text-primary-700">
                board@westshoreslake.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
