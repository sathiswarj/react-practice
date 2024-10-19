import React, { useState, useEffect } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Slide = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const itemsPerPage = 4;

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=marvel');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
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
    setDisablePrev(currentIndex === 0);
    setDisableNext(currentIndex >= data.length - itemsPerPage);
  }, [currentIndex, data.length]);

  const goToNextSlide = () => {
    if (!disableNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (!disablePrev) {
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
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ position: 'relative', width: '80%', margin: '0 auto' }}>
        
       
        {!disablePrev && (
          <IoIosArrowDropleftCircle
            onClick={goToPreviousSlide}
            style={{
              position: 'absolute',
              top: '40%',
              left: '0',
              fontSize:39,
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
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {data.map((item, index) => (
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

      
        {!disableNext && (
          <IoIosArrowDroprightCircle
            onClick={goToNextSlide}
            style={{
              position: 'absolute',
              top: '40%',
              right: '0',
              transform: 'translateY(-50%)',
              zIndex: 1,
              fontSize:39,
              cursor: 'pointer',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Slide;
