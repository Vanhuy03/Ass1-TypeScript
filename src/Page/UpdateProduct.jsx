import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProduct = ({products,updateProduct}) => {
    const {id} = useParams()
    const currentProduct = products.find((item)=>item.id ==id)
    const [inputValues,setInputValues] = useState([])
    const onHandleChange = (event)=>{
        const {name,value} = event.target
        const newData = {...inputValues,[name]:value}
        setInputValues(newData)
    }
    const onHandleSubmit = (e)=>{
        e.preventDefault()
        const dataUpdate = {...inputValues,"id":id}
        updateProduct(dataUpdate)
    }
  return (
    <div>
         <form action="" onSubmit={onHandleSubmit}>
            <h1>Add New Product</h1>
            <input type="text" name="name" id="" placeholder='Name Product' defaultValue={currentProduct?.name} onChange={onHandleChange}/>
            <input type="text" name='price' id=''placeholder='Price Product' defaultValue={currentProduct?.price} onChange={onHandleChange}/>
            <button>Update</button>
        </form>
    </div>
  )
}

export default UpdateProduct