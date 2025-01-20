import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      {/* <Jump> */}
      <div className="about" id="about">
        <div className="row ">
          <div className="col-xl-6 col-lg-6 col-sm-12 col-md-6 about-img">
            <img
              src="https://avatars.githubusercontent.com/u/61233273?v=4"
              alt="profile-pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 about-content">
            <h1>About me</h1>
            <p>
              Quick to grasp new concepts and ideas and develop innovative and
              creative solutions to problems, I am a MERN developer & have 3
              years of experience. I have completed post graduation as MCA from
              A K T University Lucknow. I have experience to create scalable app
              in Reactjs with unit testing and Nodejs with testing through
              Postman, and have experience databse with ODM Mongoose.
            </p>
          </div>
        </div>
      </div>
      {/* </Jump> */}
    </>
  );
};

export default About;
