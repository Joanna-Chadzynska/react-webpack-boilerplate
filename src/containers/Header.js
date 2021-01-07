import logo from 'assets/images/logo.svg';
import { Header } from 'components';
import React from 'react';

const HeaderContainer = ({ children }) => {
    const handleChange = (e) => {
        console.log(e.target.checked);
    };
    return (
        <Header>
            <Header.Logo src={logo} />
            <Header.SwitchTheme toggleTheme={handleChange} />
            {children}
        </Header>
    );
};

export default HeaderContainer;
