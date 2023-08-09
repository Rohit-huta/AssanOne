import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { vehicleDetailsInfo } from "../../redux/vehicleDetailsSlice";
const CarDetails = () => {
  const { vehicleData, loading, error } = useSelector(
    (state) => state.vehicleDetails
  );

  const dispatch = useDispatch();

  const handleVehicleDataFetch = (e) => {
    e.preventDefault();
    console.log(1);
    dispatch(vehicleDetailsInfo())
  };

  console.log(vehicleData, loading, error);

  return (
    <div className="h-75" style={{ display: "grid", placeItems: "center" }}>
      <div
        className="card"
        style={{
          width: "80%",
          height: "80%",
          display: "grid",
          placeItems: "center",
          boxShadow: "6px 4px 5px 0px rgba(219,219,219,1)",
        }}
      >
        <div className="card-body">
          <h2 className="card-title">
            <strong>Enter Your Vehicle Number</strong>
          </h2>
          <p className="card-text">
            Enter your Number and get OTP to verification
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              style={{ backgroundColor: "rgba(137, 230, 244, 0.48)" }}
              className="form-control"
              placeholder="MH XX BC XXXX"
              aria-label="Enter Mobile Number"
              aria-describedby="basic-addon1"
            />
          </div>
          {/* <Link to="/pcustomer">
            <button className=" btn btn-primary w-100">Next</button>
          </Link> */}
          <button
            onClick={handleVehicleDataFetch}
            className=" btn btn-primary w-100"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
