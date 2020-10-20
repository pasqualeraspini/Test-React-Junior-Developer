import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
    color: white;
    border-radius: .5rem;
    padding: ${props => props.small ? ".5rem 1.5rem": "1rem 2rem"};
    border: none; 
    background-color: darkblue;
    transition: background-color .3s ease;
    cursor: pointer;

    &:disabled {
        background-color: lightblue;
        cursor: auto;
        
        &:hover {
            background-color: lightblue;
        }
    }

    &:hover {
        background-color: blue;
    }
`

export const ButtonLink = styled(Link)`
    color: white;
    padding: 1rem 2rem;
    border-radius: .5rem;
    background-color: darkblue;
    transition: background-color .3s ease;
    cursor: pointer;

    &:hover {
        background-color: blue;
    }
`;