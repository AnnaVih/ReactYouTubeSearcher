import React from 'react'
import PropTypes from 'prop-types'

const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading ...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="col-sm-8 mt-4">
            <div>
                <iframe src={videoSrc} frameBorder="0" title={video.snippet.title} width="100%" height="300px"></iframe>
            </div>
            <div className="jumbotron jumbotron-fluid p-3">
                <div className="container">
                    <h2>{video.snippet.title}</h2>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
        )
}


VideoDetail.propTypes = {
    video: PropTypes.object
}

export default VideoDetail