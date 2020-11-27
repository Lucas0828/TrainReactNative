import React from 'react';

import '../styles/VideoDetail.css';

const VideoDetail = ({ video }) => {
    if(!video) {
        return (
            <div className="container centerAlign">
                <div className="row">
                    <div className="col">
                        Loading...
                    </div>
                </div>
            </div>
        )
    }

    const youtubeSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="container centerAlign">
            <div className="row">
                <div className="col videoContainer">
                    <iframe title="Youtube video player"
                            allowFullScreen
                            src={youtubeSrc}
                            className="video"/>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h6>{video.snippet.title}</h6>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail;