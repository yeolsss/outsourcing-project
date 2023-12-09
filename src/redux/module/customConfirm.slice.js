import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  message: '',
  callBack: null,
  value: '',
};

const customConfirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    setStatus: (state, { payload }) => {
      //TODO: customConfirm에 관한 redux 구성
      // 그리고 비밀번호 체크
      // customHook 작성 (alert, confirm)
    },
  },
});
