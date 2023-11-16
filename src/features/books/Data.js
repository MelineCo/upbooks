import { useGetBookQuery } from "../../app/apiSlice";
import { useSelector } from "react-redux";
import { selectSearch } from "../search/searchSlice";
import BookCard from "./BookCard";

export const Data = () => {
    const search = useSelector(selectSearch)
    const { data, error, isLoading, isSuccess } = useGetBookQuery(`${search}`);

    return (
        <div className="container max-w-2xl">
            {isLoading && <p>...loading</p>}
            {isSuccess && (
                <>
                <span className="flex gap-x-3 rounded-md text-xs leading-6 font-semibold">Search results</span>
                <ul role="list" className="divide-y divide-gray-100">
                    {data.items.map(book => {
                        return < BookCard id={book.id} volumeInfo={book.volumeInfo} />
                    })}
                </ul>
                </>
            )}


        </div>

    )
}