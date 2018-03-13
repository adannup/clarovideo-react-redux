import React from 'react';
import './styles/ItemDetails.scss';

const ItemDetails = ({ item }) => {
  console.log(item);
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
          <span>{item.title} ({item.year})</span>
          <span>{item.duration}</span>
          <span>{item.rating_code}</span>
        </div>
        <div className="card-view__details-full-description">
          <p>{item.description_large}</p>
        </div>
        <div className="card-view__details-collaborators">
          <span><b>Género:</b></span>
          <span><b>Actor:</b></span>
          <span><b>Director:</b></span>
          <span><b>Escritor:</b></span>
          <span><b>Productor:</b></span>
          <span><b>Título Original: </b>{item.title_original}</span>
        </div>
      </div>
    </div>
  </div>

)};

export default ItemDetails;
