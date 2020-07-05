import { useForm } from "react-hook-form";

const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL;
const toEmail = process.env.NEXT_PUBLIC_TO_EMAIL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export default function Contact() {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async data => {

    const subject = `Palma's Bakery Cotización Web - ${data.name}`;
    const fromName = "Palma's Bakery Web";

    await fetch(`https://api.elasticemail.com/v2/email/send?apikey=${apiKey}&subject=${subject}&from=${fromEmail}&fromName=${fromName}&msgTo=${toEmail}&bodyHtml=<ul><li>Email: <a href="${data.email}">${data.email}</a></li><li>Nombre: ${data.name}</li><li>Mensaje: ${data.message}</li></ul>&encodingType=0`,
      {
        method: 'POST',
      });
    window.alert('Hemos recibido tu mensaje, pronto te estaremos contactando.');
    reset();
  };

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
              <form id="contact-form" onSubmit={handleSubmit(onSubmit)} method="post">
                <div className="form-input mt-15">
                  <label>Nombre completo</label>
                  <div className="input-items default">
                    <input type="text" placeholder="Nombre completo" name="name" ref={register({ required: true })}/>
                    <span style={{color: 'red'}}>{errors.email && "Campo requerido."}</span>
                    <i className="lni-user"></i>
                  </div>
                </div>
                <div className="form-input mt-15">
                  <label>Email</label>
                  <div className="input-items default">
                    <input type="email" placeholder="Email" name="email" ref={register({ required: true })}/>
                    <span style={{color: 'red'}}>{errors.email && "Campo requerido."}</span>
                    <i className="lni-envelope"></i>
                  </div>
                </div>
                <div className="form-input mt-15">
                  <label>Tu diseño</label>
                  <div className="input-items default">
                    <textarea placeholder="¿Que tienes en mente?" name="message" ref={register({ required: true })}></textarea>
                    <span style={{color: 'red'}}>{errors.email && "Campo requerido."}</span>
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
