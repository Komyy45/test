import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { motion } from 'framer-motion'
import loading from '../../assets/R.jpg'

export default function Product() {
    const [product , setProduct] = useState();
    const params = useParams();
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res=>res.json())
            .then(json=> setProduct(json))
            .catch((err) => console.error(err));
        } , [])

        if(!product){
            return(
            <div className='d-flex justify-content-center align-items-center' style={{height: "100vh"}}>
                <div class="card" aria-hidden="true" style={{width: "18rem"}}>
                <img src={loading} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                    </p>
                    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </div>
                </div>
</div>
            )
        }
        return (
        <motion.div 
        layout
        initial={{transform : "scale(0.5)" , opacity: 0}}
        animate={{transform : "scale(1)" , opacity: 1}}
        transition={{duration : 0.7}}
        class="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            
            <div class="card" style={{width: "18rem"}}>
            <img src={product?.images[2]} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{product?.title}</h5>
            <p class="card-text">{product?.price}$</p>
            <p class="card-text">{product?.description}</p>
            <p class="card-text">stock: {product?.stock}</p>
            <p class="card-text">rate: {product?.rating}/5</p>
            <a href="#" class="btn btn-primary">buy now</a>
            </div>
            </div>
        </motion.div>
    )
}
