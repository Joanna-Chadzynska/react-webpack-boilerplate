import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header``;

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Text = styled.p``;

export const Navigation = styled.nav`
    ul {
        display: flex;
        gap: 1em;
    }
`;

export const TextLink = styled(NavLink)``;

export const ButtonLink = styled(Link)`
    background-color: blue;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    padding: 0.5em 1em;
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
`;
