import { FOLLOWING_INFLUENCERS, RETRIEVE_INFLUENCERS, UN_FOLLOWING_INFLUENCER} from "../types/influencer.types";
import influencer from "../data";

export const getInfluencers = () => {
    return {
        type: RETRIEVE_INFLUENCERS,
        payload: influencer,
    };
};

export const followInfluencer = (id) => {
    return {
       type: FOLLOWING_INFLUENCERS,
       payload: id
    };
};

export const unFollowInfluencer = (id) => {
    return {
       type: UN_FOLLOWING_INFLUENCER,
       payload: id
    };
};