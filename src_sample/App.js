import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject"; //Subject.js
import Toc from "./components/Toc";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome", // mode - read, create, update, delete...
      selected_toc_id: 2,
      welcome: { title: "Welcome to React Page!", desc: "This is React page." },
      subject: { title: "WEB 2.0", desc: "World Wide Web!" },
      toc: [
        { id: 1, title: "HTML5", desc: "HTML5 is Hyper Text Markup Language" },
        { id: 2, title: "CSS3", desc: "CSS3 is Cascading Style Sheet" },
        {
          id: 3,
          title: "JavaScript ES6",
          desc: "JavaScript is for interactive",
        },
      ],
      content: { title: "HTML", desc: "HTML is  Hyper Text Markup Language" },
    };
  }

  render() {
    console.info("App render start.");
    //mode 구분처리
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i<this.state.toc.length) {
        var data = this.state.toc[i];
        if(data.id === this.state.selected_toc_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title }
          desc={this.state.subject.desc }
          onChangePage={function(){
           this.setState({
             mode:'welcome'
           })
          }.bind(this)}>      
        </Subject>
        {/* <header>
          <h1><a href="/" onClick={//bind()안에있는 this는 App
            function(e) {
              e.preventDefault(); //화면 깜빡임 방지
              // this.state.mode = 'read'; 못씀
              this.setState({
                mode: 'read',
              });
            }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.desc}
        </header> */}
        <Toc data={this.state.toc}
          onChangePage={function(id){
            
           this.setState({
            mode:'read',
            selected_toc_id:Number(id)
           })
          }.bind(this)}></Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
