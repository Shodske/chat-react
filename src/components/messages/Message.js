import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'react-bootstrap'

class Message extends React.Component {
  render () {
    const {user, text, timestamp} = this.props.message
    return (
      <ListGroupItem header={user.name}>
        {text}
        <span className='timestamp'>{timestamp.toLocaleString()}</span>
      </ListGroupItem>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message
