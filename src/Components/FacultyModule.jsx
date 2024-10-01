
function FacultyModule() {
  return (
    <div>
      <main className="flex-1 bg-[#091327] roboto-regular">
        <div className="container mx-auto px-8 md:px-16 py-4">
          <div className="flex flex-col lg:flex-row bg-[#003073] rounded-[20px] shadow-md px-8 md:px-16">
            {/* Left Content */}
            <div className="flex-1 text-white pr-0 lg:pr-8 mb-6 lg:mb-0 flex flex-col justify-center items-center lg:items-start">
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mt-6 text-center lg:text-left text-[#ffc700]">
                What Do Our <br />FDP Modules Include?
              </p>
              <div className="flex items-center mb-6">
                <img
                  src="/Training - Thinking Man.png"
                  alt="Illustration"
                  className="h-56 sm:h-64 lg:h-72 xl:h-80 transform scale-x-[-1]"
                />
              </div>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full md:w-[380px]">
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center text-[#000000] font-medium">
                    <span className="text-[#ffc700] text-base mr-3">●</span>
                    Pedagogy Enhancement
                  </li>
                  <li className="flex items-center text-[#000000] font-medium">
                    <span className="text-[#ffc700] text-base mr-3">●</span>
                    Curriculum Development
                  </li>
                  <li className="flex items-center text-[#000000] font-medium">
                    <span className="text-[#ffc700] text-base mr-3">●</span>
                    Technology Integration in Teaching
                  </li>
                  <li className="flex items-center text-[#000000] font-medium">
                    <span className="text-[#ffc700] text-base mr-3">●</span>
                    Assessment and Evaluation Strategies
                  </li>
                  <li className="flex items-center text-[#000000] font-medium">
                    <span className="text-[#ffc700] text-base mr-3">●</span>
                    Research and Publication Guidance
                  </li>
                  <li className="flex items-center text-[#000000] font-medium">
                    <span className="text-[#ffc700] text-base mr-3">●</span>
                    Leadership and Management Skills for Educators
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FacultyModule;
