import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './Collections.css';

// import required modules
import {FreeMode, Pagination } from "swiper";
import { Card } from "react-bootstrap";

export default function App() {
  const [collection, setCollection] = useState([]);
  useEffect(()=>{
    fetch('./Collections.json')
    .then(res => res.json())
    .then(data => setCollection(data))
  },[])
  return (
    <div className="container">
    <h1 className="text-white text-start pt-5">Hot Collections</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        loop={true}
        breakpoints={{
            640:{
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768:{
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024:{
              slidesPerView: 5,
              spaceBetween: 20,
            },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
      {
        collection.map(allCollection => (
          <SwiperSlide className="text-white pb-5 ">
            <Card className="collectionCard">
               <div className="imgDivCollection">
                 <img src={allCollection.img} alt="" />
               </div>
                
                <div className="userImg1 mx-auto">
                  <img src={allCollection.userImg} alt="" />
                </div>
               <div className="collectionDescription">
                  
                 <h6>{allCollection.name}</h6>
                 <p>{allCollection.code}</p>
               </div>
            </Card>
          </SwiperSlide>
        ))
      }
        
      
      </Swiper>
    </div>
  );
}
