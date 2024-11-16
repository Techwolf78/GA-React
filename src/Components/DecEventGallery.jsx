import React from 'react';

function DecEventGallery() {
  return (
    <div className="px-8 md:px-16 py-12  mx-auto bg-white ">
      {/* Top 20% Section */}
      <div className="flex justify-between items-center mb-12 h-1/5 gap-4  ">
        {/* Left Side (Small Heading + Main Heading) */}
        <div className="w-3/6">
          <h3 className="text-xl font-semibold text-gray-700">EVENT GALLERY</h3>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Lorem ipsum, dolor sit amet consectetur </h1>
        </div>

        {/* Right Side (Text Paragraph + Link) */}
        <div className="w-3/6 ">
          <p className="text-lg text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia autem nemo. Beatae, fuga obcaecati laboriosam aspernatur omnis nobis tenetur commodi. 
          </p>
          <p 
            className="mt-4 inline-block text-blue-600 font-semibold hover:underline text-center"
          >
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div className="relative group">
        <img src="Event/1.jpeg" alt="Award 1" className="w-full h-auto rounded-3xl shadow-md transition duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>

    <div className="relative group">
        <img src="Event/2.jpeg" alt="Award 2" className="w-full h-auto rounded-3xl shadow-md transition duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>

    <div className="relative group">
        <img src="Event/3.jpeg" alt="Award 3" className="w-full h-auto rounded-3xl shadow-md transition duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>

    <div className="relative group">
        <img src="Event/4.jpeg" alt="Award 4" className="w-full h-auto rounded-3xl shadow-md transition duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>

    <div className="relative group">
        <img src="Event/5.jpeg" alt="Award 5" className="w-full h-auto rounded-3xl shadow-md transition duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>

    <div className="relative group">
        <img src="Event/6.jpeg" alt="Award 6" className="w-full h-auto rounded-3xl shadow-md transition duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>

    <div className="relative group">
        <img src="Event/7.jpeg" alt="Award 7" className="w-full h-auto rounded-3xl shadow-md transition duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>

    <div className="relative group">
        <img src="Event/8.jpeg" alt="Award 8" className="w-full h-auto rounded-3xl shadow-md transition duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
    </div>
</div>


    </div>
  );
}

export default DecEventGallery;
