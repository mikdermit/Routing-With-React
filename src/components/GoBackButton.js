import React from 'react'
import { useHistory } from 'react-router-dom'

export default function GoBackButton() {
    const history = useHistory()
    return (
        <button type="button" onClick={() => history.goBack()}>Go Back</button>
    )
}