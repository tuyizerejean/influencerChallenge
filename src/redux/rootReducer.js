import { combineReducers } from 'redux';
import influencerReducer from './reducer/influencer.reducer';
const rootReducer = combineReducers({
    influencers: influencerReducer,
});
export default rootReducer;