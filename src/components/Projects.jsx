import React from 'react';

const Projects = () => {
  return (
    <div className="container mt-5">
      <h2>My Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <h6 className='card title'>EstateKing</h6>
              <p className="card-text">Description of Project 1.</p>
              <p className="card-text">Key Features:

Property Search: EstateKing provides advanced search tools that allow users to filter properties based on location, size, amenities, and other preferences. Each listing includes detailed descriptions, high-quality images, and virtual tours to facilitate informed decision-making. 
ESTATEKING.NET

Mobile Application: The EstateKing app enhances the property search experience by delivering real-time alerts when new properties matching user preferences are listed. 
ESTATEKING.NET

Selling and Renting Services: For sellers and landlords, EstateKing offers services to list properties effectively, aiming to maximize visibility and attract qualified buyers or tenants. 
ESTATEKING.NET

Trustworthiness: According to ScamAdviser, EstateKing is considered a legitimate and reliable platform, noting positive aspects such as a valid SSL certificate and secure data handling practices.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Description of Project 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Description of Project 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;