/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';

const Counter = () => {
    return (
        <View>
            <Text children={`Count : ${0}`} />
            <View style={{ flex: 1, flexDirection: 'row', width: '100%'}}>
                <Button title="+" />
                <Button title="-" />
            </View>
        </View>
    );
};

export default Counter;
