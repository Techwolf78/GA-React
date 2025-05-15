import React from 'react';

const Post2 = () => {
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
              src="Blogs/post2A.jfif"
              alt="Blog"
              className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeIn"
            />

            {/* Blog Title */}
            <h1 id="section1" className="text-3xl font-bold mb-4 text-gray-800 animate__animated animate__fadeInUp scroll-mt-[30vh]">
              A Call to Integrity: Gryphon Academy's Pure Approach to Training and Placements
            </h1>

            {/* Blog Meta Info */}
            <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm animate__animated animate__fadeInUp">
              <span>
                By <a href="https://www.linkedin.com/company/gryphonacademy/" className="text-blue-600 hover:underline">Gryphon Academy Pvt. Ltd.</a>
              </span>
              <div className="w-px h-8 sm:h-4 bg-gray-500" />
              <span>
                Published on <time dateTime="2024-09-02">November 12, 2023</time>
              </span>
            </div>

            {/* Blog Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed animate__animated animate__fadeInUp">
              <p id="section2" className="scroll-mt-[30vh]">
                As the festival of Diwali approaches, our hearts are filled with excitement, and our homes are adorned with radiant lights, symbolizing the victory of light over darkness. Diwali, the festival of prosperity and joy, is a time to reflect on the purity and goodness that surrounds us. However, it's disheartening to realize that adulteration, the impurity that threatens to creep into various aspects of our lives, is a persistent problem. From the adulteration of food to counterfeit electrical items and Nylon type of clothing materials, our daily existence is marred by the presence of impurities.
              </p>

              <p>What exactly does Adulteration signify?</p>
              <p>Adulteration refers to the act of adding impurities, inferior substances, or elements of lesser quality to a product, often to deceive or reduce production costs. This deceptive practice compromises the quality, purity, or safety of the original product.</p>

              <h2 id="section3" className="text-2xl font-semibold text-gray-800 scroll-mt-[30vh]">Adulteration of Food during Diwali:</h2>
              <img
                src="Blogs/post2B.jfif"
                alt="Understanding the Issue"
                className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeInUp"
              />

              <p>
                The adulteration of food, especially during Diwali, is a concerning issue rooted in unscrupulous practices. Harmful things and sugar ingredients are added to enhance bulk or shelf life. During the festive surge, vendors exploit the demand, adulterating sweets for profit. Consumers must stay vigilant, choosing reputable sources to ensure the purity and safety of their festive treats. The heightened demand during Diwali makes sweets a prime target for adulteration, with vendors compromising on quality to cut costs. Opting for reputed sweet shops with quality certifications is crucial to preserve the true joy of Diwali without the risk of consuming substandard confections.
              </p>

              <p id="section4" className="scroll-mt-[30vh] mb-4 text-gray-800">In order to avoid such adulterations, we take measurable steps like:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-5">
                <li>Make strict rules for food quality and check regularly.</li>
                <li>Use better testing tools to find harmful stuff.</li>
                <li>Teach people about good and bad food through ads and info.</li>
                <li>Support programs that check if food is safe and good.</li>
              </ul>

              <p>
                As we take concrete measures to ensure the quality of the food we consume, it is equally imperative to address the adulteration within our education system with precision. Just as we seek optimal solutions for our dietary needs, a similar discerning approach is essential in finding the best solutions for educational challenges. Issues like false assurances, inadequate teaching, and unfulfilled placement promises are common problems we encounter.
              </p>

              <p>
                When it comes to training and placements, it's essential to weigh your options carefully. Consider what features and qualifications you need in your training program. Look for a solution that not only offers relevant and up-to-date content but also provides support, guidance, and real-world experience. Gryphon Academy understands that your needs are unique and offers a range of options to ensure you get the training and placement services that are a perfect fit for your goals.
              </p>

              <p className="scroll-mt-[30vh] mb-4 text-gray-800">In a world where adulteration appears widespread,</p>

              <ul id="section5" className="list-disc list-inside space-y-2 text-gray-700 pl-5">
                <li>We understand the need for high-quality, unadulterated training and placements.</li>
                <li>Our commitment is to provide untainted, reliable, and tailored services.</li>
                <li>We strive for purity in learning, growth, and the pursuit of aspirations.</li>
                <li>Expert instructors with real-world experience.</li>
                <li>Customized training programs to match your specific requirements.</li>
                <li>A commitment to ethical and transparent placement services.</li>
                <li>Choosing us is you choosing unadulterated learning and career opportunities. Our training and placements are designed to help you reach your full potential.</li>
              </ul>

              <p>Don't compromise, don't accept diluted training—be selective about the choices you make for your life. Start your organic training with us!</p>

              <p>
                In this season of lights and celebrations, let's make a conscious choice to keep our lives pure and genuine. Gryphon Academy wishes you a Diwali filled with brightness, not just from the external lights but also from the inner knowledge and career success.
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
                <li><a href="#section2" className="text-blue-600 hover:underline">What is Adulteration?</a></li>
                <li><a href="#section3" className="text-blue-600 hover:underline">Adulteration of Food during Diwali</a></li>
                <li><a href="#section4" className="text-blue-600 hover:underline">Steps to Avoid Adulteration</a></li>
                <li><a href="#section5" className="text-blue-600 hover:underline">Gryphon Academy's Approach</a></li>
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

export default Post2;
