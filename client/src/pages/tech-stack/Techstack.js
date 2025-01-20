import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";
// import RubberBand from "react-reveal/RubberBand";

const Techstack = () => {
  return (
    <>
      <div className="tech-stack" id="tech-stack">
        {/* <RubberBand> */}
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <p className="text-center pb-3">
          👉 including programming languages, databases, frontend, backend &
          APIs <hr />
        </p>
        {/* </RubberBand> */}
        <div className="row">
          {TechstackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body pt-1">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
