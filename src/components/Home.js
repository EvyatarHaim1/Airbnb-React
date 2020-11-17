import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <Div>
            <Banner />
            <Home_section>
                 <Card />
                 <Card />
                 <Card />
            </Home_section>
            <Home_section>
                 <Card />
                 <Card />
                 <Card />
            </Home_section>
        </Div>
    )
}

export default Home;

const Div = styled.div`
`
const Home_section = styled.div`
display: flex;
padding: 30px;
`