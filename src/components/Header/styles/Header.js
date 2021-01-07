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
    &.active {
        color: blue;
    }
`;

export const ButtonLink = styled(Link)`
    background-color: blue;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    padding: 0.5em 1em;
`;

export const NavigationWrapper = styled.div``;

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

    &.outside {
        transform: scale(1, 0);
    }

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

export const SwitchTheme = styled.form`
    align-self: center;
    margin-left: 2em;
`;

export const SwitchThemeInner = styled.div`
    position: relative;
    display: inline-block;
`;

export const SwitchThemeLabel = styled.label`
    clip: rect(0 0 0 0);
    display: block;
    width: 3rem;
    height: 1.5rem;
    color: transparent;
    text-indent: -150%;
    user-select: none;

    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        cursor: pointer;
    }

    &::before {
        width: 100%;
        height: 100%;
        background-color: #dedede;
        border-radius: 9999em;
        transition: background-color 0.25s ease;
    }

    &::after {
        top: 0;
        left: 0;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: #ffffff;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
        transition: left 0.25s ease;
    }
`;

export const SwitchThemeInput = styled.input`
    display: none;

    &:checked ~ ${SwitchThemeLabel}::before {
        background-color: #89c12d;
    }

    &:checked ~ ${SwitchThemeLabel}::after {
        left: 1.5rem;
    }
`;
