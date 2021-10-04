import React from 'react'

import { Card } from '../components/Card';

export const PostCard = ({products, handleDelete}) => {
    return (
        <div>
               {products.map(item=>{
              return(
               <Card key={item.id} data={item} handleDelete={handleDelete} />
               )
            })}
        </div>
    )
}
