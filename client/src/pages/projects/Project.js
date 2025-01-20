import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <>
      <div className="project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>

        <p className="text-center pb-3">
          👉 Developed and maintained web applications using React.js with redux
          on the front end and Node.js with Express.js on the back end. Used Git
          and GitHub for version control and collaborated with team members
          using Git workflows. Implemented RESTful APIs to connect front-end
          interfaces with back-end services.
          <hr />
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card-rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  className="rounded"
                  src="https://content3.jdmagicbox.com/comp/ambala/a8/9999px171.x171.180202161136.p4a8/catalogue/career-line-job-placement-cell-regd-by-haryana-govt-ambala-cantt-ambala-placement-services-for-civil-industry-candidate--0gbwk1kv4y.jpg"
                  alt="project"
                  srcset=""
                />
              </div>
              <div className="card-image-overly mt-2 text-center">
                <span className="card-deatil-badge">Node</span>
                <span className="card-deatil-badge">Express</span>
                <span className="card-deatil-badge">EJS</span>
                <span className="card-deatil-badge">Mongoose</span>
              </div>
              <div className="card-body text-center mt-2">
                <div className="ad-title">
                  <h5 className="text-uppercase">Placement Cell</h5>
                </div>
                <a
                  href="https://github.com/keshavsingh123/placement_cell_mongoose.git"
                  className="ad-btn"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-rounded">
              <div className="card-image">
                <span className="card-notify-badge">Front-end</span>
                <img
                  className="rounded"
                  src="https://www.mindinventory.com/blog/wp-content/uploads/2021/06/expense-tracking-app.webp"
                  alt="project"
                  srcset=""
                />
              </div>
              <div className="card-image-overly mt-2 text-center">
                <span className="card-deatil-badge">JavaScript</span>
                <span className="card-deatil-badge">CSS</span>
                <span className="card-deatil-badge">React</span>
                <span className="card-deatil-badge">Firebase</span>
              </div>
              <div className="card-body text-center mt-2">
                <div className="ad-title">
                  <h5 className="text-uppercase">Expense Tracker </h5>
                </div>
                <a
                  href="https://github.com/keshavsingh123/Expense-tracker.git"
                  className="ad-btn"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-rounded">
              <div className="card-image">
                <span className="card-notify-badge">Back-end</span>
                <img
                  className="rounded"
                  src="https://img.freepik.com/premium-photo/neon-pap-vegemite-toast-signboard-modern-3d-rendered-food-cart-with-sleek-design-african_655090-3456323.jpg"
                  alt="project"
                  srcset=""
                />
              </div>
              <div className="card-image-overly text-center mt-2">
                <span className="card-deatil-badge">JavaScript</span>
                <span className="card-deatil-badge">Node</span>
                <span className="card-deatil-badge">Express</span>
                <span className="card-deatil-badge">NoSQL</span>
              </div>
              <div className="card-body text-center mt-2">
                <div className="ad-title">
                  <h5 className="text-uppercase">Food Cart</h5>
                </div>
                <a
                  href="https://github.com/keshavsingh123/food-cart.git"
                  className="ad-btn"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
