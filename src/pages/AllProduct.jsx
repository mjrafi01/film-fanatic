<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { SingleProductCardDashboard } from '../dashboard/SingleProductCardDashboard';

export const AllProduct = () => {
  const [product, setProducts] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:3000/movies`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(product.filter((product) => product.id !== id));
  };

  return (
    <div className="flex flex-col items-center flex-gap-5 justify-center min-h-screen">
      <h1 className="text-5xl font-extrabold text-center my-8">All Products</h1>
      <div className="w-full max-w-7xl mx-auto my-16 flex flex-wrap justify-center gap-4">
        {product.map((movie) => (
          <SingleProductCardDashboard key={movie.id} movie={movie} onDelete={handleDeleteProduct} />
        ))}
      </div>
    </div>
  );
};
=======
import React, { useEffect, useState } from 'react'
// import { SingleProduct } from '../components/home/SingleProduct'
import { SingleProductCardDashboard } from '../dashboard/SingleProductCardDashboard'

export const AllProduct = () => {
    const [product,setProducts]=useState([])
    useEffect(()=>{
    fetch(`http://localhost:3000/movies`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
       setProducts(data)
    })
    
    
    },[])

const handleDeleteProduct=(id)=>{
    setProducts(product.filter((product)=>product.id!==id))

}


  return (
   <>
   <h1 className='text-5xl font-extrabold text-center'>All Products</h1>
   
   <div className='my-16  flex flex-wrap gap-4' >
{/* {
    product.map((shoe)=>
        <SingleProduct key={shoe.id} shoe={shoe}></SingleProduct>
    )
} */}
{
    product.map((movie)=>
        <SingleProductCardDashboard key={movie.id} movie={movie} onDelete={handleDeleteProduct} ></SingleProductCardDashboard>
    )
}

   </div>
   
   
   </>
  )
}
>>>>>>> origin/main
