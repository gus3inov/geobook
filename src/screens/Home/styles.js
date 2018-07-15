import { Dimensions, Platform } from 'react-native'
const screenWidth = Dimensions.get('window').width

const cardSideWidth = (screenWidth - 150) / 2
const cardMapSideWidth = (screenWidth - 210) / 2

const extendStyles = {
    // height: 150,
    borderColor: '#1C1A33',
}

const extendStylesMap = {
    // height: 150,
    borderColor: '#1C1A33',
}

export const card = {
    wrapper: {
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#1C1A33',
        borderColor: '#1C1A33',
    },
    container: {
        alignItems: 'flex-start',
        overflow: 'hidden',
        flexDirection: 'row',
        ...extendStyles
    },
    content: {
        marginLeft: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignSelf: 'stretch',
        flexGrow: 1,
        width: 0
    },
    image: {
        ...extendStyles,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: cardSideWidth
    },
    distance: {
        backgroundColor: 'rgba(126, 210, 33, 0.3)',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column',
        alignSelf: 'flex-start'
    },
    distanceText: {
        color: '#417505'
    },
    title: {
        letterSpacing: 1
    },
    text: {
        color: '#fff'
    }
}

export const cardMap = {
    wrapper: {
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 100
    },
    label: {
        backgroundColor: '#1C1A33',
        borderRadius: 10,
        height: 90,
        width: 190,
        borderColor: '#1C1A33',
    },
    container: {
        margin: 10,
        alignItems: 'flex-start',
        flexDirection: 'row',
        ...extendStylesMap
    },
    content: {
        marginRight: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignSelf: 'stretch',
        maxWidth: 100
    },
    image: {
        ...extendStylesMap,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: cardMapSideWidth
    },
    distance: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    distanceText: {
        color: '#417505',
        fontSize: 12
    },
    title: {
        letterSpacing: 1
    },
    arrowDown: {
        position: 'relative',
        top: -35,
        right: 70,
        zIndex: 100000
    }
}