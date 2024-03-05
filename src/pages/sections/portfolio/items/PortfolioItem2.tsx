import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../assets/images/portfolio/items/item_01.png';
import item2 from '../../../../assets/images/portfolio/items/item_02.png';
import item3 from '../../../../assets/images/portfolio/items/item_03.png';

// Styles
import './portfolio-item.css';

// -------------------

function PortfolioItem2() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <div className="row">
          <div className="one-half width-40">
            <h2 className="entry-title section-title">
              Booket
            </h2>

            <p className="section-info">
              A solo project with a unique twist on the classic social media page to create a platform for users to share their favorite photos and moments~
            </p>

            <p>
             Utilizing AWS, React, Redux, Python, Flask, SQLAlchemy, PostgreSQL, HTML, and CSS, I designed this site from front to back. I chose to implement a book theme for a cozy and welcoming experience combined with advanced CSS to make users feel like they are truly writing their own story.
            </p>

            <p>
              <a href='https://photobook-xu65.onrender.com/' className="button">Check Project</a>
            </p>
          </div>
          <div className="one-half width-55 last">
            <div className="image-slider-wrapper relative block-right">
              <Swiper
                pagination={{ clickable: true }}
                loop={true}
                modules={[Pagination]}
                className="portfolio-slider">
                <SwiperSlide>
                  <img src={item1} alt="portfolio item 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={item2} alt="portfolio item 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={item3} alt="portfolio item 1" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem2;
