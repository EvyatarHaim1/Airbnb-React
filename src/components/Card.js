import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

function Card({ src, title, description, price }) {
    return (
        <Div>
            <img src={src}
                 alt=""
            />
        </Div>
    )
}

export default Card;

const Div = styled.div`
`