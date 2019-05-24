import React, { Component } from 'react';

class Movie extends Component {
  render() {
    const src = `https://image.tmdb.org/t/p/w1280/${this.props.movie.poster_path}`;
    return (
      <li className="card-container">
        <img src={src} className="image" alt="movie" />
        <div className="card-info">
          <h2 className="title">{this.props.movie.title}</h2>
          <p className="description">{this.props.movie.overview}</p>
          <p className="date">{this.props.movie.release_date}</p>
        </div>
      </li>
    );
  }
}

export default Movie;

