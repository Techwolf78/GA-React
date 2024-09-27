import React from 'react';
import { Link } from 'react-router-dom';
import forest2 from '../assets/Images/forest-2.png';
import forest from '../assets/Images/forest.png';


const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "It takes a planet to explore the universe.",
      description: "80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.",
      image: forest2,
      path: '/post1',
    },
    {
      id: 2,
      title: "I would like to die on Mars. Just not on impact.",
      description: "Join us on a journey to the red planet, where the possibilities are endless and the risks are high.",
      image: forest,
      path: '/post2',
    },
    {
      id: 3,
      title: "The universe is under no obligation to make sense to you.",
      description: "Astronomy compels the soul to look upwards and leads us from this world to another.",
      image: forest2,
      path: '/post3',
    },
    {
      id: 4,
      title: "The universe is under no obligation to make sense to you.",
      description: "Astronomy compels the soul to look upwards and leads us from this world to another.",
      image: forest,
      path: '/post4',
    },
    {
      id: 5,
      title: "The universe is under no obligation to make sense to you.",
      description: "Astronomy compels the soul to look upwards and leads us from this world to another.",
      image: forest2,
      path: '/post5',
    },
    {
      id: 6,
      title: "The universe is under no obligation to make sense to you.",
      description: "Astronomy compels the soul to look upwards and leads us from this world to another.",
      image: forest,
      path: '/post6',
    },
  ];

  return (
    <section className="py-10 px-8 sm:px-8 md:px-16 lg:px-16 xl:px-16 text-center bg-[#091327] roboto-regular">
      <div className="container mx-auto">
        <p className="text-[#ffc700] mb-12 text-4xl md:text-4xl font-bold">
          LATEST BLOG POSTS
        </p>
        <div className="flex flex-wrap -mx-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8"
            >
              <div
                className="bg-[#003073] border border-gray-300 rounded-2xl overflow-hidden transition-transform transition-shadow hover:scale-105 hover:shadow-xl"
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[#ffc700] text-2xl mb-3">{post.title}</h3>
                  <p className="text-white mb-4 flex-grow">{post.description}</p>
                  <Link
                    to={post.path}
                    className="bg-[#ffc700] text-[#091327] inline-block px-6 py-2 rounded-lg hover:bg-[#e6b800] transition-colors duration-300"
                  >
                    Continue Reading →
                  </Link>
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
