import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import NotFound from './NotFound'

const App = () => (
    <Switch>
        <Route path='/' exact component={About}/>
        <Route path='/pages/contact' component={Contact}/>
        <Route path='/pages/project' component={Project}/>
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
    </Switch>
)

export default App