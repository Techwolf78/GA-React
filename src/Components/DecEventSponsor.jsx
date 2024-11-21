import { useState, useEffect } from 'react';

// Skeleton Loader for Images
const ImageSkeleton = () => (
  <div className="h-32 w-32 bg-gray-300 animate-pulse rounded-full"></div>
);

const SponsorsAndPartners = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('sponsors-section');
    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="sponsors-section"
      className="relative py-4 px-8 md:px-16 bg-cover bg-center roboto-regular"
      style={{ backgroundImage: 'url("Event/spark.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-20"></div>

      <div className="container mx-auto text-center relative z-30">
        <h2 className="text-5xl font-semibold text-[#FFC80E] mb-4 roboto-regular">Academic Sponsors</h2>
        
        <div className="mb-12">
          <div className="flex justify-center space-x-8">
            {isVisible ? (
              <>
                <div className="w-52 h-52"><img src="Event/brands/21n.PNG" alt="Placeholder 1" className="w-52 h-52 " /></div>
                <div className="w-52 h-52"><img src="Event/brands/22n.PNG" alt="Placeholder 2" className="w-52 h-52 " /></div>
                <div className="w-52 h-52"><img src="Event/brands/23n.PNG" alt="Placeholder 3" className="w-52 h-52 " /></div>
              </>
            ) : (
              <>
                <ImageSkeleton />
                <ImageSkeleton />
                <ImageSkeleton />
              </>
            )}
          </div>
        </div>

        <h3 className="text-4xl font-bold text-[#FFC80E] mb-4 roboto-regular">BRANDS</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 ">
          {isVisible ? (
            <>
             <div className="flex justify-center items-center"><img src="Event/brands/1.png" alt="Logo 1" className="rounded-md w-full h-full object-contain" /></div>
      <div className="flex justify-center items-center"><img src="Event/brands/2.png" alt="Logo 2" className="rounded-md w-full h-full object-contain" /></div>
      <div className="flex justify-center items-center"><img src="Event/brands/3.png" alt="Logo 3" className="rounded-md w-full h-full object-contain" /></div>
      <div className="flex justify-center items-center"><img src="Event/brands/4.png" alt="Logo 4" className="rounded-md w-full h-full object-contain" /></div>
      <div className="flex justify-center items-center"><img src="Event/brands/5.png" alt="Logo 5" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/6.png" alt="Logo 6" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/7.png" alt="Logo 7" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/8.png" alt="Logo 8" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/9.png" alt="Logo 9" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/10.png" alt="Logo 10" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/11.png" alt="Logo 11" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/12.png" alt="Logo 12" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/13.png" alt="Logo 13" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/14.png" alt="Logo 14" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/15.png" alt="Logo 15" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/16.png" alt="Logo 16" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/17.png" alt="Logo 17" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/18.png" alt="Logo 18" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/19.png" alt="Logo 19" className="rounded-md w-full h-full object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Event/brands/20.png" alt="Logo 20" className="rounded-md w-full h-full object-contain" /></div>
            </>
          ) : (
            <>
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              <ImageSkeleton />
              
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SponsorsAndPartners;
