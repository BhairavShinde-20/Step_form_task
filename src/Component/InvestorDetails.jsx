import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Main.css";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import { Button } from "@mui/material";
import { multiStepContext } from "./StepContext";

const InvestorDetails = () => {
  const { userData, setCurrentStep, setUserData, submitData,currentStep } =
    useContext(multiStepContext);
  // console.log(currentStep);


  const [salutation, setSalutation] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [roles, setRoles] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState();
  const [state, setState] = useState("");
  const [postcode, setPostCode] = useState();
  const [dob, setDob] = useState();
  const[passport,setPassport]=useState();
  const[drivinglicence,setDrivingLicence]=useState();
  const[salaryslip,setSalarySlip]=useState();
  const[pay,setPayg] =useState();

  const [showerr, setShowErr] = useState(false);
  const Error = () => {
    function ShowEroor() {
      return (
        <span style={{ color: "red", fontSize: "0.7rem" }}>
          This field is required
        </span>
      );
    }
    setShowErr(ShowEroor);
  };
  const submitandNext =()=>{
    setCurrentStep(6);
    submitData();
  }
 
  return (
    <>
      <Box
        sx={{
          bgcolor: "white",
          height: "auto",
          width: "100%",
          backgroundColor: "rgba(0,0,0,.1)",
        }}
        className="main"
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl
            variant="filled"
            sx={{ m: 1, minWidth: 120 }}
          >
            {/* <InputLabel id="demo-simple-select-filled-label">
              Select Satulation
            </InputLabel> */}
          <span className="font">Satulation<span style={{ color: "red"}}>*</span></span>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={userData["I_Satulation"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "I_Satulation": e.target.value,
                });
                setSalutation(e.target.value);
              }}
            >
              <MenuItem value={"Mr"}>Mr</MenuItem>
              <MenuItem value={"Mrs"}>Mrs</MenuItem>
              <MenuItem value={"Ms"}>Ms</MenuItem>
              <MenuItem value={"Miss"}>Miss</MenuItem>
              <MenuItem value={"TBD"}>TBD</MenuItem>
            </Select>
            {salutation == "" ? showerr : null}
            {/* {(salutation = "" ? showerr : null)} */}
          </FormControl>

          <FormControl>
          <span className="font">First Name<span style={{ color: "red"}}>*</span></span>
            <TextField
              id="filled-basic"
              placeholder="First Name"
              variant="filled"
              value={userData["I_First_Name"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "I_First_Name": e.target.value,
                });
                setFirstName(e.target.value);
              }}
            />
            {firstname == "" ? showerr : null}
          </FormControl>

          <FormControl>
          <span className="font">Last Name<span style={{ color: "red"}}>*</span></span>
            <TextField
              id="filled-basic"
              placeholder="Last Name"
              variant="filled"
              value={userData["I_Last_Name"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "I_Last_Name": e.target.value,
                });
                setLastName(e.target.value);
              }}
            />
            {lastname == "" ? showerr : null}
          </FormControl>

          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            {/* <InputLabel id="demo-simple-select-filled-label">
              Select Role
            </InputLabel> */}
          <span className="font">Role<span style={{ color: "red"}}>*</span></span>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={userData["I_Role"]}
              onChange={(e) => {
                setUserData({ ...userData, "I_Role": e.target.value });
                setRoles(e.target.value);
              }}
            >
              <MenuItem value="Select Role">Select Role</MenuItem>
              <MenuItem value={"Self"}>Self</MenuItem>
              <MenuItem value={"Other Individul"}>Other Individul</MenuItem>
              <MenuItem value={"Director"}>Director</MenuItem>
            </Select>
            {roles == "" ? showerr : null}
          </FormControl>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            {/* <InputLabel type="text" htmlFor="filled-adornment-amount">
              Google Address
            </InputLabel> */}
          <span className="font">Google Address</span>
            <FilledInput
              id="filled-adornment-amount"
              placeholder="Google Address"
              startAdornment={<InputAdornment position=""></InputAdornment>}
              value={userData["I_G_Address"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  "I_G_Addresss": e.target.value,
                })
              }
            />
          </FormControl>
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl>
          <span className="font">Address<span style={{ color: "red"}}>*</span></span>
            <TextField
              type="text"
              id="filled-basic"
              placeholder="Address"
              variant="filled"
              value={userData["I_Address"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "I_Address": e.target.value,
                });
                setAddress(e.target.value);
              }}
            />
            {address == "" ? showerr : null}
          </FormControl>
          <FormControl>
          <span className="font">City<span style={{ color: "red"}}>*</span></span>
            <TextField
              type="text"
              id="filled-basic"
              placeholder="City"
              variant="filled"
              value={userData["I_City"]}
              onChange={(e) => {
                setUserData({ ...userData, "I_City": e.target.value });
                setCity(e.target.value);
              }}
            />
            {city == "" ? showerr : null}
          </FormControl>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            {/* <InputLabel id="demo-simple-select-filled-label">
              {" "}
              State/Province/Territory
            </InputLabel> */}
          <span className="font">State/Province/Territory<span style={{ color: "red"}}>*</span></span>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={userData["I_State"]}
              onChange={(e) => {
                setUserData({ ...userData, "I_State": e.target.value });
                setState(e.target.value);
              }}
            >
              <MenuItem value="New South Wales">New South Wales</MenuItem>
              <MenuItem value={"Victoria"}>Victoria</MenuItem>
              <MenuItem value={"Queensland"}>Queensland</MenuItem>
              <MenuItem value={"Tasmania "}>Tasmania</MenuItem>
              <MenuItem value={"South Australia"}>South Australia</MenuItem>
              <MenuItem value={"Western Australia "}>
                Western Australia
              </MenuItem>
              <MenuItem value={"Northern Territory"}>
                Northern Territory
              </MenuItem>
            </Select>
            {state == "" ? showerr : null}
          </FormControl>

          <FormControl>
          <span className="font">PostCode<span style={{ color: "red"}}>*</span></span>
            <TextField
              id="filled-number"
              placeholder="Postcode"
              type="number"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={userData["I_P_Code"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "I_P_Code": e.target.value,
                });
                setPostCode(e.target.value);
              }}
            />
            {postcode == "" ? showerr : null}
          </FormControl>
          <FormControl>
          <span className="font">Email Address</span>
            <TextField
              id="filled-basic"
              placeholder="abc@xyz.com"
              type="email"
              variant="filled"
              value={userData["I_Email"]}
              onChange={(e) =>
                setUserData({ ...userData, "I_Email": e.target.value })
              }
            />
          </FormControl>
          <FormControl>
          <span className="font">Phone Number</span>
            <TextField
              id="filled-number"
              label="Number"
              type="number"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={userData["I_P_Number"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  "I_P_Numbe": e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl>
          <span className="font">Dob<span style={{ color: "red"}}>*</span></span>
            <TextField
              id="filled-date"
              label="Choose Date of birth"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={userData["I_Date"]}
              onChange={(e) => {
                setUserData({ ...userData, "I_Date": e.target.value });
                setDob(e.target.value);
              }}
            />
            {dob == "" ? showerr : null}
          </FormControl>
        </Box>
      </Box>
      {/* documents section start  */}
      <h3>Document</h3>
      <p>Identity</p>
      <Box
        sx={{
          bgcolor: "white",
          height: "auto",
          width: "100%",
          backgroundColor: "rgba(0,0,0,.1)",
        }}
        className="main"
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        ></Box>
      <div className="documents">

        <FormControl  >
        <span className="font">Passport<span style={{ color: "red"}}>*</span></span>
          <TextField    variant="outlined"   
          type={"file"}
          onChange={(e) =>{setUserData({...userData,"passport": e.target.files[0]});setPassport(e.target.files[0].name)}}
          >          
          </TextField>
          <span>{passport}</span>
      </FormControl>
     <FormControl >
          <span className="font">Driving Licence<span style={{ color: "red"}}>*</span></span>
          <TextField    variant="outlined"
          type={"file"}
          onChange={(e) =>{setUserData({...userData,"licence": e.target.files[0]});setDrivingLicence(e.target.files[0].name)}}
          >          
          </TextField>
        <span>{drivinglicence}</span>
      </FormControl>
      </div>


        {/* documents section end  */}
      </Box>


      <p>Financial</p>
      <Box
        sx={{
          bgcolor: "white",
          height: "auto",
          width: "100%",
          backgroundColor: "rgba(0,0,0,.1)",
        }}
        className="main"
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        ></Box>
      <div className="documents">

        <FormControl>
          <span className="font">Salary Slips<span style={{ color: "red"}}>*</span></span>
          <TextField  variant="outlined"
          type={"file"}
          onChange={(e) =>{setUserData({...userData,"Salary_slip": e.target.files[0]});setSalarySlip(e.target.files[0].name)}}
          >          
          </TextField>
          <span>{salaryslip}</span>
      </FormControl>
      <FormControl>
          <span className="font">Payg<span style={{ color: "red"}}>*</span></span>
          <TextField variant="outlined"
          type={"file"}
          onChange={(e) =>{setUserData({...userData,"payg": e.target.files[0]});setPayg(e.target.files[0].name)}}
          >          
          </TextField>
          <span>{pay}</span>
      </FormControl>
      </div>

        {/* documents section end  */}
      </Box>              
      <div className="btn">
 <Button
        variant="contained"
        color="primary"
        onClick={() => setCurrentStep(4)}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          salutation == "" ||
          firstname == "" ||
          lastname == "" ||
          roles == "" ||
          address == "" ||
          city == "" ||
          state == "" ||
          postcode == "" ||
          dob == ""
            ? Error()
            :submitandNext ();
        }}
      >
        Preview
      </Button>
      </div>
    </>
  );
};
export default InvestorDetails;
