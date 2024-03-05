// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../assets/images/portfolio/items/item_04.png';
import item2 from '../../../../assets/images/portfolio/items/item_05.png';
import item3 from '../../../../assets/images/portfolio/items/item_06.png';

// Styles
import './portfolio-item.css';

// -------------------

function PortfolioItem1() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <div className="row">
          <div className="one-half width-55">
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

          <div className="one-half width-40 last">
            <h2 className="entry-title section-title">Itsy Bitsy</h2>

            <p className="section-info">
              A collaborative project with a team of 4 developers to create a functional clone of Etsy~!
            </p>

            <p>
              We used a combination of React, Redux, Python, Flask, SQLAlchemy, HTML, and CSS to create a beautiful site that allows users to create accounts, login, and post/purchase items for sale.
            </p>

            <p>
              <a href='https://itsy-bitsy.onrender.com/' className="button">Check Project</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem1;
