import React from 'react'
import ASSANONELOGO from '../assets/ICONS/ASSANONELOGO.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-sm bg-white fixed-top ">
            <div class="container d-flex justify-content-between" >
                <div>
                <h5> <a href="/"><img src={ASSANONELOGO} className="navbar-brand img-fluid" href="#" alt='logo' style={{width: "15rem"}}/> </a>  </h5>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                </div>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item mx-3">
                        <h5><a href='/' className="nav-link active" aria-current="page">Home</a></h5>
                        </li>
                        <li className="nav-item mx-3">
                        <h5><a className="nav-link" href="#">Help</a></h5>
                        </li>
                        <li className="nav-item mx-3">
                        <h5> <a className="nav-link" href="#"><i className="fa-solid fa-magnifying-glass"></i></a></h5>
                        </li>
                        <li className="nav-item mx-2">
                             <h5 className=''>
                                <Link to='/myAccount' className='text-decoration-none text-black'>
                                    My Account
                                </Link>
                            </h5>
                        </li>
                    </ul>

                </div>
            </div>
            <hr />
        </nav>

    </>
  )
}

export default Navbar