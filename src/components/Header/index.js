import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header as NativeHeader,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Text,
  Title,
} from 'native-base';
import { Image } from 'react-native';
import styles from './style';
import sosImage from '../../../assets/sos-icon.png'

const Header = (props) => {
  const {
    title,
    handleBack,
    handleOpenMenu,
  } = props;

  return (
    <NativeHeader style={styles.container}>
      <Left>
        <Button onPress={handleBack} transparent>
          <Icon name="arrow-back"/>
        </Button>
      </Left>
      <Body>
        <Button style={styles.logoButton}>
          <Text style={styles.logoText}>
            { 'SOS' }
          </Text>
        </Button>
      </Body>
      <Right>
        <Button onPress={handleOpenMenu} transparent>
          <Icon name="menu"/>
        </Button>
      </Right>
    </NativeHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
};

export default Header;
