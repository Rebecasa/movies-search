import React, { Component } from 'react';

class SearchMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidediv: true,
      hidediv1: true,
      hidediv2: true,
    };
  }

  handleClick() {
    this.setState({ hidediv: !this.state.hidediv });
  }

  handleClick1() {
    this.setState({ hidediv1: !this.state.hidediv1 });
  }

  handleClick2() {
    this.setState({ hidediv2: !this.state.hidediv2 });
  }

  render() {

    return (
      <div className="search-menu">
        <p>Movie</p>
        <div>
          <div className="select">
            <button className="plus" onClick={this.handleClick.bind(this)} hidden={!this.state.hidediv}> + </button>
            <button className="plus" onClick={this.handleClick.bind(this)} hidden={this.state.hidediv}> - </button>
            <p>Select Genre(s)</p>
          </div>
          <div className="input" hidden={this.state.hidediv}>
            <input type="checkbox" name="category1" value="Action" />Action<br />
            <input type="checkbox" name="category2" value="Adventure" />Adventure<br />
            <input type="checkbox" name="category3" value="Animation" />Animation<br />
          </div>
        </div>
        <div className="select">
          <button className="plus" onClick={this.handleClick1.bind(this)} hidden={!this.state.hidediv1}> + </button>
          <button className="plus" onClick={this.handleClick1.bind(this)} hidden={this.state.hidediv1}> - </button>
          <p>Select min.vote</p>
        </div>
        <div className="select">
          <button className="plus" onClick={this.handleClick2.bind(this)} hidden={!this.state.hidediv2}> + </button>
          <button className="plus" onClick={this.handleClick2.bind(this)} hidden={this.state.hidediv2}> - </button>
          <p>Select language</p>
        </div>

      </div>
    );
  }
}
export default SearchMenu;
