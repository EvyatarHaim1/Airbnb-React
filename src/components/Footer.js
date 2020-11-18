import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Div>
            <p>© 2020 Airbnb, Inc. All rights reserved - Demo</p>
            <p>· Privacy · Terms · Sitemap · Company Details</p>
        </Div>
    )
}

export default Footer;

const Div = styled.div`
border-top: 1px solid lightgray;
padding: 20px;
background-color: #f7f7f7;
bottom: 0;
text-align: center;
p{
    padding: 5px;
    font-size: 14px;
}
`
