import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { fetchUsers } from './redux/actions/fetchusers';

const style = {
  padding: '10px 20px',
  width: 140,
  display: 'block',
  margin: '20px auto',
  fontSize: '16px'
}

const RemoteSubmitButton = ({ dispatch }) =>
  <button
    type="button"
    style={style}
    onClick={() => dispatch(submit('remoteSubmit'), dispatch(fetchUsers()))}>Submit</button>


export default connect()(RemoteSubmitButton)