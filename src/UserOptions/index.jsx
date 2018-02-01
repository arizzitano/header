import React, { Component } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
 } from 'reactstrap';

class UserOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='user-options'>
        <UncontrolledDropdown nav innavbar='true'>
          <DropdownToggle nav caret>
            { this.props.userIdentifier }
          </DropdownToggle>
        </UncontrolledDropdown>
      </div>
    )
  }
}

export default UserOptions;