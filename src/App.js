import { GlobalStyles } from 'assets/styles/theme';
import { darkTheme, lightTheme } from 'assets/styles/theme/theme';
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
import { ThemeProvider } from 'styled-components';
import useToggleTheme from './hooks/useToggleTheme';

const App = () => {
    const [theme, toggleTheme, componentMounted] = useToggleTheme();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />;
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Router>
                <Header toggleTheme={toggleTheme}>
                    <Navigation />
                </Header>
                <Content>
                    <Switch>
                        <Route
                            exact
                            path={ROUTES.HOME}
                            component={Home}
                        />
                        <Route
                            exact
                            path={ROUTES.ABOUT}
                            component={About}
                        />
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
        </ThemeProvider>
    );
};

export default App;
