import React from "react";

const SponsorsAndPartners = () => {
  return (
    <section 
      className="relative py-4 px-8 md:px-16 bg-cover bg-center" 
      style={{ backgroundImage: 'url("Event/spark.jpg")' }}
    >
      {/* Full black overlay above the background image */}
      <div className="absolute inset-0 bg-black opacity-70 z-20"></div>

      <div className="container mx-auto text-center relative z-30">
        {/* Section Heading */}
        <h2 className="text-5xl font-semibold text-[#FFC80E] mb-4">Academic Sponsors</h2>
        
        {/* 4 Circular Logos (Big Placeholders) */}
        <div className="mb-12">
          <div className="flex justify-center space-x-8">
            <div className="flex justify-center items-center  w-32 h-32">
              <img 
                src="Event/image 32.png" 
                alt="Placeholder 1" 
                className=" w-auto h-auto" 
              /> {/* Placeholder Circle 1 */}
            </div>
            <div className="flex justify-center items-center  w-32 h-32">
              <img 
                src="Event/image 34.png" 
                alt="Placeholder 2" 
                className=" w-auto h-auto" 
              /> {/* Placeholder Circle 2 */}
            </div>
            <div className="flex justify-center items-center  w-32 h-32">
              <img 
                src="Event/image 33.png" 
                alt="Placeholder 3" 
                className=" w-auto h-auto" 
              /> {/* Placeholder Circle 3 */}
            </div>
        
          </div>
        </div>

        {/* Subheading */}
        <h3 className="text-4xl font-semibold text-[#FFC80E] mb-4">Brands</h3>

{/* Brand Logos (Grid of 5 per row) */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
  {/* Logo 1 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/morplan.png" 
      alt="Logo 1" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 2 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/replica.png" 
      alt="Logo 2" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 3 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/graphica.png" 
      alt="Logo 3" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 4 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/SDD.png" 
      alt="Logo 4" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 5 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/morplan.png" 
      alt="Logo 5" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 6 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/graphica.png" 
      alt="Logo 6" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 7 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/PM.png" 
      alt="Logo 7" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 8 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/SDD.png" 
      alt="Logo 8" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 9 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/morplan.png" 
      alt="Logo 9" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 10 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/graphica.png" 
      alt="Logo 10" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 11 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/SDD.png" 
      alt="Logo 11" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 12 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/CN.png" 
      alt="Logo 12" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 13 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/morplan.png" 
      alt="Logo 13" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 14 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/graphica.png" 
      alt="Logo 14" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 15 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/SDD.png" 
      alt="Logo 15" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 16 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/replica.png" 
      alt="Logo 16" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 17 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/morplan.png" 
      alt="Logo 17" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 18 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/graphica.png" 
      alt="Logo 18" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 19 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/SDD.png" 
      alt="Logo 19" 
      className="rounded-md" 
    />
  </div>
  {/* Logo 20 */}
  <div className="h-auto w-auto flex justify-center items-center">
    <img 
      src="Event/replica.png" 
      alt="Logo 20" 
      className="rounded-md" 
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default SponsorsAndPartners;
