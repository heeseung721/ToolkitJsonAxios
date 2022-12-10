// 일반 리덕스 예시 코드

// Action Value
const ADD_NUM = "ADD_NUM";
const MIN_NUM = "MIN_NUM";

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUM,
    payload,
  };
};

export const minusNumber = (payload) => {
  return {
    type: MIN_NUM,
    payload,
  };
};

// Initial State
const initialState = {
  number: 0,
};

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUM:
      return {
        number: state.number + action.payload,
      };
    case MIN_NUM:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// export default reducer
export default counter;
