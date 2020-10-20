import styled from 'styled-components';
import { devices } from '../../utils/styles/devices';

export const CartContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    border-radius: .5rem;
    border: .05rem solid gray;
    padding: ${props => props.checkout ? "20rem 2rem": "2rem"};
    background-color: white;
    overflow: auto;
    display: ${props => props.checkout ? "flex" : ''};
    align-items: ${props => props.checkout ? "center" : ''};
    justify-content:${props => props.checkout ? "center" : ''};

   @media ${devices.tabletSm} {
       padding-bottom: 8.5rem;
   } 

    span {
        font-weight: 700;
        font-size: 2rem;
        display: block;
    }

    .content {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span {
            margin-bottom: 1rem;
        }

        .btn {
            margin-top: 2rem;
        }
    }
`;