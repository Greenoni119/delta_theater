import React from "react";

const images = [
  "banner.jpg",
  "amf.jpg",
  "elemental.jpg",
  "jones.jpg",
  "kandahar.jpg",
  "spider.jpg",
];

const delay = 3500;

const sliderStyle = {
  width: '1000px', 
};

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div style={sliderStyle} className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, idx) => (
          <div
            className="slide"
            key={idx}
            style={{ backgroundImage: `url(${image})`, width: '100%' }}
          ></div>
        ))}
      </div>

    </div>
  );
}

export default Slideshow;


