import React from 'react'

const About = () => {
  return (
    <section className="page-section about-page">
      <div className="container">
        <div className="section-grid two-column">
          <div>
            <h1>About the System</h1>
            <p>
              This application is a monolithic project with a Flask backend, React frontend, and an SQL data layer.
              The page layout is intentionally kept simple and monochrome to emphasize structure over styling.
            </p>
            <p>
              Use the navigation at the top to move between the Home, Books, and Admin pages. Each page is a clean
              layout scaffold for your book management workflow.
            </p>
          </div>
          <div className="panel">
            <h2>Designed for:</h2>
            <ul>
              <li>Book records and metadata</li>
              <li>Inventory management</li>
              <li>Admin review and control</li>
              <li>Simple content-first layout</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About