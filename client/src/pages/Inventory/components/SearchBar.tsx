//Importing types
import { SearchBarType } from "../utils/types";

//RETURNS AN INPUT FIELD WHICH IS USED TO PROVIDE A KEYWORD FOR TO LIST THE PRODUCTS
const SearchBar: React.FC<SearchBarType> = ({
  keyword,
  changeHandler,
  styles,
}) => {
  return (
    <div id="inventory__search-bar" className="">
      <input
        type="text"
        id="search"
        name="search"
        value={keyword}
        className="w-[25rem] h-[3rem] pl-[1rem] text-[0.8em] shadow-custom"
        placeholder="Search for a product..."
        onChange={(e) => changeHandler(e.currentTarget.value)}
        style={styles}
      />
    </div>
  );
};

export default SearchBar;
