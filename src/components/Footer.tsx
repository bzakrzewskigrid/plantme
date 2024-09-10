import visaLogo from '../assets/imgs/visa-logo.png';
import mastercardLogo from '../assets/imgs/mastercard-logo.png';

export const Footer = () => {
  return (
    <footer className="px-16">
      <section className="py-6 flex justify-between flex-wrap gap-16 max-xl:justify-normal">
        <form className="max-xl:w-full">
          <h2 className="text-5xl font-bold mb-6">PlantMe</h2>

          <label htmlFor="subscribeEmail" className="text-lg text-primary-black mb-6 block">
            Subscribe and be the first to know about our news and promotions.
          </label>

          <input
            id="subscribeEmail"
            name="subscribeEmail"
            type="email"
            className="text-lg min-w-80 px-3 py-2 border-b-2 border-solid border-primary-black placeholder:text-primary-light-grey focus:outline-primary-green"
            placeholder="example@gmail.com"
          />

          <button type="submit" className="bg-primary-green px-16 py-3 text-white font-normal">
            Subscribe
          </button>
        </form>

        <nav>
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <a href="about-us">About Us</a>
            </li>
            <li>
              <a href="contact-us">Contact Us</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
            <li>
              <a href="site-map">Site Map</a>
            </li>
          </ul>
        </nav>

        <div className="text-lg">
          <p className="mb-2">Contacts</p>
          <nav className="text-primary-grey">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="tel:38 063 072 0121">+38 063 072 0121</a>
              </li>

              {/* WAVE alert: Underlined text - ignored */}
              <li className="underline">
                <a href="email:plantme.store@gmail.com">plantme.store@gmail.com</a>
              </li>

              <div className="flex gap-8">
                <li>
                  <a href="https://www.visa.pl/">
                    <img src={visaLogo} alt="VISA logo" />
                  </a>
                </li>

                <li>
                  <a href="https://www.mastercard.pl/pl-pl.html">
                    <img src={mastercardLogo} alt="Mastercard logo" />
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </section>

      <hr className="w-[calc(100%+2*64px)] -ml-16 border-t-2 border-solid border-footer-light-grey " />

      <section className="py-6 text-sm grid grid-cols-3 justify-items-center">
        <p className="col-start-2">© 2022 PlantMe. All Rights Reserved</p>
        <nav className="col-start-3 text-primary-grey justify-self-end">
          <ul className="flex gap-4">
            <li>
              <a href="privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="terms-of-service">Terms of service</a>
            </li>
            <li>
              <a href="language">Language</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};
