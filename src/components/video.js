import React from 'react';
import { Embed, Card } from 'semantic-ui-react';


const Video = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <Card fluid>
      <Embed
      id={video.id.videoId}
      placeholder={video.snippet.thumbnails.medium.url}
      source='youtube'
    />
    <Card.Content>
      <Card.Header>{video.snippet.title}</Card.Header>
      <Card.Meta>
        <span className='channel'>
          {video.snippet.channelTitle}
        </span>
      </Card.Meta>
      <Card.Description>
        {video.snippet.description}
      </Card.Description>
    </Card.Content>
    </Card>
  );
};

export default Video;