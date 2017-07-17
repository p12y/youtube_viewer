import React from 'react';
import { Image as ImageComponent, Item } from 'semantic-ui-react';

const VideoListItem = ({video}) => {
  return (
    <Item>
      <Item.Image size='small' src={video.snippet.thumbnails.default.url} />
      <Item.Content>
        <Item.Header>{video.snippet.title}</Item.Header>
        <Item.Meta>
          <span className="channel">{video.snippet.channelTitle}</span>
        </Item.Meta>
      </Item.Content>
    </Item>
  );
}

export default VideoListItem;