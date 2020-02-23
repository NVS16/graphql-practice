import React, {useState} from 'react';
import {useQuery, useMutation} from '@apollo/react-hooks';


import {getAllAuthors, addBook, getAllBooks} from '../queries/query';

const AddBook = () => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthor] = useState('');

    const {loading, error, data} = useQuery(getAllAuthors);

    const [addNewBook, { datas }] = useMutation(addBook);
    
    if(loading) return (<option>Loading authors..</option>);
    if(error) return (<option>Error loading authors..</option>);

    const {authors} = data;

    const authorList = authors.map((author) => {
        return (
            <option key={author.id}>{author.name}</option>
        );
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewBook({
            variables: {
                name: name,
                genre: genre,
                authorId: authorId
            },
            refetchQueries: [
                {query: getAllBooks}
            ]
        });
    }

    return (
        <div className="add-book">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" onChange={(e) => setName(e.target.value)} />
                <label htmlFor="genre">Genre:</label>
                <input id="genre" type="text"  onChange={(e) => setGenre(e.target.value)} />
                <label htmlFor="author">Author</label>
                <select id="author"  onSelect={(e) => setAuthor(e.target.value)}>
                    <option>Select Author</option>
                    {authorList}
                </select>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddBook;