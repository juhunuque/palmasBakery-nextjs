export default function Contact() {
  return (
    <section id="contact" className="contact-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-20">
              <h3 className="title">Contáctenos</h3>
              <p className="text">
                Dejanos ser parte de tus celebraciones
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-two mt-50 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <h4 className="contact-title">Cotiza con nosotros</h4>
              <p className="text">
                Para cotizaciones, envianos un mensaje con tu idea sin ningún compromiso
                y nosotros te responderemos con el precio.
              </p>
              <ul className="contact-info">
                <li><i className="lni-money-location"></i> Zapote, San Jose, Costa Rica</li>
                <li><i className="lni-phone-handset"></i> +506 6051-4680</li>
                <li><i className="lni-envelope"></i> bakerypalmas@outlook.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form form-style-one mt-35 wow fadeIn" data-wow-duration="1.5s"
                 data-wow-delay="0.5s">
              <form id="contact-form" action="assets/contact.php" method="post">
                <div className="form-input mt-15">
                  <label>Nombre completo</label>
                  <div className="input-items default">
                    <input type="text" placeholder="Nombre completo" name="name"/>
                    <i className="lni-user"></i>
                  </div>
                </div>
                <div className="form-input mt-15">
                  <label>Email</label>
                  <div className="input-items default">
                    <input type="email" placeholder="Email" name="email"/>
                    <i className="lni-envelope"></i>
                  </div>
                </div>
                <div className="form-input mt-15">
                  <label>Tu diseño</label>
                  <div className="input-items default">
                    <textarea placeholder="¿Que tienes en mente?" name="massage"></textarea>
                    <i className="lni-pencil-alt"></i>
                  </div>
                </div>
                <p className="form-message"></p>
                <div className="form-input rounded-buttons mt-20">
                  <button type="submit" className="main-btn rounded-three">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
