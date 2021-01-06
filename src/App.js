import { Content } from 'components';
import * as ROUTES from 'constants/routes';
import { Footer, Header, Navigation } from 'containers';
import {
    About,
    Contact,
    Home,
    NotFound,
    SignIn,
    SignUp,
} from 'pages';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

const App = () => (
    <Router>
        <Header>
            <Navigation />
        </Header>
        <Content>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route exact path={ROUTES.ABOUT} component={About} />
                <Route
                    exact
                    path={ROUTES.CONTACT}
                    component={Contact}
                />
                <Route
                    exact
                    path={ROUTES.SIGN_IN}
                    component={SignIn}
                />
                <Route
                    exact
                    path={ROUTES.SIGN_UP}
                    component={SignUp}
                />
                <Route path="*" component={NotFound} />
            </Switch>
        </Content>
        <Footer />
    </Router>
);

export default App;
