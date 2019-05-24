import React, { Component } from 'react';

class Movie extends Component {
  render() {
    const src = ``;
    return (
      <li className="card-container">
        <img src={src} className="image" alt="movie" />
        <div className="card-info">
          <h2 className="title">t</h2>
          <p className="description">d</p>
          <p className="date">d</p>
        </div>
      </li>
    );
  }
}

export default Movie;

