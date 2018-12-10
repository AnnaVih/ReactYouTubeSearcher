import React, { Component } from 'react'
import youTube from '../apis/youTube'

import SearchBox from './SearchBox'
import VideoList from './VideoList'


class App extends Component {
    state = {
        videos: []
    }

    onQuerySubmit = async query => {
        const videos = await youTube.get('/search', {
            params: {
                q: query
            }
        })

        this.setState({videos: videos.data.items})
    }

    render() {
        return (
            <div className="container">
                <SearchBox onQuerySubmit={this.onQuerySubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App