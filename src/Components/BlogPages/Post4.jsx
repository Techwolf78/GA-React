// Post1.jsx
import React from 'react';

const Post4 = () => {
  return (
    <main className="container roboto-regular mx-auto px-4 py-8 bg-cover" style={{ backgroundImage: "url('Blogs/nature-1.jpg')" }}>
      <article className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg backdrop-filter backdrop-brightness-90">
        {/* Blog Image */}
        <img src="Blogs/nature-1.jpg" alt="Blog" className="w-full h-auto rounded-lg mb-6 animate__animated animate__fadeIn" />

        {/* Blog Title */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800 animate__animated animate__fadeInUp">Your Blog Title Here</h1>

        {/* Blog Meta Info */}
        <div className="flex items-center space-x-4 mb-6 text-gray-500 text-sm animate__animated animate__fadeInUp">
          <span>
            By <a href="https://in.linkedin.com/" className="text-blue-600 hover:underline">Author Name</a>
          </span>
          <span>|</span>
          <span>
            Published on <time dateTime="2024-09-02">September 2, 2024</time>
          </span>
        </div>

        {/* Blog Content Paragraphs */}
        <div className="space-y-6 text-gray-700 leading-relaxed animate__animated animate__fadeInUp">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis orci et libero gravida, ut interdum nisl tincidunt. Phasellus nec turpis nec lacus dictum euismod. Cras vitae velit sit amet velit dictum malesuada.</p>
          <p>Vivamus blandit libero vitae libero hendrerit, at egestas dui aliquet. Duis interdum erat et justo venenatis, nec aliquet nulla interdum. Ut sit amet est sapien. Suspendisse potenti. In hac habitasse platea dictumst.</p>
          <p>Mauris eu urna nec felis ullamcorper volutpat vel ac libero. Phasellus pharetra, ipsum ac ultricies auctor, libero libero suscipit orci, nec consequat nulla erat in arcu. Aliquam erat volutpat.</p>
        </div>
      </article>
    </main>
  );
};

export default Post4;
