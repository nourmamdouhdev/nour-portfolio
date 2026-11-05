import LiveText from "./LiveText";
import { TourCoin } from "./PixelTour";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="footer-mark" aria-hidden="true">
          NOUR
        </p>
        <div className="footer-inner coin-host">
          <TourCoin id="footer" className="tour-coin-footer" />
          <div>
            <strong><LiveText text="Nour Mamdouh" /></strong>
            <p><LiveText text="// made by nour mamdouh" /></p>
          </div>
          <p><LiveText text={`© ${new Date().getFullYear()} · Giza, Egypt`} /></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
