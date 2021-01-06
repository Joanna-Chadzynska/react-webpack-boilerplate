import { Footer } from 'components';
import React from 'react';

const FooterContainer = () => (
    <Footer>
        <Footer.Text>
            © Joanna Chądzyńska {new Date().getFullYear()}
        </Footer.Text>
        <Footer.Link>joanna.chądzynska87@gmail.com</Footer.Link>
    </Footer>
);

export default FooterContainer;
