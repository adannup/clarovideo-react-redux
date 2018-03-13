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
}) => (
  <div className="item__tooltip">
    <div className="item__tooltip__Header">
      <a href={`https://www.clarovideo.com/mexico/vcard/tercernivel/${title_uri}/${id}`}><h3 className="item__tooltip_title">{title}</h3></a>
      <span>{year}</span>
      <span>{duration}</span>
      <span>{votes_average}</span>
      <span className="item__tooltip_rating">{rating_code}</span>
    </div>
    <div className="item__tooltip__Info">
      <p>{children}</p>
    </div>
    <div className="item__tooltip__Footer">
      <span className="tooltip_details"><a href={`https://www.clarovideo.com/mexico/vcard/tercernivel/${title_uri}/${id}`}>Ver Detalles</a></span>
    </div>
  </div>
);

ItemTooltip.propTypes = {
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
