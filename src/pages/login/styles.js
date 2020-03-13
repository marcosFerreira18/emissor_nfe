import { StyleSheet } from 'react-native';

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
        width: 300,
        borderBottomColor: '#3CAD4C',
        borderBottomWidth: 1,
        marginBottom: 15,
    }
})