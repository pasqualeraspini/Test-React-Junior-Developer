import styled from 'styled-components';
import { devices } from '../../utils/styles/devices'

export const ListContainer = styled.div`
    width: 100%;
`;

export const ProductsContainer = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 1rem;

    @media ${devices.tabletSm} {
        padding-bottom: 8.5rem;
    }

    @media ${devices.mobile} {
        justify-content: center;
    }
`;