import React from 'react';

const Footer = ({ children, ...restProps }) => {
    return <div {...restProps}>{children}</div>;
};

Footer.Text = function HeaderText({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>;
};

export default Footer;
