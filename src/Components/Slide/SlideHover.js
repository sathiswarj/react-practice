import React, { useState, useEffect } from 'react';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import './Slide.css';
import Data from './Data.json';
import PlayVideo from './PlayVideo';

const SlideHover = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);
    const [hovered, setHovered] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null); 
    const itemsPerPage = 4;
    const navigate = useNavigate();

    const fetchData = () => {
        try {
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

    const handleVideoPlayer = (id) => {
        const selectedShow = data.find(item => item.show.id === id); 
        if (selectedShow) {
            const videoId = selectedShow.show.video.url.split('v=')[1].split('&')[0]; 
            const embedUrl = `https://www.youtube.com/embed/${videoId}`; 
            navigate(`/play/${id}`, { state: { videoUrl: embedUrl, showData: selectedShow } });  
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
                    {!disablePrev && (
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
                                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                            }}
                        >
                            {data.map((item, index) => (
                                <div
                                    key={item.show.id}
                                    className="card"
                                    style={{
                                        flex: `0 0 ${100 / itemsPerPage}%`,
                                        boxSizing: 'border-box',
                                        padding: '10px',
                                        textAlign: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                    onMouseOver={() => setHovered(index)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <img
                                        src={item.show.image ? item.show.image.original : 'https://via.placeholder.com/150'}
                                        alt={item.show.name}
                                        style={{ width: '80%', height: 'auto', borderRadius: '10px' }}
                                    />
                                    <h2 style={{ fontSize: '1rem' }}>{item.show.name}</h2>

                                    {hovered === index && (
                                        <div className="hover-card">
                                            <img
                                                src={item.show.image.medium}
                                                alt={item.show.name}
                                                style={{ width: '65%', height: 'auto', borderRadius: '10px', marginTop: 5 }}
                                            />
                                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                                                <button className="btn-section" style={{ marginRight: "25px" }} onClick={() => handleVideoPlayer(item.show.id)}>Play now</button>
                                                <button className="btn-section">+</button>
                                            </div>
                                            <p> {item.show.genres[0]} </p>
                                            <p className="summary" style={{ fontSize: '12px' }}>
                                                {item.show.summary.replace(/<\/?[^>]+(>|$)/g, '').length > 100
                                                    ? `${item.show.summary.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 100)}...`
                                                    : item.show.summary.replace(/<\/?[^>]+(>|$)/g, '')}
                                            </p>
                                            <p>{item.show.language}</p>
                                        </div>
                                    )}
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
                                fontSize: 39,
                                cursor: 'pointer',
                            }}
                        />
                    )}
                </div>
            </div>
            {selectedVideo && (
                <PlayVideo data={data} />
            )}
        </>
    );
};

export default SlideHover;
