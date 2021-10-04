import React, { useState } from "react";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import "../components/ProductModal.css";

export const ProductModal = ({ modal, setModal }) => {
  let { id } = useParams();
  const [nameValue, setNameValue] = useState(" ");
  const [countValue, setCountValue] = useState(" ");
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "models", `${id}`), {
      name: nameValue,
      count: countValue,
    });
    setNameValue(" ");
    setCountValue(" ");
  };
  return (
    <div className={`container ${modal}`}>
      <div className="container-content">
        <form onSubmit={handleUpdateProduct}>
            <label>Name: </label>
          <input
            onChange={(e) => setNameValue(e.target.value)}
            value={nameValue}
            type="text"
          ></input>
           <label>Count: </label>
          <input
            onChange={(e) => setCountValue(e.target.value)}
            value={countValue}
            type="text"
          ></input>
          <button onClick={() => setModal(" ")} type="submit">submit</button>
          <button onClick={() => setModal(" ")} type="button">
            cancel
          </button>
        </form>
      </div>
    </div>
  );
};
