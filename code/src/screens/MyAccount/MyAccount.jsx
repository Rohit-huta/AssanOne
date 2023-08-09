import React from "react";
import Sidebar from "../../components/MyAccount/Sidebar";

const Overview = () => {
  return (
    <div className="bg-Glight p-3">
      <div className="bg-white">
        {/* Appointment Status */}
        <div className="d-flex justify-content-between border py-1 px-2">
          <p className="text-grey">Appointment Status</p>
          <button className="bg-white border-0 text-primary">
            Edit details
          </button>
        </div>

        <div className="border p-2 mb-3">
          <div className="row column-gap-2">
            <div className="col">
              <div>
                <strong className="">Affiliate Code</strong>
                <p>IL2319</p>
              </div>
              <div>
                <strong>Otp Verfied</strong>
                <p>Yes</p>
              </div>
              <div>
                <strong>Approved by</strong>
              </div>
            </div>
            <div className="col">
              <div>
                <strong>Parent Code</strong>
                <p>IL2208</p>
              </div>
              <div>
                <strong>Pan Status</strong>
                <p className="text-success">Verified</p>
              </div>
            </div>
            <div className="col">
              <div>
                <strong>Partner Type</strong>
                <p>Individual</p>
              </div>
              <div>
                <strong>Date Of registration</strong>
                <p>September 1 2021 10:00:29 AM</p>
              </div>
            </div>
            <div className="col">
              <div>
                <strong>KYC Status</strong>
                <p className="text-success">Verfied</p>
              </div>
              <div>
                <strong>Introduced by</strong>
                <p>IRY32092</p>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Inforamtion */}
        <div className="d-flex justify-content-between border py-1 px-2">
          <p className="text-primary">Basic Information</p>
          <button className="btn btn-primary">Edit details</button>
        </div>

        <div className="border p-2 mb-3">
          <div className="row column-gap-2">
            <div className="col">
              <div>
                <strong>Entry/Person Name</strong>
                <p>Arjun Khade</p>
              </div>
              <div>
                <strong>Pan Number</strong>
                <p>NSIJL7856T</p>
              </div>
              <div>
                <strong>Pin Code</strong>
                <p>455051</p>
              </div>
              <div>
                <strong>GST Liability Date</strong>
                <p>01/01/2000</p>
              </div>
            </div>

            <div className="col">
              <div>
                <strong>Father's Name</strong>
                <p>Rakesh Khade</p>
              </div>
              <div>
                <strong>Date Of Birth</strong>
                <p>XX/XX/YYYY</p>
              </div>
              <div>
                <strong>Landline Number</strong>
                <p></p>
              </div>
              <div>
                <strong>GST verification Date</strong>
                <p>01/01/2000</p>
              </div>
            </div>

            <div className="col">
              <div>
                <strong>Mobile Number</strong>
                <p>99999-99999</p>
              </div>
              <div>
                <strong>Address</strong>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi, distinctio.
                </p>
              </div>
              <div>
                <strong>GST Number</strong>
                <p>GSNKJNK898A</p>
              </div>
              <div>
                <strong>Vendor Name</strong>
                <p>Rahul PVT. LTD.</p>
              </div>
              <div>
                <strong>Msme Registration valid from</strong>
                <p>XX/XX/YYYY</p>
              </div>
            </div>
            <div className="col">
              <div>
                <strong>Email Id</strong>
                <p className="text-success">something@eamil.com</p>
              </div>
              <div>
                <strong>State</strong>
                <p>Maharashtra</p>
              </div>
              <div>
                <strong>City</strong>
                <p>Mumbai</p>
              </div>
              <div>
                <strong>GST Bussiness Constitution</strong>
                <p></p>
              </div>
              <div>
                <strong>Msme Registraion Number</strong>
                <p>MH-01-098008 </p>
              </div>
              <div>
                <strong>Select Msme Category</strong>
                <p>Micro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Information */}
        <div className="d-flex justify-content-between border py-1 px-2">
          <p className="text-grey">Bank Information</p>
          <button className="bg-white border-0 text-primary">
            Edit details
          </button>
        </div>

        <div className="border p-2 mb-3">
          <div className="row column-gap-2">
            <div className="col">
              <div>
                <strong className="">NIFT IFSC Code:</strong>
                <p>ibkl0000000</p>
              </div>
              <div>
                <strong>Pin Code</strong>
                <p>XXXXXX</p>
              </div>
            </div>

            <div className="col">
              <div>
                <strong>Acoount Holder Name</strong>
                <p>Arjun Khade</p>
              </div>
              <div>
                <strong>Branch State:</strong>
                <p>Maharashtra</p>
              </div>
            </div>

            <div className="col">
              <div>
                <strong>Bank Name</strong>
                <p>IDBI bank</p>
              </div>
              <div>
                <strong>Branch City</strong>
                <p>Mumbai</p>
              </div>
            </div>

            <div className="col">
              <div>
                <strong>Account Holder name</strong>
                <p>XXXXXXXXXXXXXX</p>
              </div>
              <div>
                <strong>Branch Address</strong>
                <p>Mumbai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="d-flex justify-content-between border py-1 px-2">
          <p className="text-grey">Bank Information</p>
          <button className="bg-white border-0 text-primary">
            Edit details
          </button>
        </div>

        <div className="border p-2 mb-3">
          <div className="row column-gap-2">
            <div className="col">
              <div>
                <strong className="">Primary Bussiness</strong>
                <p>Insurance</p>
              </div>
            </div>

            <div className="col">
              <div>
                <strong>Loan Type</strong>
                <p>Car, Health, Two Wheeler</p>
              </div>
            </div>

            <div className="col">
              <div>
                <strong>Profession</strong>
                <p>Insurance</p>
              </div>
            </div>

            <div className="col">
              <div>
                <strong>No. Of Policies</strong>
                <p>50+</p>
              </div>
            </div>
          </div>
        </div>

        {/* KYC Details */}
        <div className="d-flex justify-content-between border py-1 px-2">
          <p className="text-grey">KYC Details</p>
          <button className="bg-white border-0 text-primary">
            Edit details
          </button>
        </div>

        <div className="border p-2 mb-">
          <table class="table">
            <thead className="table-secondary">
              <tr>
                <th scope="col">Document Type</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">File</th>
                <th scope="col">Verifier Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="p-3">
                  Pan Card
                </th>
                <td></td>
                <td></td>
                <td>
                  <i class="fa-solid fa-file"></i>
                </td>
                <td>N/A</td>
              </tr>
              <tr>
                <th scope="row" className="p-3">
                  Bank Proof
                </th>
                <td></td>
                <td></td>
                <td>
                  <i class="fa-solid fa-file"></i>
                </td>
                <td>N/A</td>
              </tr>
              <tr>
                <th scope="row" className="p-3">
                  Address Proof
                </th>
                <td></td>
                <td></td>
                <td>
                  <i class="fa-solid fa-file"></i>
                </td>
                <td>N/A</td>
              </tr>
              <tr>
                <th scope="row" className="p-3">
                  {" "}
                  GST certificate
                </th>
                <td></td>
                <td></td>
                <td>
                  <i class="fa-solid fa-file"></i>
                </td>
                <td>N/A</td>
              </tr>
              <tr>
                <th scope="row" className="p-3">
                  Highest education
                </th>
                <td></td>
                <td></td>
                <td>
                  <i class="fa-solid fa-file"></i>
                </td>
                <td>N/A</td>
              </tr>
              <tr>
                <th scope="row">Pan Card</th>
                <td></td>
                <td></td>
                <td>
                  <i class="fa-solid fa-file"></i>
                </td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const UpdatePersonalInformation = ({ setMyAccActiveButton }) => {
  return (
    <div className="d-flex flex-column gap-4">
      <strong className="text-primary">Personal Information</strong>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>Full Name </strong>
        <div className="w-100">
          <input
            type="text"
            class="form-control"
            placeholder="Full Name"
            aria-label="Claim Request for"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>Email </strong>
        <div className="w-100">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="Claim Request for"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>Mobile </strong>
        <div className="w-100">
          <input
            type="text"
            class="form-control"
            placeholder="Mobile"
            aria-label="Claim Request for"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>
          Alternative Mobile{" "}
        </strong>
        <div className="w-100">
          <input
            type="text"
            class="form-control"
            placeholder="Alternative Mobile"
            aria-label="Claim Request for"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>Address </strong>
        <div className="w-100">
          <input
            type="text"
            class="form-control"
            placeholder="Address"
            aria-label="Claim Request for"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>Pincode </strong>
        <div className="w-100">
          <input
            type="text"
            class="form-control"
            placeholder="Pincode"
            aria-label="Claim Request for"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>City </strong>
        <div className="w-100">
          <input
            type="text"
            class="form-control"
            placeholder="City"
            aria-label="Claim Request for"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>State </strong>
        <div className="w-100">
          <input
            type="text"
            class="form-control"
            placeholder="State"
            aria-label="Claim Request for"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>Gender </strong>
        <div className="w-100">
          <button
            className="btn border-secondary-subtle dropdown-toggle w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Gender
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Male</li>
            <li className="dropdown-item">Female</li>
            <li className="dropdown-item">Not Specified</li>
          </ul>
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>
          Marital status{" "}
        </strong>
        <div className="w-100">
          <button
            className="btn border-secondary-subtle dropdown-toggle w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Marital Status
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Married</li>
            <li className="dropdown-item">Unmarried</li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-end w-100">
        <button
          className="btn btn-primary w-25 px-5 text-nowrap"
          onClick={() => setMyAccActiveButton("education-details")}
        >
          Update & Continue
        </button>
      </div>
    </div>
  );
};

