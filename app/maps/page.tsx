export default function Maps() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Maps</h1>
        
        <div className="space-y-12">
          <section>
            <img src="/images/maps/main-map.jpg" alt="West Shores Main Map" className="w-full rounded-lg shadow-lg mb-4" />
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2002 Google Earth Map</h3>
            <p className="text-gray-700 mb-4">Map showing 40' dock limit, 130' (dock plus 90' state requirement), and 165' (130' plus 35' for wake enhancement). Click <a href="https://www.westshoreslake.com/File/Get/d74bc6d2-5752-4f01-a111-81a27829dc48" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">here</a> for full size pdf.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lot Numbers & Boating Direction</h3>
            <img src="/images/maps/lot-numbers.jpg" alt="Lot Numbers and Boating Direction" className="w-full rounded-lg shadow-lg" />
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2018 Lake Depth Contour Survey Map</h3>
            <p className="text-gray-700 mb-4">This map lacks a lake surface elevation benchmark that would allow comparison to the 2001 or 2020 hydrographic surveys, or to the 1111.5' planned design elevation of the lake.</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2001 Hydrographic Lake Elevation Map</h3>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2020 Hydrographic Lake Elevation Map</h3>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">BATHYMETRIC CHANGE ANALYSIS</h3>
            <p className="text-gray-700 mb-4">Bathymetry is the study of the underwater depth of ocean or lake floors.</p>
            
            <p className="text-gray-700 mb-4">In the summer of 2020, the HOA contracted for a hydrographic survey and bathymetric change analysis by Stockwell Engineers (data collection) and TD2 Engineers (analysis). The purpose of this work was to collect an updated 2020 bathymetric dataset and compare it to the 2001 bathymetric dataset that collected as the construction of the lake was nearing completion.</p>
            
            <p className="text-gray-700 mb-4">The 2020 TD2 Engineer's report states that, assuming the measurements are perfectly accurate for both surveys:</p>
            
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Median lake depth was 11.6' in 2020 vs 11.5' in 2001, a difference of 0.1' (1-3/16")</li>
              <li>Based on the 881 coordinate cut/fill points surveyed, the average change was -0.086' (about -1") and the median change was: -0.002' (about -1/4")</li>
              <li>Change in lake volume between 2020 and 2001: 164,287 cubic yards lost, 141,174 cubic yards gained, for a total difference of 23,113 cubic yards lost (-0.006%)</li>
            </ul>

            <p className="text-gray-700 mb-6">The report states: "In my professional opinion, given the accuracy tolerances of the hydrographic equipment, the data indicates no significant change in the lake volume between 2001 and 2020."</p>

            <div className="space-y-2">
              <p><a href="https://www.westshoreslake.com/File/Get/6f32c98c-99cc-462e-adc0-93af2fdd18ca" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">2020 Bathymetric Change Analysis Letter</a> by TD2 Engineering</p>
              <p><a href="https://www.westshoreslake.com/File/Get/20750a73-a47a-4e2f-b481-efd51e31dbf9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">2001 Lake Bed Survey</a> and <a href="https://www.westshoreslake.com/File/Get/1905b881-2106-4050-87cc-c35e2864764a" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">2020 Lake Bed Survey</a></p>
              <p><a href="https://www.westshoreslake.com/File/Get/ef10371d-8925-45a2-b5ad-00550775b2e8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Exhibit A</a> (Corp of Engineers Depth Accuracy Standards)</p>
              <p><a href="https://www.westshoreslake.com/File/Get/bf3e4424-c386-49ba-b7e6-a1cd150647e7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Exhibit B</a> (Change Point Data with Numeric Sort)</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}