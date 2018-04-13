import React, { Component } from 'react';
import Page from './components/Page'
import MatchPage from './components/MatchPage'
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import MatchPage from './components/MatchPage'




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

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Sniff me</h1>
//         </header>
//         <Page />
//       </div>
//     );
//   }
// }

export default App;
