import React from 'react';

const DecEventVideo = () => {
  return (
    <div style={{ width: '100%', position: 'relative', paddingBottom: '56.25%' }}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/GSge82kU_KA?start=52&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="DecEvent Video"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </div>
  );
};

export default DecEventVideo;
