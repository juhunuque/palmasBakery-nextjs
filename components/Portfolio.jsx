export default function Portofolio({ products }) {
  // DATA
  const cupcakes = products.filter(i => i.data.category === 'cupcakes');
  const queques = products.filter(i => i.data.category === 'queques');
  const postres = products.filter(i => i.data.category === 'postres');
  const otros = products.filter(i => i.data.category === 'otros');
  return (
    <section id="portfolio" className="portfolio-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-20">
              <h3 className="title">Nuestros productos</h3>
              <p className="text">
                Te ofrecemos gran variedad de productos con los que podras acompañar tu actividad.
                Si desea conocer más acerca de nuestros productos, te invitamos a visitar nuestras redes sociales.
              </p>
              <span className="mt-4">
                <a href="https://www.instagram.com/palmas_bakery/" target="_blank">
                  <i className="lni-instagram-original display-4"></i>
                </a>
                <a href="https://www.facebook.com/Palmas-Bakery-689040084579652" target="_blank">
                  <i className="lni-facebook-filled display-4"></i>
                </a>
              </span>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio-menu pt-30 text-center">
              <ul>
                <li data-filter="*" className="active">TODO</li>
                <li data-filter=".cupcakes-category">CUPCAKES</li>
                <li data-filter=".queques-category">QUEQUES</li>
                <li data-filter=".postres-category">POSTRES</li>
                <li data-filter=".otros-category">OTROS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row grid">
          {/*CUPCAKES*/}
          {cupcakes.map(i => (
            <div key={i.id} className="col-lg-4 col-sm-6 branding-3 cupcakes-category">
              <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <div className="portfolio-image">
                  <img src={i.data.image_url.url} alt=""/>
                  <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                    <div className="portfolio-content">
                      <div className="portfolio-icon">
                        <a className="image-popup" href={i.data.image_url.url}><i className="lni-zoom-in"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-text">
                  <h4 className="portfolio-title"><a href="#"></a></h4>
                  <p className="text"></p>
                </div>
              </div>
            </div>
          ))}
          {/*CUPCAKES END*/}
          {/*QUEQUES*/}
          {queques.map(i => (
            <div key={i.id} className="col-lg-4 col-sm-6 branding-3 queques-category">
              <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <div className="portfolio-image">
                  <img src={i.data.image_url.url} alt=""/>
                  <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                    <div className="portfolio-content">
                      <div className="portfolio-icon">
                        <a className="image-popup" href={i.data.image_url.url}><i className="lni-zoom-in"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-text">
                  <h4 className="portfolio-title"><a href="#"></a></h4>
                  <p className="text"></p>
                </div>
              </div>
            </div>
          ))}
          {/*QUEQUES END*/}
          {/*POSTRES*/}
          {postres.map(i => (
            <div key={i.id} className="col-lg-4 col-sm-6 branding-3 postres-category">
              <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <div className="portfolio-image">
                  <img src={i.data.image_url.url} alt=""/>
                  <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                    <div className="portfolio-content">
                      <div className="portfolio-icon">
                        <a className="image-popup" href={i.data.image_url.url}><i className="lni-zoom-in"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-text">
                  <h4 className="portfolio-title"><a href="#"></a></h4>
                  <p className="text"></p>
                </div>
              </div>
            </div>
          ))}
          {/*POSTRES END*/}
          {/*OTROS*/}
          {otros.map(i => (
            <div key={i.id} className="col-lg-4 col-sm-6 branding-3 otros-category">
              <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <div className="portfolio-image">
                  <img src={i.data.image_url.url} alt=""/>
                  <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                    <div className="portfolio-content">
                      <div className="portfolio-icon">
                        <a className="image-popup" href={i.data.image_url.url}><i className="lni-zoom-in"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-text">
                  <h4 className="portfolio-title"><a href="#"></a></h4>
                  <p className="text"></p>
                </div>
              </div>
            </div>
          ))}
          {/*OTROS END*/}
        </div>
      </div>
    </section>
  );
}
