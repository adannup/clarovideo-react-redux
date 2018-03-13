import React from 'react';
import PropTypes from 'prop-types';

const ItemTooltip = ({
  title,
  year,
  duration,
  rating_code,
  children,
  title_uri,
  votes_average,
  id,
  onHandleItemDetail,
}) => (
  <div className="item__tooltip">
    <div className="item__tooltip__Header">
      <h3 className="item__tooltip_title">{title}</h3>
      <span>{year}</span>
      <span>{duration}</span>
      <span>{votes_average}</span>
      <span className="item__tooltip_rating">{rating_code}</span>
    </div>
    <div className="item__tooltip__Info">
      <p>{children}</p>
    </div>
    <div className="item__tooltip__Footer">
      <button className="tooltip_details" onClick={() => onHandleItemDetail()}>Ver Detalles</button>
    </div>
  </div>
);

ItemTooltip.propTypes = {
  onHandleItemDetail: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  rating_code: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ])).isRequired,
  title_uri: PropTypes.string.isRequired,
  votes_average: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ItemTooltip;
