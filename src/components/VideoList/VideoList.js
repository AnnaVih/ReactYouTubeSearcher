import React from 'react'
import PropTypes from 'prop-types'

import VideoItem from '../VideoItem/VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId}/>
    })

    return (
        <div className="col-sm-4 mt-4 list-group">
            {renderedList}
        </div>
    )
}

VideoList.propTypes = {
    videos: PropTypes.array.isRequired,
    onVideoSelect: PropTypes.func.isRequired
}

export default VideoList

