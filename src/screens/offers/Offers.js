import '../../assets/profile/css/bootstrap.min.css';
import '../../assets/profile/css/simple-line-icons.css';
import '../../assets/profile/css/themify-icons.css';
import "../../assets/profile/css/style.css"; 
import "../../assets/profile/css/set1.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Offers from '../../components/profile/offers/Offers';


function OfferScreen() {
  return (
    <>
     
        
         <Offers />
        



        
       
    </>
  );
}

export default OfferScreen;
