import React, { useState, useEffect } from "react";

const Slider = () => {
  // State to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide titles (instead of images)
  const titles = [
    "First Slide Title",
    "Second Slide Title",
    "Third Slide Title",
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % titles.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + titles.length) % titles.length
    );
  };

  // Setting up the auto slide change every 1 second (1000 ms)
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array means this runs only once when component mounts

  return (
    <div className="relative w-full">
      {/* Carousel Title */}
      <div className="w-full h-64 flex items-center justify-center bg-gray-200">
        <h1 className="text-3xl font-bold text-center">{titles[currentSlide]}</h1>
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2"
      >
        Next
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {titles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
