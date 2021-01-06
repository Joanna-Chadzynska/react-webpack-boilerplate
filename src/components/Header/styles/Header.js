import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    background-color: yellow;
`;

export const Inner = styled.div`
    background-color: pink;
    position: fixed;
    z-index: 999;
    width: 100%;
    display: flex;
    @media screen and (min-width: 768px) {
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
`;

export const Text = styled.p``;

export const TextLink = styled(NavLink)`
    text-transform: uppercase;
`;

export const ButtonLink = styled(Link)`
    background-color: blue;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    padding: 0.5em 1em;
`;

export const Navigation = styled.nav`
    position: absolute;
    text-align: right;
    top: 100%;
    right: 0;
    width: 100%;
    background-color: pink;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 400ms ease-in-out;

    ul {
        margin: 0;
        padding: 0;

        li {
            margin-right: 1em;
            padding: 0.5em 0;
        }

        li:last-of-type {
            padding-bottom: 1em;
        }
    }

    @media screen and (min-width: 768px) {
        /* the following lines are not from my video, but add Edge support */
        position: static;
        transition: none;
        transform: scale(1, 1);
        background: none;
        top: initial;
        left: initial;

        ul {
            display: flex;
            gap: 1em;
            justify-content: flex-end;

            li {
                margin-right: 0;
            }

            li:last-of-type {
                padding-bottom: 0;
            }
        }
    }
`;

export const NavToggleLabel = styled.label`
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 1em;
    height: 100%;
    display: flex;
    align-items: center;

    span,
    span::after,
    span::before {
        display: block;
        background-color: black;
        height: 2px;
        width: 2em;
        border-radius: 2px;
        position: relative;
    }

    span::after,
    span::before {
        content: '';
        position: absolute;
    }

    span::before {
        bottom: 7px;
    }

    span::after {
        top: 7px;
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const NavToggleInput = styled.input`
    position: absolute;
    top: -9999px;
    left: -9999px;

    &:focus ~ ${NavToggleLabel} {
        outline: 3px solid rgba(lightblue, 0.75);
    }

    &:checked ~ ${Navigation} {
        transform: scale(1, 1);
    }
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 1em;
    @media screen and (min-width: 768px) {
        margin-left: 0;
    }
`;
