import React, { Component } from 'react'
import ThingsList from '../things/ThingsList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './dashboard.css'


class Dashboard extends Component {
  
  render() {
    const { projects } = this.props;

    return (
      <div className="dashboard container" >
        <div className="row">
          <div className="col s12 m12 ">
            <ThingsList projects={projects} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] }
  ])
)(Dashboard)