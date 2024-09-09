import { AboutUsCard } from './AboutUsCard';
import leaves from '../assets/imgs/leaves.png';

export const AboutUs = () => {
  return (
    <section className="px-16 flex gap-4 py-24 max-xl:flex-wrap">
      <AboutUsCard
        title="About Us"
        imgSrc={leaves}
        imgAlt="Dark plant with pretty leaves"
        hrefText="Learn more about"
        href="about-us-1"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus. Senectus
        sed maecenas viverra tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed
        gravida. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus.
      </AboutUsCard>

      <AboutUsCard
        title="About Us 2"
        imgSrc={leaves}
        imgAlt="Dark plant with pretty leaves"
        hrefText="Learn more about"
        href="about-us-2"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus. Senectus
        sed maecenas viverra tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed
        gravida. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus.
      </AboutUsCard>
    </section>
  );
};
