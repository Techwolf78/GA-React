import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Avoid Student Fall-Out Ratio In Placements?",
      description:
        "Looks like a frequent topic that is bit of a challenge right here? The placement season can be a stressful time for both students and colleges.",
      image: "Blogs/post1C.jfif",
      path: "/post1",
    },
    {
      id: 2,
      title:
        "   A Call to Integrity: Gryphon Academy's Pure Approach to Training and Placements",
      description:
        " As the festival of Diwali approaches, our hearts are filled with excitement, and our homes are adorned with radiant lights, symbolizing the victory of light over darkness.",
      image: "Blogs/post2A.jfif",
      path: "/post2",
    },
    {
      id: 3,
      title: "Technical Training: Navigating the Engineering Realm",
      description:
        "Technical trainings play a pivotal role in the world of engineering, offering a multitude of benefits for students pursuing various engineering disciplines, such as mechanical, civil, and IT.",
      image: "Blogs/post3A.jfif",
      path: "/post3",
    },
    {
      id: 4,
      title:
        "The Future of Engineering: Trainings and Skills Shaping the Industry",
      description:
        "Discussing the emerging trends and innovations in engineering, highlighting the need for specialized training and skills.",
      image: "Blogs/post4A.jfif",
      path: "/post4",
    },
    // {
    //   id: 5,
    //   title: "I would like to die on Mars. Just not on Impact.",
    //   description: "Join us on a journey to the red planet, where the possibilities are endless and the risks are high.",
    //   image: 'Blogs/nature-1.jpg',
    //   path: '/post5',
    // },
    // {
    //   id: 6,
    //   title: "The universe is under no obligation to make sense to you.",
    //   description: "Astronomy compels the soul to look upwards and leads us from this world to another.",
    //   image: 'Blogs/nature-2.png',
    //   path: '/post6',
    // },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  return (
    <section className="py-10 px-8 sm:px-8 md:px-16 lg:px-16 xl:px-16 text-center bg-[#01224F] roboto-regular">
      <div className="container mx-auto">
        <p className="text-[#ffc700] mb-12 md:mt-8 text-4xl md:text-4xl font-bold">
          Latest Blog Posts
        </p>
        <div className="flex flex-wrap -mx-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8"
            >
              <div
                className="bg-[#1e3a8a] border border-gray-300 rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-contain object-top"
                />

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[#ffc700] text-2xl mb-3">{post.title}</h3>
                  <p className="text-white mb-4 flex-grow">
                    {post.description}
                  </p>
                  <Link
                    to={post.path}
                    onClick={scrollToTop} // Add scroll to top function
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
