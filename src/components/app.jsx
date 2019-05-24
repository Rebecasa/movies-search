import React, { Component } from 'react';
import SearchBar from './search-bar';
import MovieList from './movie-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
         movies: [],
       };
  }
    search = (query) => {
      console.log(query);
    }
    render() {
          const icon ="icon";
        return (
          <div>
              <div className="web-user-menu">
                <p> UserMenu </p>
              </div>
              <div className="search-movie-container">
                <div className="container-movies">
                  <MovieList movies={this.state.movies} />
                </div>
                <div className="search-container">
                  <div className="search-query">
                  <SearchBar
                                      search={this.search}
                                      className="search-bar"
                                      placeholder="Search for movies"
                                      icon={icon}
                                    />
                  </div>

                  <div className="web-search-menu">
                    <p>SearchMenu </p>
                  </div>
                </div>
              </div>
            </div>

        );
      }
}

export default App;
