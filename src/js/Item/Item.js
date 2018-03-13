import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div
        className="item-wrapper"
        onMouseEnter={this.onMouseEnterItem}
        onMouseLeave={this.onMouseLeaveItem}
      >
        <img src={this.props.image_small} alt={this.props.title} />
        <div className="item__title">
          <p className="item__title_p">{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default Item;
