import SearchBar from "./SearchBar"
import AddBookButton from "../features/books/AddBookButton";

const Header = () => {
    return (
        <>
        <header>
            <h1>Books rating</h1>
            <p>Help others prioritize their reading piles!</p>
        </header>
        <div className="actions">
            <SearchBar />
        </div>
        </>
    );
  };
  
export default Header;