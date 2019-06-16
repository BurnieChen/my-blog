import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import NotFound from './NotFound'
import NavBar from './App/NavBar'
import content from './App/content'

const Information = () => (
    <div>
        <img className='head-shot-sm' src={content.img} alt={content.name} />
        <h2>{content.name}</h2>
        <p className='description'>{content.description}</p>
    </div>
)

const App = () => (
    <div className='container'>
        <div className='left-part'>
            <Information />
            <NavBar />
            <div className='description'>© All rights reserved.</div>
        </div>
    

        <Switch>
            <Route path='/' exact component={About}/>
            <Route path='/pages/contact' component={Contact}/>
            <Route path='/pages/project' component={Project}/>
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
        </Switch>
    </div>
)

export default App