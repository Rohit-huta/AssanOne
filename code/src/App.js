import {React, useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Aside from './components/Aside';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MyAccount from './screens/MyAccount/MyAccount';

import Customer from './screens/Customer';
import Dashboard from './screens/Dashboard';
import Claims from './screens/Claims';
import Training from './screens/Training';

import Confirmation from './screens/Health Insurance/Confirmation';
import PersonalDetails from './screens/Health Insurance/PersonalDetails';
import SavedQoutes from './screens/SavedQoutes';
import DetailsOfCustomer from './screens/Health Insurance/DetailsOfCustomer';
import AgainDetailsOfCustomer from './screens/Health Insurance/AgainDetailsOfCustomer';
import PlanDetails from './screens/Health Insurance/PlanDetails';

// Car Insurance
import PConfirmation from './screens/PrivateCar/PConfirmation'
import PPersonalDetails from './screens/PrivateCar/PPersonalDetails'
import PPlanDetails from './screens/PrivateCar/PPlanDetails'
import PCustomer from './screens/PrivateCar/PCustomer';

// Two WHeeler
import TCustomer from './screens/TwoWheeler/TCustomer';
import TwoWheelerDetails from './screens/TwoWheeler/TwoWheelerDetails';
import TConfirmation from './screens/TwoWheeler/TConfirmation';
import TPersonalDetails from './screens/TwoWheeler/TPersonalDetails';
import TPlanDetails from './screens/TwoWheeler/TPlanDetails';


import Home from './screens/Home';


import Sell_Insurance from './screens/Sell Insurance/Sell_Insurance';
import Leads from './screens/Leads';
import Renewal from './screens/Renewal';
import Prospects from './screens/Prospects';
import ACustomer from './screens/ACustomer';
import CarDetails from './screens/PrivateCar/CarDetails';
import Register from './screens/Register/Register';



function App() {

  const [logedIn, setLogedIn] = useState(false);
  const [myAccount, setMyAccount] = useState(false);


  return (
    <BrowserRouter>
    <div className="App container">
      
      {!logedIn && (

        <Routes>
            
          <Route path='/home' element={<Home setLogedIn={setLogedIn}/>}></Route>
          <Route path='/register' element={<Register />}></Route>
          </Routes> 

              
        )
      } 
      {/* {!myAccount && (
              <MyAccount setMyAccount={setMyAccount}/>
        )
      }  */}

      {logedIn && (
          <>  
          <Navbar />
          <div className='row' style={{padding: "50px"}}>
            <div className='col-3'>
              <Aside />
            </div>
            <div className='col'>
  
    
            <Routes>
  

              <Route path='/' element={ <Dashboard />}></Route>
              <Route path='/sellInsurance' element={ <Sell_Insurance />}></Route>
  
              {/* HEALTH INSURANCE */}
              <Route path='/personalDetails' element={ <PersonalDetails />}></Route>
              <Route path='/planDetails' element={ <PlanDetails />}></Route>
              <Route path='/healthInsurance' element={ <DetailsOfCustomer />}></Route>
              <Route path='/confirmation' element={ <Confirmation />}></Route>
  
              {/* Car INSURANCE */}

              <Route path='/carInsurance' element={ <CarDetails />}> </Route>
              <Route path='/pcustomer' element={ <PCustomer />}> </Route>
              <Route path='/pplanDetails' element={ <PPlanDetails />}></Route>
              <Route path='/pPersonalDetails' element={ <PPersonalDetails />}> </Route>
              <Route path='/pConfirmation' element={ <PConfirmation />}></Route>
  
  
              {/* Two Wheeler INSURANCE */}
              <Route path='/twoWheeler' element={ <TwoWheelerDetails />}> </Route>
              <Route path='/tCustomer' element={ <TCustomer />}> </Route>
              <Route path='/tplanDetails' element={ <TPlanDetails />}></Route>
              <Route path='/tPersonalDetails' element={ <TPersonalDetails />}> </Route>
              <Route path='/tConfirmation' element={ <TConfirmation />}></Route>


              {/* Dashboard */}
              <Route exact path='/dashboard'  element={ <Dashboard />}></Route>


              {/* Saved Quotes */}
              <Route path='/savedQuotes' element={ <SavedQoutes />}></Route>

              {/* Renewal */}
              <Route path='/renewal' element={ <Renewal />}></Route>

              {/* Prospects */}
              <Route path='/prospects' element={ <Prospects />}></Route>


              {/* Customers */}
              <Route path='/customers' element={ <ACustomer />}></Route>


              {/* Leads */}
              <Route path='/leads' element={ <Leads />}></Route>
  
              {/* Claims */}
              <Route path='/claims' element={ <Claims />}></Route>
  
              {/* Training */}
              <Route path='/training' element={ <Training />}></Route>


              {/* MyAccount */}
              <Route path='/myAccount' element={ <MyAccount />}></Route>
            </Routes>

            {/* <Dashboard /> */}
            {/* <Claims /> */}
            {/* <Training /> */}
            {/* <SavedQoutes /> */}
  
            {/* _________________________ */}
  
  
  
  
  
            {/* <Confirmation /> */}
            {/* <PersonalDetails /> */}
            {/* <DetailsOfCustomer /> */}
            {/* <AgainDetailsOfCustomer /> */}
            {/* <PlanDetails /> */}
  
            {/* PRIVATE CAR */}
            {/* <Customer /> */}
  
  
            {/* Two Wheeler */}
            {/* <TConfirmation /> */}
            {/* <TPersonalDetails /> */}
            {/* <TPlanDetails /> */}
            
  
            {/* <MyAccount /> */}
            </div>
                
          </div>
  
  
  
         <Footer />
         </>
  
        )
      }

     
     </div>
     </BrowserRouter>
  );
}

export default App;
