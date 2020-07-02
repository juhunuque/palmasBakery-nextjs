export default function Footer() {
  return (
    <footer id="footer" className="footer-area">

      <div className="footer-copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="copyright text-center text-lg-left mt-10">
                <p className="text">
                  Palma's Bakery <span style={{color: '#69CBC4'}}>Sweet moments</span>
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-logo text-center mt-10">
              </div>
            </div>
            <div className="col-lg-5">
              <ul className="social text-center text-lg-right mt-10">
                <li>
                  <a href="https://api.whatsapp.com/send?phone=+50660514680" target="_blank">
                    <i className="lni-whatsapp">

                    </i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Palmas-Bakery-689040084579652" target="_blank">
                    <i className="lni-facebook-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/palmas_bakery/" target="_blank">
                    <i className="lni-instagram-original"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
