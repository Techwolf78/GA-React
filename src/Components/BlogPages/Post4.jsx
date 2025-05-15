import React from 'react';

const Post4 = () => {
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
              src="Blogs/post4A.jfif"
              alt="Blog"
              className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeIn"
            />

            {/* Blog Title */}
            <h1 id="section1" className="text-3xl font-bold mb-4 text-gray-800 animate__animated animate__fadeIn">
              The Future of Engineering: Trainings and Skills Shaping the Industry
            </h1>

            {/* Blog Meta Info */}
            <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm animate__animated animate__fadeInUp">
              <span>
                By <a href="https://www.linkedin.com/company/gryphonacademy/" className="text-blue-600 hover:underline">Gryphon Academy Pvt. Ltd.</a>
              </span>
              <div className="w-px h-8 sm:h-4 bg-gray-500" />
              <span>
                Published on <time dateTime="2023-09-26">September 26, 2023</time>
              </span>
            </div>

            {/* Blog Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed animate__animated animate__fadeInUp">
              {/* Section 1: Introduction */}
              <p id="section2" className="scroll-mt-[30vh]">
                Discussing the emerging trends and innovations in engineering, highlighting the need for specialized training and skills.
              </p>

              {/* Section 2: Emerging Trends */}
              <h2 id="section3" className="text-2xl font-semibold text-gray-800 mt-6 scroll-mt-[30vh]">Emerging Trends in Engineering</h2>
              <p>
                In the ever-evolving landscape of technology, we are now in an era where innovation knows no bounds. Our world is racing ahead in time, with artificial intelligence already a formidable presence, ready to completely change every part of our lives. As we look forward to 2035, a transformative horizon awaits us, where technological advancements will usher in a new era of possibilities. At the heart of these changes lies the concept of Human Augmentation, promising greater efficiency and purpose in our lives.
              </p>

              {/* Section 3: The Role of Engineers */}
              <h2 id="section4" className="text-2xl font-semibold text-gray-800 mt-6 scroll-mt-[30vh]">The Role of Engineers in the Future</h2>
              <p>
                This impending transformation brings to the forefront the role of engineers as the trailblazers of our future. We can already witness the rise of engineers who are spearheading groundbreaking developments. Emerging trends such as Artificial Intelligence (AI), Internet of Things (IoT), Robotics, Machine Learning, and 3D technology are being seamlessly integrated into our daily lives, with the promise of branching out even further in the coming years.
              </p>

              {/* Section 4: Skills and Training for the Future */}
              <h2 id="section5" className="text-2xl font-semibold text-gray-800 mt-6 scroll-mt-[30vh]">Skills and Training for the Future</h2>
              <p>
                Yet, for these promising innovations to become a tangible reality, there is an indispensable need for a strong foundation where individuals can upgrade their skills through specialized training programs and become industry-ready. The key to thriving flawlessly in the engineering industry lies in honing specific and apt skills that align with these transformative trends.
              </p>

              <p>
                Customized and elemental training programs play a vital role for students, providing an environment where they can feel self-confident and well-prepared for the industry.
              </p>

              {/* Section 5: Conclusion */}
              <h2 id="section6" className="text-2xl font-semibold text-gray-800 mt-6 scroll-mt-[30vh]">Conclusion</h2>
              <p>
                The bridge that is created due to lack of skills and not being able to understand the exact changes to be brought in oneself for the industry can be reduced through trainings. The confusion and zero confidence that is created within Students might get them diverted and that is where we need TRAININGS to be their vocals. Intrapersonal and technical skills will help them to recreate a newer version of themselves and make them a powerful industry-ready force.
              </p>

              <p>
                In conclusion, the future of engineering promises a world of limitless possibilities, where skilled professionals harness the power of emerging technologies to shape our lives. To seize these opportunities, individuals must invest in specialized training and skills development. As the saying goes, "The future belongs to those who prepare for it today." So, let's embrace the transformative trends, equip ourselves with the right knowledge and skills, and embark on this thrilling journey.
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
                <li><a href="#section2" className="text-blue-600 hover:underline">Introduction</a></li>
                <li><a href="#section3" className="text-blue-600 hover:underline">Emerging Trends in Engineering</a></li>
                <li><a href="#section4" className="text-blue-600 hover:underline">The Role of Engineers in the Future</a></li>
                <li><a href="#section5" className="text-blue-600 hover:underline">Skills and Training for the Future</a></li>
                <li><a href="#section6" className="text-blue-600 hover:underline">Conclusion</a></li>
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

export default Post4;
