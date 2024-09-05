import React from 'react';
import '../assets/CSS/Blogs.css'; // Import the Blogs CSS
import forest2 from '../assets/Images/forest-2.png';
import forest from '../assets/Images/forest.png';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "It takes a planet to explore the universe.",
      description: "80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.",
      image: forest2,
      link: "post-1.html",
    },
    {
      id: 2,
      title: "I would like to die on Mars. Just not on impact.",
      description: "Join us on a journey to the red planet, where the possibilities are endless and the risks are high.",
      image: forest,
      link: "post-2.html",
    },
    {
      id: 3,
      title: "Explore the wonders of the universe.",
      description: "Embark on a journey through the cosmos and discover the beauty of the stars.",
      image: forest2,
      link: "post-3.html",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 text-center blog-section">
      <div className="container mx-auto">
        <h2 className="text-gray-900 mb-12 text-3xl md:text-4xl font-bold">
          Latest Blog Posts
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="w-full md:w-1/3 lg:w-1/4 mb-8 px-4 mt-4">
              <div className="blog-card rounded-2xl overflow-hidden transition-transform transition-shadow hover:scale-105 hover:shadow-xl cursor-pointer">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-t-2xl" />
                <div className="p-6">
                  <h3 className="blog-card-title text-2xl mb-3">{post.title}</h3>
                  <p className="blog-card-description mb-4">{post.description}</p>
                  <a href={post.link} className="blog-card-link inline-block px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                    Continue Reading →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;