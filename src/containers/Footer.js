import { Footer } from 'components';
import React from 'react';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';

const FooterContainer = () => (
    <Footer>
        <Footer.Text>
            © Joanna Chądzyńska {new Date().getFullYear()}
        </Footer.Text>

        <Footer.Group>
            <Footer.Link href="https://github.com/Joanna-Chadzynska">
                <FaGithub />
            </Footer.Link>
            <Footer.Link href="https://gitlab.com/Joanna-Chadzynska">
                <FaGitlab />
            </Footer.Link>
            <Footer.Link href="https://www.linkedin.com/in/joanna-ch%C4%85dzy%C5%84ska/">
                <FaLinkedin />
            </Footer.Link>
        </Footer.Group>
    </Footer>
);

export default FooterContainer;
