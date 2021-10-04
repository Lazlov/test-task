import React from "react";
import { Link } from "react-router-dom";
import styled from '@emotion/styled'

export const Card = ({ data, handleDelete }) => {

  const Button= styled.button`
background-color: #e70e0e;
color: white;
border-radius: 24px;
border: 1px solid;
cursor: pointer;
padding: 6px 15px;
margin: 3px 3px;
font-size: 13px;


&:hover{
  background-color:red;
}
`;


const StyledLink= styled(Link)`
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
color: #773958;
`

const ButtonDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
color: #773958;
`

  return (
   <div>
      <div>
      <div>{data.id}</div>
      <div>Name: {data.name}</div>
      <div>Count: {data.count}</div>
      </div>
      <div>
      <StyledLink to={`/product/${data.id}`}>Details</StyledLink>
      <Button onClick={() => handleDelete(data.id)}>Delete</Button>
      </div>
      </div>
     
  );
};
