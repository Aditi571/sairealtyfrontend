import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ obj }) => {
  const { image1, image2, image3, image4 } = obj;

  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
  ];

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed
    arrows: true, // Show navigation arrows
  };

  return (
    <div className="max-w-3xl mx-auto relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-64">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
