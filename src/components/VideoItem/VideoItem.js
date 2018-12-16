import './VideoItem.css'
import React from 'react'
import PropTypes from 'prop-types'

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item list-group-item bg-light">
            <div>
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.thumbnails.medium.name} />
            </div>
            <span>{video.snippet.title}</span>
        </div>
    )
}

VideoItem.propTypes = {
    video: PropTypes.object.isRequired,
    onVideoSelect: PropTypes.func.isRequired
}

export default VideoItem