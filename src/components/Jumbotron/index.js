import React from 'react';

const Jumbotron = ({ children, ...restProps }) => {
    return <div {...restProps}>{children}</div>;
};

Jumbotron.Text = function HeaderText({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>;
};

export default Jumbotron;
