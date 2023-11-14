import coverNotFound from "../../annie-spratt-im8y4BO2hso-unsplash.jpg"
import Votes from '../../components/Votes'

export default function BookCard(props) {
    {/* If the cover doesn't exist in the google books API, display an image of some book texture */}
    const thumbnail = props.volumeInfo.imageLinks ? props.volumeInfo.imageLinks.thumbnail : coverNotFound;
    const ratingsCount = props.volumeInfo.ratingsCount && props.volumeInfo.ratingsCount;
    return (
            <li className="flex justify-between gap-x-6 py-5" key={props.id}>
                <div className="flex min-w-0 gap-x-4">
                    <img className="h-18 w-12 flex-none rounded-lg bg-gray-50 hover:scale-110" src={thumbnail} alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm truncate font-semibold leading-6 text-gray-900">{props.volumeInfo.title}</p>
                        <p className="mt-0 truncate text-xs leading-5 text-gray-500">{props.volumeInfo.authors}</p>
                        <p className="mt-2 truncate text-xs leading-5 text-gray-500"> 0 reviews</p>
                    </div>
                </div>
                <Votes id={props.id} votes={ratingsCount ? ratingsCount : 0} />
            </li>
    );
};
