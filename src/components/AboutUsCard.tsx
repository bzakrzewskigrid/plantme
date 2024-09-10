import { ReactNode } from 'react';

interface IAboutUsCard {
  title: string;
  children: ReactNode;
  imgSrc: string;
  imgAlt: string;
  hrefText: string;
  href: string;
}

export const AboutUsCard = ({ title, imgSrc, imgAlt, children, href, hrefText }: IAboutUsCard) => {
  return (
    <article className="text-white bg-primary-green flex gap-4 items-center p-6 w-full">
      <img src={imgSrc} alt={imgAlt} />
      <div>
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="text-sm font-normal mb-5  max-w-lg">{children}</p>
        <a className="text-sm font-bold underline" href={href} aria-label={`Read more about how great ${title} is`}>
          {hrefText} &#8594;
        </a>
      </div>
    </article>
  );
};
