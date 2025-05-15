import React from 'react';

const Post1 = () => {
  return (
    <main className="roboto-regular mx-auto px-4 py-8 md:mt-10 bg-cover"
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
              src="Blogs/post1C.jfif"
              alt="Blog"
              className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeIn"
            />

            {/* Blog Title */}
            <h1 id="section1" className="text-3xl  font-bold mb-4 text-gray-800 animate__animated animate__fadeInUp scroll-mt-[30vh]">
            How to Avoid Student Fall-Out Ratio in Placements?
            </h1>

            {/* Blog Meta Info */}
            <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm animate__animated animate__fadeInUp">
              <span>
                By <a href="https://www.linkedin.com/company/gryphonacademy/" className="text-blue-600 hover:underline">Gryphon Academy Pvt. Ltd.</a>
              </span>
              <div className="w-px h-8 sm:h-4 bg-gray-500" />
              <span>
                Published on <time dateTime="2024-09-02">March 23, 2024</time>
              </span>
            </div>

            {/* Blog Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed animate__animated animate__fadeInUp">
              <p id="section2" className='scroll-mt-[30vh]'>
                Looks like a frequent topic that is a bit of a challenge right here. The placement season can be a stressful time for both students and colleges. While colleges strive to land their graduates dream jobs, some students back off at the last minute, creating issues for everyone involved.
              </p>

              <img
                src="Blogs/post1A.jfif"
                alt="Understanding the Issue"
                className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeInUp"
              />

              <p>
                Now, we know you're putting in your best efforts, but hey, we're all human. Sometimes, a detail or two might slip through the cracks. That's why it's important to address the smallest issues and avoid them from getting deeper into the cracks. The main issue why students drop out at the last moment while during placements lies in the problems they go through and hence it becomes vital to look at things from their perspective cause, understanding the student experience isn't overly complicated; it's more like finding the right key for a lock – once you've got it, everything falls into place.
              </p>

              <h2 id="section3" className="text-2xl font-semibold text-gray-800 scroll-mt-[30vh]">Understanding student’s psychology in Placements:</h2>
              <p><span className="font-bold">Lack of Industry Awareness:</span> Students may not fully grasp the realities of different industries or career paths.</p>
              <p><span className="font-bold">Communication Gap:</span> Sometimes, students simply miss crucial information or deadlines due to miscommunication with the placement team.</p>
              <p><span className="font-bold">Unrealistic Expectations:</span> Students might have unrealistic salary or job description expectations, causing them to back out if the offered position doesn't perfectly align.</p>
              <p><span className="font-bold">Lack of Confidence:</span> Students might feel unprepared or underqualified for the roles offered during placements.</p>
              <p><span className="font-bold">Resume and Cover Letter Challenges:</span> Students often struggle to create strong application materials that meet today’s industry needs.</p>
              <p><span className="font-bold">Technophobia:</span> Some students might feel intimidated by online applications or video interviews.</p>
              <p><span className="font-bold">Fear of Failure:</span> The pressure to perform well in interviews can be overwhelming, leading some students to avoid the process altogether.</p>
              <p><span className="font-bold">Internal Issues:</span> There might be family-related challenges that hinder their ability to participate in job drives or join on the given date.</p>
              <p><span className="font-bold">Multiple Job Offers:</span> Students may receive competing offers and need guidance on making the best choice.</p>
              <p><span className="font-bold">Unclear Job Descriptions:</span> Vague job descriptions can lead to confusion and mismatched expectations.</p>
              <p><span className="font-bold">Information Gap:</span> Students might be unaware of drive statuses and updates, missing important communications due to information overload.</p>
              <p><span className="font-bold">Lack of Continuous Improvement in Placement Services:</span> Students may have had positive experiences with some drives, causing them to hesitate to reapply or participate in similar processes in the future. Timely feedback after drives is essential for understanding necessary improvements.</p>

              <p id='section4' className='scroll-mt-[30vh]'>Now these are the challenges where students frequently find themselves stuck in a loop, primarily due to their lack of insight into the latest industry trends and requirements.</p>

              <img
                src="Blogs/post1B.jfif"
                alt="image blog"
                className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeInUp"
              />

              <p>Here’s what:</p>
              <p>They NEED! Industry Ready Training.</p>
              <p>They NEED! Latest Updates and Awareness.</p>
              <p>They NEED! Industry Guest Lectures.</p>
              <p>They NEED! HR Summits Exposure.</p>
              <p>They NEED! Hands-on Learning.</p>
              <p>They NEED! Guidance to Build Their Vocab Skills.</p>

              <p>The root cause of these challenges lies in the absence of appropriate training at the opportune moment.</p>

              <p id='section5' className='scroll-mt-[30vh]'>And hence, as you navigate through the maze of placement woes, remember that every problem holds within it the seed of opportunity. At Gryphon Academy, we see these challenges not as roadblocks, but as stepping stones to success. Our tailored training programs are designed to equip students with the skills, confidence, and industry know-how they need to thrive in the competitive job market.</p>

              <p>Revolutionize your placement process! Cut down to the blenders and make it easier for you!</p>

              <p>Discover how Gryphon Academy&apos;s training programs can transform student outcomes and elevate your college&apos;s reputation. Contact us now to learn more!</p>
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
                <li><a href="#section2" className="text-blue-600 hover:underline">The Main Issue</a></li>
                <li><a href="#section3" className="text-blue-600 hover:underline">Student Psychology</a></li>
                <li><a href="#section4" className="text-blue-600 hover:underline">Key Challenges</a></li>
                <li><a href="#section5" className="text-blue-600 hover:underline">Industry Ready Training</a></li>
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

export default Post1;
