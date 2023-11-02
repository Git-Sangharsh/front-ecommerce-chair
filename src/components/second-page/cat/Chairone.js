import React from "react";
import "./Chairone.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Chairone = () => {
  const [typeOne, setTypeOne] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/getImage")
      // .then((res) => setImage(res.data[3].image))
      .then((res) => setTypeOne(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log("type one is ", typeOne);

  return (
    <div className="chairone">
      <div className="chairone-wrapper">
        <div clasName="typeone-outer-div">
          {typeOne ? (
            typeOne.map((i) => (
              <div className="typeone-map-div" key={i.id}>
                <img src={`http://localhost:4000/images/${i.image}`} alt="" />
              </div>
            ))
          ) : (
            <h1>image is loading</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chairone;
