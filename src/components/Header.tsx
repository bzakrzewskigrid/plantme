import darkLeaves from '../assets/imgs/dark-leaves.png';

export const Header = () => {
  return (
    <header className="px-16 bg-background-light-grey flex items-center justify-between gap-8 max-md:flex-wrap">
      <div className="py-8">
        <h1 className="text-5xl font-bold  text-primary-green mb-8">Lorem ipsum dolor sit amet</h1>
        <h2 className="text-2xl  text-primary-green mb-4">Lorem ipsum dolor sit amet</h2>
        <p className="text-sm  text-primary-black mb-8 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus. Senectus
          sed maecenas viverra tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed
          gravida. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>

        <button className="bg-primary-green px-16 py-3 text-white font-normal">Buy Now</button>
      </div>

      <img
        src={darkLeaves}
        alt="Plant with dark leaves"
        className="w-1/2 max-md:w-full max-md:h-96 object-cover object-center"
        height="628"
      />
    </header>
  );
};
