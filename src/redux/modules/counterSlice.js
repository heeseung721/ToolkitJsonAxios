// src/redux/modules/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

//initialState는 똑같이 만들기
const initialState = {
  number: 0,
};

//counterSlice 만들기
//name, initialState, reducers(이 안에다가 addNumber, minusNumber 구현)

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
