import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import Message from './Message'

class MessageList extends React.Component {

  render () {
    return (
      <ListGroup>{
        this.props.messages.map(message => {
          return (
            <Message key={message.id} message={message}/>
          )
        })
      }</ListGroup>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessageList
