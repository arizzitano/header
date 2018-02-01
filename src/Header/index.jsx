import React, { Component } from 'react';
import {
  Nav,
  TabPane,
  TabContent,
  Row,
  Col,
  Media,
 } from 'reactstrap';

import classNames from 'classnames';

import 'bootstrap/dist/css/bootstrap.css';

import UserOptions from '../UserOptions';
import HeaderItem from '../HeaderItem';
import NavigationContent from '../NavigationContent';
import HeaderContent from '../HeaderContent';

import '../css/style.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.content = [];

    this.toggle = this.toggle.bind(this);
    this.onTabExit = this.onTabExit.bind(this);

    this.state = { activeTab: null };
  }

  toggle(tabIndex) {
    this.setState({ activeTab: tabIndex });
  }

  onTabExit() {
    this.setState({ activeTab: null });
  }

  getContent() {
    // TODO: @jaebradley - this is really hacky; was done to make external API clean
    return React.Children.map(this.props.children, (item, index) => {
      return React.Children.map(item.props.children, content => (
        <TabPane tabId={index}>
          <Row>
            <Col sm='12'>
              { content }
            </Col>
          </Row>
        </TabPane>
      ));
    });
  }

  getItems() {
    // TODO: @jaebradley - this is really hacky; was done to make external API clean
    return React.Children.map(this.props.children, (item, index) => {
      return React.cloneElement(item, {
        children: [],
        index,
        onEnter: this.toggle,
        onLeave: this.onTabExit,
      });
    });
  }

  render() {
    const content = this.getContent();
    const items = this.getItems();

    return (
    <div className='header'>
      <Nav tabs>
        <Media className='icon' left>
          <Media object src="https://www.edx.org/sites/default/files/theme/edx-logo-header.png" alt="Generic placeholder image" />
        </Media>
        { items }
        <UserOptions userIdentifier={this.props.userIdentifier} />
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        { content }
      </TabContent>
    </div>
    );
  }
}

export default Header;
