import React from 'react';

const Post5 = () => {
  return (
    <main
    className="container roboto-regular mx-auto px-4 py-8 bg-cover"
    style={{
      backgroundImage: "url('Blogs/blogBG.jpg')",
      backgroundSize: "cover", // Cover the entire area without stretching
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat", // Prevent the image from repeating
    }}
  >
      <article className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg backdrop-filter backdrop-brightness-90">
         {/* Blog Image */}
         <img src="Blogs/nature-1.jpg" alt="Blog" className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeIn" />
        {/* Blog Title */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800 animate__animated animate__fadeIn">
          I would like to die on Mars. Just not on Impact.
        </h1>

        {/* Blog Meta Info */}
        <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm animate__animated animate__fadeInUp">
          <span>
            By <a href="https://www.linkedin.com/company/gryphonacademy/" className="text-blue-600 hover:underline">Gryphon Academy Pvt. Ltd.</a>
          </span>
          <div className="w-px h-8 sm:h-4 bg-gray-500" />
          <span>
            Published on <time dateTime="2023-10-25">October 10, 2024</time>
          </span>
        </div>

        {/* Blog Description */}
        <div className="space-y-6 text-gray-700 leading-relaxed animate__animated animate__fadeInUp">
          <p>
            Join us on a journey to the red planet, where the possibilities are endless and the risks are high. Mars, with its barren landscapes and captivating features, presents both a challenge and an opportunity for humanity.
          </p>

          <p>
            As we explore the potential for human colonization, we must consider the complexities involved—technological, ethical, and existential. What does it mean to venture into the unknown? How do we prepare ourselves for the trials that await us on Mars?
          </p>

          <p>
            From advancements in space travel to sustainable living on another planet, this journey requires innovative thinking and a commitment to overcoming obstacles. Imagine thriving in a new world, contributing to the understanding of our universe while grappling with the weight of survival.
          </p>

          <p>
            The thought of dying on Mars evokes a mix of excitement and fear. Yet, the essence of exploration lies in embracing both. We are drawn to the idea of expanding our horizons, pushing boundaries, and striving for something greater than ourselves.
          </p>

          <p>
            So, as we dream of Mars, let us prepare wisely. We must aim for a future where humanity can flourish on other worlds, ensuring that our aspirations are not hindered by reckless ambition. Let's pave the way for a safe journey to the stars—one that allows us to thrive and make our mark on the universe.
          </p>
        </div>
      </article>
    </main>
  );
};

export default Post5;
