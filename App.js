import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Greeting from './src/components/greeting/index';
import Blink from './src/components/blink/index';

export default class App extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={[styles.container, {flex: 1, flexDirection: 'column'}]}>
                <Image source={pic} style={{width: 193, height: 110}}/>
                <Text style={styles.bigblue}>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text style={styles.red}>Shake your phone to open the developer menu.</Text>
                <Greeting name='Bala'/>
                <Blink text='I Blink' />
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});
