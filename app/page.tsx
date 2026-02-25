export default function Home() {
  const announcements = [
    {
      id: 1,
      title: 'Pool Opening for Summer Season',
      date: 'May 15, 2024',
      content: 'The community pool will be opening for the summer season on Memorial Day weekend. Pool passes are now available for pickup at the clubhouse.',
    },
    {
      id: 2,
      title: 'Annual HOA Meeting Reminder',
      date: 'April 20, 2024',
      content: 'Please mark your calendars for our annual HOA meeting on Saturday, June 1st at 2:00 PM in the clubhouse. All homeowners are encouraged to attend.',
    },
    {
      id: 3,
      title: 'New Landscaping Project',
      date: 'April 10, 2024',
      content: 'Work has begun on the community entrance landscaping project. Expect some minor delays at the main entrance over the next two weeks.',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community BBQ',
      date: 'June 15, 2024',
      time: '5:00 PM - 8:00 PM',
      location: 'Clubhouse Pavilion',
    },
    {
      id: 2,
      title: 'Movie Night at the Pool',
      date: 'July 4, 2024',
      time: '8:00 PM',
      location: 'Community Pool',
    },
    {
      id: 3,
      title: 'Annual Garage Sale',
      date: 'August 3, 2024',
      time: '7:00 AM - 2:00 PM',
      location: 'Community Wide',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Welcome to West Shores</h1>
            <p className="text-xl mb-8">
              Experience lakeside living at its finest. Our community offers world-class amenities, 
              beautiful natural surroundings, and a vibrant neighborhood atmosphere.
            </p>
            <a
              href="/about"
              className="inline-block bg-white text-primary-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Community Announcements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <p className="text-sm text-primary-600 font-semibold mb-2">{announcement.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{announcement.title}</h3>
                <p className="text-gray-600">{announcement.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white border-2 border-primary-200 rounded-lg p-6 hover:border-primary-400 transition">
                <div className="flex items-start mb-4">
                  <div className="bg-primary-600 text-white px-3 py-2 rounded-lg mr-4">
                    <p className="text-sm font-bold">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</p>
                    <p className="text-2xl font-bold">{new Date(event.date).getDate()}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.time}</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  <svg className="inline w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/events"
              className="inline-block bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition"
            >
              View All Events
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Our Community</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="/amenities" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Amenities</h3>
            </a>
            
            <a href="/documents" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Documents</h3>
            </a>
            
            <a href="/events" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Events</h3>
            </a>
            
            <a href="/contact" className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Contact</h3>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
