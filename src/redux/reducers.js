
import { combineReducers } from 'redux';
import { TOGGLE_THEME } from './constants';


const initialState = {
  theme: {
    palette: {
      type: 'dark'
    }
  }
};

function themeReducer(themestate = initialState , action)  {
  switch(action.type){
    case TOGGLE_THEME:
      return Object.assign({}, themestate, {
        theme: {
          palette: {
            type: themestate.theme.palette.type === 'dark' ? 'light' : 'dark'
          }
        }
      });
    default:
      return themestate;
  }
};


const rootReducer =
  combineReducers({
    themeR: themeReducer
});

export default rootReducer;

