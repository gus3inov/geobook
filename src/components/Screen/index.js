import React, { Component } from 'react';
import { Content, Container } from 'native-base';
import FooterNav from '../FooterNav'
import Header from '../Header'
import { connect } from 'react-redux';
import { moduleName, authFetch } from '../../ducks/auth'

class Screen extends Component {
  static propTypes = {};

  componentDidMount() {
      this.props.authFetch()
  }

  handleBack = () => {
    console.log('back');
  };

  handleOpenMenu = () => {
    console.log('back');
  };

  render() {
    const { title, children, auth, navigation, handleSos } = this.props;
    console.log('navigation', navigation)
    return (
      <Container style={{flex: 1}}>
        <Header
          auth={auth}
          title={title}
          handleBack={this.handleBack}
          handleSos={handleSos}
          handleOpenMenu={this.handleOpenMenu}
        />
        { children }
        {
          auth && <FooterNav navigation={navigation}/>
        }
      </Container>
    );
  }
}

export default connect((state, ownProps) => ({
  user: state[moduleName].user,
  navigation: ownProps.navigation,
}), { authFetch })(Screen);
