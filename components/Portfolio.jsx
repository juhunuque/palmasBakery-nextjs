const images = {
  cupcakes: [
    'https://scontent.fsjo6-1.fna.fbcdn.net/v/t31.0-8/28161658_1051361058347551_4133085763985729502_o.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=s9HYOOMsscoAX-LSGi-&_nc_ht=scontent.fsjo6-1.fna&oh=f946d37e23da5042f81bea57d227f72f&oe=5F214754',
    'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/29028171_1061871280629862_5898439541496217600_n.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=lqRLNNs55xMAX_3kxS7&_nc_ht=scontent.fsjo6-1.fna&oh=99f44fdd51963ec10849576df29e8443&oe=5F222C6E',
    'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/25353608_1006800342803623_1592686696612932909_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=yBCs3IItlVkAX8f-iOZ&_nc_ht=scontent.fsjo6-1.fna&oh=e0e1daf04f4b3b3704ba02960f37a7aa&oe=5F23B3B3',
    'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/36470882_1146892228794433_7563383330322776064_o.jpg?_nc_cat=106&_nc_sid=0debeb&_nc_ohc=zVOwDaBTEiIAX8N-zY6&_nc_ht=scontent.fsjo6-1.fna&oh=59496f8e65721392707ee88cb4be26df&oe=5F21DFF0',
    'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/51565964_1347338525416468_5317485965638369280_o.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=5eqzsz8WUbEAX-WBDJU&_nc_ht=scontent.fsjo6-1.fna&oh=10dc6e0f225237062f6c9c8613c55129&oe=5F238DC9'
  ],
  queques: [
    {
      url: 'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/35058128_1123628174454172_6549695723330338816_o.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=-7nBoucDY2EAX-XU4RB&_nc_ht=scontent.fsjo6-1.fna&oh=c716259a77e0bfd28728e61662092af6&oe=5F2417B8',
      description: 'Queque de Stich'
    },
    {
      url: 'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/41992120_1232129916937330_2006117054309990400_o.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=cN3R6bAaPR4AX_84CFV&_nc_ht=scontent.fsjo6-1.fna&oh=76b1b54ade4aa01e6726684887d67fb7&oe=5F22D253',
      description: 'Queque para una amante de la playa'
    },
    {
      url: 'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/48389075_1304143829735938_2020647229320069120_o.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=0QJOpBsAdf4AX_PcXjo&_nc_ht=scontent.fsjo6-1.fna&oh=cd17f81a8328ebc30dba2a363ce0a47c&oe=5F22DC0D',
      description: 'Princesa Ariel'
    }
  ],
  postres: [
    {
      url: 'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/105492387_1800313976785585_2410642008591506406_o.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=UtXj5qaxyrQAX__PsSo&_nc_ht=scontent.fsjo6-1.fna&oh=061faeaeb3927c619431d742eca11f02&oe=5F2552B6',
      description: 'Torta chilena'
    },
    {
      url:'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/80437619_1638993412917643_5468906884494786560_o.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=tkdV96KDL8MAX-r1Ed7&_nc_ht=scontent.fsjo6-1.fna&oh=3e9c1e268b2bd1494bf982ce9e9a08f6&oe=5F22D4F2',
      description: 'Pie de Limón'
    },
    {
      url: 'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/32105172_1102104069939916_3474202975629475840_n.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=BWDHwYBNcmYAX-9DysO&_nc_ht=scontent.fsjo6-1.fna&oh=c393deb90cba455778a77e5e22837e27&oe=5F24BD48',
      description: 'Arrollados relleno de jalea de guayaba 🍈'
    }
  ],
  otros: [
    {
      url: 'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/69760627_1526644074152578_1695815786116939776_o.jpg?_nc_cat=108&_nc_sid=0debeb&_nc_ohc=krPOfTtJ4CIAX-I0QNy&_nc_ht=scontent.fsjo6-1.fna&oh=9f4f6e8dd58213e9c07f509f0f9c965a&oe=5F2334C8',
      description: 'Mesa dulce para baby shower'
    },
    {
      url: 'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.0-9/32202633_1102581936558796_3151219450695385088_o.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=jL4ZplX6UoIAX_nDRuT&_nc_ht=scontent.fsjo6-1.fna&oh=ed82f13eb667f00967f0f2e7c497a72c&oe=5F24046A',
      description: 'Galletas personalizadas'
    }
  ]
};


