import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({service}) => {
    // console.log(service);
    
    const {treatment, image, description, cost, id} = service

    return (
        <div className="card bg-base-100  shadow-xl">
  <figure>
    <img
      className='h-36 rounded-xl'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {treatment}
      <div className="badge badge-secondary">${cost}</div>
    </h2>
    <p title={description}>{description.slice(0,100)}...</p>
    <div className="card-actions justify-end">
      <NavLink 
      to={`/details/${id}`}
      className="badge badge-outline bg-primary text-white font-semibold p-4">Checkout More</NavLink>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;