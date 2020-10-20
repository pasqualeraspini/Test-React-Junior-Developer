import styled from 'styled-components';

export const TableContainer = styled.div`
    &::after {
        content: '';
        clear: both;
        display: table;
    }
`;

export const Table = styled.table`
    width: 100%;
    margin-top: 1rem;
    display: inline-table;
    border-collapse: collapse;

    th {
        border-left: .1rem solid gray;
        text-align: left;
    }
 
    td {
        border: .1rem solid gray;
        margin-bottom: -.1rem;
        margin-right: -.1rem;
    }

    .names {
        th {
            font-size: 1.8rem;
            padding: 1rem .5rem;
            border-top: none;
            color: gray;

            &:first-child {
                border-left: none;
            }

            &:last-child {
                border-right: none;
            }
        }
    }

    .products {
        td {
            font-size: 1.6rem;
            padding: 1.5rem 1rem;
            color: #5b5b5b;

            /* MODEL */
            /* QUANTITY */
            &:first-child,
            &:nth-child(4) {
                border-left: none;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .icon-box {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;

                    &:hover {
                        span {
                            color: orangered;
                        }

                        .icon {
                            border-color: orangered;

                            div {
                                background-color: orangered;
                            }
                        }
                    }

                    span {
                        font-size: 1.2rem;
                        margin-right: .5rem;
                        color: red;
                        pointer-events: none;
                    }

                    .icon {
                        width: 1.8rem;
                        height: 1.8rem;
                        border-radius: 50%;
                        background-color: transparent;
                        border: .15rem solid red;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all .3s ease;
                        
                        div {
                            width: 1rem;
                            height: .1rem;
                            background-color: red;
                        }
                    }
                    
                }
            }

            /* QUANTITY */
            &:nth-child(4) {
                .icon-box {
                    span {
                        color: blue !important;
                    }

                    &:hover {
                        span {
                            color: lightblue !important;
                        }

                        .icon {
                            border-color: lightblue !important;

                            div {
                                background-color: lightblue !important;
                            }
                        }
                    }
                }
                
                .icon {
                    border: .15rem solid blue !important;
                    
                    div {
                        width: 1rem;
                        height: .1rem;
                        background-color: blue !important;

                        &:last-child {
                            margin-left: -1rem;
                            transform: rotate(90deg);
                        }
                    }
                }
            }

            /* PRICE */
            &:last-child {
                border-right: none;
            }
        }
    }
`;

export const Total = styled.div`
    float: right;
    text-align: left;
    margin: 2.5rem;

    & > div {
        font-size: 2rem;
        position: relative;

        &:not(:last-child) {
            margin-bottom: 1.2rem;
        }

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: .1rem;
            background-color: gray;
        }
        
        span {
            float: right;
            font-weight: 700;
            padding-left: 4rem;
        }
    }
`;