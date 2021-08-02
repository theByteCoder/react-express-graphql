import { useState } from 'react'
import { Button, TextField } from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'
import { useMutation } from 'react-query'

const useStyles = makeStyles({
    booksContainer: {
        margin: 10
    },
    bookListContainer: {
        margin: 10
    }
})

const Books = () => {

    const classes = useStyles()

    const [bookName, setBookName] = useState("")
    const [genre, setGenre] = useState("")
    const [authorId, setAuthorId] = useState("")

    const handleBookNameChange = (e) => {
        setBookName(e.target.value)
    }
    const handleGenreChange = (e) => {
        setGenre(e.target.value)
    }
    const handleAuthorIdChange = (e) => {
        setAuthorId(e.target.value)
    }

    const mutation = useMutation((args) => fetch('http://localhost:2000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
    }))
    const handleAddBook = (e) => {
        mutation.mutate()
    }

    return <div className={classes.booksContainer}>
        <TextField className={classes.bookListContainer} id="outlined-book-name" label="Book name" variant="outlined" value={bookName} onChange={handleBookNameChange} />
        <TextField className={classes.bookListContainer} id="outlined-genre" label="Genre" variant="outlined" value={genre} onChange={handleGenreChange} />
        <TextField className={classes.bookListContainer} id="outlined-author-id" label="Author ID" variant="outlined" value={authorId} onChange={handleAuthorIdChange} />
        <Button className={classes.bookListContainer} variant="contained" color="primary" disableElevation onClick={handleAddBook}>
            Add Book
        </Button>
    </div>
}

export default Books