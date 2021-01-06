import styled from 'styled-components';

export const Container = styled.footer`
    flex-shrink: 0;
    text-align: center;
    background-color: pink;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 1.5em;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

export const Text = styled.p``;

export const Link = styled.a``;
