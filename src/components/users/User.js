import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'react-bootstrap'

class User extends React.Component {

  render () {
    const {user} = this.props
    return (
      <ListGroupItem>
        {user.name}
      </ListGroupItem>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User
