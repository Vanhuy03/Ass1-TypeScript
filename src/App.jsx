import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './Page/ProductPage'
import AddProduct from './Page/AddProduct'
import UpdateProduct from './Page/UpdateProduct'

function App() {
 const [products,setProducts] = useState([])
 useEffect(()=>{
  fetch(`http://localhost:3000/products`)
  .then((response)=>response.json())
  .then((data)=>setProducts(data))
 },[])

const addProduct = (newProduct)=>{
  fetch(`http://localhost:3000/products`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(newProduct)
  })
}

const removeProduct = (id)=>{
  fetch(`http://localhost:3000/products/${id}`,{
    method:"DELETE",
  }).then(()=>setProducts(products.filter((item)=>item.id != id)))
}

const updateProduct = (product)=>{
fetch(`http://localhost:3000/products/${product.id}`,{
  method:"PATCH",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(product)
})
}

  return (
    <>
      <Routes>
        <Route path='/admin/product' element={<ProductPage products={products} removeProduct={removeProduct}/>}/>
        <Route path='/admin/product/add' element={<AddProduct  addProduct={addProduct}/>}/>
        <Route path='/admin/product/:id/edit' element={<UpdateProduct updateProduct={updateProduct} products={products}/>}/>
      </Routes>
    </>
  )
}

export default App