const UpdateEducationDetails = ({ setMyAccActiveButton }) => {
  return (
    <div className="d-flex flex-column gap-4">
      <strong className="text-primary">Education Details</strong>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>
          Education Details{" "}
        </strong>
        <div className="w-100">
          <input
            type="text"
            class="form-control"
            placeholder="Education Details"
            aria-label="Claim Request for"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>
          Education Institute{" "}
        </strong>
        <div className="w-100">
          <input
            type="text"
            class="form-control"
            placeholder="Education Institute"
            aria-label="Claim Request for"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>
          Passout Date{" "}
        </strong>
        <div className="w-100">
          <input
            type="Date"
            class="form-control"
            placeholder="Full Name"
            aria-label="Claim Request for"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <strong style={{ width: "20%", textAlign: "left" }}>
          Upload Certificate{" "}
        </strong>
        <div className="w-100">
          <input
            type="file"
            style={{ display: "none" }}
            class="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
          />
          <label class="custom-file-label form-control" for="inputGroupFile01">
            Choose file
          </label>
        </div>
      </div>

      <div className="d-flex justify-content-end w-100">
        <button className="btn btn-primary w-25 px-5 text-nowrap">
          Update & Continue
        </button>
      </div>
    </div>
  );
};

const MyAccount = ({
  setMyAccount,
  myAccActiveButton,
  setMyAccActiveButton,
}) => {
  console.log(myAccActiveButton);
  return (
    <div>
      {myAccActiveButton === "overview" && <Overview />}
      {myAccActiveButton === "personal-information" && (
        <UpdatePersonalInformation
          setMyAccActiveButton={setMyAccActiveButton}
        />
      )}
      {myAccActiveButton === "education-details" && (
        <UpdateEducationDetails setMyAccActiveButton={setMyAccActiveButton} />
      )}
    </div>
  );
};

export default MyAccount;
