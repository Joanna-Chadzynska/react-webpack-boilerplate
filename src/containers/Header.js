import logo from 'assets/images/logo.svg';
import { Header } from 'components';
import React from 'react';

const HeaderContainer = ({ children }) => {
    return (
        <div>
            <Header>
                <Header.Logo src={logo} />
                <Header.Text>hello</Header.Text>
                {children}
            </Header>
        </div>
    );
};

export default HeaderContainer;
