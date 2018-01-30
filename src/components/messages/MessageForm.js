import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormGroup } from 'react-bootstrap'

class MessageForm extends React.Component {
  node

  onSubmit (e) {
    e.preventDefault()
    this.props.addMessage(this.node.value)
    this.node.value = ''
  }

  render () {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <FormGroup>
          <FormControl placeholder='Add message...' type='text' inputRef={ref => {this.node = ref}}/>
        </FormGroup>
      </form>
    )
  }
}

MessageForm.propTypes = {
  addMessage: PropTypes.func.isRequired
}

export default MessageForm
