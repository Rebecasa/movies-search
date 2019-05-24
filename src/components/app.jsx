import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
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
