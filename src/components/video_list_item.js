import React from 'react';
import {Item} from 'semantic-ui-react';

const VideoListItem = ({video, onSelect}) => {
  return (
    <Item as="a" onClick={() => onSelect(video)}>
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