import React, { Component } from 'react';
import { Content, Container } from 'native-base';
import FooterNav from '../FooterNav'
import Header from '../Header'

class Screen extends Component {
  static propTypes = {};

  componentDidMount() {

  }

  handleBack = () => {
    console.log('back');
  };

  handleOpenMenu = () => {
    console.log('back');
  };

  render() {
    const { title, children } = this.props;

    return (
      <Container style={{flex: 1}}>
        <Header
          title={title}
          handleBack={this.handleBack}
          handleOpenMenu={this.handleOpenMenu}
        />
        { children }
        <FooterNav />
      </Container>
    );
  }
}

export default Screen;
