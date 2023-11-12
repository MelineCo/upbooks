import { useDispatch } from 'react-redux';
import { upvote } from '../features/books/booksSlice'

const Votes = (props) => {
const dispatch = useDispatch();

    const Vote = () => {
        dispatch(upvote({id: props.id}));
    }


    return (
        <div class="flex flex-col flex-nowrap place-items-center">
            <button class="p-2" onClick={Vote}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <span class="text-xs font-bold">{props.votes}</span>
        </div>
    );
};

export default Votes;