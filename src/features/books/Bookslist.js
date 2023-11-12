import Book from './Book';
import { selectBooks } from './booksSlice';
import { useSelector } from 'react-redux';
import Votes from '../../components/Votes'

function Booklist() {
    const books = useSelector(selectBooks);
    return (
        <div className="container max-w-2xl">
        <h1>Books</h1>
        <ul role="list" class="divide-y divide-gray-100">
            {Object.values(books).map((book) => (
            <li className="flex justify-between gap-x-6 py-5" key={book.id}>
                <div class="flex min-w-0 gap-x-4">
                    <img class="h-12 w-12 flex-none rounded-lg bg-gray-50" src={book.cover} alt="" />
                    <div class="min-w-0 flex-auto">
                        <p class="text-sm truncate font-semibold leading-6 text-gray-900">{book.title}</p>
                        <p class="mt-0 truncate text-xs leading-5 text-gray-500">{book.author}</p>
                    </div>
                </div>
                <Votes id={book.id} votes={book.votes} />
            </li>
            ))}
        </ul>
        </div>
    )
}

export default Booklist