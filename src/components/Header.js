import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <HEADER>
            <Link to="/">
            <img
                className="header_icon"
                src="https://responsivedesign.is/wp-content/uploads/2016/11/airbnb_fiw4mc_nnjmpj-1.png" 
                alt="airbnb-logo"
            />
            </Link>
            <HeaderCenter>
                <input type="text"/>
                       <SearchIcon />
            </HeaderCenter>

            <HeaderRight>
                <p>Beacome a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </HeaderRight>
        </HEADER>
    )
}

export default Header;

const HEADER = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
background-color: white;
z-index: 100;
width: 100%;
top: 0;
.header_icon{
    object-fit: contain;
    height: 100px;
    margin-left: 20px;
}`

const HeaderCenter = styled.div`
display: flex;
flex: 1;
align-items: center;
max-width: fit-content;
padding: 10px;
height: 30px;
border: 1px solid lightgray;
border-radius:999px;
input {
    border: none;
    padding: 10px;
    outline-width: 0;
    /* width: 250px; */
}`

const HeaderRight = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 15vw;
margin-right: 80px;
`