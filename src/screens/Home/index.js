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
import { View } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo'
import { moduleName } from '../../ducks/auth'
import { moduleName as userModuleName, fetchUsers } from '../../ducks/user'
import Screen from '../../components/Screen';
import UserList from './UserList';

/**
 * @dev Helper
 */
const getDistanceInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c
  return Math.round(d)
}
/**
* @dev Helper
*/
const deg2rad = (deg) => {
  return deg * (Math.PI / 180)
}

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
    this.props.fetchUsers()
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
          customMapStyle={[
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#263c3f"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6b9a76"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#38414e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#212a37"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9ca5b3"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#1f2835"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#f3d19c"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2f3948"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#515c6d"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            }
          ]}
          liteMode={false}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.292,
            longitudeDelta: 0.242
          }}
        >
        {this.getMarkers()}
        </MapView>
      )
    }
  }

  getMarkers = () => {
    const { users } = this.props
    const {latitude, longitude, mapLoaded} = this.state

    if (mapLoaded) {
        return (
            <View>
                <MapView.Marker
                    coordinate={{
                        latitude: parseFloat(latitude),
                        longitude: parseFloat(longitude)
                    }}
                />
                {
                   users !== null && users.map((user, index) => {
                        return <MapView.Marker
                            key={index}
                            coordinate={{
                                latitude: parseFloat(user.lat),
                                longitude: parseFloat(user.lng)
                            }} >
                            <MapView.Callout>
                           <Text>{`${getDistanceInKm(latitude, longitude, user.lat, user.lng)}`}</Text>
                            </MapView.Callout>
                        </MapView.Marker>
                    })
                }
            </View>
        )
    }
}

  openUserList = () => {
    this.setState({
      isOpenUserList: !this.state.isOpenUserList
    })
  }

  render() {
    return (
      <Screen navigation={this.props.navigation} handleSos={this.openUserList} title="Home" auth={true}>
        <UserList handleOpen={this.openUserList} isOpen={this.state.isOpenUserList}/>
        <Container style={{ flex: 1 }}>
          {this.getMap()}
        </Container>
      </Screen>
    );
  }
}

export default connect((state, ownProps) => ({
  users: state[userModuleName].data,
  navigation: ownProps.navigation
}), { fetchUsers })(Home);
