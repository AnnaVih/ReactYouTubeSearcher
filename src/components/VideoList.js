import React from 'react'
import PropTypes from 'prop-types'

import VideoItem from './VideoItem'

const VideoList = ({videos}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} key={video.id.videoId}/>
    })

    return (
        <div className="col-8 mt-4">
            {renderedList}
        </div>
    )
}

VideoList.propTypes = {
    videos: PropTypes.array.isRequired
}

export default VideoList

