import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SHEET_ID = 'YOUR_SHEET_ID'; // Replace with your Google Sheet ID
const API_KEY = 'YOUR_API_KEY'; // Replace with your API key

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`
        );
        const rows = response.data.values;

        // Assuming the first row is the header
        const [headers, ...data] = rows;

        // Map data to blog post format
        const postsData = data.map(row => {
          return headers.reduce((acc, header, index) => {
            acc[header] = row[index];
            return acc;
          }, {});
        });

        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className="py-20 px-4 text-center bg-gray-100">
      <div className="container mx-auto">
        <p className="text-gray-900 mb-12 text-3xl font-bold underline">
          Latest Blog Posts
        </p>
        <div className="flex flex-wrap -mx-4">
          {posts.map(post => (
            <div key={post.ID} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden">
                <img
                  src={post.Image} // Use the image URL from Google Sheets
                  alt={post.Title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-gray-900 text-2xl mb-3">{post.Title}</h3>
                  <p className="text-gray-600 mb-4">{post.Description}</p>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="bg-purple-500 text-white px-6 py-2 rounded-lg"
                  >
                    Continue Reading →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedPost && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white w-full h-[90vh] rounded-t-2xl p-6 overflow-y-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-600 float-right text-2xl mb-4"
              >
                &times;
              </button>
              <p className="text-3xl font-bold mb-4">{selectedPost.DrawerTitle}</p>
              <p className="text-gray-800 text-2xl">{selectedPost.DrawerContent}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
