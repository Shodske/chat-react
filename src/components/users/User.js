import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'react-bootstrap'

class User extends React.Component {

  render () {
    const {user, currentUser} = this.props
    return (
      <ListGroupItem active={user === currentUser}>
        {user.name}
      </ListGroupItem>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
}

export default User
