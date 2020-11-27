/* eslint-disable prettier/prettier */
import * as types from './ActionTypes';

export const increment = (index) => ({
    index,
    type: types.INCREMENT,
});

export const decrement = (index) => ({
    index,
    type: types.DECREMENT,
});

export const add = () => ({
    type: types.ADD,
});

export const remove = () => ({
    type: types.REMOVE,
});
