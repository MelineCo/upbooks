import logo from "../logo-rallumonslesetoiles-512.png"
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <>
            <header class="bg-white shadow-sm lg:static lg:overflow-y-visible">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="relative flex justify-between lg:gap-8 ">
                        <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static ">
                            <div class="flex flex-shrink-0 items-center">
                                <a href="#">
                                    <img class="h-8 w-auto" src={logo} alt="Book hunter" />
                                </a>
                            </div>
                        </div>
                        <SearchBar />
                        <div>

                        </div>
                    </div>
                </div>
            </header>


        </>
    );
};

export default Navbar;

