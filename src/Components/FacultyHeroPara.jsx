// FacultyHeroPara.js
import React from 'react';

function FacultyHeroPara() {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff', color: '#333' }}>
      <style>
        {`
          .faculty-hero-text {
            font-size: 1.2rem; /* Base font size */
            text-align: left; /* Default to left alignment */
            padding: 1rem; /* Padding inside the text */
            border: 1px solid #ccc; /* Border between text and section */
            margin: 0; /* Remove default margin */
            background-color: #fff; /* White background for text */
            color: #808080; /* Grey text color */
          }

          @media (min-width: 768px) {
            .faculty-hero-text {
              font-size: 1.5rem; /* Increase font size for medium screens */
              padding-left: 4rem; /* Adjust for md screen */
              padding-right: 4rem; /* Adjust for md screen */
            }
          }

          @media (min-width: 1024px) {
            .faculty-hero-text {
              text-align: center; /* Center align for larger screens */
              font-size: 1.5rem; /* Increase font size for larger screens */
            }
          }
        `}
      </style>
      <p className="faculty-hero-text">
      In today’s rapidly evolving educational landscape, your institution might face significant challenges that hinder the ability to deliver high-quality instruction and foster student engagement. Outdated teaching methods, a lack of industry relevance, and limited support for faculty development can lead to disengaged educators and students alike. Recognizing these issues, we offer you targeted faculty development training designed to empower educators and elevate institutions.
      </p>
    </section>
  );
}

export default FacultyHeroPara;
