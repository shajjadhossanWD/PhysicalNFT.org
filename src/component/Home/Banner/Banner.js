import React from "react";
import './Banner.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";
import crs1 from './crs-1.jpg';
import crs2 from './crs-4.jpg';
import crs3 from './crs-5.jpg';
import user from './author-5.jpg';
import PlaceABidPopUp from "../PlaceABidPopUp/PlaceABidPopUp";
import { Link } from "react-router-dom";

const Banner = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div className='banner'>
        <h1 className="hidden">hidden text</h1>
            <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        speed={1300}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper container sliderSwiper"
      >
        <SwiperSlide>
          <div className="row sliderRow">
              <div className="col-lg-6">
              <img width="100%" src={crs3} alt="slide1"/>
              </div>

              <div className="col-lg-6 sliderInfo">
               <h1 className="sliderTitle">Live Arts</h1>
                <div className="userProfile">
                  <div className="img">
                  <Link to="/user">
                   <img src={user} alt="user" className="userImg"/>
                   <span className="checkBanner"><i class="fas fa-check-circle"></i></span>

                  </Link>
                  </div>
                  <div className="detailUser">
                   <Link to="/user" className="userLink" >
                    <b>Jimmy Wright</b>
                   </Link>
                    <p>@jimmywright</p>
                    
                   </div>
                </div>

                <div className="row priceDetail">
                    <div className="col-12 col-md-6 col-lg-6 detail1">
                        <p>Current Bid</p>
                        <h1>3.14 ETH</h1>
                        <p>($1255.14)</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 detail2">
                    <p>Auction end in</p>
                        <h1>0h 0m 0s</h1>
                        <p>(January 18,2022)</p>
                    </div>
                </div>
                <div className="btnDiv">
                 <button onClick={handleClickOpen} className="btn1">Place a bid</button>
                 <button className="btn2">View art work</button>
              </div>

              </div>

             
                 
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="row sliderRow">
              <div className="col-lg-6">
              <img width="100%" src={crs1} alt="slide2" />
              </div>


              <div className="col-lg-6 sliderInfo">
               <h1 className="sliderTitle">Glass Cube</h1>
                <div className="userProfile">
                  <div className="img">
                   <img src={user} alt="user" className="userImg"/>
                   <span className="checkBanner"><i class="fas fa-check-circle"></i></span>

                  </div>
                  <div className="detailUser">
                   <Link to="/user" className="userLink" >
                     <b>Jimmy Wright</b>
                    </Link>
                    <p>@jimmywright</p>
                   </div>
                </div>

                <div className="row priceDetail">
                    <div className="col-12 col-md-6 col-lg-6 detail1">
                        <p>Current Bid</p>
                        <h1>3.14 ETH</h1>
                        <p>($1255.14)</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 detail2">
                    <p>Auction end in</p>
                        <h1>0h 0m 0s</h1>
                        <p>(January 18,2022)</p>
                    </div>
                </div>
                <div className="btnDiv">
                 <button onClick={handleClickOpen} className="btn1">Place a bid</button>
                 <button className="btn2">View art work</button>
              </div>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="row sliderRow">
              <div className="col-lg-6">
              <img width="100%" src={crs2} alt="slider3" />

              </div>


              <div className="col-lg-6 sliderInfo">
              <h1 className="sliderTitle">Red Ocean</h1>
                <div className="userProfile">
                  <div className="img">
                   <img src={user} alt="user" className="userImg"/>
                   <span className="checkBanner"><i class="fas fa-check-circle"></i></span>

                  </div>
                  <div className="detailUser">
                  <Link to="/user" className="userLink" >
                    <b>Jimmy Wright</b>
                    <p>@jimmywright</p>
                    </Link>
                   </div>
                </div>

                <div className="row priceDetail">
                    <div className="col-12 col-md-6 col-lg-6 detail1">
                        <p>Current Bid</p>
                        <h1>3.14 ETH</h1>
                        <p>($1255.14)</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 detail2">
                    <p>Auction end in</p>
                        <h1>0h 0m 0s</h1>
                        <p>(January 18,2022)</p>
                    </div>
                </div>
                <div className="btnDiv">
                 <button className="btn1" onClick={handleClickOpen} >Place a bid</button>
                 <button className="btn2">View art work</button>
              </div>
          </div>
          </div>
          <PlaceABidPopUp
               open={open}
               handleClose={handleClose}
             >
            </PlaceABidPopUp>
        </SwiperSlide>

      </Swiper>
          
        </div>
    );
};

export default Banner;