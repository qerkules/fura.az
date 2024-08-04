import Link from "next/link";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Footer1() {
  return (
    <>
      <footer id="footer" className="clearfix bg-footer2 pd-t81 re-hi">
        <div className="themesflat-container">
          <div className="flex footer-bottom">
            <div className="">
              <img
                src="assets/images/logo/furalogodark.png"
                alt="Truck Dealer Fura az Logo"
                className="footer-logo"
              />
            </div>

            <div className="bottom-bar-menu">
              <ul>
                <li>
                  <Link href="/#">About us</Link>
                </li>
                <li>
                  <Link href="/#">Support</Link>
                </li>
                <li>
                  <Link href="/#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/#">Privacy &amp; Policy</Link>
                </li>
              </ul>
              <ul className="social-icon">
                <li>
                  <Link href="/#">
                    <i className="icon-6" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/fura.az/">
                    <i>
                      <InstagramIcon />
                    </i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <ul className="social-icon download-apps ">
                <li className="download-link">
                  <Link href="/#">
                    <AppleIcon className="apple-link" />
                    <span>Download Fura App</span>
                  </Link>
                </li>
                <li className="download-link">
                  <Link href="/#">
                    <img
                      src="/assets/images/logo/google-play.svg"
                      className="google-play-link"
                    />
                    <span>Download Fura App</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">© Copyright.All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
