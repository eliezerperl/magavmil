import React, { useState } from 'react';

const GifToStaticImage = () => {
  const [isGifEnded, setIsGifEnded] = useState(false);

  const handleGifLoad = () => {
    // Assuming the GIF duration is known, you can set a timeout to change to static image
    setTimeout(() => {
      setIsGifEnded(true);
    }, 4900); // Adjust this time to match your GIF duration
  };

  return (
    <div className="mx-6">
      {!isGifEnded ? (
        <img
          src="/magavgif.gif" // Path to your GIF
          alt="Magav Emblem"
          className="w-24 h-24"
          onLoad={handleGifLoad} // Call the handler when the GIF loads
        />
      ) : (
        <img
          src="/magav_mil.png" // Path to the static image after GIF ends
          alt="Magav Emblem Static"
          className="w-24 h-24"
        />
      )}
    </div>
  );
};

export default GifToStaticImage;
