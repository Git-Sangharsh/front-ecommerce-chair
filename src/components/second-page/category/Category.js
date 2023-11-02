import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <div className="category-wrapper">
        <Link to={"/chairs"}>
          <div className="category-wrapper-cards">
            <img
              src="https://m.media-amazon.com/images/I/71-ZmhEo-aL._AC_UF894,1000_QL80_.jpg"
              alt=""
            />
            <h1>VISIT Office Chair</h1>
          </div>
        </Link>
        <Link to={"/chairs"}>
          <div className="category-wrapper-cards">
            <img
              src="https://m.media-amazon.com/images/I/71E+vcTk0IS._AC_UF894,1000_QL80_.jpg"
              alt=""
            />
            <h1>VISIT Hotels Chair</h1>
          </div>
        </Link>

        <Link to={"/chairs"}>
          <div className="category-wrapper-cards">
            <img
              src="https://m.media-amazon.com/images/I/71-ZmhEo-aL._AC_UF894,1000_QL80_.jpg"
              alt=""
            />
            <h1>VISIT School Chair</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
