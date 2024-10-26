import { useLocation } from "react-router-dom";
import './PlayVideo.css';

const PlayVideo = () => {
  const location = useLocation();
  const { videoUrl, showData } = location.state || {}; 

  const stripAndTruncateSummary = (summary) => {
    const cleanSummary = summary.replace(/<\/?[^>]+(>|$)/g, '');  
    return cleanSummary;
  };

  return (
    <div className="playvideo-section">
      <div className="play-video">
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
      </div>

      {showData ? (
        <>
          <div className="show-details">
            <h2>{showData.show.name}</h2>
            <p>|</p>
            <p>{showData.show.language}</p>
            <p>|</p>
            <p>{showData.show.webChannel.name}</p>
          </div>

          <hr className="divider" />

          <div className="show-info">
            <p>Summary:</p>
            <p>{stripAndTruncateSummary(showData.show.summary)}</p>
            <p>Language: {showData.show.language}</p>
            <p>Type: {showData.show.type}</p>
            <p>Genre: {showData.show.genres.join(", ")}</p>
            <p>Platform: {showData.show.webChannel.officialSite}</p>

          </div>
        </>
      ) : (
        <p>No show data available</p>
      )}
    </div>
  );
};

export default PlayVideo;
