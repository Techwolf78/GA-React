import React from 'react';

const Post4 = () => {
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
        <img src="Blogs/post4A.jfif" alt="Blog" className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeIn" />

        {/* Blog Title */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800 animate__animated animate__fadeIn">
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
          <p>
            Discussing the emerging trends and innovations in engineering, highlighting the need for specialized training and skills.
          </p>

          <p>
            In the ever-evolving landscape of technology, we are now in an era where innovation knows no bounds. Our world is racing ahead in time, with artificial intelligence already a formidable presence, ready to completely change every part of our lives. As we look forward to 2035, a transformative horizon awaits us, where technological advancements will usher in a new era of possibilities. At the heart of these changes lies the concept of Human Augmentation, promising greater efficiency and purpose in our lives.
          </p>

          <p>
            This impending transformation brings to the forefront the role of engineers as the trailblazers of our future. We can already witness the rise of engineers who are spearheading groundbreaking developments. Emerging trends such as Artificial Intelligence (AI), Internet of Things (IoT), Robotics, Machine Learning, and 3D technology are being seamlessly integrated into our daily lives, with the promise of branching out even further in the coming years.
          </p>

          <p>
            Yet, for these promising innovations to become a tangible reality, there is an indispensable need for a strong foundation where individuals can upgrade their skills through specialized training programs and become industry-ready. The key to thriving flawlessly in the engineering industry lies in honing specific and apt skills that align with these transformative trends.
          </p>

          <p>
            Customized and elemental training programs play a vital role for students, providing an environment where they can feel self-confident and well-prepared for the industry.
          </p>

          <p>
            The bridge that is created due to lack of skills and not being able to understand the exact changes to be brought in oneself for the industry can be reduced through trainings. The confusion and zero confidence that is created within Students might get them diverted and that is where we need TRAININGS to be their vocals. Intrapersonal and technical skills will help them to recreate a newer version of themselves and make them a powerful industry ready force.
          </p>

          <p>
            In conclusion, the future of engineering promises a world of limitless possibilities, where skilled professionals harness the power of emerging technologies to shape our lives. To seize these opportunities, individuals must invest in specialized training and skills development. As the saying goes, "The future belongs to those who prepare for it today." So, let's embrace the transformative trends, equip ourselves with the right knowledge and skills, and embark on this thrilling journey.
          </p>
        </div>
      </article>
    </main>
  );
};

export default Post4;
