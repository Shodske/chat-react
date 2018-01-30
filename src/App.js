import React from 'react'
import ChannelSection from './components/channels/ChannelSection'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      channels: [],
      activeChannel: {}
    }
  }

  addChannel (name) {
    let {channels} = this.state
    channels.push({id: channels.length, name})
    this.setState({channels})
    // TODO: send to server
  }

  setChannel (activeChannel) {
    this.setState({activeChannel})
    // TODO: get messages from channel
  }

  render () {
    return (
      <div className='chat-app'>
        <Nav>
          <ChannelSection channels={this.state.channels} setChannel={this.setChannel.bind(this)}
                          addChannel={this.addChannel.bind(this)} activeChannel={this.state.activeChannel}/>
        </Nav>
      </div>
    )
  }
}

export default App
