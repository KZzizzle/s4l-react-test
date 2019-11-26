
import { combineReducers } from 'redux';
import { TOGGLE_THEME } from './constants';
//import themeReducer from './themereducer';

const initialState = {
  theme: {
    palette: {
      type: 'dark'
    }
  }
};


function themeReducer(state = initialState , action)  {
  switch(action.type){
    case TOGGLE_THEME:
      return Object.assign({}, state, {
        theme: {
          palette: {
            type: state.themeR.theme.palette.type === 'dark' ? 'light' : 'dark'
          }
        }
      });
    default:
      return state;
  }
};


function rootReducer(state = initialState, action) {
  return {
    themeR: themeReducer(state, action)
  }
};

// const rootReducer =
//   combineReducers({
//     themeR: themeReducer
// });

// function rootReducer() { 
//   combineReducers({
//     themeR : themeReducer
// })
// }

export default rootReducer;

