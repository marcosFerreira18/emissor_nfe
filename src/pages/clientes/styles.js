import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const cardClient = StyleSheet.create({
    imgClient:{
        width:95,
        height:95,
        borderRadius: 3
    },
    clientName:{
        fontSize:15
    },
    clientInfo:{
        fontSize:10
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: (width - 25),
        height: (width - 25) * .3,
        backgroundColor: '#FFF',
        padding: 5,
        elevation: 10,
        marginTop: 7,
        marginBottom: 3,
        marginLeft: 12.5,
        borderRadius: 3
    }
})