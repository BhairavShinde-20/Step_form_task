import "./App.css";
import { Stepper, Step, StepLabel } from "@mui/material";
import { CssBaseline, Container, Paper, Box } from "@mui/material";
import Borrower from "./Component/Borrower";
import GuarantorCheck from "./Component/GurantorCheck";
import GuarantorDetails from "./Component/GuarantorDetails";
import InvestorCheck from "./Component/InvestorCheck";
import InvestorDetails from "./Component/InvestorDetails";
import { useContext, useState } from "react";
import { multiStepContext } from "./Component/StepContext";
import Preview from "./Component/Preview";
// import Investormaindetails from './Component/Investormaindetails';

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);

  const [showGuarantor_D, setShowGuarantor_D] = useState(false);
  const [showInvestor_D, setShowInvestor_D] = useState(false);

  const getGshow = (isGShow) => {
    setShowGuarantor_D(isGShow);
  };
  const getIshow = (isIShow) => {
    setShowInvestor_D(isIShow);
    console.log(isIShow);
  };

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <Borrower />;
      case 2:
        return <GuarantorCheck getGshow={getGshow} />;
      case 3:
        if (showGuarantor_D === "true") {
          return <GuarantorDetails />;
        }
      case 4:
        return <InvestorCheck getIshow={getIshow} showGuarantor_D={showGuarantor_D} />;
      case 5:
        if (showInvestor_D === "true") {
          return <InvestorDetails />;
        }
      case 6:
        return <Preview />;

      default:
        return "Thanku";
    }
  };

    let checksteper = true
    const  Vertical =() =>{
    var actual_width = Screen.width;
          if(actual_width < 600){
          checksteper=false;
}
}


  return (
    
    <>

      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          {/* <MyStepper/> */}

          <Stepper activeStep={currentStep - 1} className="stepers" orientation={checksteper ?  Vertical() : !Vertical()}>
            <Step className="steps" >
              <StepLabel>Borrower</StepLabel>
            </Step>
            <Step className="steps" >
              <StepLabel >Guarantor Checker</StepLabel>
            </Step>
            {showGuarantor_D === "true" ? (
              <Step className="steps" >
                <StepLabel>Guarantor Details</StepLabel>
              </Step>
            ) : null}

            <Step className="steps" >
              <StepLabel>Investor Checker</StepLabel>
            </Step>
            {showInvestor_D === "true" ? (
            
                <Step className="steps">
                  <StepLabel>Investor Details</StepLabel>
                </Step>
              
            ) : null}
            <Step className="steps">
              <StepLabel>Preview</StepLabel>
            </Step>
          </Stepper>
          {showStep(currentStep)}
        </Paper>
      </Container>
    </>
  );
}
export default App;
