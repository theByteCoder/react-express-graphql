import { useQuery } from 'react-query'

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Lists = () => {
    const classes = useStyles();

    const { isLoading, error, data: rows } = useQuery('@books/get', () => fetch('http://localhost:2000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ books { name genre id: _id author { name } } }' })
    }).then(res => res.json()).then(({ data: { books: results } }) => results)
    )

    useEffect(() => {
        console.log(rows);
    }, [rows])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Genre</TableCell>
                        <TableCell align="right">Author</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(!error && !isLoading) ? rows?.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.genre}</TableCell>
                            <TableCell align="right">{row.author.name}</TableCell>
                        </TableRow>
                    )) : <TableRow >
                        <TableCell component="th" scope="row">
                            Loading data
                        </TableCell>
                    </TableRow>}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Lists