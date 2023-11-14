import { useDispatch } from 'react-redux';
import { upvote } from '../features/books/booksSlice'

const Votes = (props) => {
    const dispatch = useDispatch();

    const Vote = () => {
        dispatch(upvote({ id: props.id }));
    }

    return (
        <button onClick={Vote} className="flex flex-col flex-nowrap place-items-center border p-3 rounded-lg hover:bg-lime-50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
            <span className="text-xs font-bold pt-2">{props.votes}</span>
        </button>
    );
};

export default Votes;