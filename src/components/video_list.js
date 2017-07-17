import React from 'react';
import VideoListItem from './video_list_item';
import { Item, Header } from 'semantic-ui-react';

const VideoList = ({videos, onSelect}) => {
  const videoItems = videos.map(video => {
    return <VideoListItem video={video} key={video.etag} onSelect={onSelect} />;
  });

  return (
    <Item.Group divided>
      {videoItems}
    </Item.Group>
  );
}

export default VideoList;