export default function Portofolio() {
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
          <div className="col-lg-4 col-sm-6 branding-3 cupcakes-category">
            <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="portfolio-image">
                <img src={images.cupcakes[0]} alt=""/>
                  <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                    <div className="portfolio-content">
                      <div className="portfolio-icon">
                        <a className="image-popup" href={images.cupcakes[0]}><i className="lni-zoom-in"></i></a>
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
          <div className="col-lg-4 col-sm-6 branding-3 cupcakes-category">
            <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="portfolio-image">
                <img src={images.cupcakes[1]} alt=""/>
                <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                  <div className="portfolio-content">
                    <div className="portfolio-icon">
                      <a className="image-popup" href={images.cupcakes[1]}><i className="lni-zoom-in"></i></a>
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
          <div className="col-lg-4 col-sm-6 branding-3 cupcakes-category">
            <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="portfolio-image">
                <img src={images.cupcakes[2]} alt=""/>
                <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                  <div className="portfolio-content">
                    <div className="portfolio-icon">
                      <a className="image-popup" href={images.cupcakes[2]}><i className="lni-zoom-in"></i></a>
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
          {/*CUPCAKES END*/}
          {/*QUEQUES*/}
          <div className="col-lg-4 col-sm-6 branding-3 queques-category">
            <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="portfolio-image">
                <img src={images.queques[0].url} alt=""/>
                <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                  <div className="portfolio-content">
                    <div className="portfolio-icon">
                      <a className="image-popup" href={images.queques[0].url}><i className="lni-zoom-in"></i></a>
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
          <div className="col-lg-4 col-sm-6 branding-3 queques-category">
            <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="portfolio-image">
                <img src={images.queques[1].url} alt=""/>
                <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                  <div className="portfolio-content">
                    <div className="portfolio-icon">
                      <a className="image-popup" href={images.queques[1].url}><i className="lni-zoom-in"></i></a>
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
          <div className="col-lg-4 col-sm-6 branding-3 queques-category">
            <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="portfolio-image">
                <img src={images.queques[2].url} alt=""/>
                <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                  <div className="portfolio-content">
                    <div className="portfolio-icon">
                      <a className="image-popup" href={images.queques[2].url}><i className="lni-zoom-in"></i></a>
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
          {/*QUEQUES END*/}
          {/*POSTRES*/}
          <div className="col-lg-4 col-sm-6 branding-3 postres-category">
            <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="portfolio-image">
                <img src={images.postres[0].url} alt=""/>
                <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                  <div className="portfolio-content">
                    <div className="portfolio-icon">
                      <a className="image-popup" href={images.postres[0].url}><i className="lni-zoom-in"></i></a>
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
          <div className="col-lg-4 col-sm-6 branding-3 postres-category">
            <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="portfolio-image">
                <img src={images.postres[1].url} alt=""/>
                <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                  <div className="portfolio-content">
                    <div className="portfolio-icon">
                      <a className="image-popup" href={images.postres[1].url}><i className="lni-zoom-in"></i></a>
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
          <div className="col-lg-4 col-sm-6 branding-3 postres-category">
            <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="portfolio-image">
                <img src={images.postres[2].url} alt=""/>
                <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                  <div className="portfolio-content">
                    <div className="portfolio-icon">
                      <a className="image-popup" href={images.postres[2].url}><i className="lni-zoom-in"></i></a>
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
          {/*POSTRES END*/}
          {/*OTROS*/}
          <div className="col-lg-4 col-sm-6 branding-3 otros-category">
            <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="portfolio-image">
                <img src={images.otros[0].url} alt=""/>
                <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                  <div className="portfolio-content">
                    <div className="portfolio-icon">
                      <a className="image-popup" href={images.otros[0].url}><i className="lni-zoom-in"></i></a>
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
          <div className="col-lg-4 col-sm-6 branding-3 otros-category">
            <div className="single-portfolio mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <div className="portfolio-image">
                <img src={images.otros[1].url} alt=""/>
                <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                  <div className="portfolio-content">
                    <div className="portfolio-icon">
                      <a className="image-popup" href={images.otros[1].url}><i className="lni-zoom-in"></i></a>
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
          {/*OTROS END*/}
        </div>
      </div>
    </section>
  );
}
