import { FOLLOW_INFLUENCER, GET_INFLUENCERS, UN_FOLLOW_INFLUENCER } from "../types/influencer.types";

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_INFLUENCERS:
           return action.payload;
        case FOLLOW_INFLUENCER:
           state.map((influencer) => {
               if(influencer.userId === action.payload){
                  influencer.followed = true
               }
           })
           return [...state]
         case UN_FOLLOW_INFLUENCER:
         state.map((influencer) => {
               if(influencer.userId === action.payload){
                  influencer.followed = false
               }
         })
         return [...state]
        default: return state;
    }
};
export default reducer;