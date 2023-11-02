import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Upload.css";

const Upload = () => {
  const [file, setFile] = useState();

  const [image, setImage] = useState();

  const [imgName, setImgName] = useState();

  const [price, setPrice] = useState();

  const [DeleteImg, setDeleteImg] = useState();

  // console.log('price is', price)
  // console.log("images is ", image);

  const handleUpload = (e) => {
    const formdata = new FormData();

    formdata.append("file", file);
    formdata.append("imgName", imgName);
    formdata.append("price", price);

    axios
      .post("http://localhost:4000/upload", formdata)
      .then((res) => {
        console.log(res);
        // After a successful upload, update the 'image' state with the new image data.
        setImage([
          ...image,
          {
            image: res.data.image,
            imgName: imgName,
            price: price,
            _id: res.data._id,
            id: res.data.id
          },
        ]);
      })
      .catch((err) => console.log("error while axios", err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/getImage")
      // .then((res) => setImage(res.data[3].image))
      .then((res) => setImage(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleName = (e) => {
    setImgName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleDeleteImg = (e) => {
    setDeleteImg(e.target.value);
  };

  // console.log('image is ',image)

  const deleteImgButton = (e) => {
    const formdata = new FormData();

    formdata.append("DeleteImg", DeleteImg);

    axios
      .post("http://localhost:4000/upload", formdata)
      .then((res) => {
        console.log(res);
        // After a successful upload, update the 'image' state with the new image data.
        setImage([
          ...image,
          {
            image: res.data.image,
            imgName: imgName,
            price: price,
            _id: res.data._id,
            id: res.data.id
          },
        ]);
      })
      .catch((err) => console.log("error while axios", err));

    setDeleteImg("");
  };

  return (
    <div className="upload">
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload}>Upload</button>

      <input type="text" onChange={handleName} placeholder="enter image name" />
      <input type="text" onChange={handlePrice} placeholder="enter price" />
      <input
        type="text"
        onChange={handleDeleteImg}
        placeholder="enter id to delete"
      />
      <button onClick={deleteImgButton}> tap to delete</button>

      <br />
      <div className="map-outer-div">
        {image ? (
          image.map((i) => (
            <div className="main-map-chairs" key={i._id}>
              <img
                src={`http://localhost:4000/images/${i.image}`}
                alt=""
                key={i._id}
                className="map-img"
              />
              <h1>{i.imgName}</h1>
              <h1>{i.price}</h1>
              <h1>{i?._id}</h1>
              <h1>{i.id}</h1>
            </div>
          ))
        ) : (
          <h1>Image is Loading</h1>
        )}
      </div>
    </div>
  );
};

export default Upload;
