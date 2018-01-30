import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import User from './User'

class UserList extends React.Component {

  render () {
    return (
      <ListGroup>{
        this.props.users.map(user => {
          return (
            <User key={user.id} user={user} currentUser={this.props.currentUser}/>
          )
        })
      }</ListGroup>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired
}

export default UserList
