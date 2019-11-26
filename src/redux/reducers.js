
import { combineReducers } from 'redux';
import { TOGGLE_THEME } from './constants';


const initialState = {
  theme: {
    palette: {
      type: 'dark'
    }
  }
};

// 'app' reducer
function app(state = initialState, action)  {
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
};


const rootReducer = combineReducers({
  app
});

export default rootReducer;
