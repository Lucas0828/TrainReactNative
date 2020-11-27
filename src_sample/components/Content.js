import React, { Component } from "react";

class Content extends Component {
    render() {
      console.info('Content render start.');
      return (
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
  }

export default Content;