import React from 'react';

import '../styles/VideoItem.css';

const VideoItem = ({ video, handleVideoSelect, handleVideoSave }) => {
    return (
        <div className='container card'>
            <div className='row'>
                <div className='col-7'>
                    <img 
                        width="120" height="90"
                        src={video.snippet.thumbnails.default.url}
                        alt={video.snippet.title}
                        onClick={() => handleVideoSelect(video)} />
                </div>
                <div className='col-5'>
                    {video.snippet.title.slice(0, 20) + '...'}
                </div>
            </div>
            <div className="row">
                <div className="col rightAlign">
                    <input type="button"
                           value="Save"
                           className="btn btn-sm btn-primary"
                           onClick={() => handleVideoSave(video)} />
                </div>
            </div>
        </div>
    )
}

export default VideoItem;