import React, { useEffect, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { multiStepContext } from "./StepContext";
import "./Main.css";

const Borrower = () => {
  const { setCurrentStep, userData, setUserData, currentStep } =
    useContext(multiStepContext);

  const [salutation, setSalutation] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [roles, setRoles] = useState("");
  // console.log(currentStep)

  const [showerr, setShowErr] = useState(false);
  const Error = () => {
    function ShowEroor() {
      return (
        <span style={{ color: "red", fontSize: "0.7rem" }}>
          This field is required
        </span>
        // if(salutation)
      );
    }
    setShowErr(ShowEroor);
  };

  // const pData =(data) =>{
  //     setUserData(data);

  // }

  return (
    <>
      {/* <form onSubmit={handleSubmit(pData)}> */}
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
            <span className="font">
              Satulation <span style={{ color: "red" }}>*</span>
            </span>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={userData["B_satulation"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  B_satulation: e.target.value,
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
            <span className="font">
              First Name <span style={{ color: "red" }}>*</span>
            </span>

            <TextField
              // className="inputBg"
              id="filled-basic"
              // name='fName'
              placeholder="First Name"
              variant="filled"
              value={userData["B_First_Name"]}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  B_First_Name: e.target.value,
                });
                setFirstName(e.target.value);
              }}
            />
            {firstname == "" ? showerr : null}
          </FormControl>

          <FormControl>
            <span className="font">
              Last Name <span style={{ color: "red" }}>*</span>
            </span>

            <TextField
              // className="inputBg"
              id="filled-basic"
              placeholder="Last Name"
              variant="filled"
              value={userData["B_Last_Name"]}
              //   {...register("lastName", { required: true })}
              onChange={(e) => {
                setUserData({
                  ...userData,
                  B_Last_Name: e.target.value,
                });
                setLastName(e.target.value);
              }}
            />
            {lastname == "" ? showerr : null}
          </FormControl>

          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <span className="font">
              {" "}
              Role <span style={{ color: "red" }}>*</span>
            </span>

            {/* <InputLabel id="demo-simple-select-filled-label">
              Select Role
            </InputLabel> */}
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={userData["B_Role"]}
              onChange={(e) => {
                setUserData({ ...userData, B_Role: e.target.value });
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

        {/* <Box sx={{ display: "flex", flexWrap: "wrap",width:"96%" }}>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel type="text" htmlFor="filled-adornment-amount">
              Google Address
            </InputLabel>
            <span className="font">Google Address</span>
            <FilledInput
              id="filled-adornment-amount"
              placeholder="Google Address"
              startAdornment={<InputAdornment position=""></InputAdornment>}
              value={userData["B_G_Adderess"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  B_G_Adderess: e.target.value,
                })
              }
            />
          </FormControl>
        </Box> */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
                  
          <FormControl>
          <span className="font">Google Address</span>
          <TextField 
              type="text"
              variant="filled"
              id="filled-basic"
              placeholder="Google Address"
              value={userData["B_G_Adderess"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  B_G_Adderess: e.target.value,
                })
              }
              >
          </TextField>
        </FormControl>
          <FormControl>
            <span className="font">Address</span>
            <TextField
              // className="inputBg"
              type="text"
              id="filled-basic"
              placeholder="Address"
              variant="filled"
              value={userData["B_Address"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  B_Address: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl>
            <span className="font">City</span>
            <TextField
              // className="inputBg"
              type="text"
              id="filled-basic"
              placeholder="City"
              variant="filled"
              value={userData["B_City"]}
              onChange={(e) =>
                setUserData({ ...userData, B_City: e.target.value })
              }
            />
          </FormControl>

          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            {/* <InputLabel id="demo-simple-select-filled-label">
              {" "}
              State/Province/Territory
            </InputLabel> */}
            <span className="font">State/Province/Territory</span>
            <Select
              // className="inputBg"
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={userData["B_State"]}
              onChange={(e) =>
                setUserData({ ...userData, B_State: e.target.value })
              }
            >
              <MenuItem value="New South Wales">New South Wales</MenuItem>
              <MenuItem value={"Victoria"}>Victoria</MenuItem>
              <MenuItem value={"20"}>Queensland</MenuItem>
              <MenuItem value={"Tasmania"}>Tasmania</MenuItem>
              <MenuItem value={"South Australia"}>South Australia</MenuItem>
              <MenuItem value={"Western Australia"}>Western Australia</MenuItem>
              <MenuItem value={"Northern Territory"}>
                Northern Territory
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <span className="font">PostCode</span>
            <TextField
              // className="inputBg"
              id="filled-number"
              placeholder="Postcode"
              type="Number"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={userData["B_P_Code"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  B_P_Code: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl>
            <span className="font">Email Address</span>
            <TextField
              // className="inputBg"
              id="filled-number"
              placeholder="Email"
              type="email"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={userData["B_Email"]}
              onChange={(e) =>
                setUserData({ ...userData, B_Email: e.target.value })
              }
            />
          </FormControl>

          <FormControl>
            <span className="font">Phone Number</span>
            <TextField
              // className="inputBg"
              id="filled-number"
              label="Number"
              type="number"
              InputLabelProps={{ shrink: true }}
              style={{ backgroundColor: "transperent" }}
              variant="filled"
              value={userData["B_P_Number"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  B_P_Number: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl>
            <span className="font">Dob</span>

            <TextField
              // className="inputBg"
              id="filled-date"
              label="Choose Date of birth"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={userData["B_Date"]}
              onChange={(e) =>
                setUserData({ ...userData, B_Date: e.target.value })
              }
            />
          </FormControl>
        </Box>
      </Box>
      <div className="btn">
        <Button
          //   type="submit"
          variant="contained"
          color="primary"
          onClick={() => {
            salutation == "" || firstname == "" || lastname == "" || roles == ""
              ? Error()
              : setCurrentStep(2);
          }}
        >
          Next
        </Button>
      </div>
      {/* </form> */}
    </>
  );
};

export default Borrower;
