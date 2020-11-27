/* eslint-disable prettier/prettier */
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function DetailScreen({navigation}) {
    return (
        <View style={styles.layoutStyle}>
            <View style={styles.buttonStyle}>
                <Button title="홈으로" onPress={() => navigation.navigate('HOME')} />
                {/* pop, go back 더블클릭 ㄴㄴ */}
                <Button title="뒤로" onPress={() => navigation.pop() } />
                <Button title="최초화면으로" onPress={() => navigation.popToTop()} />
            </View>
            <View style={styles.mainStyle}>
                <Text children="Detail UI Layout" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    layoutStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },
    mainStyle: {
        backgroundColor: '#e9e9e9',
        flex: 1,
    },
});

export default DetailScreen;
