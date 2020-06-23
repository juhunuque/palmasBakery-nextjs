export default function NavBar() {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="about-image text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-offset="100">
              <img src="assets/images/logo-palma.png" alt="services"/>
            </div>
            <div className="section-title text-center mt-30 pb-40">
              <h4 className="title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.6s">
                Horneamos tu idea
              </h4>
              <p className="text wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                De tu imaginación a la realidad. Te acompañamos en tus momentos especiales.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="single-about d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
              <div className="about-icon">
                <img src="assets/images/products/cupcakes_1.jpg" alt="Icon"/>
              </div>
              <div className="about-content media-body">
                <h4 className="about-title">Cupcakes</h4>
                <p className="text">
                  Los mejores cupcakes, personalizados.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-about d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.4s">
              <div className="about-icon">
                <img src="assets/images/products/cake_1.jpg" alt="Icon"/>
              </div>
              <div className="about-content media-body">
                <h4 className="about-title">Queques a tu medida</h4>
                <p className="text">
                  Diseños únicos y sabor sin igual, ¡así son nuestros queques!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-about d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
              <div className="about-icon">
                <img src="assets/images/products/dessert_1.jpg" alt="Icon"/>
              </div>
              <div className="about-content media-body">
                <h4 className="about-title">Deliciosos postres</h4>
                <p className="text">
                  Te ofrecemos exquisitos postres. ¿Tienes un evento? ¿Tienes un antojo? Tenemos el postre ideal para ti.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-about d-sm-flex mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.8s">
              <div className="about-icon">
                <img src="assets/images/products/box_1.jpg" alt="Icon"/>
              </div>
              <div className="about-content media-body">
                <h4 className="about-title">Regalos diferentes</h4>
                <p className="text">
                  Si necesitas un regalo, tenemos una opción especial y deliciosa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
