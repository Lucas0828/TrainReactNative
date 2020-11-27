import React, { Component } from 'react';
import '../styles/App.css';

import Youtube from '../apis/Youtube';
import ApiService from '../apis/ApiService';  //Spring Boot Backend용

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import SaveList from './SaveList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      favoriteVideos: [], // 즐겨찾기용
    }
  }
  
  handleSubmit = async (term) => {
    const res = await Youtube.get('/search', {
      params: { q: term }
    });
    this.setState({
      videos: res.data.items
    });
  }
  // VideoItem에서 전달된 video객체를 selectedVideo로 할당
  // selectedVideo는 videoDetail로 전달
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo : video });
    console.log('▶▶▶', this.state.selectedVideo);
  }

  handleFavoriteSelect = (video) => {
    console.log('▶▶', video);
    this.setState({ selectedVideo: video });
  }

  handleFavoriteDelete = async (id) => {
    await ApiService.removeMovie(id)
      .then(res => {
        console.info("삭제성공", res.state);
        alert("삭제 했습니다.");
        this.reloadFavoriteMovies();
      })
      .catch(err => {
        console.error("ApiService.removeMovie() 에러", err);
        alert("즐겨찾기 삭제 오류\n관리자 문의 요망");
      });
  }
  
  handleVideoSave = async (video) => {
    // alert("저장 처리");
    var temp = { 
      video_id_videoId: video.id.videoId, 
      video_snippet_title: video.snippet.title, 
      video_snippet_description: video.snippet.description };
    console.log(temp);
    //DB 저장하기
    await ApiService.addMovie(temp)
      .then(res => {
        console.info("저장성공", res.state);
        alert("저장 했습니다.");
        this.reloadFavoriteMovies();
      })
      .catch(err => {
        console.error("ApiService.addMovie() 에러", err);
        alert("즐겨찾기 저장 오류\n관리자 문의 요망");
      });
  }
  
  componentDidMount() {
    this.reloadFavoriteMovies();
  }

  reloadFavoriteMovies = async () => {
    await ApiService.fetchMovies()
          .then(res => {
            // debugger;
            let temps = res.data;
            var i = 0;
            var fvl = [];
            while (i < temps.length) {
              fvl.push({
                idx: temps[i].id,
                id: { kind: 'youtube#video', videoId: temps[i].video_id_videoId },
                snippet: { title: temps[i].video_snippet_title, description: temps[i].video_snippet_description },
              });
              i += 1;
            }
            console.log(fvl);
            this.setState({ favoriteVideos: fvl });
          })
          .catch(err => {
            console.error("ApiService.fetchMovies() 에러", err);
            alert("즐겨찾기 가져오기 오류\n관리자 문의 요망");
          });
  }

  render() {
    return (
      <div
        className='App container'
        // style={{ marginTop: '10px', backgroundColor: 'whitesmoke' }}
      >
        <div className='row'>
          <div className='col'>
            {/* 검색바 */}
            <SearchBar
              handleFormSubmit={this.handleSubmit} />
            <div className='row pt-2'>
              <div className='col-8' /*style={{ backgroundColor: 'pink' }}*/>
                {/* 유튜브 플레이어 */}
                <VideoDetail 
                  video={this.state.selectedVideo} />
                  {/* 저장 리스트 */}
                <SaveList 
                  videos={this.state.favoriteVideos} 
                  handleFavoriteSelect={this.handleFavoriteSelect}
                  handleFavoriteDelete={this.handleFavoriteDelete} />
              </div>
              <div className='col-4' /*style={{ backgroundColor: 'ivory' }}*/>
                {/* 검색 결과 */}
                <VideoList videos={this.state.videos}
                           handleVideoSelect={this.handleVideoSelect}
                           handleVideoSave={this.handleVideoSave} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
