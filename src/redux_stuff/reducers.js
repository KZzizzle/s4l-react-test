import { TOGGLE_THEME } from "./constants";

export const initialState = {
  theme: {
    palette: {
      type: 'dark'
    }
  }
};

function rootReducer(state = initialState, action) {
  switch(action.type){

    case TOGGLE_THEME:
      return Object.assign({}, state, {
        theme: {
          palette: {
            type: state.theme.palette.type === 'dark' ? 'light' : 'dark'
          }
        }
      });
    default:
      return state;
  }
}
export default rootReducer;