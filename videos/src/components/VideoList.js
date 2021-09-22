import React from "react";

import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const list = props.videos.map((v) => {
    return (
      <VideoItem
        video={v}
        onVideoSelect={props.onVideoSelect}
        key={v.id.videoId}
      />
    );
  });

  return <div className="ui relaxed divided list">{list}</div>;
};

export default VideoList;
