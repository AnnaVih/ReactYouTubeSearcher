import React, { Component } from 'react'
import youTube from '../apis/youTube'

import SearchBox from './SearchBox/SearchBox'
import VideoList from './VideoList/VideoList'
import VideoDetail from './VideoDetail/VideoDetail'
import GitHub from './GitHub/GitHub'

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onQuerySubmit('travel')
    }

    onQuerySubmit = async query => {
        const videos = await youTube.get('/search', {
            params: {
                q: query
            }
        })

        this.setState({
            videos: videos.data.items,
            selectedVideo: videos.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    buttonClickHandler = url => {
        window.open(url, '_blank')
    }

    render() {
        return (
            <React.Fragment>
                <SearchBox onQuerySubmit={this.onQuerySubmit}/>
                <div className="container">
                    <div className="row">
                        <VideoDetail video={this.state.selectedVideo}/>
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        <GitHub buttonClickHandler={this.buttonClickHandler}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App