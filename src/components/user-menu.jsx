import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class UserMenu extends Component {
  render() {
    const { search,classSearch } = this.props;

    return (
      <div className="user-menu">
        <div className="user-menu-text">

          <div className="user-icon">
            <h3 className="name yellow">Co-Hire</h3>
            <p className="arrow-white"> ^ </p>
          </div>
          <div className="user-icon">
            <h3 className="discover-sm yellow">Discover</h3>
            <FontAwesomeIcon icon={search} className={classSearch} />
          </div>

          <div className="watched-block">
            <h3 className="watched yellow">Watched</h3>
            <div className="border-bottom" />
            <p className="sub-menu-item">Movies</p>
            <p className="sub-menu-item">TV Shows</p>
          </div>

          <div className="saved-block">
            <h3 className="saved yellow">Saved</h3>
            <div className="border-bottom" />
            <p className="sub-menu-item">Movies</p>
            <p className="sub-menu-item">TV Shows</p>
          </div>
        </div>
      </div>
    );
  }
}
export default UserMenu;
