import styled from 'styled-components';

export const GoTo = styled.div`
    width: 100%;
    background-color: white;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: .1rem solid gray;
    padding: 2rem;

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
            &__goBack {
                display: flex;
                align-items: center;

                .icon-box {
                    width: 1.8rem;
                    height: 1.8rem;
                    border-radius: 100%;
                    margin-right: .5rem;
                    border: .2rem solid gray;
                    position: relative;

                    span {
                        width: .5rem;
                        height: .15rem;
                        background-color: gray;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 1rem;

                        &:nth-child(1) {
                            transform: rotate(-45deg);
                            margin-left: -.28rem;
                            margin-top: -.25rem;
                        }

                        &:nth-child(2) {
                            transform: rotate(-135deg);
                            margin-left: -.28rem;
                            margin-top: .1rem;
                        }
                    }
                }
            }
        }

        .right {
            display: flex;
            align-items: center;

            &__added_items {
                margin-right: 1rem;
                font-size: 1.4rem;
            }
        }
    }
`;