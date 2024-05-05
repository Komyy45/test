import React from 'react'
import img1 from '../../../assets/cyber-5244032_1920.png'
import img2 from '../../../assets/warehouse-8540045_1920.jpg'

export default function Slider() {
return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
        <img src={img1} className="d-block w-100" alt="..." style={{maxHeight : "680px"}}/>
        </div>
        <div className="carousel-item">
        <img src={img2} className="d-block w-100" alt="..." style={{maxHeight : "680px"}}/>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
  )
}
