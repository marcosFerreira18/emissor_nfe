import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');



export const footerMenu = StyleSheet.create({
    iconMenu: {
        width: 30,
        height: 30,
    },
    iconNfe: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    nfeBtn: {
        width: 70,
        height: 70,
        borderRadius: 80,
        elevation: 10,
        position: "absolute",
        top: -35,
        left: (width - 70) / 2,
        backgroundColor: "#1B63FF",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flexDirection: "row",
        width,
        height: 65,
        backgroundColor: '#FFF',
        justifyContent: "space-between",
        paddingHorizontal: 35,
        alignItems: "center",
        borderTopLeftRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    }
})

export const cardEmission = StyleSheet.create({
    date: {
        fontSize: 10
    },
    price: {
        fontSize: 19,
        fontWeight: "bold"
    },
    clientName: {
        fontSize: 13
    },
    nfeInfo: {
        marginLeft: 10
    },
    clientImage: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        width: width * .9,
        marginHorizontal: width * .05,
        height: 100,
        borderRadius: 10,
        elevation:1
    }
})

export const styles = StyleSheet.create({
    statsContent: {
        fontSize: 18,
        color: "#6F6F6F"
    },
    statsTitle: {
        fontSize: 10,
        color: "#6F6F6F"
    },
    statsItem: {
        // backgroundColor:'#fafa'
    },
    containerStats: {
        flexDirection: "row",
        padding: 5,
        width: '85%',
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 10,
        marginTop: -30,
        justifyContent: "space-between",
        paddingHorizontal: 35,
        alignItems: "center"
    },
    containerHome: {
        width,
        height: '80%',
        marginTop: "-1.5%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#FFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    imgEmpresaContainer: {
        width,
        height: '100%',
        position: "absolute",
        opacity: .3,
        backgroundColor: "#000",
    },
    imgEmpresa: {
        position: "absolute",
        // resizeMode: "contain",
        width,
        height: '180%',
        opacity: .3,
    },
    imgUser: {
        width: 45,
        height: 45,
        resizeMode: "contain",
        borderRadius: 90,
    },
    containerImgEmpresa: {
        width: 45,
        height: 45,
        borderRadius: 90,
        elevation: 10
    },
    containerTop: {
        width,
        height: '20%',
        backgroundColor: "#444444",
    },
    infoEmpresa: {
        width,
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        height: "100%"
    },
    nomeEmpresa: {
        fontSize: 24,
        color: "#FFF",
    },
    nomeUser: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold"
    },
    containerDash: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between"
    },
    itemDash: {
        width: "30%",
        height: 40,
        borderRadius: 5,
        backgroundColor: '#354537',
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    itemDashValue: {
        fontSize: 14,
        color: '#DBFF01'
    },
    itemDashLabel: {
        fontSize: 10,
        color: '#FDFFFD'
    },
    listMenu: {
        width: width - 30,
        borderRightWidth: 1,
        alignContent: "center"
    },
    itemMenu: {
        backgroundColor: '#C8FFDE',
        height: width / 4 - 10,
        width: width / 4 - 10,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        elevation: 5
    },
    itemMenuLabel: {
        textAlign: "center"
    }

})