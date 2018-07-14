import React, { Component } from 'react';
import {
  Input,
  Label,
  Item,
  Form,
  Button,
  Container,
  Text,
} from 'native-base';
import { connect } from 'react-redux';
import { MapView } from 'expo'
import { moduleName } from '../../ducks/auth'
import Screen from '../../components/Screen';
import UserList from './UserList';

class Home extends Component {
  state = {
    latitude: null,
    longitude: null,
    mapLoaded: false,
    defLocation: true,
    geoDistance: 1,
    isOpenUserList: false
  }

  componentDidMount () {
    console.log('user', this.props.user)
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            defLocation: false,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })

          resolve({
            lat: position.coords.latitude,
            long: position.coords.longitude
          })
        },
        (error) => this.setState({error: error.message}),
        {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000}
      )
    })
  }

  onMapLayout = () => {
    this.setState({
      mapLoaded: true
    })
  }

  getMap = () => {
    const {defLocation, latitude, longitude} = this.state
    if (defLocation) {
      return <Text>Определение геолокации...</Text>
    } else {
      return (
        <MapView
          style={{flex: 1, height: 700}}
          onLayout={this.onMapLayout}
          showsUserLocation={true}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.292,
            longitudeDelta: 0.242
          }}
        />
      )
    }
  }

  getMarkers = () => {
    const {clubs, navigation} = this.props
    const {latitude, longitude, mapLoaded} = this.state

    if (mapLoaded) {
      return ( 
        <View>
          <MapView.Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude
            }}
          />

        </View>
      )
    }
  }

  openUserList = () => {
    console.log('click')
    this.setState({
      isOpenUserList: true
    })
  }

  render() {
    return (
      <Screen handleSos={this.openUserList} title="Home" auth={true}>
        <UserList isOpen={this.state.isOpenUserList}/>
        <Container style={{ flex: 1 }}>
          {this.getMap()}
        </Container>
      </Screen>
    );
  }
}

export default connect((state, ownProps) => ({
  user: state[moduleName].user,
}), {})(Home);
