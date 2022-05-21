import { Card } from './components/Card';

import React from 'react';



function App() {

const [cardsdata , setcardsdata] = React.useState([
  {
             date : "28/10/2020",
             name : "Amazon Gift",
             pay : "Pay",
             site : "Desktop-Mobile",
             logo :"https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    
        },
        {
          date : "28/10/2020",
          name : "Amazon Gift",
          pay : "Pay",
          site : "Desktop-Mobile",
          logo :"https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
 
     },
        {
          date : "17 sep 2020",
          name : "Apple Gift",
          pay : "Payment",
          site : "MacOS-Mobile",
          logo :"https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
        
        },
       
     {
      date : "28/10/2020",
      name : "Amazon Gift",
      pay : "Pay",
      site : "Desktop-Mobile",
      logo :"https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",

 },
 {
  date : "17 sep 2020",
  name : "Apple Gift",
  pay : "Payment",
  site : "MacOS-Mobile",
  logo :"https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",

},
])





  return (
   <div className='App'>
     <Card key ={ Date.now()} form = {cardsdata}/>
     </div>
   
  );
}

export default App;
