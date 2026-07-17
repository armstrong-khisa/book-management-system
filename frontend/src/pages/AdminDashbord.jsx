import React from 'react'

const AdminDashbord = () => {
  return (
    <section className="page-section admin-page">
      <div className="container">
        <div className="page-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Overview of approvals, reports, and recent system activity in a layout-first interface.</p>
          </div>
        </div>

        <div className="section-grid three-column admin-summary">
          <div className="card">
            <h2>Pending Reviews</h2>
            <p>12 requests waiting for approval.</p>
          </div>
          <div className="card">
            <h2>Inventory Alerts</h2>
            <p>4 books below threshold stock level.</p>
          </div>
          <div className="card">
            <h2>System Notes</h2>
            <p>Latest admin notes and reminders.</p>
          </div>
        </div>

        <div className="panel admin-panel">
          <h2>Recent Activity</h2>
          <div className="table-placeholder">
            <div className="table-row table-header">
              <span>User</span>
              <span>Action</span>
              <span>Date</span>
            </div>
            <div className="table-row">
              <span>admin1</span>
              <span>Updated stock</span>
              <span>Today</span>
            </div>
            <div className="table-row">
              <span>admin2</span>
              <span>Added new book</span>
              <span>Yesterday</span>
            </div>
            <div className="table-row">
              <span>admin3</span>
              <span>Reviewed request</span>
              <span>2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminDashbord