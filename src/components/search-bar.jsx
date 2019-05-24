import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    const { placeholder, icon } = this.props;
    return (
      <div className="search">
        <FontAwesomeIcon icon={icon} id={icon}/>
        <input
          type="text"
          placeholder={placeholder}
          className="search-box"
          onChange={this.handleUpdate}
        />
      </div>
    );
  }
}

export default SearchBar;
