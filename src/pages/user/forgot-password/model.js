import { fakeRegister } from './service';

const Model = {
  namespace: 'userAndregister',
  state: {
    status: undefined,
  },
  effects: {
    *submit({ payload }, { call, put }) {
      const response = yield call(fakeRegister, payload);
      response.email = payload.email
      yield put({
        type: 'registerHandle',
        payload: response,
      });
    },
  },
  reducers: {
    registerHandle(state, { payload }) {
      return { ...state, status: payload.status, email: payload.email };
    },
  },
};
export default Model;
