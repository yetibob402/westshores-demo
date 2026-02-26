import Image from "next/image";
import Link from "next/link";

export default function BoatingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/boating-hero.jpg"
          alt="West Shores Lake boating"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Boating</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lake Rules and Regulations</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="font-semibold text-lg mb-2">Important Documents:</p>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.westshoreslake.com/File/Get/84aad5f8-cab0-4586-af76-feb64f55dc78" 
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lake Rules (PDF)
                </a>
              </li>
              <li>
                <a 
                  href="https://www.westshoreslake.com/File/Get/ff1a3cd8-b5c4-408d-a4bc-9ef18b355148" 
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Covenants (PDF)
                </a>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Allowed Motors</h3>
          <p className="mb-4">The following motor types are permitted on West Shores Lake:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Inboard motors</strong></li>
            <li><strong>Inboard/Outboard motors</strong></li>
            <li><strong>Outboard motors</strong></li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prohibited Watercraft</h3>
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
            <p className="font-semibold mb-2">The following are NOT allowed:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Jet skis</li>
              <li>Wave Runners</li>
              <li>Air boats</li>
              <li>Above-water exhaust systems</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Boat Specifications</h3>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Pontoons</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Maximum length: <strong>26 feet</strong></li>
                <li>Maximum horsepower: <strong>150 HP</strong></li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Inboard/Outboard/Deck Boats</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Maximum length: <strong>23 feet</strong></li>
                <li>Maximum horsepower: <strong>450 HP</strong></li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Sailboats</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Maximum length: <strong>22 feet</strong></li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Boat Dock Regulations</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Boat docks may extend a maximum of <strong>40 feet</strong> from the shoreline</li>
            <li>All docks must comply with lot boundary regulations</li>
            <li>See map below for dock extension limits and lot numbers</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Distance Rules</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li>
                <strong>Standard distance from shore:</strong> 90 feet
              </li>
              <li>
                <strong>Maximum dock edge distance:</strong> 130 feet from shoreline (90' + 40' dock extension)
              </li>
              <li>
                <strong>Wake-enhancing boats:</strong> Must maintain 165 feet from shore when wake enhancement is active
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wake Enhancement Rules</h3>
          <p className="mb-4">
            Boats equipped with wake enhancement systems (ballast tanks, surf systems, etc.) must:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Maintain a minimum distance of 165 feet from shore when wake enhancement is active</li>
            <li>Operate responsibly to minimize impact on other watercraft and docks</li>
            <li>Comply with all posted speed and no-wake zones</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dock Extension Map</h3>
          <p className="mb-4">
            The map below shows dock extension limits and lot numbers around the lake:
          </p>
          
          <div className="my-8 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-4 text-center text-gray-600">
              <p className="text-sm italic">Map showing dock limits and lot numbers</p>
              <p className="text-xs mt-1">(Contact HOA office for detailed dock placement information)</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mt-8">
            <p className="font-semibold mb-2">⚠️ Important:</p>
            <p>
              All boat owners must review and comply with the complete Lake Rules and Covenants documents linked above. 
              This page provides a summary only. For complete regulations, permit requirements, and enforcement policies, 
              please consult the official documents.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
