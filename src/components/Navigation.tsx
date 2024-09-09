import plantMeLogo from '../assets/icons/plantme-logo.svg';
import { LanguageSelect } from './LanguageSelect';
import { NavListItem } from './NavListItem';
import { Search } from './Search';

export const Navigation = () => {
  return (
    <nav className="px-16 py-6 flex items-center justify-between flex-wrap gap-y-6">
      <div className="flex items-center">
        <a href="/">
          <img src={plantMeLogo} width="32" height="32" alt="Plantme logo that shows green squares" className="mr-16" />
        </a>

        <ul className="text-lg flex capitalize gap-8">
          <NavListItem hasSeparator={false}>
            <a href="about-us">About us</a>
          </NavListItem>
          <NavListItem>
            <a href="contact-=us">Contact us</a>
          </NavListItem>
          <NavListItem>
            <a href="blog">Blog</a>
          </NavListItem>
          <NavListItem>
            <a href="site-map">Site Map</a>
          </NavListItem>

          <NavListItem>
            <LanguageSelect />
          </NavListItem>
        </ul>
      </div>

      <Search />
    </nav>
  );
};
