import { FaSearch } from 'react-icons/fa';



const SearchBar = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if (!searchValue) return;
      }; 

  return (
    <div>
        <h1>Simple Photo Gallery</h1>
        <p>Search beautiful photos directly from Unsplash API</p>
        <form action="submit">
            <input type="search" name="search" id="search-input" className="search-bar-input" placeholder="Search an image" />
            <button type="submit" className="button-search-input" >
                <FaSearch className="icon-search-button" />
            
            </button>

        </form>
    </div>
  );
};

export default SearchBar;