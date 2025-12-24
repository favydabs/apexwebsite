// import Image from 'next/image';

const Careers = () => {
  const jobs = [
    { number: 1, title: 'Driver', location: 'Abuja, Nigeria' },
    { number: 2, title: 'Computer Programmer', location: 'Abuja, Nigeria' }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">JOIN OUR TEAM</h2>
      </div>

      <div className="relative h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl mb-8 sm:mb-12">
        {/* <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200"
          alt="Team collaboration"
          width={24}
          height={24}
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-lg mb-6 sm:mb-8">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          As one of the fastest growing Energy and Construction Infrastructure company in Nigeria, APEX is proud to provide a very comfortable working enviroment, diversified workplace and total commitment to social responsibility. APEX invests in its employees and provides them with the challenges and opportunities necessary to grow and succeed. APEX offers a competitive compensation package, career options and advancement on its numerous projects. APEX strives to be an employer of choice; where all staff feel respected, included and valued. We are focused on attracting and retaining the best talent by encouraging applications from all qualified individuals.
        </p>
      </div>

      <div className="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold">JOB NUMBER</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold">JOB TITLE</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold">LOCATION</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-4 sm:px-6 py-3 sm:py-4 border-b text-sm sm:text-base">{job.number}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 border-b">
                    <span className="text-blue-600 text-sm sm:text-base font-medium hover:underline cursor-pointer">
                      {job.title}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 border-b text-sm sm:text-base">{job.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Careers;