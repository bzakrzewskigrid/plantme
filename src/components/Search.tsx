import searchIcon from '../assets/icons/search-icon--white.svg';

export const Search = () => {
  return (
    <form className="flex min-w-96 max-xl:w-full max-md:min-w-0" role="search">
      <input
        type="text"
        placeholder="Search this site"
        className="w-full text-lg px-3 py-2 border-solid border-2 border-primary-green placeholder:text-placeholder-green focus:outline-primary-green"
        aria-label="Search"
      />
      <button type="submit" className="bg-primary-green p-4">
        <img src={searchIcon} alt="Search icon" height="19" width="19" />
      </button>
    </form>
  );
};
