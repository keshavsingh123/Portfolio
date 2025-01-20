import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from "react-icons/io";
const Education = () => {
  return (
    <>
        <div className="Education" id='education'>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr/>
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2018 - 2020"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">MCA</h3>
    <h4 className="vertical-timeline-element-subtitle">A K T U, Lucknow</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2018 - 2020"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h3 className="vertical-timeline-element-title">BCA</h3>
    <h4 className="vertical-timeline-element-subtitle">C S J M U, Lucknow</h4>
  </VerticalTimelineElement>
        </VerticalTimeline>
        
        </div>
    </>
  )
}

export default Education