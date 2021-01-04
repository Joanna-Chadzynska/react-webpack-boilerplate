import { Header, Navigation } from 'containers';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <h1>Hello from home page!</h1>
        </>
    );
};

export default HomePage;
