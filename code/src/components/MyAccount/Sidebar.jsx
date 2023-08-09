import React, { useState } from "react";
import PersonalInfo from "../../assets/ICONS/PersonalInfo.svg";
import Education from "../../assets/ICONS/Education.svg";
import Bank from "../../assets/ICONS/Bank.svg";
import document from "../../assets/ICONS/document.svg";
import Overview from "../../assets/ICONS/Overview.svg";
import BussinessInformation from "../../assets/ICONS/BussinessInformation.svg";
import { Link } from "react-router-dom";

const Sidebar = ({myAccActiveButton, setMyAccActiveButton}) => {
  // const [myAccActiveButton, setMyAccActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setMyAccActiveButton(button);
    console.log(button);
  };
  
  return (
    <div>
      <ul className="navbar-nav ">
        <li
          className="nav-item d-flex my-4 justify-content-start "
          style={{ width: "100%" }}
        >
          <img src={Overview} alt="" style={{ width: "27px" }} />
          <div className="text-decoration-none text-black">
            <button
              className={`btn bg-white border-0 ${
                myAccActiveButton === "overview" ? "activee" : ""
              }`}
              onClick={() => handleButtonClick("overview")}
            >
              Overview
            </button>
          </div>
        </li>
        <li
          className="nav-item d-flex my-4 justify-content-start "
          style={{ width: "100%" }}
        >
          <img src={PersonalInfo} alt="" style={{ width: "27px" }} />
          <div className="text-decoration-none text-black">
            <button
              className={`btn bg-white border-0 ${
                myAccActiveButton === "personal-information" ? "activee" : ""
              }`}
              onClick={() => handleButtonClick("personal-information")}
            >
              Update Personal Information
            </button>
          </div>
        </li>
        <li
          className="nav-item d-flex my-4 justify-content-start "
          style={{ width: "100%" }}
        >
          <img src={Education} alt="" style={{ width: "27px" }} />
          <div className="text-decoration-none text-black">
            <button
              className={`btn bg-white border-0 ${
                myAccActiveButton === "education-details" ? "activee" : ""
              }`}
              onClick={() => handleButtonClick("education-details")}
            >
              Update Education Details
            </button>
          </div>
        </li>
        <li
          className="nav-item d-flex my-4 justify-content-start "
          style={{ width: "100%" }}
        >
          <img src={Bank} alt="" style={{ width: "27px" }} />
          <div className="text-decoration-none text-black">
            <button
              className={`btn bg-white border-0 ${
                myAccActiveButton === "bank-details" ? "activee" : ""
              }`}
              onClick={() => handleButtonClick("bank-details")}
            >
              Update Bank Details
            </button>
          </div>
        </li>
        <li
          className="nav-item d-flex my-4 justify-content-start "
          style={{ width: "100%" }}
        >
          <img src={document} alt="" style={{ width: "27px" }} />
          <div className="text-decoration-none text-black">
            <button
              className={`btn bg-white border-0 ${
                myAccActiveButton === "documents" ? "activee" : ""
              }`}
              onClick={() => handleButtonClick("documents")}
            >
              Update Documents
            </button>
          </div>
        </li>
        <li
          className="nav-item d-flex my-4 justify-content-start "
          style={{ width: "100%" }}
        >

          <img src={BussinessInformation} alt="" style={{ width: "27px" }} />
          <div className="text-decoration-none text-black">
            <button
              className={`btn bg-white border-0 ${
                myAccActiveButton === "business-information" ? "activee" : ""
              }`}
              onClick={() => handleButtonClick("business-information")}
            >
              Update Business Information
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
