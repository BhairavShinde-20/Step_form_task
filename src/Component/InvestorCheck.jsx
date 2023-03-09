import react, { useContext } from "react";
import { TextField } from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./Main.css";
import { Button } from "@mui/material";
import { multiStepContext } from "./StepContext";
import { useState } from "react";

const InvestorCheck = ({ getIshow, showGuarantor_D }) => {
  const { userData, setCurrentStep, setUserData, submitData, currentStep } =
    useContext(multiStepContext);
  // console.log(currentStep);
  const [toshow, setToShow] = useState(false);
  console.log(toshow);

  const InvestorChange = (e) => {
    getIshow(toshow);
    setToShow(e.target.value);
  };
  const WithoutInvestor=()=>{
    setCurrentStep(5);
    submitData();

  }
  return (
    <>
      <div className="main">
        <div className="bordr-outer">
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Investor Available
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              defaultValue="false"
              onChange={(e) => InvestorChange(e)}
            >
              <FormControlLabel value="true" control={<Radio />} label="yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="btn">

          {
            getIshow === "true" ?  <Button variant="contained" color="primary" onClick={() => setCurrentStep(3)}>Back</Button>
            :<Button variant="contained" color="primary" onClick={() => setCurrentStep(2)}>Back</Button>

          }
          {
            showGuarantor_D === "true" ?  <Button variant="contained" color="primary" onClick={() => setCurrentStep(5)}>Next</Button>
            :<Button variant="contained" color="primary" onClick={() => WithoutInvestor()}>Next</Button>

          }
          {/* <Button variant="contained" color="primary" onClick={() => setCurrentStep(2)}>Back</Button>
          <Button variant="contained" color="primary" onClick={() => setCurrentStep(5)}>Next</Button> */}
        </div>
      </div>
    </>
  );
};
export default InvestorCheck;