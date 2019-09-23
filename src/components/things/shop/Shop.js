import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import Iframe from 'react-iframe';
import { createOrder } from '../../../store/actions/orderActions'
import { connect } from 'react-redux'


  class Shop extends Component {
    state = {
      firstName: '',
      lastName: '',
      phoneUser: '',
      emailUser: ''
    }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createOrder(this.state);
    this.props.history.push('/');
  }
  render(){
  return (
    <>
      <div className='center'>
        <h4 className='purple-text text-accent-4'>Store Hours: ALL-HOUR</h4>
        <Modal header="Сhoose a Novaya pochta office" fixedFooter trigger={<Button className='purple accent-4'><i className="large material-icons">cloud</i> Look map <i className="large material-icons"> cloud </i></Button>}>
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325515.68164576945!2d30.252504945862594!3d50.4021367513737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2sus!4v1568655645783!5m2!1sru!2sus" 
        width="700" 
        height="300">
        </Iframe>
        </Modal>
      </div>
      <div className='row' style={{marginTop: '20px'}}>
        <form className="col s12 center" onSubmit={this.handleSubmit}>
          <div className="row">
          <h5 className="purple-text text-accent-4">Contact details</h5>
            <div className="input-field col s6">
              <input type="text" id='firstName' className='validate' onChange={this.handleChange}/>
              <label htmlFor="firstName">First name</label>
            </div>
            <div className="input-field col s6">
              <input type="text" id='lastName' className='validate' onChange={this.handleChange}/>
              <label htmlFor="lastName">Last name</label>
            </div>
            <div className="input-field col s6">
              <input type="tel" id='phoneUser' className='validate' onChange={this.handleChange}/>
              <label htmlFor="phoneUser">Phone</label>
            </div>
            <div className="input-field col s6">
              <input type="email" id='emailUser' className='validate' onChange={this.handleChange}/>
              <label htmlFor="emailUser">Email</label>
            </div>
            
          </div>
          <div className="input-field">
              <button className="btn pink lighten-1">To Order</button>
            </div>
        </form>
      </div> 
      </>
  )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createOrder: (orders) => dispatch(createOrder(orders))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop)