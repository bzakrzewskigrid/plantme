import oneLeave from '../assets/imgs/one-leave.png';
import fbLogo from '../assets/icons/fb-icon--black.svg';
import { ContactUsInput } from './ContactUsInput';
import { ContactUsRadioButton } from './ContactUsRadioButton';

export const ContactUs = () => {
  return (
    <section className="px-16">
      <div className="flex px-16 py-20 bg-background-green max-xl:flex-col">
        <div
          className="w-1/3 p-12 rounded-lg bg-no-repeat bg-center bg-cover relative z-20 -mr-2 max-xl:w-full max-xl:bg-cover max-xl:bg-top max-xl:-mb-2 max-xl:-mr-0"
          style={{ backgroundImage: `url(${oneLeave})` }}
        >
          <h2 className="text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-sm mb-16">
            Fill up the form and ur Team will get back to you within 24 hours. Happy to see your message!
          </p>

          <nav className="text-primary-black mb-60">
            <ul className="flex flex-col gap-2">
              <li className="flex gap-6 items-center">
                <img src={fbLogo} alt="Facebook logo" /> <a href="tel:38 063 072 0121">+38 063 072 0121</a>
              </li>

              <li className="flex gap-6 items-center">
                <img src={fbLogo} alt="Facebook logo" /> <a href="email:example@gmail.com">example@gmail.com</a>
              </li>

              <li className="flex gap-6 items-center">
                <img src={fbLogo} alt="Facebook logo" />
                <address className="not-italic">Pidmurma 5a, Lviv</address>
              </li>
            </ul>
          </nav>

          <ul className="flex gap-8">
            <li>
              <img src={fbLogo} alt="Facebook logo" width="32" />
            </li>

            <li>
              <img src={fbLogo} alt="Facebook logo" width="32" />
            </li>

            <li>
              <img src={fbLogo} alt="Facebook logo" width="32" />
            </li>
          </ul>
        </div>

        <form className="bg-white w-2/3 px-6 py-12 rounded-r-lg  max-xl:w-full">
          <div className="grid gap-4 grid-cols-2 max-xl:grid-cols-1 mb-6">
            <ContactUsInput
              required
              name="firstName"
              label="First Name"
              placeholder="John"
              type="string"
              errorMessage="This field is required. Please provide a first name."
            />
            <ContactUsInput
              required
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              type="string"
              errorMessage="This field is required. Please provide last name."
            />
            <ContactUsInput
              name="email"
              label="Email"
              placeholder="example@gmail.com"
              type="email"
              errorMessage="Please provide a valid email."
            />
            {/* todo: Add selecting phone prefix */}
            <ContactUsInput
              name="phoneNumber"
              label="Phone Number"
              placeholder="00 000 00 00"
              type="tel"
              errorMessage="Please provide a valid phone."
            />
          </div>

          <fieldset id="role" className="flex gap-8 mb-6 flex-wrap">
            <ContactUsRadioButton
              label="UI Developer"
              name="role"
              id="uiDeveloper"
              value="uiDeveloper"
              defaultChecked
            />
            <ContactUsRadioButton label="UI/UX Designer" name="role" id="uiuxDesigner" value="uiuxDesigner" />
            <ContactUsRadioButton
              label="Accessibility Expert"
              name="role"
              id="accessibilityExpert"
              value="accessibilityExpert"
            />
            <ContactUsRadioButton label="QA Engineer" name="role" id="qaEngineer" value="qaEngineer" />
            <ContactUsRadioButton label="Other" name="role" id="other" value="other" />
          </fieldset>

          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows={4}
              id="message"
              placeholder="Text here..."
              className="resize-none w-full border-primary-black border-solid border-2 focus:outline-primary-green px-2 py-3 rounded-md"
            />
          </div>

          <div className="flex w-full gap-8 mb-8">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="terms" id="terms" className="m-3 w-4 h-4 accent-primary-green" />
              <label htmlFor="terms">Accept the Terms</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="terms2" id="terms2" className="m-3 w-4 h-4 accent-primary-green" />
              <label htmlFor="terms2">Accept the Terms 2</label>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button type="submit" className="bg-primary-green px-16 py-3 text-white font-normal">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
