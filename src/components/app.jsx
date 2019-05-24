import React, { Component } from 'react';
import MovieList from './movie-list';
import UserMenu from './user-menu';
import SearchBar from './search-bar';
import SearchMenu from './search-menu';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      hideUserMenu: true,
      hideSearchMenu: true,
      date: 0
    };
  }

      searchDate = (date) => {
        this.setState({ date });
      }

      search = (query) => {
        const src = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&primary_release_year=${this.state.date}`;
        console.log(query);

        fetch(src)
          .then(r => r.json()).then((data) => {
            const movies = data.results;
            this.setState({ movies });
            console.log(this.state.date);
          });
      }

      handleClickUser() {
        this.setState({ hideUserMenu: !this.state.hideUserMenu });
      }
      handleClickSearch() {
        this.setState({ hideSearchMenu: !this.state.hideSearchMenu });
      }

      render() {
        const icon = "icon";
        const icon2 = "icon";

        return (
          <div>
            <div className="main-container">
              <div className="mobile-user-menu">
                <button className="mobile-user-button" onClick={this.handleClickUser.bind(this)} > Discover</button>
                <h1 className="discover">Discover</h1>
              </div>
              <div hidden={this.state.hideUserMenu}>
                <UserMenu />
              </div>

              <div className="web-user-menu">
                <UserMenu />
              </div>

              <div className="mobile-search-query">
                <SearchBar
                  search={this.search}
                  className="search-bar"
                  placeholder="Search for movies"
                  icon={icon}
                />
                <button className="mobile-search-menu"onClick={this.handleClickSearch.bind(this)}> icon</button>
              </div>
              <div className="search-mobile"hidden={this.state.hideSearchMenu}>
                <SearchMenu />
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
                    <SearchBar
                      search={this.searchDate}
                      className="search-bar"
                      placeholder="Year of release"
                      icon={icon2}
                    />
                  </div>

                  <div className="web-search-menu">
                    <SearchMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}

export default App;
