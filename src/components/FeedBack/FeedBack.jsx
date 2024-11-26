import React from "react";

const FeedBack = ({ feedBackData }) => {
  console.log(feedBackData);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto gap-3 mt-20">
      {feedBackData.map((feedback) => (
        <div
          key={feedback.reviewId}
          className="card bg-blue-400 text-primary-content"
        >
          <div className="card-body">
            <div className="flex justify-between items-center gap-1">
              <div>
              <img
                src={feedback.userImg}
                alt=""
                className="w-12 h-12 rounded-full"
              />
              </div>
              <h2 className="card-title ml-4">{feedback.name}</h2>
              <p>Date: {new Date().toLocaleDateString()}</p>
            </div>
            <p>{feedback.review}</p>
            <div className="card-actions justify-end items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBack;
