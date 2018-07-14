import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import {
  Container,
  Header as NativeHeader,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Text,
  Title
} from "native-base";
import { Image } from "react-native";
import Pulse from "../Pulse";
import styles from "./style";
import sosImage from "../../../assets/sos-icon.png";
  
const Header = props => {
  const { title, handleBack, handleOpenMenu, auth, handleSos } = props;

  if(!auth) {
    return (
      <NativeHeader style={styles.container}>
        <Body>
          <Title>
            { title }
          </Title>
        </Body>
      </NativeHeader>
    );
  }

  return (
    <NativeHeader style={styles.container}>
      <Left
        style={{
          zIndex: 1
        }}
      >
        <Button onPress={handleBack} transparent>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <View onPress={handleSos}>
          <Pulse color="red" />
          <View style={styles.pulseView}>
            <Button transparent style={styles.pulseButton}>
              <Text style={styles.pulseText}>10</Text>
            </Button>
          </View>
        </View>
      </Body>
      <Right>
        <Button onPress={handleOpenMenu} transparent>
          {/* <Badge primary>
            <Icon
              name="star"
              style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}
            />
          </Badge> */}
          <Icon name="menu" />
        </Button>
      </Right>
    </NativeHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleOpenMenu: PropTypes.func.isRequired
};

export default Header;
