import styled from 'styled-components';

export const ProductCard = styled.li`
    width: 20rem;
    background-color: white;
    padding: 1rem 0 1rem 0;
    border: .05rem solid gray;
    border-radius: .4rem;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;

    span {
        font-size: 1.2rem;
    }

    .product__img {
        width: 100%;
        padding: 1.5rem;
        overflow: hidden;
        border-bottom: .1rem solid gray;

        & > img {
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .product {
        padding: 1rem;

        &__model,
        &__quantity,
        &__price {
            margin-bottom: .8rem;
        }

        &__model {
            font-size: 1.8rem;
            font-weight: 700;

            span {
                margin-top: .2rem;
                font-weight: 400;
                display: block;
            }
        }

        &__quantity,
        &__price {
            font-size: 1.2rem;

            span {
                font-weight: 700;
            }
        }

        &__price {
            span {
                margin-left: .5rem;
            }

            &--old {
                margin-left: .5rem;
                text-decoration: line-through;
            }
        }

        &__quantity {
            .msg {
                font-size: 1rem;
                margin-left: .5rem;
                color: red;
            }
        }
    }

    .actions {
        padding: 0 1rem 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__select-size {
            font-size: 1.2rem;
            font-weight: 400;
            padding : .5rem 1.5rem .5rem .5rem;
            border-radius: .5rem;
            background: transparent;
        }

        &__add-to-cart {
            padding: .5rem 1.5rem;
        }
    }

    .badge {
        position: absolute;
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        top: -1rem;
        left: -1rem;
        background-color: red;
        color: white;
        font-size: 1rem;
    }
`;
