import React from 'react';


const UserMenu = () => {
  return (
    <div className="user-menu">
      <div className="user-menu-text">
        <h3 className="name yellow">Co-Hire</h3>
        <h3 className="discover yellow">Discover</h3>

        <div className="watched-block">
          <h3 className="watched yellow">Watched</h3>
          <p className="yellow">Movies</p>
          <p className="yellow">TV Shows</p>
        </div>

        <div className="saved-block">
          <h3 className="saved yellow">Saved</h3>
          <p className="yellow">Movies</p>
          <p className="yellow">TV Shows</p>
        </div>
      </div>
    </div>
  );
};
export default UserMenu;
