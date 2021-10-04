// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../firebase";
// import { Comments } from "../components/Comments";
// import { ProductModal } from "../components/ProductModal";
// import styled from '@emotion/styled'

// export const Product = () => {

//   const Container = styled.div`
// display:flex;
// flex-direction: column;
// justify-content: center;
// align-items:center;
// color: hotpink;
// `
// const Span = styled.div`
// display:flex;
// flex-direction: column;


// `
//   const Button= styled.button`
//   background-color: #8b8cd6;
//   color: white;
//   border-radius: 24px;
//   border: 1px solid;
//   cursor: pointer;
//   padding: 6px 15px;
//   margin: 3px 3px;
//   font-size: 13px;
//   &:hover{
//     background-color: #88aab9;
//   }
//   `;



//   let { id } = useParams();
//   const [data, setData] = useState([]);
//   const [modal, setModal] = useState(" ");
//   const [commentValue, setCommentValue] = useState(" ");
//   useEffect(() => {
//     readDoc(id);
//     console.log(data);
//   }, [modal, commentValue]);

//   const readDoc = async (id) => {
//     const docSnap = await getDoc(doc(db, "models", `${id}`));
//     if (docSnap.exists()) {
//       let newdata = { ...docSnap.data() };
      
//       setData(newdata);
//     } else {
      
//       console.log("No such document!");
//     }
//   };
//   const handleAddComment = async (e) => {
//     e.preventDefault();
//     await updateDoc(doc(db, "models", `${id}`), {
//       comments: [...data.comments, commentValue],
//     });
//     setCommentValue(" ");
//   };

//   return (
//     <Container>
//       <Span>
//        <div>Name: {data.name} </div>
//        <div> Count: {data.count} </div>
//       </Span>
//       <ProductModal modal={modal} setModal={setModal} />
//       <Button onClick={() => setModal("active")}>Edit</Button>
//       <form onSubmit={handleAddComment}>
//         <input
//           onChange={(e) => setCommentValue(e.target.value)}
//           type="text"
//           value={commentValue}
//           placeholder="Enter your comment"
//         ></input>
//         <Button type="submit">Add comment</Button>
//       </form>
      
//       {data && data.comments && <Comments comments={data.comments} />}
//     </Container>
//   );
// };


import React, { useState, useEffect } from "react";
import "../pages/Product.css"
import styled from '@emotion/styled'
import { useParams } from "react-router-dom";
import {
  
  doc,
  getDoc,
  updateDoc
  
} from "firebase/firestore";
import { db } from "../firebase";
import { Comments } from "../components/Comments";
import { ProductModal } from "../components/ProductModal";

export const Product = () => {
     const Button= styled.button`
  background-color: #8b8cd6;
  color: white;
  border-radius: 24px;
  border: 1px solid;
  cursor: pointer;
  padding: 6px 15px;
  margin: 3px 3px;
  font-size: 13px;
  &:hover{
    background-color: #88aab9;
  }
  `;



  


  let { id } = useParams();
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(" ");
 
  const [commentValue, setCommentValue] = useState(" ");
  useEffect(() => {
    
    readDoc(id);
    console.log(data);
  }, [modal, commentValue]);



  const readDoc = async (id) => {
    const docSnap = await getDoc(doc(db, "models", `${id}`));

    if (docSnap.exists()) {
      let newdata = {};
      newdata = { ...docSnap.data() };
      setData(newdata);
    } else {
      
      console.log("No such document!");
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();

    await updateDoc(doc(db, "models", `${id}`), {
      comments: [...data.comments, commentValue],
    });
    setCommentValue(" ");
  };

  console.log(data);
  return (
    <div className="product">

        <div>
      <div>Name: {data.name}</div>
      <div>Count: {data.count}</div>
        </div>
      
      <ProductModal modal={modal} setModal={setModal} />
      <Button onClick={() => setModal("active")}>Edit</Button>
      {data && data.comments && <Comments comments={data.comments} />}
      <form onSubmit={handleAddComment}>
        <input
          onChange={(e) => setCommentValue(e.target.value)}
          type="text"
          value={commentValue}
          placeholder="Enter your comment"
        ></input>
        <Button type="submit">Add comment</Button>
      </form>
      
      
      
    </div>
  );
};

