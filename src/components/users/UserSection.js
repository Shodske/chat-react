import React from 'react'
import PropTypes from 'prop-types'
import UserList from './UserList'
import UserForm from './UserForm'
import { Panel } from 'react-bootstrap'

class UserSection extends React.Component {

  render () {
    return (
      <Panel className='support' bsStyle='primary'>
        <Panel.Heading>
          <Panel.Title>Users</Panel.Title>
        </Panel.Heading>
        <Panel.Body className='users'>
          <UserList users={this.props.users}/>
          <UserForm setUserName={this.props.setUserName}/>
        </Panel.Body>
      </Panel>
    )
  }
}

UserSection.propTypes = {
  users: PropTypes.array.isRequired,
  setUserName: PropTypes.func.isRequired
}

export default UserSection
