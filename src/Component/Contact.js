import React from 'react'
import content from './Contact/content'

const ContentArea  = () => {
    let mapContent = content.map(
        (address) => {
            let dateTime = new Date().getTime()
            let timestamp = Math.floor(dateTime / (Math.floor(Math.random()*1000) + 2))

            return (
                <li key={timestamp}>
                    {address.type}:{address.link}
                </li>
            )
        }
    )

    return (
        <ul>
            {mapContent}
        </ul>
    )
}

class Contact extends React.Component
{
    render() {
        
        return (
            <div className='right-part'>
                <h1>Contact me</h1>
                <ContentArea />
            </div>
        )
    }
}

export default Contact