// Data
import homeData from '../../data/home.json';

// ---------------

function Home() {
  return (
    <section id="home" className="section full-width-section">
      <div className="section-wrapper block">
        <div className="home-left-part">
          <p className="site-des">{homeData.welcomeText}</p>
          <h1 className="entry-title">{homeData.name}</h1>
          <p className="site-info">{homeData.text}</p>

          <div style={{display:"flex", alignItems: "flex-end"}} className="social-links">
            {homeData.socialLinks.map((link, i) => (
              <a style={{display: "flex", flexDirection: "column", alignItems: "center"}} key={'social-link-' + i} href={link.to}>
                <img style={{width: "50px"}} src={link.icon} alt={`${link.text} image`}/>
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="home-right-part"></div>
      </div>
    </section>
  );
}

export default Home;
