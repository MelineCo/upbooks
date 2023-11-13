import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { modifySearch } from '../features/search/searchSlice'


const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setSearch(value)
  };

  const searchBook = (e) => {
    if(e.key === "Enter") {
      dispatch(modifySearch(search))
    }
  }

  return (
    <>
      <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
        <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
          <div className="w-full">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                  </svg>
              </div>
              <input id="search" name="q" value={search} onKeyDown={searchBook} className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Search for a title or an author" type="search" onChange={(e) => handleChange(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <button type="submit">Search</button>
    </>
  );
};

export default SearchBar;