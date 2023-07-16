import {React, useState} from 'react'


// redux
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/authSlice';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
  

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission logic here
      // You can access the form values (name, email, mobileNumber, password) here
      console.log('Submitted:', name, email, mobileNumber, password);
      dispatch(registerUser({name, email, mobileNumber, password}));
    };
  
    return (
      <div className="container w-50 text-start">
        <h1 className='text-center mb-5'>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="tel"
              className="form-control"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  };

export default Register