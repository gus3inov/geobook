import React, { Component } from 'react';
import { Svg } from 'expo';
import { Image } from 'react-native';
import {
  Button,
  Text,
} from 'native-base';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { moduleName } from '../../ducks/auth';
import Drawer from '../../components/Drawer';
import iconWarning from '../../../assets/icon-warning.svg';
const {
    Circle,
  } = Svg;
  

const style = {
    button: {
 
    },
    image: {
        width: 50,
        height: 50
    }
}

const UserItem = ({
    firstName = 'John',
    lastName = 'Doe',
    phone = '+7989 842 21 32'
}) => (
    <Button transparent style={style.button}>
        <Svg width="27" height="27" viewBox="0 0 27 27" fill="white">
            <Circle cx="10.7798" cy="10.7798" r="9.77979" x="2.73169" y="2.65045" stroke="white" strokeWidth="2"/>
            <Circle cx="7.12172" cy="7.12172" r="7.12172" x="6.38965" y="6.30853" fill="#EE0606"/>
            <Circle cx="12.5764" cy="12.5764" r="12.0764" x="0.935059" y="0.853821" stroke="white"/>
        </Svg>
        <Text>{ firstName } { lastName }</Text>
    </Button>
);

export default UserItem;
