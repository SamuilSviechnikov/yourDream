import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <>
      <ul>
        <li><Link to='/create'>Create new Things</Link></li>
        <li><a href='/' onClick={props.signOut}>Log Out</a></li>
        {/* <li><Link to='/orders'>Orders</Link></li> */}
      </ul>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)