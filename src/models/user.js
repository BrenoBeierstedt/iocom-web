import { queryCurrent, query as queryUsers } from '@/services/user';
import useFetchUser from '@/utils/useFetchUser'
import { userFetch } from '@/utils/rolesDecrypt'

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    *fetchCurrent({ payload }, { call, put }) {
      // const response = yield call(userFetch,payload);
      yield put({
        type: 'saveCurrentUser',
        payload: payload,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload.user || {} };
    },

    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
export default UserModel;
