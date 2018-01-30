import React from 'react'
import PropTypes from 'prop-types'
import { Panel } from 'react-bootstrap'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class MessageSection extends React.Component {

  render () {
    if (Object.keys(this.props.channel).length === 0 ) {
      return (
        <Panel className='messages-container' bsStyle='default'>
          <Panel.Heading>
            <Panel.Title>Please select a channel</Panel.Title>
          </Panel.Heading>
        </Panel>
      )
    }

    return (
      <Panel className='messages-container' bsStyle='default'>
        <Panel.Heading>
          <Panel.Title>{this.props.channel.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body className='messages'>
          <MessageList messages={this.props.channel.messages}/>
          <MessageForm addMessage={this.props.addMessage}/>
        </Panel.Body>
      </Panel>
    )
  }
}

MessageSection.propTypes = {
  channel: PropTypes.object.isRequired,
  addMessage: PropTypes.func.isRequired
}

export default MessageSection
