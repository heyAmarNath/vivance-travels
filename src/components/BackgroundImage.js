import React, { useState, useEffect } from "react";

const images = [
  "https://vivancetravels.com/extras/system/template_list/template_v1/images/TMX1512291534825461Wonder-Wander-Trip-Explore-Plane-Discover-Journey-841441.jpg",
  "https://vivancetravels.com/extras/system/template_list/template_v1/images/TMX1512291534825461beautiful-island-with-a-sandy-beach-and-boat-blue-water-117-medium.jpg",
];

const BackgroundImage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
      }}
    >
    </div>
  );
};

export default BackgroundImage;
