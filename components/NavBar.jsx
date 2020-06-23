export default function NavBar() {
  return(
      <section className="header-area">
        <div className="navbar-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="#">
                    <h3 style={{color: 'white'}}>Palma's Bakery</h3>
                  </a>

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarEight"
                          aria-controls="navbarEight" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarEight">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="page-scroll" href="#home">Nosotros</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">Servicios</a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#contact">Contáctenos</a>
                      </li>
                    </ul>
                  </div>

                </nav>
              </div>
            </div>
          </div>
        </div>

        <div id="home" className="slider-area">
          <div className="bd-example">
            <div id="carouselOne" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item bg_cover active"
                     style={{backgroundImage: 'url(assets/images/about-slide1.opacity.jpg)'}}>
                  <div className="carousel-caption">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-sm-10">
                          <h2 className="carousel-title">Te acompañamos en tus momentos más dulces</h2>
                          <ul className="carousel-btn rounded-buttons">
                            <li><a className="main-btn rounded-one" href="#contact">Contáctenos</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
