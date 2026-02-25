export const metadata = {
  title: 'Documents - West Shores',
  description: 'Community documents and resources',
};

export default function DocumentsPage() {
  const documents = [
    {
      category: 'Governing Documents',
      files: [
        { name: 'CC&Rs (Covenants, Conditions & Restrictions)', date: 'Updated Jan 2024', size: '2.4 MB' },
        { name: 'Bylaws', date: 'Updated Jan 2024', size: '856 KB' },
        { name: 'Articles of Incorporation', date: 'Original 1998', size: '412 KB' },
      ],
    },
    {
      category: 'Architectural Guidelines',
      files: [
        { name: 'Architectural Review Guidelines', date: 'Updated Mar 2024', size: '1.2 MB' },
        { name: 'Landscaping Standards', date: 'Updated Mar 2024', size: '985 KB' },
        { name: 'Exterior Paint Color Palette', date: 'Updated Mar 2024', size: '3.1 MB' },
        { name: 'Fence & Deck Guidelines', date: 'Updated Mar 2024', size: '728 KB' },
      ],
    },
    {
      category: 'HOA Forms',
      files: [
        { name: 'Architectural Review Request Form', date: 'Form', size: '245 KB' },
        { name: 'Amenity Reservation Form', date: 'Form', size: '189 KB' },
        { name: 'Vehicle Registration Form', date: 'Form', size: '156 KB' },
        { name: 'Violation Appeal Form', date: 'Form', size: '203 KB' },
      ],
    },
    {
      category: 'Financial Documents',
      files: [
        { name: '2024 Annual Budget', date: 'Jan 2024', size: '678 KB' },
        { name: '2023 Financial Report', date: 'Dec 2023', size: '892 KB' },
        { name: 'Reserve Study Summary', date: 'Nov 2023', size: '1.5 MB' },
      ],
    },
    {
      category: 'Meeting Minutes',
      files: [
        { name: 'Board Meeting Minutes - April 2024', date: 'Apr 2024', size: '234 KB' },
        { name: 'Board Meeting Minutes - March 2024', date: 'Mar 2024', size: '198 KB' },
        { name: 'Board Meeting Minutes - February 2024', date: 'Feb 2024', size: '215 KB' },
        { name: 'Annual Meeting Minutes - January 2024', date: 'Jan 2024', size: '456 KB' },
      ],
    },
    {
      category: 'Community Resources',
      files: [
        { name: 'Community Directory', date: 'Updated Apr 2024', size: '1.8 MB' },
        { name: 'Amenity Rules & Hours', date: 'Updated May 2024', size: '345 KB' },
        { name: 'Emergency Contact Information', date: 'Updated Jan 2024', size: '189 KB' },
        { name: 'Community Map', date: 'Updated 2024', size: '2.3 MB' },
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Documents</h1>
        <p className="text-xl text-gray-600 mb-12">
          Access important community documents, forms, and resources all in one place.
        </p>

        <div className="space-y-8">
          {documents.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold">{category.category}</h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {category.files.map((file, fileIndex) => (
                    <div
                      key={fileIndex}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex items-center gap-4">
                        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <h3 className="font-semibold text-gray-900">{file.name}</h3>
                          <p className="text-sm text-gray-500">
                            {file.date} • {file.size}
                          </p>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Document Request</h2>
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? Some documents may require board approval before access is granted. 
            Contact the HOA office to request specific documents.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            Contact HOA Office
          </a>
        </div>
      </div>
    </div>
  );
}
