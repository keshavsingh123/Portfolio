import React from 'react'
import "./WorkExperience.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiHcl } from "react-icons/si";
import { GiValley } from "react-icons/gi";
const WorkExperience = () => {
  return (
    <>
        <div className="work-exp" id='work-exp'>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr/>
        <VerticalTimeline lineColor='#0a0e0de6'>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#0a0e0de6' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2022 - 2024"
    iconStyle={{ background: '#0a0e0de6', color: '#fff' }}
    icon={<SiHcl />}
  >
    <h3 className="vertical-timeline-element-title">HCL</h3>
    <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
    <p> Developed and maintained web applications using React.js with redux on the front end and Node.js with Express.js on
    the back end.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#0a0e0de6' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2021 - 2022"
    iconStyle={{ background: '#0a0e0de6', color: '#fff' }}
    icon={<GiValley />}
  >
    <h3 className="vertical-timeline-element-title">Click Valley</h3>
    <h4 className="vertical-timeline-element-subtitle">Full stack developer</h4>
    <p> Collaborated with UX/UI designers and backend developers to ensure seamless integration of frontend components and
backend services.
</p>
  </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </>
  )
}

export default WorkExperience