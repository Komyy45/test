import React, { useState } from 'react'
import Slider from './Slider/Slider'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

export default function Body(props) {
    const [filter , setFilter] = useState("all");
    const handleClick = (filter) => {
        setFilter(filter);
    }
    return (
    <div>
        <Slider />
        <div className="categories d-flex justify-content-center align-items-center p-3 gap-3 ">
            <button type="button" class="btn btn-primary " style={{width: "160px"}} onClick={() => handleClick("all")}>All Categories</button>
            <button type="button" class="btn btn-primary "style={{width: "160px"}} onClick={() => handleClick("men's clothing")}>men</button>
            <button type="button" class="btn btn-primary" style={{width: "160px"}} onClick={() => handleClick("electronics")}>electronics</button>
            <button type="button" class="btn btn-primary" style={{width: "160px"}} onClick={() => handleClick("jewelery")}>jewelery</button>
            <button type="button" class="btn btn-primary" style={{width: "160px"}} onClick={() => handleClick("women's clothing")}>women's clothing</button>
        </div>

        <div className="prods d-flex p-2 bd-highlight flex-wrap gap-5 justify-content-center">
            {
                props.prods.map((prod , i) => {
                    if(filter === prod.category || filter === "all")
                    return (
                        <motion.div 
                        key={i}
                        layout
                        initial={{transform : "scale(0.5)" , opacity: 0}}
                        animate={{transform : "scale(1)" , opacity: 1}}
                        transition={{duration : 0.4}}
                        class="card" style={{width: "18rem"}}>
                        <img src={prod.image} className="card-img-top" alt="prod-img" height={200}/>
                        <div class="card-body">
                            <h5 class="card-title">{prod.description.substring(0 , 40)}{prod.description.length > 40 ?  "..." : null}</h5>
                            <p class="card-text">{prod.description.substring(0 , 40)}{prod.description.length > 40 ?  "..." : null}</p>
                            <Link to={`product/${prod.id}`} className="btn btn-primary">Details</Link>
                        </div>
                        </motion.div>
                    )
                    else return null
                })
            }
        </div>
    </div>
  )
}
