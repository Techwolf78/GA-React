import React from 'react';

const Post6 = () => {
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
        <img src="Blogs/nature-2.png" alt="Blog" className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeIn" />
        
        {/* Blog Title */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800 animate__animated animate__fadeIn">
          The universe is under no obligation to make sense to you.
        </h1>

        {/* Blog Meta Info */}
        <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm animate__animated animate__fadeInUp">
          <span>
            By <a href="https://www.linkedin.com/company/gryphonacademy/" className="text-blue-600 hover:underline">Gryphon Academy Pvt. Ltd.</a>
          </span>
          <div className="w-px h-8 sm:h-4 bg-gray-500" />
          <span>
            Published on <time dateTime="2023-10-25">October 11, 2023</time>
          </span>
        </div>

        {/* Blog Description */}
        <div className="space-y-6 text-gray-700 leading-relaxed animate__animated animate__fadeInUp">
          <p>
            Astronomy compels the soul to look upwards and leads us from this world to another. The vastness of the universe evokes wonder and curiosity, pushing us to explore the cosmos beyond our earthly confines.
          </p>

          <p>
            As we delve into the mysteries of the stars, we find ourselves pondering the nature of existence. Why are we here? What lies beyond our perception? The universe challenges us to seek answers while reminding us that it operates on its own terms.
          </p>

          <p>
            Our journey through the cosmos is not just a scientific endeavor; it's a deeply philosophical one. Each celestial body we discover adds to the tapestry of our understanding, yet it also raises more questions than it answers.
          </p>

          <p>
            Embracing the uncertainty of the universe can be both liberating and daunting. It encourages us to seek knowledge, to dream big, and to confront the unknown with courage. The universe's indifference to our comprehension is a testament to its grandeur and complexity.
          </p>

          <p>
            So, as we gaze at the night sky, let us remember that the universe is a vast, mysterious place. It invites us to explore, to question, and to marvel at its beauty, all while reminding us that some things may never fully make sense.
          </p>
        </div>
      </article>
    </main>
  );
};

export default Post6;
