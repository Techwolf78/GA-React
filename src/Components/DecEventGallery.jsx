import React from 'react';

function DecEventGallery() {
  return (
    <div className="px-8 md:px-16 py-12 mx-auto bg-gray-900">
      {/* Top 20% Section */}
      <div className="flex justify-between items-center mb-12 h-1/5 gap-4">
        {/* Left Side (Small Heading + Main Heading) */}
        <div className="w-3/6">
          <h3 className="text-xl font-semibold text-gray-300">EVENT GALLERY</h3>
          <h1 className="text-4xl font-bold text-white mt-2">Lorem ipsum, dolor sit amet consectetur</h1>
        </div>

        {/* Right Side (Text Paragraph + Link) */}
        <div className="w-3/6">
          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia autem nemo. Beatae, fuga obcaecati laboriosam aspernatur omnis nobis tenetur commodi.
          </p>
          <p className="mt-4 inline-block text-blue-400 font-semibold hover:underline text-center">
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Image 1 */}
        <div className="relative group transform hover:scale-110 transition-transform duration-500">
          <img
            src="Event/1.jpeg"
            alt="Event 1"
            className="w-full h-auto rounded-3xl shadow-2xl transition duration-300"
            style={{ transform: 'rotate(2deg)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
        </div>

        {/* Image 2 */}
        <div className="relative group transform hover:scale-110 transition-transform duration-500">
          <img
            src="Event/2.jpeg"
            alt="Event 2"
            className="w-full h-auto rounded-3xl shadow-2xl transition duration-300"
            style={{ transform: 'rotate(-5deg)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
        </div>

        {/* Image 3 */}
        <div className="relative group transform hover:scale-110 transition-transform duration-500">
          <img
            src="Event/3.jpeg"
            alt="Event 3"
            className="w-full h-auto rounded-3xl shadow-2xl transition duration-300"
            style={{ transform: 'rotate(3deg)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
        </div>

        {/* Image 4 */}
        <div className="relative group transform hover:scale-110 transition-transform duration-500">
          <img
            src="Event/4.jpeg"
            alt="Event 4"
            className="w-full h-auto rounded-3xl shadow-2xl transition duration-300"
            style={{ transform: 'rotate(1deg)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
        </div>

        {/* Image 5 */}
        <div className="relative group transform hover:scale-110 transition-transform duration-500">
          <img
            src="Event/5.jpeg"
            alt="Event 5"
            className="w-full h-auto rounded-3xl shadow-2xl transition duration-300"
            style={{ transform: 'rotate(-2deg)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
        </div>

        {/* Image 6 */}
        <div className="relative group transform hover:scale-110 transition-transform duration-500">
          <img
            src="Event/6.jpeg"
            alt="Event 6"
            className="w-full h-auto rounded-3xl shadow-2xl transition duration-300"
            style={{ transform: 'rotate(4deg)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
        </div>

        {/* Image 7 */}
        <div className="relative group transform hover:scale-110 transition-transform duration-500">
          <img
            src="Event/7.jpeg"
            alt="Event 7"
            className="w-full h-auto rounded-3xl shadow-2xl transition duration-300"
            style={{ transform: 'rotate(0deg)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
        </div>

        {/* Image 8 */}
        <div className="relative group transform hover:scale-110 transition-transform duration-500">
          <img
            src="Event/8.jpeg"
            alt="Event 8"
            className="w-full h-auto rounded-3xl shadow-2xl transition duration-300"
            style={{ transform: 'rotate(-3deg)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
}

export default DecEventGallery;
