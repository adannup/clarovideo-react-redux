import React from 'react';
import PropTypes from 'prop-types';
import './styles/ItemDetails.scss';

const ItemDetails = ({ item }) => {
  const genreList = item.extendedcommon.genres.genre.map(genre => genre.desc).join(', ');

  const roleList = item.extendedcommon.roles.role.map(role => (
    <div key={role.id} className="collaborators_role"><b>{role.desc}: </b>
      {role.talents.talent.map(talent => (
        <span key={talent.id} className="collaborators_name">{talent.fullname}</span>
      ))}
    </div>
  ));
  return (
    <div className="card-view" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.9) 100%), url('${item.image_large}')` }}>
      <div className="card-view__header">
        <h1>{item.title}</h1>
      </div>
      <div className="card-view__body">
        <div className="card-view__poster">
          <img src={item.image_large} alt={item.title} />
        </div>
        <div className="card-view__details">
          <div className="card-view__details-shortinfo">
            <span>{item.title} ({item.extendedcommon.media.publishyear})</span>
            <span>{item.duration}</span>
            <span>{item.extendedcommon.media.rating.code}</span>
          </div>
          <div className="card-view__details-full-description">
            <p>{item.description_large}</p>
          </div>
          <div className="card-view__details-collaborators">
            <span><b>Género: </b>{genreList}</span>
            {roleList}
            <span><b>Título Original: </b>{item.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
    PropTypes.array,
    PropTypes.number,
  ])).isRequired,
};

export default ItemDetails;
