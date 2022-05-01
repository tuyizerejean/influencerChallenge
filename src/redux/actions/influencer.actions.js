import { FOLLOW_INFLUENCER, GET_INFLUENCERS, UN_FOLLOW_INFLUENCER} from "../types/influencer.types";
import influencer from "../data";

export const getInfluencers = () => {
    return {
        type: GET_INFLUENCERS,
        payload: influencer,
    };
};

export const followInfluencer = (id) => {
    return {
       type: FOLLOW_INFLUENCER,
       payload: id
    };
};

export const unFollowInfluencer = (id) => {
    return {
       type: UN_FOLLOW_INFLUENCER,
       payload: id
    };
};