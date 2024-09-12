// Images
import servImg1 from '../../assets/images/services/service1.png';
import servImg2 from '../../assets/images/services/service2.png';
import servImg3 from '../../assets/images/services/service3.png';
import servImg4 from '../../assets/images/services/service4.png';
// import servImg5 from '../../assets/images/services/service4.png';

// Data
import serviceData from '../../data/service.json';

// -----------------------

function Service() {
  const images: string[] = [servImg1, servImg2, servImg3, servImg4];

  return (
    <section id="service" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div className="row">
            <div className="one-half width-55">
              <div className="services-wrapper">
                {/* {serviceData.servicesBoxes.map((serv, i) => ( */}
                {/* ))} */}
                <div  className={serviceData.servicesBoxes[0].className!}>
                    <img src={images[1]} alt={serviceData.servicesBoxes[0].imageAltText} />
                    <h4 className="service-title">{serviceData.servicesBoxes[0].servTitle}</h4>
                    <div className="service-text">{serviceData.servicesBoxes[0].servDesc}</div>
                  </div>
                  <div  className={serviceData.servicesBoxes[1].className!}>
                    <img src={images[2]} alt={serviceData.servicesBoxes[1].imageAltText} />
                    <h4 className="service-title">{serviceData.servicesBoxes[1].servTitle}</h4>
                    <div className="service-text">{serviceData.servicesBoxes[1].servDesc}</div>
                  </div>
                  <div  className={serviceData.servicesBoxes[2].className!}>
                    <img src={images[3]} alt={serviceData.servicesBoxes[2].imageAltText} />
                    <h4 className="service-title">{serviceData.servicesBoxes[2].servTitle}</h4>
                    <div className="service-text">{serviceData.servicesBoxes[2].servDesc}</div>
                  </div>
                  <div  className={serviceData.servicesBoxes[3].className!}>
                    <img src={images[0]} alt={serviceData.servicesBoxes[3].imageAltText} />
                    <h4 className="service-title">{serviceData.servicesBoxes[3].servTitle}</h4>
                    <div className="service-text">{serviceData.servicesBoxes[3].servDesc}</div>
                  </div>
              </div>
            </div>

            <div className="one-half width-40 last">
              <h2 className="entry-title section-title">{serviceData.title}</h2>
              <p className="section-info">{serviceData.description}</p>
              {serviceData.paragraphes.map((parg, i) => (
                <p key={'p-' + i}>{parg}</p>
              ))}

              <div className="button-group-wrapper">
                <a href='https://docs.google.com/document/d/1ludyuZUnbc3CmSyUlImthEGnENrbBMCMv8OQSDyLqYY/edit?usp=sharing' className="button">My Resume</a>
                <a href="#portfolio" className="button">
                  Check My Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
