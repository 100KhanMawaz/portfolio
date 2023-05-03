import React from 'react';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import "../style/TimeLine.scss"
const TimeLine = () => {
  return (
    <div id='timeline'>
        <Typography variant="h2" style={{textAlign:"center"}}>Academics</Typography>
        <Timeline position="alternate">
            {/* Item 1 */}
                <TimelineItem>
                    <TimelineOppositeContent style={{fontFamily:'Sofia',color:"red"}}>
                        2018
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                           <TimelineDot id="dot"/>
                            <TimelineConnector id="connector"/>
                    </TimelineSeparator>
                    <TimelineContent id='TimeLinecontent'>
                        <Typography variant="h6" style={{color:"blue",fontFamily:'Sofia'}}>Matriculation</Typography>
                        <Typography style={{fontFamily:'Sofia'}}>75% C.B.S.E</Typography>
                    </TimelineContent>
                </TimelineItem>

            {/* Item 2 */}
                <TimelineItem >
                    <TimelineOppositeContent style={{color:"red",fontFamily:'Sofia'}}>
                        2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot id="dot"/>
                            <TimelineConnector id="connector"/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" style={{color:"blue",fontFamily:'Sofia'}}>I.sc</Typography>
                        <Typography style={{fontFamily:'Sofia'}}>Maharashtra Board 85%<div style={{color:"green"}}>College Topper</div></Typography>
                    </TimelineContent>
                </TimelineItem>

            {/* Item 3 */}
                <TimelineItem>
                    <TimelineOppositeContent style={{color:"red",fontFamily:'Sofia'}}>
                        2020-24
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot id="dot"/>
                            <TimelineConnector id="connector"/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" style={{color:"blue",fontFamily:'Sofia'}}>B.tech C.S.E</Typography>
                        <Typography style={{fontFamily:'Sofia'}}>8.5 C.G.P.A</Typography>
                    </TimelineContent>
                </TimelineItem>

            {/* Item 4 */}
                <TimelineItem >
                    <TimelineOppositeContent style={{color:"red",fontFamily:'Sofia'}}>
                        <Typography style={{fontFamily:'Sofia'}}>Feb-april(2022) 2_Months</Typography>
                  
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot id="dot"/>
                            <TimelineConnector id="connector"/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" style={{color:"blue",fontFamily:'Sofia'}}>
                        <Accordion id='Accordion'>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       Internship <i class="fa-solid fa-caret-down"></i>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p id='paragraph'>
                        2 Months internsip at next geeks where I converted there whole system in reactJS and added many components like infinite scoll,etc
                        </p>
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
        </Timeline>
    </div>
  )
}

export default TimeLine
