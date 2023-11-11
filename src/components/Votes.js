const Votes = (props) => {
    const upVote = () => {
        props.upVote(props.book);
    }

    const downVote = () => {
        props.downVote(props.book);
    }
    return (
        <div class="flex items-center space-x-4">
            <button class="p-2 border rounded-full hover:bg-gray-100" onClick={upVote}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
            </button>
            <span class="text-ms font-bold">{props.upvotes - props.downvotes}</span>
            <button class="p-2 border rounded-full hover:bg-gray-100" onClick={downVote}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
    );
  };
  
export default Votes;