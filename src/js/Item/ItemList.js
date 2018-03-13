import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './styles/ItemList.scss';

const ItemList = ({ groups }) => {
  const itemList = groups.map(g => (
    <Item
      key={g.id}
      id={g.id}
      title={g.title}
      title_uri={g.title_uri}
      image_small={g.image_small}
      image_medium={g.image_medium}
      description_large={g.description_large}
      duration={g.duration}
      year={g.year}
      rating_code={g.rating_code}
      votes_average={g.votes_average}
    />
  ));

  return (
    <div className="items__container">
      {itemList}
    </div>
  );
};

ItemList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    title_uri: PropTypes.string,
    image_small: PropTypes.string,
    image_medium: PropTypes.string,
    description_large: PropTypes.string,
    duration: PropTypes.string,
    year: PropTypes.string,
    rating_code: PropTypes.string,
    votes_average: PropTypes.number,
  })).isRequired,
};

export default ItemList;
