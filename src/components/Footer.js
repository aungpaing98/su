import style from "./Footer.module.css";

function Footer() {
  return (
    <div className="container-fluid bg-dark pt-5 text-white">
      <div className="container">
        <div className="row py-2 gy-5 gy-md-0">
          <div className="col-12 col-md-4 d-flex align-items-center">
            <div className="me-4">
              <img src="utils/su_logo.png" alt="YTU Logo" />
            </div>
            <div>
              <h5 className="bold">
                Yangon Technological University Student's Union
              </h5>

              <div className="logos d-flex flex-wrap">
                <div
                  className={`rounded d-flex justify-content-center align-items-center me-1 mb-1 ${style.contactLogo}`}
                >
                  <img src="utils/telegram.png" alt="Telegram account" />
                </div>
                <div
                  className={`rounded d-flex justify-content-center align-items-center me-1 mb-1 ${style.contactLogo}`}
                >
                  <img src="utils/telegram.png" alt="Telegram account" />
                </div>
                <div
                  className={`rounded d-flex justify-content-center align-items-center me-1 mb-1 ${style.contactLogo}`}
                >
                  <img src="utils/telegram.png" alt="Telegram account" />
                </div>
                <div
                  className={`rounded d-flex justify-content-center align-items-center me-1 mb-1 ${style.contactLogo}`}
                >
                  <img src="utils/telegram.png" alt="Telegram account" />
                </div>
                <div
                  className={`rounded d-flex justify-content-center align-items-center me-1 mb-1 ${style.contactLogo}`}
                >
                  <img src="utils/telegram.png" alt="Telegram account" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h5>Other Pages</h5>
            <div className="d-flex mb-2 align-items-center">
              <div className="img-fluid me-2">
                <img className="rounded-2" src="utils/cdm.png" alt="CDM" />
              </div>
              <div className="">CDM Support for RIT YIT YTU Heros</div>
            </div>
            <div className="d-flex mb-2 align-items-center">
              <div className="img-fluid me-2">
                <img className="rounded-2" src="utils/cdm.png" alt="CDM" />
              </div>
              <div className="">CDM Support for RIT YIT YTU Heros</div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h5>Contact Us</h5>
            <div className="d-flex mb-2 align-items-center">
              <div className="img-fluid me-2">
                <img
                  className="rounded-2"
                  src="utils/PinMap.png"
                  alt="Location Logo"
                />
              </div>
              <div className="">
                Insein Township, Gyogone, Near BPI BUs-stop, On Insein Road,
                Yangon, Myanmar (Burma)
              </div>
            </div>
            <div className="d-flex mb-2 align-items-center">
              <div className="img-fluid me-2">
                <img
                  className="rounded-2"
                  src="utils/EnvelopeFill.png"
                  alt="Email Logo"
                />
              </div>
              <div className="">ytustudentsunion@outlook.com</div>
            </div>
            <div className="d-flex mb-2 align-items-center">
              <div className="img-fluid me-2">
                <img
                  className="rounded-2"
                  src="utils/TelephoneFill.png"
                  alt="Telephone Logo"
                />
              </div>
              <div className="">+959 42266 6604</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
