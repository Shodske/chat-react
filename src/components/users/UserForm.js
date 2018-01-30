import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormGroup } from 'react-bootstrap'

class UserForm extends React.Component {
  node

  onSubmit (e) {
    e.preventDefault()
    this.props.setCurrentUser(this.node.value)
    this.node.value = ''
  }

  render () {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <FormGroup>
          <FormControl placeholder='Set your name...' type='text' inputRef={ref => {this.node = ref}}/>
        </FormGroup>
      </form>
    )
  }
}

UserForm.propTypes = {
  setCurrentUser: PropTypes.func.isRequired
}

export default UserForm
