import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render() {

    const { placeholder, icon } = this.props;
    return (
      <div className="search">
        <input
          type="text"
          placeholder={placeholder}
          icon={icon}
          className="search-box"
          onChange={this.handleUpdate}
        />
      </div>
    );
  }
}

export default SearchBar;
