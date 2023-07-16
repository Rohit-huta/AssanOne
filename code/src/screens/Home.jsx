import {React, useState} from 'react'
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

// ICONS
import approoved from '../assets/ICONS/IRDAApproved.svg';
import ASSANONELOGO from '../assets/ICONS/ASSANONELOGO.png';
import HomepageIllustration from '../assets/ICONS/Homepageillustration.png'
import assanOneProcess from '../assets/ICONS/AssanProcess.svg';
import paperFree from '../assets/ICONS/Paperfreeprocess.svg';
import zeroInvestment from '../assets/ICONS/ZeroInvestment.svg';
import handsOnTraining from '../assets/ICONS/Training.svg';
import timelyPayouts from '../assets/ICONS/TimelyPayout.svg';
import fillTheDetail from '../assets/ICONS/Fillthedetail.svg';
import compareQuotes from '../assets/ICONS/Comparequotes.svg';
import makePaymentRelax from '../assets/ICONS/Makepaymentbe relax.svg';


const Home = ({setLogedIn}) => {
    const [getOtp, setGetOtp] = useState(false);
    
    const handleClick = () => {
        setGetOtp(true);
        console.log(getOtp);
    }

    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    
  return (
    <>
    <div className='d-flex justify-content-center mb-4'>
        <div className='d-flex justify-content-between'>
            <img src={ASSANONELOGO} alt="" className='img-fluid w-25' />
            <Link to='/register'><button className='btn btn-primary px-4' >Register as POSP</button></Link>
        </div>
    </div>
    <div className='container'>

        <div className='row column-gap-3 d-flex align-items-center' style={{marginBottom: "6rem", height: "80vh"}}>
            <div className='col'>
                <img src={HomepageIllustration} 
                    alt="Insurance" className='img-fluid w-75'  />
            </div>
            <div className='col' style={{display:"grid", placeItems:"center"}}>
            <div className="card" style={{width: "80%", height: "80%",display:"grid", placeItems: "center", boxShadow: "6px 4px 5px 0px rgba(219,219,219,1)"}}>
            {
                getOtp ? ( <div className="card-body">
                    <h2 className="card-title"><strong>Enter Your Mobile Number / Partner Code</strong></h2>
                    <p className="card-text">Enter your Number and get OTP to verificatior</p>
                    <div className="input-group mb-3 d-flex flex-column">
    

                        <input type="number" style={{backgroundColor: "rgba(137, 230, 244, 0.48)"}} 
                                className="form-control w-100" 
                                placeholder="Enter OTP" 
                                aria-label="Enter OTP" aria-describedby="basic-addon1" />
                        <p className='text-primary text-start'>Didn't recieve OTP?</p>
                    </div>
                    <button className=' btn btn-primary w-100' onClick={() => setLogedIn(true)}>Login</button>
                </div>) : ( 
                    <div className=''>
                        <div className="card-body p-5" style={{height: '400px'}}>
                            <h2 className="card-title"><strong>Enter Your Mobile Number / Partner Code</strong></h2>
                            <p className="card-text">Enter your Number and get OTP to verificatior</p>
                            <div className="input-group mb-3 d-flex flex-column">
                                <div className='d-flex mb-3'>
                                    <span className="input-group-text" id="basic-addon1">+91</span>
                                    <input type="number" style={{backgroundColor: "rgba(137, 230, 244, 0.48)"}} className="form-control" 
                                            placeholder="Enter Mobile Number" 
                                            aria-label="Enter Mobile Number" aria-describedby="basic-addon1" />    
                                </div>       
                            </div>
                            <button className=' btn btn-primary w-100' onClick={handleClick}>Get Otp</button>
                    </div>
                    </div>
                    ) 
                }
            </div>
        </div>
    </div>


    {/* 2nd part */}
    <div className='mb-2' style={{height: "90vh"}}>
        <div className='d-flex justify-content-center mb-5'>
            <p className='fs-5 w-75 text-center mb-3'>
                <strong>
                    Sell right insurance products to your clients
                    from anywhere, anytime with Assan One Advantage
                </strong>
            </p>
        </div>

        <div className='row column-gap-3 mb-4'>
            <div className='col'>
                <img src={approoved} alt="SVG" className='mb-3' style={{width: "25%"}}/>
                <h5>IRDA Approved</h5>
                <p>Assan One is IRDA approved Insurance broking company</p>
            </div>
            <div className='col'>
                <img src={assanOneProcess} alt="SVG" className='mb-3' style={{width: "25%"}}/>
                <h3>Assan online process</h3>
                <p>Assan One is IRDA approved Insurance broking company</p>
            </div>
            <div className='col'>
                <img src={paperFree} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h3>IRDA Approved</h3>
                <p>Assan One is IRDA approved Insurance broking company</p>
            </div>
        </div>
        <div className='row column-gap-3'>
            <div className='col'>
                <img src={zeroInvestment} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h5>Zero Investment</h5>
                <p>All you need to have is a smartphone with internet connectivity.</p>
            </div>
            <div className='col'>
                <img src={handsOnTraining} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h3>Assan online process</h3>
                <p>Get latest certifications on latest products by industry, experts and get ahead in your game.</p>
            </div>
            <div className='col'>
                <img src={timelyPayouts} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h3>Timely Payouts</h3>
                <p>Recieve Payments on time without delays</p>
            </div>
        </div>
     

    </div>



    {/* 3rd part */}
    <div style={{height: "90vh"}}>
        <div className='d-flex justify-content-center mb-5'>
            <h1 className='w-75 text-center mb-5'>
                Ease of using Assan One Platform
            </h1>
        </div>

        <div className='row column-gap-3 mb-4'>
            <div className='col'>

                <img src={fillTheDetail} alt="svg" className='mb-3' style={{width: "25%"}}/>

                <h3 className='mb-4'>Fill the details</h3>
                <p>Fill in your details and Get insurance policy, premium quotes from top rated insurance instantly</p>
            </div>
            <div className='col'>
                <img src={compareQuotes} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h3>Compare quotes and Choose a insurance policy</h3>
                <p>From numerous available quotes choose the one that best suits your requirements and budget</p>
            </div>
            <div className='col'>
                <img src={makePaymentRelax} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h3>Make payment and be relax.</h3>
                <p> pay online and get your policy right away in your inbox.</p>
            </div>
        </div> 
    </div>
    
    <Footer />
</div>
    </>
  )
}

export default Home