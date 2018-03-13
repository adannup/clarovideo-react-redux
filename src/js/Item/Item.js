import React, { Component } from 'react';
import ItemTooltip from './ItemTooltip';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false,
    };

    this.onMouseEnterItem = this.onMouseEnterItem.bind(this);
    this.onMouseLeaveItem = this.onMouseLeaveItem.bind(this);
  }

  onMouseEnterItem() {
    this.setState({
      isHover: true,
    });
  }

  onMouseLeaveItem() {
    this.setState({
      isHover: false,
    });
  }

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
        {this.state.isHover &&
          <ItemTooltip
            id={this.props.id}
            title_uri={this.props.title_uri}
            title={this.props.title}
            year={this.props.year}
            duration={this.props.duration}
            rating_code={this.props.rating_code}
            votes_average={this.props.votes_average}
          >
            <b>Sinopsis:</b>
            {this.props.description_large}
          </ItemTooltip>
        }
      </div>
    );
  }
}

export default Item;
