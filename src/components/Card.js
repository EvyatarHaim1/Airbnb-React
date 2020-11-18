import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
function Card({ src, title, description, price, rating }) {
    return (
        <Div>
            <img src={src}
                 alt=""
            />
            <div className="card_info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <div className="price-rating">
                <p> <StarIcon style={{color:"#FF385C", marginRight: "10px"}}/> {rating} </p>
                <h3>{price}</h3>
                </div>
            </div>
        </Div>
    )
}

export default Card;

const Div = styled.div`
margin: 10px;
border-radius: 10px;
width: 33%;
overflow: hidden;
box-shadow: 0px 6px 18px -9px rgba(0,0,0,0.75);
transition: transform 100ms ease-in;
:hover{
    transform: scale(1.07);
}
cursor: pointer;
img {
    object-fit: fill;
    min-width: 300px;
    min-height: 200px;
    max-height: 270px;
    width: 100%;
}
.card_info {
    position: relative; 
    margin-top:-9px;
    border-radius: 10px;
    padding: 20px;
    padding-top: 20px;
    border: 1;
    p{
        display:flex;
        justify-content: space-between;
        width: 50px;
        }
    h2{
        font-size: 18px;
        font-weight: 600;
    }
    h4{
        font-size: 14px;
        font-weight: 300px;
        margin-top: 8px;
        margin-bottom: 8px;
    }
    .price-rating{
        display: flex;
        position: sticky;
        bottom: 0;
        h3{flex: 1;}
        p{ flex: 0;}
    }
}
`