import React from 'react'
import ChannelSection from './components/channels/ChannelSection'
import UserSection from './components/users/UserSection'
import MessageSection from './components/messages/MessageSection'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
      currentUser: {id: 0, name: "Anonymous"}
    }
  }

  addChannel (name) {
    let {channels} = this.state
    channels.push({id: channels.length, name, messages: []})
    this.setState({channels})
    // TODO: send to server
  }

  setChannel (activeChannel) {
    this.setState({activeChannel})
    // TODO: get messages from channel
  }

  setCurrentUser (name) {
    let {users} = this.state
    const currentUser = {id: users.length, name}
    users.push(currentUser)
    this.setState({users, currentUser})
    // TODO: send to server
  }

  addMessage (text) {
    let {activeChannel, currentUser} = this.state
    const message = {
      id: `${activeChannel.id}-${activeChannel.messages.length}`,
      text,
      user: currentUser,
      timestamp: new Date()
    }
    activeChannel.messages.push(message)
    this.setState({activeChannel})
    // TODO: send to server
  }

  render () {
    return (
      <div className='chat-app'>
        <Nav>
          <ChannelSection channels={this.state.channels} setChannel={this.setChannel.bind(this)}
                          addChannel={this.addChannel.bind(this)} activeChannel={this.state.activeChannel}/>
          <UserSection users={this.state.users} currentUser={this.state.currentUser}
                       setCurrentUser={this.setCurrentUser.bind(this)}/>
        </Nav>
        <MessageSection addMessage={this.addMessage.bind(this)} channel={this.state.activeChannel}/>
      </div>
    )
  }
}

export default App
