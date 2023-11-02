import React from 'react'
import './Bg.css'
import { Link } from 'react-router-dom';

const Bg = () => {
  return (
    <div className="bg">
      <Link to={"/category"}>
        <div className="bg-wrapper">
          <h1 className="bg-wrapper-h1">
            For everything else, there's Always Chair Store
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Bg