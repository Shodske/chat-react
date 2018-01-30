import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormGroup } from 'react-bootstrap'

class ChannelForm extends React.Component {
  node

  onSubmit (e) {
    e.preventDefault()
    this.props.addChannel(this.node.value)
    this.node.value = ''
  }

  render () {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <FormGroup>
          <FormControl placeholder='Add channel' type='text' inputRef={ref => {this.node = ref}}/>
        </FormGroup>
      </form>
    )
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired
}

export default ChannelForm
