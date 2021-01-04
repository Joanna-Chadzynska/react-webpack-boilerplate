import { About, Home } from 'pages';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </Switch>
    </Router>
);

export default App;
