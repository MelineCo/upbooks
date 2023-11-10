import Book from './Book';
import { selectBooks } from './booksSlice';
import { useSelector } from 'react-redux';

function Booklist(props) {
    const books = useSelector(selectBooks);
    return (
        <div>
        {props.books?.map((book, index) => {
            return <Book key={index} book={book} />
        })}
        <h1>Books</h1>
        <ul>
            {Object.values(books).map((book) => (
            <li key={book.id}>
            <div>
                <img src={book.cover} alt="" style={{height: "150px"}} />
                <div>
                <h2>{book.title}</h2>
                <p>{book.pages} pages</p>
                </div>
            </div>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default Booklist