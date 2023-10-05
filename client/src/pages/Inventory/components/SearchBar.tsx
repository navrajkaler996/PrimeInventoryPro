const SearchBar: React.FC = () => {
  return (
    <div id="inventory__search-bar" className="">
      <input
        type="text"
        id="search"
        name="search"
        className="w-[25rem] h-[3rem] pl-[1rem] text-[0.8em] shadow-custom"
        placeholder="Search for a product..."
      />
    </div>
  );
};

export default SearchBar;
