import styled from 'styled-components';
import { devices } from './devices'

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: .1rem solid grey;

    @media ${devices.mobileSm} {
        flex-direction: column;
    }

    span {
        font-size: 1.4rem;
        text-align: right;

        &:first-child {
            font-size: 2.2rem;
            text-align: left;
            font-weight: 700;

            @media ${devices.mobile} {
                font-size: 1.8rem;
            }

            @media ${devices.mobileSm} {
                text-align: center;
            }
        }
    }

    @media ${devices.mobile} {
        padding: 1rem;
    }
`;

export default Header;