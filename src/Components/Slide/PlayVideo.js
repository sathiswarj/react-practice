import { useLocation } from "react-router-dom";

const PlayVideo = () => {
  const location = useLocation();
  const { videoUrl, showData } = location.state || {}; // Extract videoUrl and showData for the clicked item

  return (
    <div>
      {videoUrl ? (
        <iframe
          width="74%"
          height="650"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Player"
          style={{ margin: "20px" }}
        />
      ) : (
        <p>No video available</p>
      )}

      {showData ? (
        <>
        <div className="" style={{ marginLeft: "22px", display:'flex' }}>
          <h2>{showData.show.name}</h2> 
          <p>{showData.show.language}</p>
          </div>  
        </>
      ) : (
        <p>No show data available</p>
      )}
    </div>
  );
};

export default PlayVideo;
