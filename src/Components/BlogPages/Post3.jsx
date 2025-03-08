import React from 'react';

const Post3 = () => {
  return (
    <main
      className="roboto-regular mx-auto px-4 py-8 md:mt-10 bg-cover"
      style={{
        backgroundImage: "url('Blogs/blogBG.jpg')",
        backgroundSize: "cover", // Cover the entire area without stretching
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
      }}
    >
      <div className="flex max-w-full container mx-auto">
        {/* Main Content Section - Left Side */}
        <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 pr-4">
          <article className="bg-white p-6 rounded-lg shadow-lg backdrop-filter backdrop-brightness-90">
            {/* Blog Image */}
            <img
              src="Blogs/post3A.jfif"
              alt="Blog"
              className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeIn"
            />

            {/* Blog Title */}
            <h1 id="section1" className="text-3xl font-bold mb-4 text-gray-800 animate__animated animate__fadeIn scroll-mt-[30vh]">
              Technical Training: Navigating the Engineering Realm
            </h1>

            {/* Blog Meta Info */}
            <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm animate__animated animate__fadeInUp">
              <span>
                By <a href="https://www.linkedin.com/company/gryphonacademy/" className="text-blue-600 hover:underline">Gryphon Academy Pvt. Ltd.</a>
              </span>
              <div className="w-px h-8 sm:h-4 bg-gray-500" />
              <span>
                Published on <time dateTime="2023-10-25">October 25, 2023</time>
              </span>
            </div>

            {/* Blog Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed animate__animated animate__fadeInUp">
              <p id="section2" className="scroll-mt-[30vh]">
                Technical trainings play a pivotal role in the world of engineering, offering a multitude of benefits for students pursuing various engineering disciplines, such as mechanical, civil, and IT. In the ever-evolving field of engineering, staying up to date with the latest technologies and trends is crucial, and technical trainings provide a structured path for students to achieve this.
              </p>

              <p>
                These training programs encompass a wide spectrum of subjects, ranging from foundational engineering principles to specialized domains like artificial intelligence and machine learning.
              </p>

              <h2 id="section3" className="text-2xl font-semibold text-gray-800 scroll-mt-[30vh]">Here's why technical trainings are indispensable for engineering students:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-5">
                <li><strong>Skill Development:</strong> In today's competitive job market, employers seek engineers with specialized skills. Technical trainings equip students with these sought-after skills, making them more competitive and job-ready.</li>
                <li><strong>Staying Current:</strong> Engineering is a field that evolves rapidly. Technical trainings ensure that students are up-to-date with the latest technologies and industry trends, enhancing their relevance in the workforce.</li>
                <li><strong>Career Advancement:</strong> Completing technical trainings can accelerate career progression. Employers value engineers who possess in-demand skills, making them prime candidates for promotions and leadership roles.</li>
              </ul>

              <p>
                Moreover, technical trainings offer additional advantages, including the improvement of problem-solving abilities and the bolstering of confidence. By exposing students to new technologies and trends, these programs empower them to tackle complex challenges confidently.
              </p>

              <h2 id="section4" className="text-2xl font-semibold text-gray-800 scroll-mt-[30vh]">Interesting Statistics:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-5">
                <li>The global technical training market is projected to grow from $101.9 billion in 2022 to $144.3 billion in 2027.</li>
                <li>In 2023, the most sought-after technical skills include cloud computing, artificial intelligence, machine learning, cybersecurity, and data science.</li>
                <li>Cloud computing skills are particularly vital and are poised to play an increasingly critical role in the future.</li>
              </ul>

              <p>
                In essence, technical trainings are a sound investment for engineering students, equipping them with the knowledge and skills necessary for a successful career. In the realm of engineering, knowledge is indeed power, and technical trainings are the gateway to harnessing that power effectively. So, for engineering students, embracing these training opportunities is not just beneficial—it's essential for achieving excellence in their chosen fields.
              </p>

              <p id="section5" className="text-xl font-semibold scroll-mt-[30vh]">
                Remember, knowledge is power. And in the engineering world, power is everything.
              </p>
            </div>
          </article>
        </div>

        {/* Sidebar - Right Side */}
        <div className="hidden md:block md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="sticky top-0">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                <li><a href="#section1" className="text-blue-600 hover:underline">Introduction</a></li>
                <li><a href="#section2" className="text-blue-600 hover:underline">Importance of Technical Training</a></li>
                <li><a href="#section3" className="text-blue-600 hover:underline">Benefits for Engineering Students</a></li>
                <li><a href="#section4" className="text-blue-600 hover:underline">Interesting Statistics</a></li>
                <li><a href="#section5" className="text-blue-600 hover:underline">Conclusion</a></li>
              </ul>
            </div>

               {/* Related Blogs Section */}
<div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
  <h2 className="text-xl font-semibold mb-4">Related Blogs</h2>
  <ul>
  <li className="flex items-center mb-4">
  <img
    src="Blogs/post2A.jfif"
    alt="Related Blog 2"
    className="w-24 h-16 mr-4"  
  />
  <a href="/post2" className="text-blue-600 hover:underline font-semibold">
    A Call to Integrity: Gryphon Academy's Pure Approach to Training and Placements  {/* Fixed apostrophe */}
  </a>
</li>

    <li className="flex items-center mb-4">
      <img
        src="Blogs/post3A.jfif"
        alt="Related Blog 3"
        className="w-24 h-16 mr-4"  
      />
      <a href="/post3" className="text-blue-600 hover:underline font-semibold">
        Technical Training: Navigating the Engineering Realm
      </a>
    </li>
    <li className="flex items-center">
      <img
        src="Blogs/post4A.jfif"
        alt="Related Blog 4"
        className="w-24 h-16 mr-4"  
      />
      <a href="/post4" className="text-blue-600 hover:underline font-semibold">
        The Future of Engineering: Trainings and Skills Shaping the Industry
      </a>
    </li>
  </ul>
</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Post3;
