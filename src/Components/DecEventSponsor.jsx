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
      className="relative py-4 px-8 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: 'url("Event/spark.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-20"></div>

      <div className="container mx-auto text-center relative z-30">
        <h2 className="text-5xl font-semibold text-[#FFC80E] mb-4">Academic Sponsors</h2>
        
        <div className="mb-12">
          <div className="flex justify-center space-x-8">
            {isVisible ? (
              <>
                <div className="w-32 h-32"><img src="Event/image 32.png" alt="Placeholder 1" className="w-auto h-auto " /></div>
                <div className="w-32 h-32"><img src="Event/image 34.png" alt="Placeholder 2" className="w-auto h-auto " /></div>
                <div className="w-32 h-32"><img src="Event/image 33.png" alt="Placeholder 3" className="w-auto h-auto " /></div>
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

        <h3 className="text-4xl font-semibold text-[#FFC80E] mb-4">Brands</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {isVisible ? (
            <>
             <div className="flex justify-center items-center"><img src="Logos/23.jpg" alt="Logo 1" className="rounded-md w-24 h-24 object-contain" /></div>
      <div className="flex justify-center items-center"><img src="Logos/98.png" alt="Logo 2" className="rounded-md w-24 h-24 object-contain" /></div>
      <div className="flex justify-center items-center"><img src="Logos/1.jpg" alt="Logo 3" className="rounded-md w-24 h-24 object-contain" /></div>
      <div className="flex justify-center items-center"><img src="Logos/45.webp" alt="Logo 4" className="rounded-md w-24 h-24 object-contain" /></div>
      <div className="flex justify-center items-center"><img src="Logos/46.png" alt="Logo 5" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/40.jpg" alt="Logo 1" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/47.png" alt="Logo 2" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/48.jfif" alt="Logo 3" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/20.jpg" alt="Logo 4" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/49.png" alt="Logo 5" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/50.webp" alt="Logo 1" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/12.jpg" alt="Logo 2" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/7.jpg" alt="Logo 3" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/22.jpg" alt="Logo 4" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/3.jpg" alt="Logo 5" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/17.jpg" alt="Logo 1" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/51.webp" alt="Logo 2" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/52.png" alt="Logo 3" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/53.jpg" alt="Logo 4" className="rounded-md w-24 h-24 object-contain" /></div>
              <div className="flex justify-center items-center"><img src="Logos/54.webp" alt="Logo 5" className="rounded-md w-24 h-24 object-contain" /></div>
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
