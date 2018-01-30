import React from 'react'
import PropTypes from 'prop-types'
import ChannelList from './ChannelList'
import ChannelForm from './ChannelForm'
import { Panel } from 'react-bootstrap'

class ChannelSection extends React.Component {
  render () {
    return (
      <Panel className='support' bsStyle='primary'>
        <Panel.Heading>
          <Panel.Title>Channels</Panel.Title>
        </Panel.Heading>
        <Panel.Body className='channels'>
          <ChannelList channels={this.props.channels} setChannel={this.props.setChannel}
                       activeChannel={this.props.activeChannel}/>
          <ChannelForm addChannel={this.props.addChannel}/>
        </Panel.Body>
      </Panel>
    )
  }
}

ChannelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
}

export default ChannelSection
