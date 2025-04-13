import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CommonCard = ({ singleData }) => {
  const { product_id, product_image, product_title, price } = singleData;
  return (
    <div>
      <div className="card bg-base-100 h-full shadow-xl">
        <figure className="px-5">
          <img src={product_image} alt={product_title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product_title}</h2>
          <p>{price} $</p>
          <div className="card-actions">
            <Link to={`/productDetails/${product_id}`}>
              <button className="btn  text-primary rounded-full bg-white border border-primary">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CommonCard.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default CommonCard;
