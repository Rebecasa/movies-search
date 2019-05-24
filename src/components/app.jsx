import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas,
  faSearch,
  faBars,
  faSlidersH
} from '@fortawesome/free-solid-svg-icons';

import MovieList from './movie-list';
import UserMenu from './user-menu';
import SearchBar from './search-bar';
import SearchMenu from './search-menu';

library.add(fas, faSearch, faBars, faSlidersH);

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
        const src ="src";
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
        return (
          <div>
            <div className="main-container">
              <div className="mobile-user-menu">
                <button className="mobile-user-button" onClick={this.handleClickUser.bind(this)} >
                  <FontAwesomeIcon icon="bars" />
                </button>
                <h1 className="discover">Discover</h1>
              </div>
              <div className="user-menu-m" hidden={this.state.hideUserMenu}>
                <UserMenu
                  search="search"
                  classSearch="white-search"
                />
              </div>

              <div className="web-user-menu">
                <UserMenu
                  search="search"
                  classSearch="white-search"
                />
              </div>

              <div className="mobile-search-query">
                <SearchBar
                  search={this.search}
                  className="search-bar"
                  placeholder="Search for movies"
                  icon="search"
                />
                <button className="mobile-search-menu"onClick={this.handleClickSearch.bind(this)}>
                  <FontAwesomeIcon icon="bars" />
                </button>
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
                      icon="search"
                    />
                    <SearchBar
                      search={this.searchDate}
                      className="search-bar"
                      placeholder="Year of release"
                      icon="search"
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
