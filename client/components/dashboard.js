import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">
        Dashboard
        <Link to="/dashboard/profile/fc2069b6-13db-4a95-8295-bed6675a0569"> Go To Profile </Link>
        <Link to="/dashboard/main"> Go To Main </Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
