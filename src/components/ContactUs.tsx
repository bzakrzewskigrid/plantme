import oneLeave from '../assets/imgs/one-leave.png';
import fbLogo from '../assets/icons/fb-icon--black.svg';
import { ContactUsInput } from './ContactUsInput';

export const ContactUs = () => {
  return (
    <section className="px-16">
      <div className="flex px-16 py-20 bg-background-green">
        <div
          className="w-1/3 p-12 rounded-lg bg-no-repeat bg-center bg-cover relative z-20 -mr-2"
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

        <form className="bg-white w-2/3 px-6 py-12 rounded-r-lg">
          <div className="grid gap-4 grid-cols-2 max-xl:grid-cols-1">
            <ContactUsInput required name="firstName" label="First Name" placeholder="John" type="string" />
            <ContactUsInput required name="lastName" label="Last Name" placeholder="Doe" type="string" />
            <ContactUsInput name="email" label="Email" placeholder="example@gmail.com" type="email" />
            <ContactUsInput name="phoneNumber" label="Phone Number" placeholder="00 000 00 00" type="tel" />
          </div>
        </form>
      </div>
    </section>
  );
};
