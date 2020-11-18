import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

function Card({ src, title, description, price }) {
    return (
        <Div>
            <img src={src}
                 alt=""
            />
            <div className="card_info">

            </div>
        </Div>
    )
}

export default Card;

const Div = styled.div`
margin: 10px;
border: 0px solid black;
border-radius: 10px;
overflow: hidden;
box-shadow: 0px 6px 18px -9px rgba(0,0,0,0.75);
transition: transform 100ms ease-in;
:hover{
    transform: scale(1.07);
}
cursor: pointer;
img {
    object-fit: contain;
    min-width: 300px;
    min-height: 200px;
    width: 100%;
}
`