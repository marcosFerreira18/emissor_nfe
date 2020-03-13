import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');


export const clientContent = StyleSheet.create({
    clientName: {
        marginRight: 60
    },
    nameLabel: {
        fontWeight: "bold",
        fontSize: 12,
        letterSpacing: 0,
    },
    infoClient: {
        width: width * .9,
        height: 125,
        justifyContent: "space-evenly",
        borderBottomColor: '#6F6F6F90',
        borderBottomWidth: 1
        // backgroundColor: '#FDF',
    },
    selectValue: {
        fontSize: 12,
        color: '#C4C4C4'
    },
    selectLabel: {
        lineHeight: 10,
        fontSize: 10,
        fontWeight: "bold",
        color: '#E5E7E6'
    },
    slectClient: {
        width: width * .9,
        height: 60,
        backgroundColor: '#1B63FF',
        padding: 10,
        paddingTop: 5,
        paddingLeft: 20,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    container: {
        width,
        padding: 20
    }
})
export const productContent = StyleSheet.create({
    qtd: {
        width: width * .15,
        height: 60,
        backgroundColor: '#1B63FF',
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "space-between"
    },
    btnAdd: {
        width: width * .13,
        height: 60,
        backgroundColor: '#F0F4FC',
        borderColor: '#1B63FF',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        elevation: 3,
    },
    un: {
        width: width * .15,
        height: 60,
        backgroundColor: '#1B63FF',
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "space-between"
    },
    selectValue: {
        fontSize: 12,
        color: '#C4C4C4'
    },
    selectLabel: {
        lineHeight: 10,
        fontSize: 10,
        fontWeight: "bold",
        color: '#E5E7E6'
    },
    slectProduct: {
        width: width * .40,
        height: 60,
        backgroundColor: '#1B63FF',
        padding: 10,
        paddingTop: 5,
        paddingLeft: 20,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    container: {
        width,
        padding: 20,
        paddingTop: 0
    }
})

export const nfeContent = StyleSheet.create({
    totalInfo: {
        fontWeight: "bold"
    },
    totalPrice: {
        letterSpacing: -3,
        lineHeight: 50,
        fontSize: 50,
        color: '#6F6F6F'
    },
    btnEmitter: {
        width: width * .9,
        height: 60,
        backgroundColor: '#1B63FF',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        elevation: 5
    },
    txtBtn: {
        fontSize: 20,
        color: '#FFF'
    },
    container: {
        width,
        padding: 20
    }
})

export const cardProduct = StyleSheet.create({
    container: {
        width,
        // backgroundColor:'#FDF',
       
    },
    btnDelete:{
        margin: 5,
        width: 30,
        height:30,
        borderRadius: 44,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        backgroundColor:'#FF4949'
    },
    productInfo: {
        alignItems: "center",
        flexDirection: "row",

        justifyContent: "space-between",
        borderBottomColor: '#D1CBCB',
        borderBottomWidth: 1,
        width: width * .9,
    },
    itemProductInfo: {
        lineHeight:20,
        fontSize: 15,
        fontWeight: "100",
        paddingHorizontal: 5,
        borderRightColor: '#D1CBCB',
        borderRightWidth: 1,
    },
    itemProductName: {
        fontSize: 15,
        fontWeight: "100",
        padding: 5,
        width: 120
    },

})