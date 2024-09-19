import React, { useState } from 'react';
import forest2 from '../assets/Images/forest-2.png';
import forest from '../assets/Images/forest.png';

const Blog = () => {
  const [drawerContent, setDrawerContent] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "It takes a planet to explore the universe.",
      description: "80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending.",
      image: forest2,
      drawerTitle: "Exploring the Cosmos: A Planet's Journey",
      drawerContent: `In our quest to understand the universe, we must first explore our own planet in depth. Our journey begins with an incredible adventure across diverse landscapes and cultures. Each location reveals its own unique piece of the cosmic puzzle, from ancient ruins that align with celestial events to modern observatories pushing the boundaries of our knowledge.

      As we traverse the globe, we'll dive into the rich tapestry of human exploration and the wonders of nature that mirror the grandeur of space. From the lush rainforests to the arid deserts, every environment offers a new perspective on our place in the cosmos. This exploration not only broadens our understanding but also deepens our connection to the universe and the endless possibilities it holds.

      Join us as we embark on this extraordinary journey, uncovering the mysteries of the world and beyond. Through each step, we'll discover how our earthly experiences prepare us for the cosmic adventures that await. The planet becomes a gateway to the stars, illuminating the path to a broader universe and inspiring us to reach for the cosmos.`,
    },
    {
      id: 2,
      title: "I would like to die on Mars. Just not on impact.",
      description: "Join us on a journey to the red planet, where the possibilities are endless and the risks are high.",
      image: forest,
      drawerTitle: "Living on Mars: The Ultimate Space Odyssey",
      drawerContent: `Mars, the Red Planet, has fascinated scientists and dreamers alike for decades. Our journey to Mars begins with understanding the harsh realities of living on this distant world. From its thin atmosphere and frigid temperatures to its dusty surface and potential for future colonization, Mars presents a unique set of challenges and opportunities.

      We delve into the cutting-edge technology designed to make life on Mars possible. Explore the innovations in habitat construction, life support systems, and sustainable living practices. Discover how scientists are developing new ways to grow food, generate energy, and recycle resources in the Martian environment.

      Our adventure also includes a look at the psychological and social aspects of living on Mars. How will isolation, confinement, and the vast distance from Earth impact human relationships and mental health? We discuss strategies for maintaining well-being and fostering a sense of community in the extreme conditions of Mars.

      Through detailed research, interviews with experts, and speculative scenarios, we paint a comprehensive picture of what it might be like to live on Mars. This journey into the unknown offers a glimpse of humanity's potential future and our quest to become an interplanetary species.`,
    },
    {
      id: 3,
      title: "Explore the wonders of the universe.",
      description: "Embark on a journey through the cosmos and discover the beauty of the stars.",
      image: forest2,
      drawerTitle: "Wonders of the Universe: A Cosmic Journey",
      drawerContent: `Embarking on a journey through the universe is akin to traveling through the most breathtaking landscapes imaginable. Our exploration begins with the stunning visuals of deep space, from the mesmerizing glow of nebulae to the intricate patterns of galaxies.

      We explore the life cycles of stars, from their birth in stellar nurseries to their ultimate demise as supernovae or black holes. Each stage of a star's life reveals different aspects of cosmic evolution and contributes to the grand tapestry of the universe.

      Our journey also takes us to the edges of the observable universe, where we encounter the most mysterious and distant phenomena. From the enigmatic dark matter and dark energy to the incredible gravitational waves detected by observatories, these discoveries challenge our understanding of the cosmos and push the boundaries of scientific knowledge.

      As we delve deeper, we'll examine the fundamental forces and particles that govern the universe. The quest to understand these fundamental aspects leads to exciting discoveries and revolutionary theories that reshape our comprehension of reality.

      Join us as we traverse the cosmic landscape, unveiling the wonders of the universe and gaining insight into the mysteries that lie beyond our current reach. This journey promises to expand your perspective and deepen your appreciation for the vast and beautiful cosmos we call home.`,
    },
    {
      id: 4,
      title: "The Secrets of Black Holes Revealed",
      description: "Uncover the mysteries of black holes and their impact on the fabric of space-time.",
      image: forest,
      drawerTitle: "Black Holes: Unveiling the Unknown",
      drawerContent: `Black holes, the most mysterious and enigmatic objects in the universe, have captivated the imagination of scientists and the public alike. Our exploration into black holes begins with understanding their formation and the fundamental principles that govern them.

      We delve into the mechanics of black holes, including the event horizon, singularity, and the effects of extreme gravity on space-time. Discover how black holes warp the fabric of the universe and influence the behavior of matter and light.

      Recent advancements in observational technology have provided new insights into black holes, including the first-ever image of a black hole’s event horizon captured by the Event Horizon Telescope. We discuss the significance of these findings and their implications for our understanding of the cosmos.

      Our journey also explores the theoretical aspects of black holes, such as the information paradox and the potential for black holes to connect to other regions of space-time through wormholes. These concepts challenge our current theories and open up exciting possibilities for future research.

      As we unveil the secrets of black holes, we gain a deeper appreciation for the universe's complexity and the fundamental forces that shape it. This exploration offers a glimpse into the unknown and highlights the ongoing quest to unravel the mysteries of the cosmos.`,
    },
    {
      id: 5,
      title: "Journey Through the Nebula",
      description: "Explore the vibrant and colorful nebulae that light up our universe.",
      image: forest2,
      drawerTitle: "Nebulae: The Colorful Birthplaces of Stars",
      drawerContent: `Nebulae, the colorful and intricate clouds of gas and dust scattered across the universe, are the birthplaces of stars and planetary systems. Our journey through nebulae begins with a visual feast of these cosmic structures, revealing their stunning hues and complex shapes.

      We explore the different types of nebulae, including emission nebulae, reflection nebulae, and planetary nebulae. Each type provides a unique glimpse into the processes of star formation and the interactions between stellar winds and interstellar matter.

      Delve into the science behind nebulae, including the processes of nucleosynthesis and the role of magnetic fields in shaping these cosmic clouds. Discover how the light from young, hot stars illuminates the surrounding gas and dust, creating the breathtaking colors we observe.

      Our exploration also includes the role of nebulae in the broader context of galactic evolution. Learn how these regions contribute to the cycle of matter in the galaxy and influence the formation of new stars and planetary systems.

      Join us on this captivating journey through the nebulae, where the beauty of the cosmos meets the profound processes that drive the creation of new worlds. This exploration reveals the dynamic and ever-changing nature of the universe, showcasing the vibrant and awe-inspiring regions where stars are born.`,
    },
    {
      id: 6,
      title: "Stellar Phenomena You Must See",
      description: "A guide to the most awe-inspiring stellar phenomena in the night sky.",
      image: forest,
      drawerTitle: "Stellar Wonders: Phenomena of the Night Sky",
      drawerContent: `The night sky is a canvas of stunning and awe-inspiring phenomena, each offering a unique glimpse into the workings of the cosmos. Our guide to stellar phenomena begins with meteor showers, one of the most accessible and spectacular celestial events visible from Earth.

      We explore the different types of meteor showers, including the Perseids, Geminids, and Leonids, and the science behind their origins. Learn about the debris left by comets and asteroids that creates these brilliant streaks of light across the sky.

      Our journey continues with a look at the wonders of eclipses, both solar and lunar. Discover the mechanics of these events, their historical significance, and tips for observing them safely and effectively.

      We also delve into the rare and breathtaking occurrences of supernovae and novae. Explore the explosive end stages of stellar evolution and their impact on surrounding space, including the creation of neutron stars and black holes.

      Finally, we highlight the mesmerizing beauty of auroras, or the northern and southern lights. Learn about the interaction between solar wind and the Earth's magnetic field that produces these spectacular light displays.

      Join us as we explore these incredible phenomena and gain a deeper appreciation for the natural wonders of the night sky. This guide provides a comprehensive overview of the most remarkable and awe-inspiring events that make stargazing an unforgettable experience.`,
    },
  ];

  const openDrawer = (post) => {
    setDrawerContent(post);
  };

  const closeDrawer = () => {
    setDrawerContent(null);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 text-center bg-[#091327]">
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
                className="bg-[#2e4d80] border border-gray-300 rounded-2xl overflow-hidden transition-transform transition-shadow hover:scale-105 hover:shadow-xl"
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
                  <button
                    onClick={() => openDrawer(post)}
                    className="bg-[#ffc700] text-[#091327] inline-block px-6 py-2 rounded-lg hover:bg-[#e6b800] transition-colors duration-300"
                  >
                    Continue Reading →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {drawerContent && (
        <div className="fixed inset-0 bg-[#091327] bg-opacity-75 flex items-end justify-center z-50">
          <div className="bg-[#2e4d80] w-full h-[90vh] rounded-t-2xl p-6 overflow-y-auto transition-transform transform translate-y-full duration-300"
               style={{ transform: drawerContent ? 'translateY(0)' : 'translateY(100%)' }}>
            <button
              onClick={closeDrawer}
              className="text-[#ffc700] float-right text-2xl mb-4"
            >
              &times;
            </button>
            <p className="text-[#ffc700] text-3xl font-bold mb-4">{drawerContent.title}</p>
            <p className="text-white text-2xl">{drawerContent.drawerContent}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
