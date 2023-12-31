import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postDetailsOfCustomer } from "../../redux/detailsOfCustomerSlice";

const DetailsOfCustomer = () => {
  const [title, setTitle] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [city, setCity] = useState("");
  const [sumAssured, setSumAssured] = useState("");
  const [gender, setGender] = useState("");
  const [relation, setRelation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [noOfChildren, setNoOfChildren] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [occupation, setOccupation] = useState("");
  const [martialStatus, setMartialStatus] = useState("");


  const { loading, success, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClickOnViewQuote = (e) => {
    e.preventDefault();
    const newData = {
      title: title,
      full_name: fullName,
      mobile: Number(mobileNo),
      address: address,
      city: city,
      state: state,
      pincode: Number(pincode),
      occupation: occupation,
      martialStatus: martialStatus,
      sumAssured: Number(sumAssured),
      gender: gender,
      relation: relation,
      dateOfBirth: dateOfBirth,
      noOfChildren: Number(noOfChildren),
    };
    dispatch(postDetailsOfCustomer(newData));
  };

  console.log(loading, success, error);

  return (
    <div className="text-start">
      <h1 className="text-primary mb-5">Health Insurance</h1>
      <h4 className="mb-4">Nominee Details</h4>
      <div className="border p-4 position-relative">
        <h4 className="">Basic details Of Customer</h4>
        <hr className="w-50 mb-4" />

        {/* Title, Name Mobile number*/}
        <div className="row mb-3 column-gap-1">
          <div className="col">
            <button
              className="btn border-secondary-subtle dropdown-toggle w-100 btn-inside-secondary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {title.length === 0 ? "Select Title" : title}
            </button>
            <ul className="dropdown-menu">
              <li
                className="dropdown-item text-center"
                onClick={() => setTitle("Mr.")}
              >
                Mr.
              </li>
              <li
                className="dropdown-item text-center"
                onClick={() => setTitle("Ms.")}
              >
                Ms.
              </li>
            </ul>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              aria-label="emailid"
              aria-describedby="basic-addon2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Mobile Number"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
        </div>

        {/* City, Sum Assured, AddMembers button  */}
        <div className="row mb-5 column-gap-1">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              aria-label="emailid"
              aria-describedby="basic-addon2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              aria-label="emailid"
              aria-describedby="basic-addon2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="State"
              aria-label="emailid"
              aria-describedby="basic-addon2"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Pincode"
              aria-label="emailid"
              aria-describedby="basic-addon2"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Sum Assured"
              aria-label="emailid"
              aria-describedby="basic-addon2"
              value={sumAssured}
              onChange={(e) => setSumAssured(e.target.value)}
            />
          </div>
          <div className="col">
            <button className="btn btn-outline-primary w-100 px-3">
              Add Members
            </button>
          </div>
        </div>

        {/* Select Gender, Relation, No of Child  */}
        <div className="row mb-3 column-gap-1">
          <div className="col">
            <p style={{}} className="text-secodary m-0">
              Select Gender
            </p>

            <div className="d-flex ">
              <div className="form-check">
                <input
                  className="form-check-input"
                  style={{ width: "14px", height: "14px" }}
                  type="radio"
                  name="Answer"
                  id="Yes"
                  onClick={() => setGender("Male")}
                />
                <label
                  className="form-check-label"
                  role="button"
                  style={{ marginRight: "10px", fontSize: "16px" }}
                  for="Yes"
                >
                  Male
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  style={{ width: "14px", height: "14px" }}
                  type="radio"
                  name="Answer"
                  id="No"
                  onClick={() => setGender("Female")}
                />
                <label
                  className="form-check-label"
                  role="button"
                  style={{ marginRight: "10px", fontSize: "16px" }}
                  for="No"
                >
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Occupation"
              aria-label="emailid"
              aria-describedby="basic-addon2"
              value={occupation}
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
            />
          </div>

          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Relation"
              aria-label="emailid"
              aria-describedby="basic-addon2"
              value={relation}
              onChange={(e) => {
                setRelation(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Relation"
              aria-label="emailid"
              aria-describedby="basic-addon2"
              value={martialStatus}
              onChange={(e) => {
                setMartialStatus(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="No Of children"
              aria-label="emailid"
              aria-describedby="basic-addon2"
              value={noOfChildren}
              onChange={(e) => setNoOfChildren(e.target.value)}
            />
          </div>
        </div>

        {/* Select Gender, Relation, No of Child  */}
        <div className="row mb-3 column-gap-1">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Eldest Child DOB"
              aria-label="emailid"
              aria-describedby="basic-addon2"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
          <div className="col">
            <button
              onClick={handleClickOnViewQuote}
              className="btn btn-primary w-100 px-4"
            >
              View Quote
            </button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsOfCustomer;
