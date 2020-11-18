import React, {useState} from 'react';
import styled from 'styled-components';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    const handleSelect = (ranges) => {
        console.log(ranges)
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <Div>
            <DateRangePicker className="calender"
                             ranges={[selectionRange]} 
                             onChange={handleSelect} 
            />
            <h2>
                Number of guests
                <PeopleIcon />
            </h2>
            <input className="inputNumber"
                   min={0}
                   defaultValue={2}
                   type="number" />
            <Button onClick={() => history.push('/search')}
                    className="btn">Search Airbnb</Button>
            
        </Div>
    )
}

export default Search;

const Div = styled.div`
position:absolute;
top: 35px;
width: 100vw;
right: 4%;
 h2{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 559px; 
    padding: 10px;
    background-color:white;
    position: absolute;
    left: 31.1%;
     top: 330px;  
}
.inputNumber:focus{
    outline-width: 0;
}
.inputNumber{
    width: 539px;
    padding: 20px;
    position: absolute;
    left: 31.1%;
    height: 30px;
    top: 375px;
    border: none;
}
.btn{
    position: absolute;
    left:31.1%;
    top: 435px;
    text-transform: inherit !important;
    background-color: #ff7779;
    color: white;
    width: 579px;
}
.btn:hover{
    background-color: white;
    color: #ff7779;
}
`
