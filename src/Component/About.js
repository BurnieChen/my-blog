import React from 'react'
import preface from './About/preface'
import journey from './About/journey'

const PreFcae = () => (
    <div>
        <p>{preface.greet}</p>
        <img className='head-shot-lg' src={process.env.PUBLIC_URL + preface.img} alt={preface.alt} />
        <p>{preface.talk}</p>
    </div>
)

const mapDetail = (list) => {
    if(list.details) {
        let detailsList = list.details.map(
            (detail) => {
                let dateTime = new Date().getTime()
                let timestamp = Math.floor(dateTime / (Math.floor(Math.random()*1000) + 3))

                return (
                    <li className='journey-detail' key={timestamp}>{detail}</li>
                )
            }
        )

        return detailsList
    }
    else return null
}

const Introduction = () => {
    let mapJourney = journey.map(
        (object) => {
            let mapList = object.lists.map(
                (list) => {
                    let getDetail = mapDetail(list)
                    let dateTime = new Date().getTime()
                    let timestamp = Math.floor(dateTime / (Math.floor(Math.random()*1000) + 5))

                    return (
                        <article key={timestamp}>
                            <div className='journey-time'>{list.time}</div>
                            <div className='journey-location'>{list.location}</div>

                             <ul>
                                <li className='journey-work' key={timestamp}>
                                    {list.work}
                                    <ol>
                                        {getDetail}
                                    </ol>
                                </li>
                            </ul>
                        </article>
                    )
                }
            )

            let dateTime = new Date().getTime()
            let timestamp = Math.floor(dateTime / (Math.floor(Math.random()*1000) + 7))

            return (
                <div className='journey-box' key={timestamp}>
                    <h3>{object.type}</h3>

                    {mapList}
                    
                    <div className='bottom-line'></div>
                </div>
            )
        }
    )

    return mapJourney
}

class About extends React.Component
{
    render() {

        return (
            <div className='right-part'>
                <h1>About me</h1>
                <PreFcae />

                <h1>My Journey</h1>
                <Introduction />
            </div>
        )
    }
}
    
export default About