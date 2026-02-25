export const metadata = {
  title: 'Events - West Shores',
  description: 'Community events at West Shores',
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      date: '2024-06-15',
      title: 'Community BBQ',
      time: '5:00 PM - 8:00 PM',
      location: 'Clubhouse Pavilion',
      description: 'Join us for our annual summer kickoff BBQ! Burgers, hot dogs, and refreshments provided. Bring a side dish to share.',
      category: 'Social',
    },
    {
      date: '2024-06-22',
      title: 'Pool Party & Movie Night',
      time: '7:00 PM - 10:00 PM',
      location: 'Community Pool',
      description: 'Family-friendly pool party followed by a movie screening on our outdoor screen.',
      category: 'Family',
    },
    {
      date: '2024-07-04',
      title: 'Fourth of July Celebration',
      time: '6:00 PM - 10:00 PM',
      location: 'Lakefront Beach',
      description: 'Celebrate Independence Day with live music, food trucks, and a spectacular fireworks display over the lake.',
      category: 'Holiday',
    },
    {
      date: '2024-07-13',
      title: 'Fishing Derby',
      time: '7:00 AM - 12:00 PM',
      location: 'Community Dock',
      description: 'Annual kids fishing derby with prizes for biggest catch, most fish, and more. Registration required.',
      category: 'Recreation',
    },
    {
      date: '2024-08-03',
      title: 'Community Garage Sale',
      time: '7:00 AM - 2:00 PM',
      location: 'Community Wide',
      description: 'Annual community-wide garage sale. Sign up to participate and map will be distributed to shoppers.',
      category: 'Community',
    },
    {
      date: '2024-08-17',
      title: 'Back to School Block Party',
      time: '5:00 PM - 8:00 PM',
      location: 'Clubhouse',
      description: 'Celebrate the new school year with games, activities, and ice cream social.',
      category: 'Family',
    },
  ];

  const pastEvents = [
    {
      date: '2024-05-25',
      title: 'Memorial Day Pool Opening',
      description: 'Official pool opening for summer season with free hot dogs and refreshments.',
    },
    {
      date: '2024-04-20',
      title: 'Spring Clean-Up Day',
      description: 'Community volunteers helped spruce up common areas and trails.',
    },
    {
      date: '2024-03-15',
      title: 'St. Patrick\'s Day Social',
      description: 'Irish-themed potluck dinner and entertainment at the clubhouse.',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Events</h1>
        <p className="text-xl text-gray-600 mb-12">
          Stay connected with your neighbors through our year-round calendar of community events and activities.
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary-600 text-white px-4 py-3 rounded-lg text-center">
                      <p className="text-sm font-bold uppercase">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </p>
                      <p className="text-3xl font-bold">{new Date(event.date).getDate()}</p>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {event.category}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {event.location}
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <p className="text-sm text-primary-600 font-semibold mb-2">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Host an Event?</h2>
          <p className="text-gray-600 mb-6">
            Interested in organizing a community event or reserving the clubhouse for a gathering? 
            Contact our events committee to get started.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            Contact Events Committee
          </a>
        </div>
      </div>
    </div>
  );
}
