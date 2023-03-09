import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Button, ButtonGroup } from "@mui/material";
import { multiStepContext } from "./StepContext";
import Box from "@mui/material/Box";
import { useContext } from "react";

const Preview = () => {
  const { userData, setCurrentStep, setUserData,submitData,finalData } =
    useContext(multiStepContext);
    console.log(finalData);

  return (
    <>

<div>
            <h2>Borrower Details</h2>
        <Box sx={{bgcolor: "white",height: "auto",width: "100%", backgroundColor: "rgba(0,0,0,.1)",}}className="main">
             
<div className="main_D">
                <div>
                  <p>Satulation</p>
                    <p>First Name :-</p>
                    <p>Last Name :-</p>
                    <p>Role:-</p>
                    <p>Google Address</p>
                    <p>Address :-</p>
                    <p>City :-</p>
                    <p>State Province Territory :-</p>
                    <p>PostCode :-</p>
                    <p>Email :-</p>
                    <p>Phone :-</p>
                    <p>Birth Date :-</p>
                </div>
                {
                  finalData.map((row)=>{
                    return(
                      <>
                 <div>
                    <p>{row.B_satulation}</p>
                    <p>{row.B_First_Name}</p>
                    <p>{row.B_Last_Name}</p>
                    <p>{row.B_Role}</p>
                    <p>{row.B_G_Adderess}</p>
                    <p>{row.B_Address}</p>
                    <p>{row.B_City}</p>
                    <p>{row.B_State}</p>
                    <p>{row.B_P_Code}</p>
                    <p>{row.B_Email}</p>
                    <p>{row.B_P_Number}</p>
                    <p>{row.B_Date}</p>
                </div>
                      </>
                    )
                  })
                }
</div>

        </Box>

        <h2>Guranter Details</h2>
        <Box
                sx={{bgcolor: "white",height: "auto",width: "100%", backgroundColor: "rgba(0,0,0,.1)",}}className="main">
               
<div className="main_D">

                <div>
                    <p>Relation</p>
                    <p>Satulation</p>
                    <p>First Name :-</p>
                    <p>Last Name :-</p>
                    <p>Role:-</p>
                    <p>Google Address</p>
                    <p>Address :-</p>
                    <p>City :-</p>
                    <p>State Province Territory :-</p>
                    <p>PostCode :-</p>
                    <p>Email :-</p>
                    <p>Phone :-</p>
                    <p>Birth Date :-</p>
                </div>
                {
                  finalData.map((row)=>{
                    return(
                      <>
                      <div>
                     <p>{row.G_Relation}</p>
                    <p>{row.G_Satulation}</p>
                    <p>{row.G_First_Name}</p>
                    <p>{row.G_Last_Name}</p>
                    <p>{row.G_Role}</p>
                    <p>{row.G_G_Adderess}</p>
                    <p>{row.G_Address}</p>
                    <p>{row.G_City}</p>
                    <p>{row.G_State}</p>
                    <p>{row.G_P_Code}</p>
                    <p>{row.G_Email}</p>
                    <p>{row.G_P_Number}</p>
                    <p>{row.G_Date}</p>
                      </div>
                    </>
                    )
                  })
                }

</div>
        </Box>

        <h2>Investor Details</h2>
        <Box
                sx={{bgcolor: "white",height: "auto",width: "100%", backgroundColor: "rgba(0,0,0,.1)",}}className="main">
          
<div className="main_D">

                <div>
                <p>Satulation</p>
                    <p>First Name :-</p>
                    <p>Last Name :-</p>
                    <p>Role:-</p>
                    <p>Google Address</p>
                    <p>Address :-</p>
                    <p>City :-</p>
                    <p>State Province Territory :-</p>
                    <p>PostCode :-</p>
                    <p>Email :-</p>
                    <p>Phone :-</p>
                    <p>Birth Date :-</p>

                </div>
                {
                  finalData.map((row)=>{
                    return(
                      <>
                      <div>
                      <p>{row.I_Satulation}</p>
                    <p>{row.I_First_Name}</p>
                    <p>{row.I_Last_Name}</p>
                    <p>{row.I_Role}</p>
                    <p>{row.I_G_Adderess}</p>
                    <p>{row.I_Address}</p>
                    <p>{row.I_City}</p>
                    <p>{row.I_State}</p>
                    <p>{row.I_P_Code}</p>
                    <p>{row.I_Email}</p>
                    <p>{row.I_P_Number}</p>
                    <p>{row.I_Date}</p>
                      </div>
                      </>
                    )
                  })
                }
                </div>


        </Box>

        <h2>Documents</h2>
        <Box
                sx={{bgcolor: "white",height: "auto",width: "100%", backgroundColor: "rgba(0,0,0,.1)",}}className="main">
                
                {
                  
                  finalData.map((row)=>{
                    return(
                      <>
                      <div>
                        {/* {
                          console.log(row.passport.name)
                        } */}
                      <p>{row.passport.name}</p>
                      <p>{row.licence.name}</p>
                      <p>{row.Salary_slip.name}</p>
                      <p>{row.payg.name}</p>
                      </div>
                      </>
                    )
                  })
                }
              
        </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setCurrentStep(4)}
      >
        Back
      </Button>{" "}
      <Button
        variant="contained"
        color="success"
      >
        Submit
      </Button>
      </div>
    </>
  );
};

export default Preview;