import React, { Component } from 'react';
import SearchBar from './search-bar';

class App extends Component {
  constructor(props) {
    super(props);
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
                  <p>MovieList</p>
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
