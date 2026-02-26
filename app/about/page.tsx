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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2025 Board of Directors</h2>
            <p className="text-gray-600 mb-6">
              Your Board members volunteer their time and talents to help make our organization its best. 
              We're always interested in hearing your opinions and answering your questions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-1">Carl Bortol</h3>
                <p className="text-sm text-gray-600">President</p>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-1">Janet Pol</h3>
                <p className="text-sm text-gray-600">Treasurer</p>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-1">Don Hansen</h3>
                <p className="text-sm text-gray-600">Secretary</p>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-1">Ray Fehringer</h3>
                <p className="text-sm text-gray-600">Board Member</p>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-1">Jana Wheatley-Renault</h3>
                <p className="text-sm text-gray-600">Board Member</p>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-1">Chris Tow</h3>
                <p className="text-sm text-gray-600">Board Member</p>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-700 mb-1">Karoly Mirnics</h3>
                <p className="text-sm text-gray-600">Board Member</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact the Board</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions or concerns, please email us at{' '}
              <a href="mailto:hoaboard@westshoreslake.com" className="text-primary-600 hover:text-primary-700">
                hoaboard@westshoreslake.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
