import React, {useState} from 'react';
import styled from 'styled-components';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

function Search() {

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
            <DateRangePicker ranges={[selectionRange]} 
                             onChange={handleSelect} 
            />
            
        </Div>
    )
}

export default Search;

const Div = styled.div``