import { useGetBookQuery  } from "../../app/apiSlice";

export const Data = () => {
    const { data } = useGetBookQuery("olaf");

    console.log(data);
    return (
        <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>

    )
}