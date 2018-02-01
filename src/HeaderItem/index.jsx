import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  NavItem,
  NavLink,
} from 'reactstrap';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faCaretDown);

// TODO: @jaebradley - refactor this for public API usage
class HeaderItem extends Component {
  constructor(props) {
    super(props);

    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onEnterCallback = props.onEnter.bind(this);
    this.onLeaveCallback = props.onLeave.bind(this);

    this.state = { active: false };
  }

  onEnter() {
    this.setState({ active: true }, this.onEnterCallback(this.props.index));
  }

  onLeave() {
    this.setState({ active: false }, this.onLeaveCallback);
  }

  render() {
    return (
      <NavItem className={classNames('header-item', { 'selected-nav-item': this.state.active })}>
        <NavLink
          onMouseEnter={ this.onEnter }
          onMouseLeave={ this.onLeave }
        >
          { this.props.title }
          <FontAwesomeIcon className='dropdown-icon' icon={'caret-down'} />
        </NavLink>
      </NavItem>
    )
  }
}

export default HeaderItem;
