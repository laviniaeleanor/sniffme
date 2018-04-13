import React, { Component } from 'react';
import Page from './components/Page'
import MatchPage from './components/MatchPage'
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class App extends Component {
    render() {
        return (
        <Router>
            <div>
                <Route exact path="/sniffme" component={Page} />
                <Route exact path="/" render={ () => <Redirect to="/sniffme" /> } />
                <Route exact path="/sniffme/matchuser" component={MatchPage} />
            </div>
        </Router>
)
}
}


export default App;
