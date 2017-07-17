import React from 'react';
import VideoListItem from './video_list_item';
import { Item } from 'semantic-ui-react';

const VideoList = ({videos}) => {
  const videoItems = videos.map(video => {
    return <VideoListItem video={video} key={video.etag} />;
  });

  return (
    <Item.Group divided>
      {videoItems}
    </Item.Group>
  );
}

export default VideoList;