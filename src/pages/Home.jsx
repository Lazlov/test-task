import React, { useEffect, useState } from "react";

import { db } from "../firebase";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import styled from '@emotion/styled'
import { PostCard } from "../components/PostCard";
import { Sort } from "../components/Sort";
import { Modal } from "../components/Modal";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [modal, setModal] = useState(" ");

const Button= styled.button`
background-color: white;
border-radius: 24px;
color: black;
border: 1px solid;
cursor: pointer;
padding: 6px 15px;
margin: 3px 3px;
font-size: 13px;

&:visited,
&:link,
&:active {
  text-decoration: none;
}
&:hover{
  background-color:whitesmoke;
}
`;
const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
color: hotpink;
`

  useEffect(
    () =>
      onSnapshot(collection(db, "models"), (snapshot) => {
        const array = [];
        snapshot.docs.map((doc) => array.push({ ...doc.data(), id: doc.id }));
        setProducts(array);
      }),
    []
  );
  const handleDelete = async (id) => {
    setProducts(products.filter((item) => item.id !== id));
    await deleteDoc(doc(db, "models", `${id}`));
  };
  const sortItems = (sort) => {
    setSelectedSort(sort);
    setProducts(
      [...products].sort((a, b) => a[sort].toString().localeCompare(b[sort]))
    );
  };

  return (
    <Container>
       
      <Modal modal={modal} setModal={setModal} />
      <Button onClick={() => setModal("active")}>New</Button>
      <Sort
        value={selectedSort}
        onChange={sortItems}
        defaultValue="Sort"
        options={[
          { value: "name", name: "name" },
          { value: "count", name: "count" },
        ]}
      />

      {products && (
        <PostCard
          key={products.id}
          products={products}
          handleDelete={handleDelete}
        />
      )}
      
    </Container>
  );
};
