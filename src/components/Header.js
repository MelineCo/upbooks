import SearchBar from "./SearchBar"
import AddBookButton from "../features/books/AddBookButton";

const Header = () => {
    return (
        <>
        <header className="container max-w-2xl mt-6 mb-6">
            <div className="bg-sky-50 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-semibold leading-6 text-gray-900">Welcome to books rating!</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>Reading tons of books? Help others prioritize their reading piles.</p>
                </div>
            </div>
            </div>
        </header>
        </>
    );
  };
  
export default Header;