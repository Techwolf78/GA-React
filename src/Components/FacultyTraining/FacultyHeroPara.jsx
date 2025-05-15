function FacultyHeroPara() {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-3 md:py-6 text-gray-800 overflow-hidden">
      {/* Background pattern layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px',
          backgroundColor: '#ffffff',
        }}
      />

      {/* Semi-transparent content layer (no blur) */}
      <div className="relative z-10 bg-white/90  border border-gray-300 shadow-md p-2 md:p-4  text-sm md:text-xl text-gray-700 text-left lg:text-center">
        In today’s rapidly evolving educational landscape, your institution might face significant challenges that hinder the ability to deliver high-quality instruction and foster student engagement. Outdated teaching methods, a lack of industry relevance, and limited support for faculty development can lead to disengaged educators and students alike. Recognizing these issues, we offer you targeted faculty development training designed to empower educators and elevate institutions.
      </div>
    </section>
  );
}

export default FacultyHeroPara;
