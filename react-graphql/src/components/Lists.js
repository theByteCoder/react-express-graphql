import { useEffect } from 'react'
import { useQuery } from 'react-query'

const Lists = () => {
    const { isLoading, error, data } = useQuery('@books', () => fetch('http://localhost:2000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ books { name genre } }' })
    }).then(res => res.json()).then(({ data: { books: results } }) => results)
    )

    return <>
        <ul>
            {data.map((item, i) => {
                return <li>
                    <div>{item.name}</div>
                    <div>{item.genre}</div>
                </li>
            })}
        </ul>
    </>
}

export default Lists