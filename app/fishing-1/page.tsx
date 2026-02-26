export default function Fishing() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Fishing</h1>
        
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FISHING OVERVIEW</h3>
        
        <h5 className="text-xl font-semibold text-gray-800 mb-3">IMPORTANT UPDATES</h5>
        
        <p className="mb-4"><strong>05/09/2022:</strong> Electroshocking survey completed. Twelve species identified: game fish (largemouth bass, bluegill, white and black crappie, walleye, wiper and catfish) and rough fish (river carpsucker, buffalo, long & short nosed gar, common carp and gizzard shad).</p>
        
        <p className="mb-4"><strong>12/20/2020:</strong> Revised walleye limit of 2 day / 4 possession per lot in the 15&quot; to 19&quot; slot. Catch and release all walleye above or below the slot.</p>

        <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">FISHING REGULATIONS</h4>
        
        <p className="mb-4">West Shores is a private lake owned, stocked and maintained by the West Shores HOA. Guests must be <strong>accompanied</strong> by a member. Guest boats prohibited due to invasive species risk.</p>

        <h3 className="text-2xl font-bold mt-8 mb-4">FISH STOCKING</h3>
        <div className="space-y-1 text-sm">
          <p>2017: 1,000 Bluegill, 1,000 Wipers, 2,000 Walleye ($8,200)</p>
          <p>2018: 1,287 Wipers, 1,000 Wipers, 2,000 Walleye ($9,200)</p>
          <p>2019: 1,000 Walleye, 2,500 Bluegill, 100 Tiger Muskie ($8,075)</p>
          <p>2020: 5,000 Bluegill, 2,000 Walleye ($11,800)</p>
          <p>2021: 3,000 Walleye ($7,000)</p>
          <p>2022: 1,500 Walleye, 3,000 Yellow Perch ($7,575)</p>
          <p>2023: 3,000 Walleye ($7,500)</p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4">GAME FISH</h3>
        
        <div className="space-y-6">
          <div>
            <p className="font-bold mb-2">WHITE & BLACK CRAPPIE</p>
            <p>Daily limit: 15 per lot / Possession: 30 per lot. Catch & release until after spring spawn (May 10). <a href="https://en.wikipedia.org/wiki/White_crappie" target="_blank" rel="noopener noreferrer" className="text-blue-600">Wikipedia</a></p>
          </div>

          <div>
            <p className="font-bold mb-2">WALLEYE</p>
            <p>Daily limit: 2 per lot / Possession: 4 per lot (15-19&quot; slot only). Catch & release for &lt;15&quot; or &gt;19&quot;. <a href="https://en.wikipedia.org/wiki/Walleye" target="_blank" rel="noopener noreferrer" className="text-blue-600">Wikipedia</a></p>
          </div>

          <div>
            <p className="font-bold mb-2">BLUEGILL</p>
            <p>Catch & release only. Member of sunfish family, key prey for bass, pike, walleye, and muskies. <a href="https://en.wikipedia.org/wiki/Bluegill" target="_blank" rel="noopener noreferrer" className="text-blue-600">Wikipedia</a></p>
          </div>

          <div>
            <p className="font-bold mb-2">LARGEMOUTH BASS</p>
            <p>Catch & release only. Known by many names: widemouth bass, bigmouth bass, black bass, bucketmouth, etc. <a href="https://en.wikipedia.org/wiki/Largemouth_bass" target="_blank" rel="noopener noreferrer" className="text-blue-600">Wikipedia</a></p>
          </div>

          <div>
            <p className="font-bold mb-2">HYBRID STRIPED BASS (WIPER)</p>
            <p>Catch & release only. Hybrid between Striped Bass and White Bass. <a href="https://en.wikipedia.org/wiki/Hybrid_striped_bass" target="_blank" rel="noopener noreferrer" className="text-blue-600">Wikipedia</a></p>
          </div>

          <div>
            <p className="font-bold mb-2">TIGER MUSKIE</p>
            <p>Catch & release only. Sterile hybrid cross between Northern Pike and Muskellunge. 100 stocked in 2019. <a href="https://en.wikipedia.org/wiki/Tiger_muskellunge" target="_blank" rel="noopener noreferrer" className="text-blue-600">Wikipedia</a></p>
          </div>

          <div>
            <p className="font-bold mb-2">CHANNEL CATFISH</p>
            <p>Daily limit: 5 per lot / Possession: 20 per lot. <a href="https://en.wikipedia.org/wiki/Channel_catfish" target="_blank" rel="noopener noreferrer" className="text-blue-600">Wikipedia</a></p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-8 mb-8">
          <p className="italic">The Lake Habitat & Health Committee wants you aware of safe catch & release methods. Use barbless hooks, proper fish handling, and quick release techniques.</p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4">ROUGH FISH</h3>
        
        <p className="mb-4">Rough fish should always be removed from the lake and disposed of appropriately:</p>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>Carp</strong> - Remove and dispose <a href="https://en.wikipedia.org/wiki/Carp" target="_blank" rel="noopener noreferrer" className="text-blue-600">Wikipedia</a></li>
          <li><strong>Drum</strong> - Remove and dispose</li>
          <li><strong>Goldeneye (Skipjack Shad)</strong> - Remove and dispose</li>
          <li><strong>Shortnose Gar</strong> - Remove and dispose (DO NOT confuse with Tiger Muskie!)</li>
          <li><strong>Longnose Gar</strong> - Remove and dispose</li>
        </ul>
      </div>
    </div>
  )
}