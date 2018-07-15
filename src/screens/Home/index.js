import React, { Component } from "react";
import {
  Input,
  Label,
  Item,
  Form,
  Button,
  Container,
  Content,
  Spinner,
  Grid,
  Col,
  Text
} from "native-base";
import { View, Image } from "react-native";
import { connect } from "react-redux";
import { MapView } from "expo";
import { moduleName } from "../../ducks/auth";
import { moduleName as problemModuleName, fetchProblems } from "../../ducks/problem";
import Screen from "../../components/Screen";
import UserList from "./UserList";
import { cardMap } from './styles';
import CardItem from './CardItem';
import ProblemDetail from './ProblemDetail'

/**
 * @dev Helper
 */
const getDistanceInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return Math.round(d);
};
/**
 * @dev Helper
 */
const deg2rad = deg => {
  return deg * (Math.PI / 180);
};

class Home extends Component {
  state = {
    latitude: null,
    longitude: null,
    mapLoaded: false,
    defLocation: true,
    geoDistance: 1,
    isOpenUserList: false,
    isOpenDetail: false,
    detailData: null
  };

  componentDidMount() {
    this.props.fetchProblems();
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            defLocation: false,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });

          resolve({
            lat: position.coords.latitude,
            long: position.coords.longitude
          });
        },
        error => this.setState({ error: error.message }),
        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
      );
    });
  }

  onMapLayout = () => {
    this.setState({
      mapLoaded: true
    });
  };

  getMap = () => {
    const { defLocation, latitude, longitude } = this.state;
    if (defLocation) {
      return (
        <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
          <Grid style={{ alignItems: "center" }}>
            <Col>
              <Spinner color="blue" />
            </Col>
          </Grid>
        </Content>
      );
    } else {
      return (
        <MapView
          style={{ flex: 1, height: 700 }}
          onLayout={this.onMapLayout}
          zoom={13}
          showsUserLocation={true}
          // customMapStyle={[
          //   {
          //     elementType: "geometry",
          //     stylers: [
          //       {
          //         color: "#242f3e"
          //       }
          //     ]
          //   },
          //   {
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#746855"
          //       }
          //     ]
          //   },
          //   {
          //     elementType: "labels.text.stroke",
          //     stylers: [
          //       {
          //         color: "#242f3e"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "administrative.locality",
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#d59563"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "poi",
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#d59563"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "poi.park",
          //     elementType: "geometry",
          //     stylers: [
          //       {
          //         color: "#263c3f"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "poi.park",
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#6b9a76"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "road",
          //     elementType: "geometry",
          //     stylers: [
          //       {
          //         color: "#38414e"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "road",
          //     elementType: "geometry.stroke",
          //     stylers: [
          //       {
          //         color: "#212a37"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "road",
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#9ca5b3"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "road.highway",
          //     elementType: "geometry",
          //     stylers: [
          //       {
          //         color: "#746855"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "road.highway",
          //     elementType: "geometry.stroke",
          //     stylers: [
          //       {
          //         color: "#1f2835"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "road.highway",
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#f3d19c"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "transit",
          //     elementType: "geometry",
          //     stylers: [
          //       {
          //         color: "#2f3948"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "transit.station",
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#d59563"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "water",
          //     elementType: "geometry",
          //     stylers: [
          //       {
          //         color: "#17263c"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "water",
          //     elementType: "labels.text.fill",
          //     stylers: [
          //       {
          //         color: "#515c6d"
          //       }
          //     ]
          //   },
          //   {
          //     featureType: "water",
          //     elementType: "labels.text.stroke",
          //     stylers: [
          //       {
          //         color: "#17263c"
          //       }
          //     ]
          //   }
          // ]}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.292,
            longitudeDelta: 0.242
          }}
        >
          {this.getMarkers()}
        </MapView>
      );
    }
  };

  getMarkers = () => {
    const { problems } = this.props;
    const { latitude, longitude, mapLoaded } = this.state;

    if (mapLoaded) {
      return (
        <View>
          <MapView.Marker
            coordinate={{
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude)
            }}
          />
          {problems !== null &&
            problems.map((problem, index) => {
              return (
                <MapView.Marker
                  key={problem.id}
                  onPress={() => this.openDetailProblem({
                    data: problem,
                    distance: `${getDistanceInKm(latitude, longitude, problem.lat, problem.long)}`
                  })}
                  coordinate={{
                    latitude: parseFloat(problem.lat),
                    longitude: parseFloat(problem.lng)
                  }}
                >
                 <View>
                    <Image
                        style={{width: 30, height: 30}}
                        source={require('../../../assets/icon-warning.png')}
                    />
                </View>
                </MapView.Marker>
              );
            })}
        </View>
      );
    }
  };

  openUserList = () => {
    this.setState({
      isOpenUserList: !this.state.isOpenUserList
    });
  };

  openDetailProblem = (data) => {
    console.log('click', data)
    this.setState({
      isOpenDetail: true,
      detailData: data
    });
  };

  render() {
    const { detailData } = this.state
    const { problems } = this.props

    return (
      <Screen
        navigation={this.props.navigation}
        handleSos={this.openUserList}
        title="Home"
        auth={true}
      >
        {
          detailData !== null && 
          <ProblemDetail 
            isOpen={this.state.isOpenDetail}
            data={detailData}
            handleOpen={() => this.setState({isOpenDetail: false })}
          />
        }
        <UserList
          handleOpen={this.openUserList}
          isOpen={this.state.isOpenUserList}
        />
        <Container style={{ flex: 1 }}>{this.getMap()}</Container>
      </Screen>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    problems: state[problemModuleName].data,
    navigation: ownProps.navigation
  }),
  { fetchProblems }
)(Home);
