import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import {Grid, Segment, Container} from 'semantic-ui-react';
import Video from './components/video';
import YoutubeSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import _ from 'lodash';
import {API_KEY} from './config.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: [], selectedVideo: null};
    this.search({term: 'react js'});

    this.search = this.search.bind(this);
    this.setSelectedVideo = this.setSelectedVideo.bind(this);
  }

  search(term) {
    YoutubeSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  setSelectedVideo(video) {
    this.setState({selectedVideo: video});
  }

  render() {
    const throttledSearch = _.debounce(term => this.search(term), 380);

    return (
      <div className="App">
        <Container>
          <Grid stackable columns='equal'>
            <Grid.Column width={11}>
              <SearchBar handleSearch={throttledSearch}/>
              <Video video={this.state.selectedVideo}/>
            </Grid.Column>
            <Grid.Column>
              <Segment><VideoList onSelect={this.setSelectedVideo} videos={this.state.videos} /></Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
