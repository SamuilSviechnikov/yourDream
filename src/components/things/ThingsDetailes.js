import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import { MediaBox } from 'react-materialize';
import moment from 'moment'

const ThingsDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <>
        <div className="row">
          <div className="card z-depth-0">
              <MediaBox className='col s12 l6'>
                <img src={project.url} width="350" alt="" />
              </MediaBox>
              <div className='col s12 l6 grey lighten-5' style={{borderRadius: '10px', marginTop: '10px'}}>
                <h3 className="center">{project.title}</h3>
                <p className="flow-text">{project.content}</p>
                <h5 className='center'>Pay</h5>
                <div className='button center' style={{marginTop: '10px',marginBottom: '10px'}}>
                  <Link to='/shop' className='btn-floating btn-large waves-effect waves-light purple accent-4'><i className="large material-icons left">cloud</i>Pay</Link>
                </div>
            </div>
          </div>
        </div>
        <div className="card-action grey lighten-4 grey-text center" style={{marginBottom: '10px'}}>
          <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
          <div>{moment(project.createdAt.toDate().toString()).calendar()}</div>
        </div>
        </>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ThingsDetails)