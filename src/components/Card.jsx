import React, { useState, useEffect } from "react";
import img_0 from "../assets/images/img_0.webp";
import img_1 from "../assets/images/img_1.webp";
import img_2 from "../assets/images/img_2.webp";
import img_3 from "../assets/images/img_3.png";
import img_4 from "../assets/images/img_4.webp";
import img_5 from "../assets/images/img_5.png"; // Background image

const Card = () => {
  const [imageIndex, setImageIndex] = useState(0);
  // Images to slide over img_5
  const images = [img_0, img_1, img_2, img_3, img_4];

  // Function to update image index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  return (
    <>
      <div
        className="w-72 h-96 border shadow-md relative" // Size of the background container
        style={{
          backgroundImage: `url(${img_5})`, // Static background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Slideshow images on top of img_5, made smaller */}
        <img
          src={images[imageIndex]}
          alt={`Slide ${imageIndex}`}
          className="absolute inset-0 m-auto" // Position in center of parent
          style={{
            width: "50%", // Make sliding images smaller (50% of the container width)
            height: "50%", // Make sliding images smaller (50% of the container height)
            objectFit: "contain", // Ensure images maintain aspect ratio
          }}
        />
      </div>
    </>
  );
};

export default Card;
