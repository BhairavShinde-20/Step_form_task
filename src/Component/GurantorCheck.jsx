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

const GurantorCheck = ({ getGshow }) => {
  const { userData, currentStep,setCurrentStep, setUserData } =
    useContext(multiStepContext);
  const GuarantorcheckChange = (e) => {
    getGshow(e.target.value);
  };
  // console.log(currentStep)

  return (
    <>
      <div className="main">
        <div className="bordr-outer">
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gurantor Available
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              defaultValue="false"

              onChange={(e) => GuarantorcheckChange(e)}
            >
              <FormControlLabel value="true" control={<Radio />} label="yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="btn">

        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentStep(1)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentStep(3)}
        >
          Next
        </Button>
        </div>
      </div>
    </>
  );
};
export default GurantorCheck;
