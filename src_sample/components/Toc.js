import React, { Component } from "react";

class Toc extends Component {
  render() {
    console.info("Toc render start.");
    var lists = [];
    var data = this.props.data;
    console.log(data);
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a href="#" data-id={data[i].id} onClick={function(e){
              e.preventDefault();   //깜빡임 방지
              this.props.onChangePage(e.target.dataset.id);
          }.bind(this)}>{data[i].title}</a>
        </li>
      );
      i += 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default Toc;
