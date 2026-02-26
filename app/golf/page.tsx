export default function Golf() {
  const golfCourses = [
    {
      name: "THE CLUB AT INDIAN CREEK",
      address: "3825 North 202nd Street, Elkhorn",
      distance: "10 minutes / 5.8 miles",
      mapUrl: "https://www.google.com/maps/dir/The+Club+At+Indian+Creek,+North+202nd+Street,+Elkhorn,+NE/24400+W+Dodge+Rd,+Waterloo,+NE+68069/@41.2785627,-96.273914,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8793ef919f2bcd41:0xefc3d6a8f45f7ae6!2m2!1d-96.2297645!2d41.295205!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!3e0",
      type: "Public",
      website: "www.golfatindiancreek.com",
      websiteUrl: "https://www.golfatindiancreek.com/"
    },
    {
      name: "The PINES COUNTRY CLUB",
      address: "7516 North 286th Street, Valley",
      distance: "11 minutes / 8.9 miles",
      mapUrl: "https://www.google.com/maps/dir/The+Pines+Country+Club,+North+286th+Street,+Valley,+NE/24400+W+Dodge+Rd,+Waterloo,+NE+68069/@41.298661,-96.3474707,14z/data=!4m14!4m13!1m5!1m1!1s0x8793e3cb12bca6bd:0xfea163e29f2e0087!2m2!1d-96.3671367!2d41.3316086!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!3e0",
      type: "Semi-Private",
      website: "www.pinescountryclub.com",
      websiteUrl: "https://www.pinescountryclub.com/"
    },
    {
      name: "SHADOW RIDGE COUNTRY CLUB",
      address: "1501 188th Plaza, Omaha",
      distance: "9 minutes / 6.4 miles",
      mapUrl: "https://www.google.com/maps/dir/24400+W+Dodge+Rd,+Waterloo,+NE+68069/Shadow+Ridge+Country+Club,+188th+Plaza,+Omaha,+NE/@41.2470389,-96.2734424,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!1m5!1m1!1s0x8793f05d0f0e1191:0x25606634dab2f2cd!2m2!1d-96.2100936!2d41.2456881!3e0",
      type: "Private",
      website: "www.shadowridgecountryclub.com",
      websiteUrl: "https://shadowridgecountryclub.com/"
    },
    {
      name: "Pacific springs golf course",
      address: "16810 Harney Street, Omaha",
      distance: "10 minutes / 7.4 miles",
      mapUrl: "https://www.google.com/maps/dir/24400+W+Dodge+Rd,+Waterloo,+NE+68069/Pacific+Springs+Golf+Course,+16810+Harney+St,+Omaha,+NE+68118/@41.2561187,-96.2573706,14z/data=!4m14!4m13!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!1m5!1m1!1s0x8793f1b8f91aba63:0x20555841715bb290!2m2!1d-96.1782789!2d41.2551648!3e0",
      type: "Public",
      website: "www.pacificsprings.com",
      websiteUrl: "https://www.pacificsprings.com/"
    },
    {
      name: "LOST RAIL golf CLUB",
      address: "23300 Cary Road, Gretna",
      distance: "14 minutes / 8.8 miles",
      mapUrl: "https://www.google.com/maps/dir/24400+W+Dodge+Rd,+Waterloo,+NE+68069/Lost+Rail+Golf+Club,+Cary+Road,+Gretna,+NE/@41.2178501,-96.3179047,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!1m5!1m1!1s0x8793f9fe67029695:0x69181920c5e60bd5!2m2!1d-96.2790514!2d41.1722236!3e0",
      type: "Private",
      website: "www.lostrailgolf.com",
      websiteUrl: "https://www.lostrailgolf.com/"
    },
    {
      name: "TOPGOLF",
      address: "908 North 102nd Street, Omaha",
      distance: "16 minutes / 13.4 miles",
      mapUrl: "https://www.google.com/maps/dir/24400+W+Dodge+Rd,+Waterloo,+NE+68069/Topgolf,+North+102nd+Street,+Omaha,+NE/@41.2769503,-96.2192813,13z/data=!4m14!4m13!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!1m5!1m1!1s0x8793f325f3380317:0x4022f84479c4f512!2m2!1d-96.0746022!2d41.2674563!3e0",
      type: "Public",
      website: "www.topgolf.com/us/omaha",
      websiteUrl: "https://topgolf.com/us/omaha/"
    },
    {
      name: "STONE CREEK GOLF COURSE",
      address: "6220 North 160th Avenue, Omaha",
      distance: "17 minutes / 11.3 miles",
      mapUrl: "https://www.google.com/maps/dir/24400+W+Dodge+Rd,+Waterloo,+NE+68069/Topgolf,+North+102nd+Street,+Omaha,+NE/@41.2769503,-96.2192813,13z/data=!4m14!4m13!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!1m5!1m1!1s0x8793f325f3380317:0x4022f84479c4f512!2m2!1d-96.0746022!2d41.2674563!3e0",
      type: "Public",
      website: "www.golfstonecreek.com",
      websiteUrl: "https://www.golfstonecreek.com/"
    },
    {
      name: "HAPPY HOLLOW CLUB",
      address: "1701 South 105th Street, Omaha",
      distance: "17 minutes / 14.4 miles",
      mapUrl: "https://www.google.com/maps/dir/24400+W+Dodge+Rd,+Waterloo,+NE+68069/Happy+Hollow+Club,+South+105th+Street,+Omaha,+NE/@41.2469762,-96.2236595,13z/data=!4m14!4m13!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!1m5!1m1!1s0x8793f2d7c5f1073b:0x7ecbd205c582522c!2m2!1d-96.0745248!2d41.2422245!3e0",
      type: "Private",
      website: "www.happyhollowclub.com",
      websiteUrl: "https://www.happyhollowclub.com/"
    },
    {
      name: "THE PLAYERS CLUB",
      address: "2101 Deer Creek Drive, Omaha",
      distance: "22 minutes / 15.8 miles",
      mapUrl: "https://www.google.com/maps/dir/24400+W+Dodge+Rd,+Waterloo,+NE+68069/The+Players+Club,+Deer+Creek+Drive,+Omaha,+NE/@41.2987068,-96.2366149,13z/data=!4m14!4m13!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!1m5!1m1!1s0x8793ecfb0507b7c1:0x4fbd688f77c8a013!2m2!1d-96.1025854!2d41.3268671!3e0",
      type: "Private",
      website: "www.playersclubomaha.com",
      websiteUrl: "http://www.playersclubomaha.com/"
    },
    {
      name: "OMAHA COUNTRY CLUB",
      address: "6900 Country Club Road, Omaha",
      distance: "22 minutes / 20.5 miles",
      mapUrl: "https://www.google.com/maps/dir/24400+W+Dodge+Rd,+Waterloo,+NE+68069/Omaha+Country+Club,+Country+Club+Road,+Omaha,+NE/@41.3006551,-96.2303937,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!1m5!1m1!1s0x879393ae2a1fedcd:0x1d56cbf4c50511e1!2m2!1d-96.0178889!2d41.3297871!3e0",
      type: "Private",
      website: "www.omahacc.org",
      websiteUrl: "https://www.omahacc.org/"
    },
    {
      name: "TIBURON GOLF CLUB",
      address: "10302 South 168th Street, Omaha",
      distance: "23 minutes / 14.4 miles",
      mapUrl: "https://www.google.com/maps/dir/24400+W+Dodge+Rd,+Waterloo,+NE+68069/Tiburon+Golf+Club+%26+Banquet+Facility,+10302+S+168th+St,+Omaha,+NE+68136/@41.2549137,-96.3346502,13z/data=!4m14!4m13!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!1m5!1m1!1s0x8793f6f6496aec51:0x1c96c34685ce71cd!2m2!1d-96.1850771!2d41.1562487!3e0",
      type: "Public",
      website: "www.tiburongolf.com",
      websiteUrl: "https://www.tiburongolf.com/"
    },
    {
      name: "Quarry OAKS GoLF ClUB",
      address: "16600 Quarry Oaks Drive, Ashland",
      distance: "32 minutes / 25.9 miles",
      mapUrl: "https://www.google.com/maps/dir/24400+W+Dodge+Rd,+Waterloo,+NE+68069/Quarry+Oaks+Golf+Club,+16600+Quarry+Oaks+Dr,+Ashland,+NE+68003/@41.1324377,-96.3814991,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8793fb36ea581739:0x363a0ac64149952f!2m2!1d-96.2972096!2d41.2628825!1m5!1m1!1s0x879405b142b79d21:0x95955204d5faaa89!2m2!1d-96.276712!2d41.009754!3e0",
      type: "Public",
      website: "www.quarryoaks.com",
      websiteUrl: "https://quarryoaks.com/"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">NEARBY GOLF</h1>
        
        <p className="text-lg text-gray-700 mb-12">
          West Shores is ideally located for golfers, with superb courses, public and private, 
          located as little as little as ten minutes away from our main entrance.
        </p>
        
        <div className="space-y-8">
          {golfCourses.map((course, index) => (
            <div key={index} className="border-t border-gray-300 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.name}</h3>
              
              <div className="space-y-2 text-lg text-gray-700">
                <p>
                  {course.address} {course.distance}{' '}
                  <a 
                    href={course.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Map
                  </a>
                </p>
                
                <p>
                  <span className="font-semibold">{course.type}</span>
                </p>
                
                <p>
                  <a 
                    href={course.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {course.website}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}