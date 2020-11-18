import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import SearchResult from './SearchResult';
function SearchPage() {
    return (
        <Div>
           <div className="searchPage_info">
               <p>62 stays · 26 august to 30 august · 2 guests </p>
               <h1>Stays nearby</h1>
               <Button className="btn" variant="outlined">Cancellation Flexibility </Button>
               <Button className="btn" variant="outlined">Type of place </Button>
               <Button className="btn" variant="outlined">Price </Button>
               <Button className="btn" variant="outlined">Rooms and beds </Button>
               <Button className="btn" variant="outlined">More filters </Button>
                <SearchResult
                         img="https://a0.muscache.com/im/pictures/390b0993-25ca-4ed2-8a1a-9aa87d38422d.jpg?im_w=1200"
                         location="Private Guesthouse Near Bishop Arts District"
                         title="Great little 300 square foot guest house with private entrance in a quiet corner of a big back yard."
                         description="Brand new bathroom. Beautiful natural light and smart, stylish furnishings.
                         Perfectly situated in East Kessler Park, just a mile from the adorable Bishop Arts District
                         and quick access to Downtown and Uptown Dallas. A few blocks from the paved Kessler Park Trail, 
                         perfect for a jog or bike ride.
                         Perfect for couples, solo adventurers, or business travelers."
                         star="4.5"
                         price="$113/night"
                         total="$113" />

                <SearchResult
                         img="https://a0.muscache.com/im/pictures/4f64a0ca-1a7f-44f5-8896-38bc9923b6e4.jpg?im_w=1200"
                         location="Tiny house b&b Giardini dell'Ardo"
                         title="La Tiny House del B&b Giardini dell'Ardo è una camera con caratteristiche uniche."
                         description="Si trova sospesa su un magnifico paesaggio naturale, con vista sulle montagne e sulla profonda 
                         gola del torrente Ardo. La grande vetrata permette di mettersi a letto e godere del paesaggio mozzafiato. 
                         L'arredo è studiato per poter svolgere tutte le funzioni come in una mini casa. Lo spazio è dotato di tutti i confort: grande doccia, 
                         wi-fi e TV a schermo piatto. Sul tetto terrazza panoramica con vista a 360°."
                         star="5"
                         price="$‏99/night"
                         total="$99" />

                <SearchResult
                         img="https://a0.muscache.com/im/pictures/dc9fddac-3501-4bd7-9482-6475fa011d64.jpg?aki_policy=xx_large"
                         location="2BD Cozy Villa Nadin in the heart of Seminyak"
                         title="The open-air living area facing the pool and garden creates a breezy feel,
                         while smooth natural stone, woven materials add an earthy feel to the crisp white interior."
                         description="“Nothing beats the feeling of the “light sunset” near the pool, when you relaxed on the sofa and drinking a wine,
                         read a book or talking with friends.” "
                         star="4.9"
                         price="$‏77/night"
                         total="$99" />
                
                <SearchResult
                         img="https://a0.muscache.com/im/pictures/3da97ac9-e223-44ae-b079-d115094e1187.jpg?im_w=1200"
                         location="Charming&Romantic 1bd villa Alegria near beach"
                         title="Charming and luxurous villa Alegria situated in quiet, secured and privite location"
                         description="In the center of the most popular tourist destination - Seminyak. The best spa in the area, 
                         many cafes, fresh food supermarket are just in a few steps from the house.
                         The Seminyak beach with famous La planca sunset beach bar is about 20 minites walking away." 
                         star="5"
                         price="$‏152/night"
                         total="$152" />

                <SearchResult
                         img="https://a0.muscache.com/im/pictures/277c4ff9-f24e-4ed3-b697-73c7d71fab6f.jpg?im_w=1200"
                         location="Box35/1 RoomA"
                         title="My place is in the center of the city Nimmanhaemin the most famous place in Chiang 
                         Mai where it has both familiy activities and night life activities and many resturants. "
                         description="Also Guests can walk to nimmanhaemin less than 5 mins and 15 mins to the old town or guest 
                         can get public transports very easy, family-friendly activities, nightlife, public transport, 
                         the airport. You’ll love my place because of the neighborhood, the comfy bed, and the coziness."
                         star="4.8"
                         price="$‏90/night"
                         total="$90" />

                <SearchResult
                         img="https://a0.muscache.com/im/pictures/5d25c607-386d-4af2-9809-b4bd5f52ae86.jpg?im_w=1200"
                         location="Great studio right in centre with balcony"
                         title="Fully equipped studio right in the city centre. 
                         Located steps away from Plaza Cataluña, the beach, the cathedral. "
                         description="STunning location. The studio has a balcony and fully equipped kitchen.
                         Perfect for couples, friends, or even business trip. We provide towels & 
                         sheets. You can see two beds but we can make it double bed.
                         Wifi is included. Bills are included until 50 euros/month"
                         star="4.6"
                         price="$60/night"
                         total="$60" />

                <SearchResult
                         img="https://a0.muscache.com/im/pictures/2f3b3606-cacb-40cb-ad32-3e98d5bfc9dc.jpg?im_w=1200"
                         location="Cute 1 bedroom apartment in Eixample with balcony"
                         title="This apartment is located in the Eixample district of Barcelona, ​​in a quiet and safe area,
                         but at the same time with many restaurants, cafes, supermarkets and cultural spaces."
                         description="The apartment has a very comfortable double room with everything you need to rest and relax. The bathroom is 
                         complete and fully equipped. In addition, 
                         it has a balcony where you can enjoy great views of the city that gives the apartment great light and air."
                         star="5"
                         price="$‏69/night"
                         total="$69" />

                <SearchResult
                         img="https://a0.muscache.com/im/pictures/miso/Hosting-45475252/original/9334e783-9e58-4f0e-b425-cad6c604cb04.jpeg?im_w=1440"
                         location="Studio-Apartments in Berlin Mitte"
                         title="The studio apartments are located at Nook a modern corner building in the Mitte borough of Berlin. "
                         description="Each studio includes large full-length windows allowing for lots of natural light, high-speed Wi-Fi, an ensuite 
                         bathroom with underfloor heating, a working table and queen-size or double bed.
                         The accommodations are accessed via digital locks."
                         star="4.9"
                         price="$90/night"
                         total="$90" />

                <SearchResult
                         img="https://a0.muscache.com/im/pictures/miso/Hosting-45490836/original/e1eed4b4-116f-478e-bc0b-5e5c65790dc9.jpeg?im_w=1440"
                         location="Stunning One Bedroom Flat in Central Victoria GG4"
                         title="A fantastically grand one bedroom apartment, located near Londons epicentre."
                         description="Living room is modern and comfortable with TV and WiFi. The ceilings are incredibly high with 
                         beautiful views over Grosvenor Gardens and Victoria. The railway station is a 3 minute walk from the 
                         apartment and so it is ideal for leisure or corporate travellers. With in walking distance of The Goring Hotel, 
                         Buckingham Palace and some fantastic shops, restaurants and theatres, 
                         it is the perfect location to stay in London"
                         star="4.3"
                         price="$81/night"
                         total="$81" />

                <SearchResult
                         img="https://a0.muscache.com/im/pictures/fad4ffa0-488f-46ca-8435-827a5b683dd4.jpg?im_w=1200"
                         location="Park Lane Apartments - 2 Bedroom Premier Apartment"
                         title="Our central London serviced apartments in Clarges Street are situated in the heart of Mayfair, 
                         providing easy access to all that London’s fabulous West End has to offer."
                         description="Shaw House itself is a period building. It’s undergone extensive refurbishment, 
                         and today it offers luxury accommodation for your stay in Mayfair that showcases 
                         all the traditional features of the property’s past."
                         star="4.8"
                         price="$‏102/night"
                         total="$102" />

                <SearchResult
                         img="https://a0.muscache.com/im/pictures/07e19e03-a90b-4915-8f8b-3e4b29fc4012.jpg?im_w=1200"
                         location="Live like real crusaders in a unique apartment!"
                         title="Feel like real crusaders in an apartment with medieval walls and all the necessary
                         modern amenities. It features a jacuzzi for two, a king size bed, air conditioning and a fully equipped kitchen."
                         description="You will live in the atmosphere of the old city, surrounded by a huge number of historical 
                         sights and ancient buildings. You will also find lots of elegant restaurants and cozy cafes as 
                         well as gorgeous city beach within walking distance."
                         star="5"
                         price="$127/night"
                         total="$127" />


           </div>
        </Div>
    )
}

export default SearchPage;

const Div = styled.div`

.searchPage_info {
padding: 20px; 
p{
    margin-bottom: 10px;
    font-size:14px;
}
h1{
    margin-bottom: 30px;
}
.btn{
    border-radius: 30px;
    text-transform: inherit;
    margin:5px;
 }
}`