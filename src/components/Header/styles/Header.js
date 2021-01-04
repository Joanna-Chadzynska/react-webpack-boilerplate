import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
`;

export const Inner = styled.header``;

export const Text = styled.p``;

export const TextLink = styled(NavLink)``;

export const ButtonLink = styled(Link)``;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
`;
