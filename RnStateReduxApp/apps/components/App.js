/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import CounterList from './CounterList';

const App = ({counter, handleIncrement, handleDecrement, handleAddCounter, handleRemoveCounter}) => {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.counterButton}>
                <Button title="카운터 추가" onPress={handleAddCounter} />
                <Text children="   " />
                <Button title="카운터 삭제" onPress={handleRemoveCounter} />
            </View>
            <View>
                <CounterList
                    counter={counter}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: { flex: 1, width: '100%', backgroundColor: '#a9a9a9', paddingTop: '10%' },
    counterButton: { flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' },
});

App.propTypes = {
    counter: PropTypes.arrayOf(PropTypes.shape({
        counterNum: PropTypes.number,
    })),
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
    handleAddCounter: PropTypes.func,
    handleRemoveCounter: PropTypes.func,
};

App.defaultProps = {
    counter: [],
    handleIncrement: () => console.warn('undefined handleIncrement'),
    handleDecrement: () => console.warn('undefined handleDecrement'),
    handleAddCounter: () => console.warn('undefined handleAddCounter'),
    handleRemoveCounter: () => console.warn('undefined handleRemoveCounter'),
};

export default App;
