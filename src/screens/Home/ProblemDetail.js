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
import Drawer from '../../components/Drawer';
import CardItem from './CardItem';

const styles = {
  container: {
    padding: 20
  }
}

class ProblemDetail extends Component {
  render() {
    const { isOpen, handleOpen, data } = this.props 
    console.log('isOpen', isOpen)
    return (
    <Drawer teaserHeight={0} handleOpen={handleOpen} isOpen={isOpen}>
      <View style={styles.container}>
      <CardItem
        distance={data.distance}
        data={data.data}
        onPress={() => console.log('click button')}
        />
      </View>
    </Drawer>
    );
  }
}

export default ProblemDetail;
