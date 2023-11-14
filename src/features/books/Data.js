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
                <h1>Results</h1>
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