import React from 'react';

// Update this path to the correct location of your background image
const backgroundImage = 'Clgimage/try-2.jpg';

const MissionVisionSection = () => {
  return (
<section 
  className="w-full h-screen bg-contain bg-center bg-no-repeat bg-gradient- from-purple-100 to-white"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
    </section>
  );
};

export default MissionVisionSection;
