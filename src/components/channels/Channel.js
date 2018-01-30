import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'react-bootstrap'

class Channel extends React.Component {
  onClick (e) {
    e.preventDefault()
    const {setChannel, channel} = this.props
    setChannel(channel)
  }

  render () {
    const {channel, activeChannel} = this.props
    return (
      <ListGroupItem active={channel === activeChannel} onClick={this.onClick.bind(this)}>
        {channel.name}
      </ListGroupItem>
    )
  }
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
}

export default Channel
