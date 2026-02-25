export const metadata = {
  title: 'Amenities - West Shores',
  description: 'Explore the amenities at West Shores',
};

export default function AmenitiesPage() {
  const amenities = [
    {
      name: 'Community Pool',
      description: 'Our Olympic-sized heated pool is open Memorial Day through Labor Day. Features include a zero-entry shallow end, lap lanes, and a separate diving area.',
      hours: 'Daily: 6:00 AM - 9:00 PM (Summer)',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
    },
    {
      name: 'Clubhouse',
      description: 'Our 5,000 sq ft clubhouse features meeting rooms, a commercial kitchen, and a large event hall perfect for community gatherings and private events.',
      hours: 'Mon-Fri: 9:00 AM - 9:00 PM, Sat-Sun: 8:00 AM - 10:00 PM',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Fitness Center',
      description: 'State-of-the-art fitness center with cardio equipment, free weights, and strength training machines. Personal training available by appointment.',
      hours: '24/7 Access with Key Card',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      name: 'Tennis Courts',
      description: 'Four professionally maintained tennis courts with night lighting. Courts are available on a first-come, first-served basis.',
      hours: 'Daily: 6:00 AM - 10:00 PM',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Lakefront Beach',
      description: 'Private beach area with designated swimming zones, picnic areas, and kayak/paddleboard storage. Lifeguard on duty during summer months.',
      hours: 'Dawn to Dusk (Lifeguard: 11:00 AM - 7:00 PM Summer)',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      name: 'Playground',
      description: 'Modern playground equipment suitable for ages 2-12, with rubber safety surfacing and shaded seating areas for parents.',
      hours: 'Dawn to Dusk',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Walking Trails',
      description: 'Over 3 miles of paved walking and biking trails throughout the community, featuring scenic lake views and wildlife observation areas.',
      hours: 'Open 24/7',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: 'Boat Launch',
      description: 'Private boat launch and dock facilities for residents. Boat slip rentals available on a seasonal basis.',
      hours: 'Dawn to Dusk',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Amenities</h1>
        <p className="text-xl text-gray-600 mb-12">
          West Shores offers a wide range of amenities designed to enhance your lifestyle and bring our community together.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-primary-600 mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{amenity.name}</h3>
              <p className="text-gray-600 mb-4">{amenity.description}</p>
              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-primary-700">Hours:</p>
                <p className="text-sm text-gray-600">{amenity.hours}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenity Reservations</h2>
          <p className="text-gray-600 mb-4">
            Some amenities are available for private reservations. Clubhouse event space, picnic pavilions, 
            and boat slips can be reserved through our online portal.
          </p>
          <button className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition">
            Reserve an Amenity
          </button>
        </div>
      </div>
    </div>
  );
}
