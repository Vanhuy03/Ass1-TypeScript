import React from 'react'
import { Link } from 'react-router-dom'

const ProductPage = ({products,removeProduct}) => {
    const onHandleRemove = (id)=>{
        removeProduct(id)
    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {products.map((item,index)=>{
                return(
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <Link to={'/admin/product/add'}><button>Add</button></Link>
                            <button onClick={()=>onHandleRemove(item.id)}>Delete</button>
                            <Link to={`/admin/product/${item.id}/edit`}><button>Update</button></Link>
                        </td>
                    </tr>
                )
            })}
        </tbody>
        </table>
        
    </div>
  )
}

export default ProductPage