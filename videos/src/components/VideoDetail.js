import React from "react";

const VideoDetail = (props) => {
  if (!props.video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="Video Player" allowFullScreen />
      </div>
      <div className="ui segment">
        <h4 className="header">{props.video.snippet.title}</h4>
        <h4 className="header">{props.video.snippet.channelTitle}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
