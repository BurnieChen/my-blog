import React from 'react'
import content from './Contact/content'

const ContentArea  = () => {
    let mapContent = content.map(
        (address) => {
            let dateTime = new Date().getTime()
            let timestamp = Math.floor(dateTime / (Math.floor(Math.random()*1000) + 2))

            if (address.icon) return (
                <li key={timestamp}>
                    <a href={address.link}>
                        <img className='contact-icon' src={process.env.PUBLIC_URL + address.icon} alt={address.type} />
                    </a>
                </li>
                
            )
            else return(
                <p key={timestamp}>
                    <span>{address.type}：</span>
                    <a href={'mailto:' + address.link}>{address.link}</a>
                </p>
                
            )
        }
    )

    return (
        <ul className='contact-box'>
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