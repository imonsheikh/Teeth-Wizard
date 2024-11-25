import React from 'react';
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className=" bg-base-200 w-[80%] mx-auto max-w-[1000px]">
  <div className=" flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;