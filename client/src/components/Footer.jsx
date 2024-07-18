import "../styles/Footer.scss";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <section className="footer-section">
      <div>
        <p>Translation Agency 2024</p>
        <p>Tous droits réservés.</p>
      </div>
      <div>
        <h5>Suivez-nous sur</h5>
        <div className="footer-icons">
          <AiFillFacebook className="footer-icon" />
          <AiFillLinkedin className="footer-icon" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
