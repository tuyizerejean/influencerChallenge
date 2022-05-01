import { FOLLOWING_INFLUENCERS, RETRIEVE_INFLUENCERS, UN_FOLLOWING_INFLUENCER } from "../types/influencer.types";

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RETRIEVE_INFLUENCERS:
           return action.payload;
        case FOLLOWING_INFLUENCERS:
           state.map((influencer) => {
               if(influencer.userId === action.payload){
                  influencer.followed = true
               }
           })
           return [...state]
         case UN_FOLLOWING_INFLUENCER:
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