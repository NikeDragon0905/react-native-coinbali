import BasicLiftoff from "./BasicLiftoff";
import CreateNewLiftoff from "./CreateNewLiftoff";
import ContentLiftoff from "./ContentLiftoff";
import TeamLiftoff from "./TeamLiftoff";
import FundingLiftoff from "./FundingLiftoff";
import React, { useState } from 'react';
export default () => {
    const [step, setStep] = useState(0);

    return(
        <>
            {
                step == 0 && <CreateNewLiftoff setStep={setStep}/>
            }
            {
                step == 1 && <BasicLiftoff  setStep={setStep}/> 
            }
            {
                step == 2 && <ContentLiftoff  setStep={setStep}/> 
            }
            {
                step == 3 && <TeamLiftoff  setStep={setStep}/> 
            }
            {
                step == 4 && <FundingLiftoff  setStep={setStep}/> 
            }
        </>
    )
}