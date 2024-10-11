import React from 'react';

const Post3 = () => {
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
        <img src="Blogs/post3A.jfif" alt="Blog" className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeIn" />

        {/* Blog Title */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800 animate__animated animate__fadeIn">
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
          <p>
            Technical trainings play a pivotal role in the world of engineering, offering a multitude of benefits for students pursuing various engineering disciplines, such as mechanical, civil, and IT. In the ever-evolving field of engineering, staying up to date with the latest technologies and trends is crucial, and technical trainings provide a structured path for students to achieve this.
          </p>

          <p>
            These training programs encompass a wide spectrum of subjects, ranging from foundational engineering principles to specialized domains like artificial intelligence and machine learning.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Here's why technical trainings are indispensable for engineering students:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-5">
            <li><strong>Skill Development:</strong> In today's competitive job market, employers seek engineers with specialized skills. Technical trainings equip students with these sought-after skills, making them more competitive and job-ready.</li>
            <li><strong>Staying Current:</strong> Engineering is a field that evolves rapidly. Technical trainings ensure that students are up-to-date with the latest technologies and industry trends, enhancing their relevance in the workforce.</li>
            <li><strong>Career Advancement:</strong> Completing technical trainings can accelerate career progression. Employers value engineers who possess in-demand skills, making them prime candidates for promotions and leadership roles.</li>
          </ul>

          <p>
            Moreover, technical trainings offer additional advantages, including the improvement of problem-solving abilities and the bolstering of confidence. By exposing students to new technologies and trends, these programs empower them to tackle complex challenges confidently.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Interesting Statistics:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-5">
            <li>The global technical training market is projected to grow from $101.9 billion in 2022 to $144.3 billion in 2027.</li>
            <li>In 2023, the most sought-after technical skills include cloud computing, artificial intelligence, machine learning, cybersecurity, and data science.</li>
            <li>Cloud computing skills are particularly vital and are poised to play an increasingly critical role in the future.</li>
          </ul>

          <p>
            In essence, technical trainings are a sound investment for engineering students, equipping them with the knowledge and skills necessary for a successful career. In the realm of engineering, knowledge is indeed power, and technical trainings are the gateway to harnessing that power effectively. So, for engineering students, embracing these training opportunities is not just beneficial—it's essential for achieving excellence in their chosen fields.
          </p>

          <p className="text-xl font-semibold">
            Remember, knowledge is power. And in the engineering world, power is everything.
          </p>
        </div>
      </article>
    </main>
  );
};

export default Post3;
