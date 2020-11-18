import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <Div>
            <Banner />
            <Home_section>
                 <Card 
                      src="https://a0.muscache.com/im/pictures/390b0993-25ca-4ed2-8a1a-9aa87d38422d.jpg?im_w=1200"
                      title="Private Guesthouse Near Bishop Arts District"
                      description="Great little 300 square foot guest house with private entrance in a quiet corner of a big back yard. 
                      Brand new bathroom. Beautiful natural light and smart, stylish furnishings.
                      Perfectly situated in East Kessler Park, just a mile from the adorable Bishop Arts District
                      and quick access to Downtown and Uptown Dallas. A few blocks from the paved Kessler Park Trail, 
                      perfect for a jog or bike ride.
                      Perfect for couples, solo adventurers, or business travelers."
                      price="$113/night"
                      rating={4}
                />
                <Card 
                      src="https://a0.muscache.com/im/pictures/4f64a0ca-1a7f-44f5-8896-38bc9923b6e4.jpg?im_w=1200"
                      title="Tiny house b&b Giardini dell'Ardo"
                      description="La Tiny House del B&b Giardini dell'Ardo è una camera con caratteristiche uniche. 
                      Si trova sospesa su un magnifico paesaggio naturale, con vista sulle montagne e sulla profonda 
                      gola del torrente Ardo. La grande vetrata permette di mettersi a letto e godere del paesaggio mozzafiato. 
                      L'arredo è studiato per poter svolgere tutte le funzioni come in una mini casa. Lo spazio è dotato di tutti i confort: grande doccia, 
                      wi-fi e TV a schermo piatto. Sul tetto terrazza panoramica con vista a 360°."
                      price="$‏99/night"
                      rating={5}
                />
                 <Card 
                      src="https://a0.muscache.com/im/pictures/dc9fddac-3501-4bd7-9482-6475fa011d64.jpg?aki_policy=xx_large"
                      title="2BD Cozy Villa Nadin in the heart of Seminyak"
                      description="The open-air living area facing the pool and garden creates a breezy feel,
                       while smooth natural stone, woven materials add an earthy feel to the crisp white interior.
                       “Nothing beats the feeling of the “light sunset” near the pool, when you relaxed on the sofa and drinking a wine,
                        read a book or talking with friends.”"
                        price="$‏77 /night"
                        rating={4}
                 />
            </Home_section>
                 
            <Home_section>
            <Card 
                      src="https://a0.muscache.com/im/pictures/3da97ac9-e223-44ae-b079-d115094e1187.jpg?im_w=1200"
                      title="Charming&Romantic 1bd villa Alegria near beach"
                      description="Charming and luxurous villa Alegria situated in quiet, secured and privite location, 
                      yet in the center of the most popular tourist destination - Seminyak. The best spa in the area, 
                      many cafes, fresh food supermarket are just in a few steps from the house.
                      The Seminyak beach with famous La planca sunset beach bar is about 20 minites walking away."
                      price="$‏152/night"
                      rating={5}
                />
                <Card 
                      src="https://a0.muscache.com/im/pictures/b0953be8-2b06-4417-b89c-d611ac89c14f.jpg?im_w=1200"
                      title="CONTEMPORARY POOL HOUSE - Seminyak"
                      description="Private charming 1 bedroom Villa with private pool and garden, located in a tranquil 
                      area right behind the lively Legian street with all its attractions and nightlife. Within a walking 
                      distance to “Double Six, 66 beach“, shops, restaurants and a good access to the main roads.
                      Its a quiet and peaceful base to unwind from your exciting life on the island."
                      price="$‏70/night"
                      rating={5}
                />
                 <Card 
                      src="https://a0.muscache.com/im/pictures/277c4ff9-f24e-4ed3-b697-73c7d71fab6f.jpg?im_w=1200"
                      title="Box35/1 RoomA"
                      description="My place is in the center of the city Nimmanhaemin the most famous place in Chiang 
                      Mai where it has both familiy activities and night life activities and many resturants. 
                      Also Guests can walk to nimmanhaemin less than 5 mins and 15 mins to the old town or guest 
                      can get public transports very easy, family-friendly activities, nightlife, public transport, 
                      the airport. You’ll love my place because of the neighborhood, the comfy bed, and the coziness."
                      price="$‏90/night"
                      rating={5}
                 />
            </Home_section>

            <Home_section>
            <Card 
                      src="https://a0.muscache.com/im/pictures/5d25c607-386d-4af2-9809-b4bd5f52ae86.jpg?im_w=1200"
                      title="Great studio right in centre with balcony"
                      description="Fully equipped studio right in the city centre. 
                      Located steps away from Plaza Cataluña, the beach, the cathedral. 
                      STunning location. The studio has a balcony and fully equipped kitchen.
                      Perfect for couples, friends, or even business trip. We provide towels & 
                      sheets. You can see two beds but we can make it double bed.
                      Wifi is included. Bills are included until 50 euros/month
                      "
                      price="$60/night"
                      rating={5}
                />
                <Card 
                      src="https://a0.muscache.com/im/pictures/2f3b3606-cacb-40cb-ad32-3e98d5bfc9dc.jpg?im_w=1200"
                      title="Cute 1 bedroom apartment in Eixample with balcony"
                      description="This apartment is located in the Eixample district of Barcelona, ​​in a quiet and safe area,
                      but at the same time with many restaurants, cafes, supermarkets and cultural spaces.
                      The apartment has a very comfortable double room with everything you need to rest and relax. The bathroom is 
                      complete and fully equipped. In addition, 
                      it has a balcony where you can enjoy great views of the city that gives the apartment great light and air."
                      price="$‏69/night"
                      rating={4}
                />
                 <Card 
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-45475252/original/9334e783-9e58-4f0e-b425-cad6c604cb04.jpeg?im_w=1440"
                      title="Studio-Apartments in Berlin Mitte"
                      description="The studio apartments are located at Nook a modern corner building in the Mitte borough of Berlin. 
                      Each studio includes large full-length windows allowing for lots of natural light, high-speed Wi-Fi, an ensuite 
                      bathroom with underfloor heating, a working table and queen-size or double bed.
                      The accommodations are accessed via digital locks."
                      price="$90/night"
                      rating={5}
                 />
            </Home_section>

            <Home_section>
            <Card 
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-45490836/original/e1eed4b4-116f-478e-bc0b-5e5c65790dc9.jpeg?im_w=1440"
                      title="Stunning One Bedroom Flat in Central Victoria GG4"
                      description="A fantastically grand one bedroom apartment, located near Londons epicentre. 
                      Living room is modern and comfortable with TV and WiFi. The ceilings are incredibly high with 
                      beautiful views over Grosvenor Gardens and Victoria. The railway station is a 3 minute walk from the 
                      apartment and so it is ideal for leisure or corporate travellers. With in walking distance of The Goring Hotel, 
                      Buckingham Palace and some fantastic shops, restaurants and theatres, 
                      it is the perfect location to stay in London"
                      price="$81/night"
                      rating={4}
                />
                <Card 
                      src="https://a0.muscache.com/im/pictures/fad4ffa0-488f-46ca-8435-827a5b683dd4.jpg?im_w=1200"
                      title="Park Lane Apartments - 2 Bedroom Premier Apartment"
                      description="Our central London serviced apartments in Clarges Street are situated in the heart of Mayfair, 
                      providing easy access to all that London’s fabulous West End has to offer.
                      Shaw House itself is a period building. It’s undergone extensive refurbishment, 
                      and today it offers luxury accommodation for your stay in Mayfair that showcases 
                      all the traditional features of the property’s past."
                      price="$‏102/night"
                      rating={3}
                />
                 <Card 
                      src="https://a0.muscache.com/im/pictures/07e19e03-a90b-4915-8f8b-3e4b29fc4012.jpg?im_w=1200"
                      title="Live like real crusaders in a unique apartment!"
                      description="Feel like real crusaders in an apartment with medieval walls and all the necessary
                       modern amenities. It features a jacuzzi for two, a king size bed, air conditioning and a fully equipped kitchen.
                      You will live in the atmosphere of the old city, surrounded by a huge number of historical 
                      sights and ancient buildings. You will also find lots of elegant restaurants and cozy cafes as 
                      well as gorgeous city beach within walking distance."
                      price="$127/night"
                      rating={5}
                 />
            </Home_section>
        </Div>
    )
}

export default Home;

const Div = styled.div`
width:100%100vw;
justify-content: center;
align-items: center;
`
const Home_section = styled.div`
display: flex;
padding: 50px;
`
