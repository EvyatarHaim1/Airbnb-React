import React, {useState} from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Search from './Search';
function Banner() {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <Div>
            <BannerSearch>
                {showSearch && <Search />}
                <Button className="serachBtn" 
                        onClick={() => setShowSearch(!showSearch)}
                        variant="outlined">Search Dates
                </Button>
            </BannerSearch>
            <BannerInfo>
                <h1> Get out and streach your imagination</h1>
                <h5> Plan  different kind of getaway  to uncover the hidden gems near you.</h5>
            <Button className="btn" variant="outlined"> Explore Nearby </Button>
            </BannerInfo>
        </Div>
    )
}

export default Banner;

const Div = styled.div`
height: 60vh;
position: relative;
background-image: url("https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg");
background-position: center center;
`
const BannerSearch = styled.div`
display: flex;
flex-direction: column;

.serachBtn {
    background-color: white !important;
    font-weight: 900 !important;
    text-transform: inherit !important;
    color: #ff7779 !important;
}
`
const BannerInfo = styled.div`
background-color: black;
color: white;
padding-top: 25vh;
padding-left: 50px;
padding-right: 50px;
padding-bottom: 40px;
width: 300px;
h5{
    margin-top: 10px;
}
.btn{
    background-color: #ff7779;
    color: white;
    text-transform: inherit;
    margin-top: 20px;
    font-weight: 600;
}
:hover .btn{
    background-color: white;
    color: #ff7779;
}
`