import axios from 'axios';

const ADD_AEROPLANE = 'jet-log-frontend/aeroplanes/ADD_AEROPLANE';

const initialState = {
  aeroplanes: [],
};

const aeroplaneReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AEROPLANE:
      return {
        ...state,
        aeroplanes: [...state.aeroplanes, action.payload],
      };
    default:
      return state;
  }
};

export const addAeroplane = (aeroplane) => (dispatch) => {
  axios
    .post('http://localhost:3000/api/v1/aeroplanes', aeroplane)
    .then((res) => {
      dispatch({
        type: ADD_AEROPLANE,
        payload: res.data,
      });
    })
    .catch((err) => err);
};

export default aeroplaneReducer;
