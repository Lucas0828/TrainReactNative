/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

import Counter from './Counter';

const CounterList = ({counter, handleIncrement, handleDecrement}) => {
    const counterModule = counter.map((item, index) => (
        <Counter
            key={index}
            index={index}
            value={item}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
        />
    ));

    return (
        <View>
            {counterModule}
        </View>
    );
};

CounterList.proptypes = {
    counter: PropTypes.array,
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
};

CounterList.defaultProps = {
    counter: [],
    handleIncrement: () => console.warn('undefined handleIncrement'),
    handleDecrement: () => console.warn('undefined handleDecrement'),
};

export default CounterList;
