import React, { Component } from 'react';
import {
  Input,
  Label,
  Item,
  Form,
  Button,
  Container,
  Text,
  View,
} from 'native-base';
import { connect } from 'react-redux';
import { MapView } from 'expo'
import { moduleName } from '../../ducks/auth'
import Drawer from '../../components/Drawer';
import UserItem from './UserItem';

const styles = {
  container: {
    padding: 20
  }
}

class UserList extends Component {


  render() {
    const { isOpen } = this.props 
    return (
    <Drawer isOpen={isOpen}>
      <View style={styles.container}>
        <UserItem />
      </View>
    </Drawer>
    );
  }
}

export default connect((state, ownProps) => ({
  user: state[moduleName].user,
}), {})(UserList);
