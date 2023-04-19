import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Carrusel() {
  const slides = [
    {
      url: 'https://i.postimg.cc/s20C3WSq/Screenshot-2023-04-18-191809.png',
    },
    {
      url: 'https://i.postimg.cc/HsQ2HCXC/Screenshot-2023-04-18-191858.png',
    },
    {
      url: 'https://i.postimg.cc/4yrHhncx/photo-2023-04-18-22-37-56.jpg',
    },

    {
      url: 'https://i.postimg.cc/d0tRFkmb/photo-2023-04-18-22-38-45.jpg',
    },
    {
      url: 'https://i.postimg.cc/wBZ1r7Wc/photo-2023-04-18-22-39-42.jpg',
    },
  ];

  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.url;
    });
  }, [slides]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const imgAnterior = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const imgPosterior = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const imagen = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[600px] w-[90%] m-auto pb-20 px-4 relative group md:h-[800px] lg:w-[60%] lg:h-[700px] 2xl:w-[50%] 2xl:h-[80vh] ur:w-[50%] ur:h-[900px]'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-no-repeat bg-contain duration-500'
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactLeft onClick={imgAnterior} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactRight onClick={imgPosterior} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => imagen(slideIndex)}
            className='text-2xl cursor-pointer text-textColor md:text-5xl'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;