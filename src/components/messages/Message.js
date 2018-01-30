import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'react-bootstrap'

class Message extends React.Component {
  render () {
    const {author, body, createdAt} = this.props.message
    return (
      <ListGroupItem header={author}>
        {body}
        <span className='timestamp'>{createdAt}</span>
      </ListGroupItem>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message
