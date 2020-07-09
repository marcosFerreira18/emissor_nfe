import React from 'react';
import { createRootNavigator } from './routes';
import './config/StatusBarConfig';

import AsyncStorage from '@react-native-community/async-storage';
const TOKEN_KEY = "@UserData";

const isSignedIn = async () => {
    try {
        const token = await AsyncStorage.getItem(TOKEN_KEY);
        return (token !== null) ? true : false;
    } catch (e) {
        // error reading value
    }
}

export default class App extends React.Component {
    state = {
        signLoaded: false
    }
    async componentDidMount() {
        // console.log('okokokokok', await isSignedIn())
        this.setState({ signLoaded: await isSignedIn })
    }

    render() {
        const { signLoaded, signed } = this.state;
        // if (!signLoaded) {
        //     return null;
        // }

        const Layout = createRootNavigator(false);
        return <Layout />
    }
}



