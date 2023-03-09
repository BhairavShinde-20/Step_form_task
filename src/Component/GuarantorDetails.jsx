import react, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import { useForm } from "react-hook-form";
import "./Main.css";
import { Button } from "@mui/material";
import { multiStepContext } from "./StepContext";

const GuarantorDetails = () => {
  const { userData, setCurrentStep, setUserData,currentStep } =
    useContext(multiStepContext);
  console.log(currentStep)



  const [relation, setRelation] = useState("");
  const [salutation, setSalutation] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [roles, setRoles] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState();
  const [state, setState] = useState("");
  const [postcode, setPostCode] = useState();
  const [dob, setDob] = useState();

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

  // console.log("hiiiiii");

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
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <span className="font">Relation <span style={{ color: "red"}}>*</span></span>
            
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={userData["G_Relation"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "G_Relation": e.target.value,
                });
                setRelation(e.target.value);
              }}
            >
              <MenuItem value={"Family"}>Family</MenuItem>
              <MenuItem value={"Friend"}>Friend</MenuItem>
              <MenuItem value={"Related Entity"}>Related Entity</MenuItem>
            </Select>
            {relation == "" ? showerr : null}
          </FormControl>

          <FormControl
            variant="filled"
            sx={{ m: 1, minWidth: 120 }}
          >
            <span className="font">Satulation <span style={{ color: "red"}}>*</span></span>

            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={userData["G_Satulation"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "G_Satulation": e.target.value,
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
          </FormControl>

          <FormControl>
          <span className="font">First Name <span style={{ color: "red"}}>*</span></span>
            <TextField
              id="filled-basic"
              placeholder="First Name"
              variant="filled"
              value={userData["G_First_Name"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "G_First_Name": e.target.value,
                });
                setFirstName(e.target.value);
              }}
            />
            {firstname == "" ? showerr : null}
          </FormControl>
          <FormControl>
          <span className="font">Last Name <span style={{ color: "red"}}>*</span></span>
            <TextField
              id="filled-basic"
              placeholder="Last Name"
              variant="filled"
              value={userData["G_Last_Name"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "G_Last_Name": e.target.value,
                });
                setLastName(e.target.value);
              }}
            />
            {lastname == "" ? showerr : null}
          </FormControl>

          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <span className="font">Role <span style={{ color: "red"}}>*</span></span>         
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={userData["G_Role"]}
              onChange={(e) => {
                setUserData({ ...userData, "G_Role": e.target.value });
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
          <span className="font">Googel Address</span>
            <FilledInput
              id="filled-adornment-amount"
              placeholder="Google Address"
              startAdornment={<InputAdornment position=""></InputAdornment>}
              value={userData["G_G_Address"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  "G_G_Address": e.target.value,
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
              value={userData["G_Address"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "G_Address": e.target.value,
                });
                setAddress(e.target.value);
              }}
            />
            {address == "" ? showerr : null}
          </FormControl>

          <FormControl>
          <span className="font"> City <span style={{ color: "red"}}>*</span></span>
            <TextField
              type="text"
              id="filled-basic"
              placeholder="City"
              variant="filled"
              value={userData["G_City"]}
              onChange={(e) => {
                setUserData({ ...userData, "G_City": e.target.value });
                setCity(e.target.value);
              }}
            />
            {city == "" ? showerr : null}
          </FormControl>

          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <span className="font">State/Province/Territory <span style={{ color: "red"}}>*</span></span>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={userData["G_State"]}
              onChange={(e) => {
                setUserData({ ...userData, "G_State": e.target.value });
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
              value={userData["G_P_Code"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "G_P_Code": e.target.value,
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
              placeholder="abc@somthing.com"
              type="email"
              variant="filled"
              value={userData["G_Email"]}
              onChange={(e) =>
                setUserData({ ...userData, "G_Email": e.target.value })
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
              value={userData["G_P_Number"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  "G_P_Number": e.target.value,
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
              value={userData["G_Date"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  "G_Date": e.target.value,
                });
                setDob(e.target.value);
              }}
            />
            {dob == "" ? showerr : null}
          </FormControl>
        </Box>
      </Box>
      <div className="btn">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentStep(2)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            relation =
              "" ||
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
                : setCurrentStep(4);
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
};
export default GuarantorDetails;
