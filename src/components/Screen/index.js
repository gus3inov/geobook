import React, { Component } from 'react';
import { Content, Container } from 'native-base';
import FooterNav from '../FooterNav'
import Header from '../Header'
import { connect } from 'react-redux';
import { moduleName, authFetch } from '../../ducks/auth'
import { moduleName as problemModuleName, fetchProblems } from "../../ducks/problem";

class Screen extends Component {
  static propTypes = {};

  componentDidMount() {
      this.props.fetchProblems()
      this.props.authFetch()
  }

  handleBack = () => {
    console.log('back');
  };

  handleOpenMenu = () => {
    console.log('back');
  };

  render() {
    const { title, children, auth, navigation, handleSos, problemsCount } = this.props;

    return (
      <Container style={{flex: 1}}>
        <Header
          count={problemsCount}
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
  problemsCount: state[problemModuleName].data
}), { authFetch, fetchProblems })(Screen);
