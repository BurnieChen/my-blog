import React from 'react'
import Slider from 'react-slick'
import ProjectHOC from './Project/ProjectHOC'
import projects from './Project/content'

let settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px'
}

const AllProject = ProjectHOC(Slider, settings, projects)

class Project extends React.Component
{
    render() {
        return (
            <div className='right-part'>
                <h1>My Project</h1>

                <AllProject />
            </div>
            
        )
    }
}

export default Project