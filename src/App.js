import React from 'react'
import ChannelSection from './components/channels/ChannelSection'
import UserSection from './components/users/UserSection'
import MessageSection from './components/messages/MessageSection'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Socket from './socket'

class App extends React.Component {
  socket

  constructor (props) {
    super(props)
    this.state = {
      channels: [],
      activeChannel: {},
      users: [{id: 0, name: 'Anonymous'}],
      messages: [],
      currentUser: {id: 0, name: 'Anonymous'},
      connected: false
    }
  }

  componentDidMount () {
    this.socket = new Socket()
    this.socket.on('connect', this.onConnect.bind(this))
    this.socket.on('disconnect', this.onDisconnect.bind(this))
    this.socket.on('channel.add', this.onAddChannel.bind(this))
    this.socket.on('user.add', this.onAddUser.bind(this))
    this.socket.on('user.edit', this.onEditUser.bind(this))
    this.socket.on('user.remove', this.onRemoveUser.bind(this))
    this.socket.on('message.add', this.onMessageAdd.bind(this))
  }

  onConnect () {
    this.setState({connected: true})
    this.socket.emit('channel.subscribe')
    this.socket.emit('user.subscribe')
  }

  onDisconnect () {
    this.setState({connected: false})
  }

  onMessageAdd (message) {
    let {messages} = this.state
    messages.push(message)
    this.setState({messages})
  }

  onAddUser (user) {
    let {users} = this.state
    users.push(user)
    this.setState({users})
  }

  onEditUser (editUser) {
    let users = this.state.users.map(user => {
      if (editUser.id === user.id) {
        return editUser
      }
      return user
    })
    this.setState({users})
  }

  onRemoveUser (removeUser) {
    let users = this.state.users.filter(user => removeUser.id !== user.id)
    this.setState({users})
  }

  onAddChannel (channel) {
    let {channels} = this.state
    channels.push(channel)
    this.setState({channels})
  }

  addChannel (name) {
    this.socket.emit('channel.add', {name})
  }

  setChannel (activeChannel) {
    this.setState({activeChannel})
    this.socket.emit('message.unsubscribe')
    this.setState({messages: []})
    this.socket.emit('message.subscribe', {channelId: activeChannel.id})
  }

  setUserName (name) {
    this.socket.emit('user.edit', {name})
  }

  setCurrentUser (name) {
    // TODO: remove this function?
    this.socket.emit('user.edit', {id: 0, name})
  }

  addMessage (body) {
    let {activeChannel} = this.state
    this.socket.emit('message.add', {channelId: activeChannel.id, body})
  }

  render () {
    return (
      <div className='chat-app'>
        <Nav>
          <ChannelSection channels={this.state.channels} setChannel={this.setChannel.bind(this)}
                          addChannel={this.addChannel.bind(this)} activeChannel={this.state.activeChannel}/>
          <UserSection users={this.state.users} setCurrentUser={this.setCurrentUser.bind(this)}/>
        </Nav>
        <MessageSection addMessage={this.addMessage.bind(this)} messages={this.state.messages} channel={this.state.activeChannel}/>
      </div>
    )
  }
}

export default App
