export default function EventsCalendar() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">HOA Sponsored and Social Committee Events</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg text-gray-700">
            You must be logged in to the website to see the calendar.
          </p>
          
          <p className="text-lg text-gray-700">
            Click on any calendar entry to learn more about it.
          </p>
          
          <p className="text-lg text-gray-700">
            Do you have an event to add to our calendar? Contact us so we can make sure it&apos;s included.
          </p>
          
          <p className="text-lg">
            <strong>
              <a href="mailto:hoaboard@westshoreslake.com" className="text-blue-600 hover:text-blue-800">
                hoaboard@westshoreslake.com
              </a>
            </strong>
          </p>
          
          <p className="text-lg text-gray-700">
            Click{' '}
            <a href="/past-events" className="text-blue-600 hover:text-blue-800 font-semibold">
              here
            </a>
            {' '}to view past event details.
          </p>
          
          <div className="bg-gray-100 p-8 rounded-lg mt-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">West Shores Calendar</h4>
            <p className="text-gray-600">Calendar widget would appear here for logged-in users</p>
          </div>
        </div>
      </div>
    </div>
  )
}