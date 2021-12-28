import React from 'react'
import { useHistory } from 'react-router-dom'

export default function GoForwardButton() {
    const history = useHistory()
    return (
        <button type="button" onClick={() => history.goForward()}>Go Forward</button>
    )
}