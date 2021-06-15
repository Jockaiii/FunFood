import React from 'react'
import { useHistory } from 'react-router-dom'

export const ContactView = () => {


    const history = useHistory()
    return (
        <div>
            <button> E mail </button>
            <button> Mobile </button>


            <button onClick={() => history.push('./HomeView')}> Go to Homepage</button>
        </div>
    )
}

export default ContactView