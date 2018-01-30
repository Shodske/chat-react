import React from 'react'
import PropTypes from 'prop-types'
import Channel from './Channel'
import { ListGroup } from 'react-bootstrap'

class ChannelList extends React.Component {
  render () {
    return (
      <ListGroup>{
        this.props.channels.map(chan => {
          return (
            <Channel key={chan.id} channel={chan} setChannel={this.props.setChannel}
                     activeChannel={this.props.activeChannel}/>
          )
        })
      }</ListGroup>
    )
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
}

export default ChannelList
