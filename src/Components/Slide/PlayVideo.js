import { useLocation } from "react-router-dom";
import './PlayVideo.css'
const PlayVideo = () => {
  const location = useLocation();
  const { videoUrl, showData } = location.state || {}; 

  const stripAndTruncateSummary = (summary) => {
    const cleanSummary = summary.replace(/<\/?[^>]+(>|$)/g, '');  
    return cleanSummary 
  };


  return (
    <>
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
        <div style={{ marginLeft: "22px", display: 'flex', alignItems: 'center', gap: '30px' }}>
          <h2>{showData.show.name} </h2>
          <p>|</p>
          <p style={{ fontSize: '1.2rem'  }}>{showData.show.language}  </p>
          <p>|</p>
          <p style={{ fontSize: '1.2rem' }}>{showData.show.webChannel.name}  </p>
        </div>

 
        <hr style={{ fontSize: '1.2rem' , width:"73%",position: "absolute",marginLeft:"28px", marginTop:"3px",color:"#333335"}}/>

        <div style={{ marginLeft: "22px", display: 'flex', flexDirection:'column',  gap: '10px' }}>
        <p style={{ fontSize: '1.2rem' }}>Summary : </p>
        <p style={{ fontSize: '1.2rem' , width:"70%"}}>{stripAndTruncateSummary(showData.show.summary)}
        <p style={{ fontSize: '1.2rem'  }}>Language : {showData.show.language}</p>
        <p style={{ fontSize: '1.2rem'  }}>Type : {showData.show.type}</p>
        <p style={{ fontSize: '1.2rem'  }}>Genre : {showData.show.genres}</p>
        <p style={{ fontSize: '1.2rem' }}>Premiered: {showData.show.premiered}</p>
        <p style={{ fontSize: '1.2rem' }}>Ended: {showData.show.ended}</p>
        </p>
      </div>
      </>
      ) : (
        <p>No show data available</p>
      )}
    </div>
    </>
  );
};

export default PlayVideo;
