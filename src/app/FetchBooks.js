const FetchBooks = async (search) => {
    const google = "https://www.googleapis.com/";
    const bookEndpoint = "books/v1/volumes?";
    const requestParams = "q=" + search + "+intitle";
    const urlToFetch = `${google}${bookEndpoint}${requestParams}`;
    console.log(urlToFetch)

    const books = await fetch(`${urlToFetch}&key=AIzaSyBERZqi8XtOIIEAtjTKVXWrQgJxeawnG_8`);
    const json = await books.json();
    return json;
}

export default FetchBooks


/*

const retrieveBooks = async (song) => {
    try {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBERZqi8XtOIIEAtjTKVXWrQgJxeawnG_8");
        if (response.ok) {
            const jsonResponse = await response.json();
            const foundBooks = jsonResponse.books;
            setSearchResults(foundBooks.map(book => ({
                id: id,
                title: title,
                authors: authors,
                votes: ratingCount,
                cover: thumbnail,
                categories: categories,
                pageCount: pageCount,
                comments: []
            })));
            return searchResults;
        }
    } catch (error) {
        console.log(error)
    }
}

*/