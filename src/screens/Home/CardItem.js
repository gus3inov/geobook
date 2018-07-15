import React from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableOpacity, TouchableNativeFeedback, View, Platform } from 'react-native'
import { Text } from 'native-base';
import { card } from './styles'

const CardItem = ({ distance, data, onPress }) => {
    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    console.log('card', data)
    return (
        <View style={card.wrapper}>
            <Touchable onPress={onPress} activeOpacity={0.7} useForeground>
                <View style={card.container}>
                    <View style={card.content}>
                        <Text style={card.text}>
                            {data.firstName} {data.lastName}
                        </Text>
                        { data.title &&
                            <Text style={[card.title, card.text]}>
                                {data.title}
                            </Text>
                        }
                         {/* { data.phone &&
                            <Text>
                                {data.phone}
                            </Text>
                        } */}
                         { data.description &&
                            <Text style={card.text}>
                                {data.description}
                            </Text>
                        }
                        { distance && <View>
                                <Text style={card.text}>{distance} м</Text>
                                <Text >от вас</Text>
                            </View>
                        }
                    </View>
                </View>
            </Touchable>
        </View>
    )
}

export default CardItem
