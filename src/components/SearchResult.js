import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <Div>
            <img src={img} alt="result" />
            <FavoriteBorderIcon className="searchResult_heart"/>

              <div className="searchResult_info">

                    <div className="searchInfo_top">
                        <p>{location}</p> 
                        <h3>{title}</h3>
                        <p>____</p>
                        <p>{description}</p>
                    </div>


                    <div className="searchInfo_bottom">
                        <div className="searchResult_start">
                            <StarIcon className="searchResult_star" />
                            <p>
                                <strong>{star}</strong>
                            </p>
                        </div>
                        <div className="searchResult_price">
                            <h2>{price}</h2>
                            <p>{total}</p>
                        </div>
                    </div>
            </div>
        </Div>
    )
}

export default SearchResult;

const Div = styled.div`
display: flex;
position: relative;
margin: 20px;
padding: 20px;
border-bottom: 1px solid lightgray;
opacity: 1;
cursor:pointer;
:hover {
    opacity: 0.8;
}
img{
    height: 200px;
    width: 350px;
    border-radius: 10px;
    overflow: hidden;
}
.searchResult_info{
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    padding-left: 20px;
}
.searchResult_heart{
    position: absolute;
    top: 20px;
    right: 40px;
}
.searchInfo_top{
    width: 40vw;
     h3{
        font-weight: 300;
        margin-top: 10px;
       }
     p{
         margin-top: 10px;
         font-size: 13px;
         color: gray;
     }
}
.searchInfo_bottom{
    display: flex;
    justify-content: space-between;
    .searchResult_star{
        color: #FF385C;
    }
    .searchResult_start{
        position: relative;
        display: flex;
        align-items: center;
        strong{
            position: absolute;
            margin-left: 10px;
            bottom: 3px;
        }
    }
    .searchResult_price {
       position: absolute;
       bottom: 20px;
       right: 30px;
     p{
       text-align: right;
    }
  }
}
`

