export const LanguageSelect = () => {
  return (
    <form className="w-16">
      <select name="language" id="language-select" className="w-full" aria-label="Select language">
        <option value="eng">Eng</option>
        <option value="pl">PL</option>
      </select>
    </form>
  );
};
