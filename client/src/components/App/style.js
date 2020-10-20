import styled from 'styled-components';
import { devices } from '../../utils/styles/devices'

export const AppContainer = styled.div`
    max-width: 120rem;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;

    .nav {
        padding: 3rem 0;
        text-align: center;
        font-size: 3rem;
        font-weight: bold;

        @media ${devices.mobile} {
            font-size: 1.5rem;
            padding: 1rem 0;
        }
    }
`;