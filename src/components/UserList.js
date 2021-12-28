import React from 'react'
import { Link } from 'react-router-dom'

export default function UserList() {
    return ( 
        Array(10)
            .fill()
            .map((ignoredValue, index) => index + 1)
            .map((id) => (
            <div key={id}>
                <Link to={`/user/${id}`} data-testid={`user-${id}`}>
                    User{id}
                </Link>
            </div>
            ))
    )
}