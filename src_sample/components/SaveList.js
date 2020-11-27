import React, { Component } from 'react';

class SaveList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            video: null,
        }
        console.info("SaveList constructor()")
    }
    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            {this.props.videos.map(video =>
                                <li key={video.idx} className="list-group-item">
                                    <div className="row">
                                        <div className="col">{video.snippet.title}</div>
                                        <div className="col-auto">
                                            <input 
                                                type="button" 
                                                value="View" 
                                                className="btn btn-info btn-sm"
                                                onClick={function(e) {
                                                    this.props.handleFavoriteSelect(video);
                                                }.bind(this)} />
                                            <input 
                                                type="button" 
                                                value="Delete" 
                                                className="btn btn-danger btn-sm" 
                                                onClick={function(e) {
                                                    this.props.handleFavoriteDelete(video.idx);
                                                    }.bind(this)
                                                }/>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>  
        )
    }
}

export default SaveList;