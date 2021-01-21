import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

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
    position: 'absolute',
    top: -35,
    left: (width - 70) / 2,
    backgroundColor: '#1B63FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    // height: 105,
    // backgroundColor: '#faf5f5',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    paddingVertical: 10,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 0.5,
    borderBottomWidth: 0,
    borderColor: '#B1B1B1',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
  },
});

export const cardEmission = StyleSheet.create({
  date: {
    fontSize: 10,
  },
  price: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  clientName: {
    fontSize: 13,
  },
  nfeInfo: {
    marginLeft: 10,
  },
  clientImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    height: 100,
    borderRadius: 10,
    elevation: 1,
  },
});

export const styles = StyleSheet.create({
  statsContent: {
    fontSize: 24,
    color: '#6F6F6F',
    marginTop: 5,
    fontWeight: 'bold',
  },
  statsTitle: {
    fontSize: 18,
    color: '#af3faf',
  },
  statsItem: {
    backgroundColor: '#faf5f5',
    borderRadius: 10,
    marginBottom: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  containerStats: {
    // position: 'absolute',
    zIndex: 0,
    paddingTop: 30,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 20,
    // borderWidth:1,
  },
  containerHome: {
    width,
    height,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imgEmpresaContainer: {
    width,
    height: '100%',
    // position: "absolute",
    // opacity: .3,
    // backgroundColor: "#000",
  },
  imgEmpresa: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    borderRadius: 80,
  },
  imgUser: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 90,
  },
  containerImgEmpresa: {
    width: 45,
    height: 45,
    borderRadius: 90,
    elevation: 10,
  },
  containerTop: {
    padding: 10,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoEmpresa: {
    // width,
    // flexDirection: "row",
    padding: 10,
    // justifyContent: "space-between",
    // height: "100%"
  },
  nomeEmpresa: {
    fontSize: 20,
    color: '#A4A4A4',
  },
  nomeUser: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  containerDash: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  itemDash: {
    width: '30%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#354537',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  itemDashValue: {
    fontSize: 14,
    color: '#DBFF01',
  },
  itemDashLabel: {
    fontSize: 10,
    color: '#FDFFFD',
  },
  listMenu: {
    width: width - 30,
    borderRightWidth: 1,
    alignContent: 'center',
  },
  itemMenu: {
    backgroundColor: '#C8FFDE',
    height: width / 4 - 10,
    width: width / 4 - 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    elevation: 5,
  },
  itemMenuLabel: {
    textAlign: 'center',
  },
});
