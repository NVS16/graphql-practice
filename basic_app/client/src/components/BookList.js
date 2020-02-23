import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import {getAllBooks} from '../queries/query';




const BookList = () => {
    const {loading, error, data} = useQuery(getAllBooks);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error...</p>;

    const {books} = data;

    const bookListItems = books.map((book) => {
        return (
            <li key={book.id}>{book.name}</li>
        );
    });
    return (
        <div className="book-list">
            <h4>My Book List</h4>
            <ul>
                {bookListItems}
            </ul>
        </div>
    );
}

export default BookList;