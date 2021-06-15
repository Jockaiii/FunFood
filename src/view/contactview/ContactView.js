import React from 'react'
import { useHistory } from 'react-router-dom'

export const ContactView = () => {


    const history = useHistory()
    return (
        <div>
            <p> E mail: funfood93@gmail.com </p>
            <p> Mobile: 0733****** </p>


            <button onClick={() => history.push('./HomeView')}> Go to Homepage</button>
        </div>
    )
}

export default ContactView