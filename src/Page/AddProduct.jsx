import React, { useState } from 'react'

const AddProduct = ({addProduct}) => {
    const[data,setData] = useState({})
    const onHandleChange = (event)=>{
        const{name,value} = event.target
        const newData = {...data,[name]:value}
        setData(newData)
    }
    const onHandleSubmit = (e)=>{
        e.preventDefault()
        addProduct(data)
    }
  return (
    <div>
        <form action="" onSubmit={onHandleSubmit}>
            <h1>Add New Product</h1>
            <input type="text" name="name" id="" placeholder='Name Product' onChange={onHandleChange}/>
            <input type="text" name='price' id=''placeholder='Price Product' onChange={onHandleChange}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddProduct