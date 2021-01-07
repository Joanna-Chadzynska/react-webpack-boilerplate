import styled from 'styled-components';

export const Container = styled.footer`
    flex-shrink: 0;
    text-align: center;
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.textReverse};
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

export const Text = styled.p`
    font-size: clamp(1rem, 5vw, 1.25rem);
`;

export const Link = styled.a`
    svg {
        font-size: clamp(1.35rem, 5vw, 1.75rem);
        transition: fill 250ms ease;

        &:hover {
            fill: red;
        }
    }
`;

export const Group = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
`;
