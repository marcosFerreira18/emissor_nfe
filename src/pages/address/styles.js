import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    btn: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        width: 300,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 15
    },
    textBtn: {
        fontSize: 18,
        color: '#FFF'
    },
    input: {

        width: 270,
        padding: 5,
        paddingLeft: 10,
        // width:300
    },
    inputContainer: {
        alignItems: "center",
        flexDirection: "row",
        width: width * .9,
        borderBottomColor: '#3CAD4C',
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    option: {
        padding: 20,
        borderRadius:5,
        borderWidth:2,
        borderColor: "#DDDDDD"
    },
    optionSelected:{
        // borderColor: "#3CAD4C",
        borderWidth: 0,
        backgroundColor: '#3CAD4C',
        elevation:5
    },
    optionText:{
        
    },
    optionTextSelected:{
        color: '#ffffff'
    }

})