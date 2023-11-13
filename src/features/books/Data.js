import { useGetBookQuery  } from "../../app/apiSlice";
import { useSelector } from "react-redux";
import { selectSearch } from "../search/searchSlice";

export const Data = () => {
    const search = useSelector(selectSearch)
    const { data } = useGetBookQuery(`${search}`);

    console.log(data);
    return (
        <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>

    )
}