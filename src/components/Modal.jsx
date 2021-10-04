import React, { useState } from "react";

import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "../components/Modal.css";
export const Modal = ({ modal, setModal }) => {
  const initialState = {
    name: " ",
    imageUrl: " ",
    count: " ",
    height: " ",
    width: " ",
    weight: " ",
  };
  const [state, setState] = useState(initialState);
  const { name, imageUrl, count, height, width, weight } = state;
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "models"), {
      name: state.name,
      imageUrl: state.imageUrl,
      count: state.count,
      size: { height: Number(state.height), width: Number(state.width) },
      weight: state.weight,
      comments: [],
    });
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className={`container ${modal}`}>
      <div className="container-content">
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
          <input
            onChange={handleInputChange}
            Name="name"
            type="text"
            placeholder="Name"
            value={name}
          ></input>
          <label>ImgUrl: </label>
          <input
            onChange={handleInputChange}
            name="imageUrl"
            type="text"
            placeholder="ImgLink"
            value={imageUrl}
          ></input>
            <label>Count: </label>
          <input
            onChange={handleInputChange}
            name="count"
            type="text"
            placeholder="Count"
            value={count}
          ></input>
            <label>Width: </label>
          <input
            onChange={handleInputChange}
            name="width"
            type="text"
            placeholder="width"
            value={width}
          ></input>
            <label>Height: </label>
          <input
            onChange={handleInputChange}
            name="height"
            type="text"
            placeholder="height"
            value={height}
          ></input>
            <label>Weight: </label>
          <input
            onChange={handleInputChange}
            name="weight"
            type="text"
            placeholder="weight"
            value={weight}
          ></input>
          <button type="submit" name="submit">
            add
          </button>
          <button onClick={() => setModal(" ")} type="button">
            cancel
          </button>
        </form>
      </div>
    </div>
  );
};
