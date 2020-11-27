/* eslint-disable prettier/prettier */
const initialState = {
    counter: [
        {
            counterNum: 0,
        },
    ],
};

const counter = (state = initialState, action) => {
    const {counter} = state;

    switch (action.type) { // 순수함수, 실제 로직 처리
        case 'INCREMENT':
            return ({ /*...*/ }); // 실제 순수함수 로직" 값증가
        case 'DECREMENT':
            return ({ /*...*/ }); // 값감소
        case 'ADD':
        {
            alert("Add 실행");
            return ({ /***/ }); // 카운터 추가
        }
        case 'REMOVE':
        {
            alert("Remove 실행");
            return ({ /*...*/ }); // 카운터 삭제
        }
        default:
            return state;
    }
};

export default counter;
