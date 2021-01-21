import { GlobalStyles } from 'assets/styles/theme';
import { darkTheme, lightTheme } from 'assets/styles/theme/theme';
import { Content } from 'components';
import { Footer, Header, Navigation } from 'containers';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useToggleTheme from './hooks/useToggleTheme';
import Routing from './routing/Routing';

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
                    <Routing />
                </Content>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
