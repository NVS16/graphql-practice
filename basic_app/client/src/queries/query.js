import {gql} from 'apollo-boost';

const getAllBooks = gql`
    {
        books{
            name
            id
        }
    }
`

const getAllAuthors = gql`
    {
        authors{
            name
            id
        }
    }
`

const addBook = gql`
    mutation addNewBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            genre
        }
    }
`

export {getAllAuthors, getAllBooks, addBook};