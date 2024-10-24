import React, { useState, useEffect } from 'react';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import SlideHover from './SlideHover';
import Data from './Data.json';

const Slide = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const fetchData = () => {
    try {
      // Directly using imported JSON data
      setData(Data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Disable previous button if at the start
    setCurrentIndex((prevIndex) => Math.max(prevIndex, 0));
    // Disable next button if at the end
    setCurrentIndex((prevIndex) => Math.min(prevIndex, data.length - itemsPerPage));
  }, [data.length]);

  const goToNextSlide = () => {
    if (currentIndex < data.length - itemsPerPage) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div style={{ position: 'relative', width: '80%', margin: '0 auto' }}>
          {currentIndex > 0 && (
            <IoIosArrowDropleftCircle
              onClick={goToPreviousSlide}
              style={{
                position: 'absolute',
                top: '40%',
                left: '0',
                fontSize: 39,
                transform: 'translateY(-50%)',
                zIndex: 1,
                cursor: 'pointer',
              }}
            />
          )}

          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
              }}
            >
              {data.map((item) => (
                <div
                  key={item.show.id}
                  style={{
                    minWidth: `${100 / itemsPerPage}%`,
                    boxSizing: 'border-box',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  {item.show.image ? (
                    <img
                      src={item.show.image.medium}
                      alt={item.show.name}
                      style={{ width: '80%', borderRadius: '10px' }}
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                  <h2 style={{ fontSize: '1rem' }}>{item.show.name}</h2>
                </div>
              ))}
            </div>
          </div>

          {currentIndex < data.length - itemsPerPage && (
            <IoIosArrowDroprightCircle
              onClick={goToNextSlide}
              style={{
                position: 'absolute',
                top: '40%',
                right: '0',
                transform: 'translateY(-50%)',
                zIndex: 1,
                fontSize: 39,
                cursor: 'pointer',
              }}
            />
          )}
        </div>
      </div>
      <SlideHover />
    </>
  );
};

export default Slide;
