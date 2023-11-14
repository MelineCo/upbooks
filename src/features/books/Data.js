import { useGetBookQuery } from "../../app/apiSlice";
import { useSelector } from "react-redux";
import { selectSearch } from "../search/searchSlice";
import coverNotFound from "../../annie-spratt-im8y4BO2hso-unsplash.jpg"
import Votes from '../../components/Votes'

export const Data = () => {
    const search = useSelector(selectSearch)
    const { data, error, isLoading, isSuccess } = useGetBookQuery(`${search}`);

    return (
        <div className="container max-w-2xl">
            {isLoading && <p>...loading</p>}
            {isSuccess && (
                <>
                <h1>Results</h1>
                <ul role="list" className="divide-y divide-gray-100">
                    {data.items.map(book => {
                        // If the cover doesn't exist in the google books API, display an image of some book texture
                        const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : coverNotFound;
                        const ratingsCount = book.volumeInfo.ratingsCount && book.volumeInfo.ratingsCount;
                        return (
                            <li className="flex justify-between gap-x-6 py-5" key={book.id}>
                                <div className="flex min-w-0 gap-x-4">
                                    <img className="h-18 w-12 flex-none rounded-lg bg-gray-50 hover:scale-110" src={thumbnail} alt="" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm truncate font-semibold leading-6 text-gray-900">{book.volumeInfo.title}</p>
                                        <p className="mt-0 truncate text-xs leading-5 text-gray-500">{book.volumeInfo.authors}</p>
                                        <p className="mt-2 truncate text-xs leading-5 text-gray-500"> 0 reviews</p>
                                    </div>
                                </div>
                                <Votes id={book.id} votes={ratingsCount ? ratingsCount : 0} />
                            </li>
                        )
                    })}
                </ul>
                </>
            )}


        </div>

    )
}